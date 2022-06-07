import React from 'react';
import styled from 'styled-components';
import { INFT } from '../../../common/store/nftSlice';
import NFTMint from '../../../common/images/NFTMint.svg'
import { closeHeaderPanel, openRightPanel, setCurrentNFT } from '../../../common/store/appStateSlice';
import { useDispatch } from 'react-redux';

const CardElement = styled.li`
    background-color: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 4px;
    width: 184px;
    height: 225px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 12px 12px 12px;
    text-align: center;
    margin: 6px;

    div {
        min-width: 160px;
        min-height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            max-width: 160px;
            max-height: 160px;
        }
    }

    p {
        font-size: 24px;
        margin-bottom: 0px;
    }
`

export const NFTCard = ({ nft, curOwner }: { nft: INFT, curOwner: string }) => {
    const dispatch = useDispatch()

    const clickOnNft = () => {
        dispatch(closeHeaderPanel())
        dispatch(openRightPanel())
        dispatch(setCurrentNFT(nft.id))
    }

    return (
        <CardElement onClick={clickOnNft}>
            <div>
                {(nft.img === '') ? (<img src={NFTMint} alt='' />) : (<img src={nft.img} alt='' />)}
            </div>
            <p><b>#{nft.id}</b></p>
        </CardElement>
    )
}
