import React from 'react';
import styled from 'styled-components';
import { INFT } from '../../../common/store/nftSlice';
import NFTMint from '../../../common/images/NFTMint.svg';

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
        font-weight: 500;
    }
`

export const NFTCard = ({ nft, clickOnNft }: { nft: INFT, clickOnNft: () => void }) => {

    return (
        <CardElement onClick={clickOnNft} >
            <div>
                {(nft.img === '') ? (<img src={NFTMint} alt='' />) : (<img src={nft.img} alt='' />)}
            </div>
            <p>#{nft.id}</p>
        </CardElement>
    )
}
