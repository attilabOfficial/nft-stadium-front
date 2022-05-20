import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useContext } from 'react'
import { NFTDetailComponent } from './NFTDetailComponent'
import { isNFTDetailLoading } from '../../../common/store/nftSlice'
import { Web3Context } from '../../../common/components/web3/DappContainer'
import { mint, changeImg } from '../../../common/store/nftSlice'
import { AppDispatch, RootState } from '../../../store'
import styled from 'styled-components'
import { curNftSelector } from '../../../common/store/appStateSlice';

const TransLoading = styled.div`
    background-color: black;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    div {
        border: 13px solid #fff;
        border-top: 13px solid #a9a9a9;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export const NFTDetailContainer = () => {
    const web3Context = useContext(Web3Context)
    const dispatch = useDispatch<AppDispatch>()

    const { currentNFT, loading } = useSelector((state: RootState) => ({
        currentNFT: curNftSelector(state),
        loading: isNFTDetailLoading(state),
    }))

    const mintNFT = () => {
        // A transfert event will be fired after the transaction. DappContainer listen to this event
        if (currentNFT && web3Context.contract) {
            dispatch(
                mint({
                    contract: web3Context.contract,
                    to: web3Context.selectedAddress,
                    id: currentNFT.id,
                })
            )
        }
    }
    const changeNFTImg = (newImg: string) => {
        if (currentNFT && web3Context.contract) {
            dispatch(
                changeImg({
                    contract: web3Context.contract,
                    url: newImg,
                    id: currentNFT.id,
                })
            )
        }
    }

    if (loading === 'loading') {
        return (
            <TransLoading>
                <h2>Transaction en cours</h2>
                <div></div>
            </TransLoading>
        )
    }

    console.log('container', currentNFT)

    return (
        <>
            <div>
                {currentNFT && (
                    <NFTDetailComponent
                        currentNFT={currentNFT}
                        changeImgFct={changeNFTImg}
                        mintFct={mintNFT}
                    />
                )}
            </div>
        </>
    )
}
