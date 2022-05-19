import React from 'react'

import { NoWalletDetected } from './NoWalletDetected'
import { ConnectWallet } from './ConnectWallet'
import { Contract, ethers, utils } from 'ethers'
import TokenArtifact from '../../../contracts/Token.json'
import contractAddress from '../../../contracts/contract-address.json'
import { createContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateAddressNFT, updateAddressImg } from '../../store/nftSlice'
import { useEffect } from 'react'
import { HARDHAT_NETWORK_ID, MOCK } from '../../../const'
import { providers } from 'ethers'

declare global {
    interface Window {
        ethereum?: providers.ExternalProvider
    }
}

export const Web3Context = createContext<{
    selectedAddress: string
    contract?: Contract
}>({ selectedAddress: '', contract: undefined })

export const DappContainer: React.FC<{ children: React.ReactNode }> = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [selectedAddress, setSelectedAddress] = useState<string>('')
    const [contract, setContract] = useState<Contract | undefined>(undefined)
    const dispatch = useDispatch()

    /***
     * Manage event on contract
     * - When an NFT is minted or transfered
     * - When an img change
     */
    useEffect(() => {
        contract &&
            contract.on(
                {
                    address: contractAddress.Token,
                    topics: [utils.id('ImgChanged(uint256,string)')],
                },
                (_imgId, _url) => {
                    dispatch(
                        updateAddressImg({ id: _imgId.toNumber(), url: _url })
                    )
                }
            )
        contract &&
            contract.on(
                {
                    address: contractAddress.Token,
                    topics: [utils.id('Transfer(address,address,uint256)')],
                },
                (from, to, id) => {
                    dispatch(
                        updateAddressNFT({ id: id.toNumber(), address: to })
                    )
                }
            )
    }, [contract, dispatch])

    const _connectWallet = async () => {
        if (window.ethereum && window.ethereum.request) {
            const [_selectedAddress] = await window.ethereum.request({
                method: 'eth_requestAccounts',
            })
            if (!_checkNetwork()) {
                return
            }
            _initialize(_selectedAddress)
            //@ts-ignore
            window.ethereum.on('accountsChanged', ([newAddress]: any) => {
                _initialize(newAddress)
            })
        }
    }
    const _initialize = (_userAddress: string) => {
        setSelectedAddress(_userAddress)
        _initializeEthers()
    }
    const _initializeEthers = () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            setContract(
                new ethers.Contract(
                    contractAddress.Token,
                    TokenArtifact.abi,
                    provider.getSigner(0)
                )
            )
        }
    }
    // This method checks if Metamask selected network is Localhost:8545
    const _checkNetwork = () => {
        
        if (
            window.ethereum &&
            //@ts-ignore
            window.ethereum.networkVersion === HARDHAT_NETWORK_ID
        ) {
            return true
        }
        return false
    }

    if (MOCK) {
        return <>{children}</>
    }

    if (window.ethereum === undefined) {
        return <NoWalletDetected />
    }

    if (!selectedAddress) {
        return (
            <ConnectWallet
                connectWallet={_connectWallet}
                networkError={''}
                dismiss={() => {}}
            />
        )
    }

    return (
        <Web3Context.Provider value={{ selectedAddress, contract }}>
            {children}
        </Web3Context.Provider>
    )
}
