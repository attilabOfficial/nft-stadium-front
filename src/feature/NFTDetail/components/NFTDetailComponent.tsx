import React from 'react'

import styled from 'styled-components'
import { useState } from 'react'
import { ZERO_ADDRESS } from '../../../const'
import { INFT } from '../../../common/store/nftSlice'

import { FormattedMessage } from 'react-intl'

const NFTDetail = styled.div`
    text-align: center;
    width: 100%;
    overflow: hidden;

    img {
        max-width: 15rem;
    }

    a {
        color: white;

    }
`

export const NFTDetailComponent = ({
    currentNFT,
    changeImgFct,
    mintFct,
}: {
    currentNFT: INFT
    changeImgFct: (newImg: string) => void
    mintFct: () => void
}) => {
    const [imgUrl, setImgUrl] = useState('')

    const changeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImgUrl(event.target.value)
    }
    return (
        <NFTDetail>
            <h2>#{currentNFT.id}</h2>
            {currentNFT && currentNFT.owner !== ZERO_ADDRESS ? (
                <>
                    <h3>
                    <FormattedMessage 
                        id='app.NFTDetail.owner'
                    />
                    </h3>
                    <p>{currentNFT.owner}</p>
                    <h4>
                        <a href={`https://testnets.opensea.io/assets/mumbai/0xB11F884C188D2d142c11797B2f855F0f1Af97FA0/${currentNFT.id}`} target='_blank' rel="noreferrer">
                            link
                        </a>
                    </h4>
                    {currentNFT.img !== '' ? (
                        <img src={currentNFT.img} alt="NFT" />
                    ) : (
                        <p>
                            <FormattedMessage 
                                id='app.NFTDetail.noImage'
                            />
                        </p>
                    )}
                    <h3>
                        <FormattedMessage 
                            id='app.NFTDetail.imageChange'
                        />
                    </h3>
                    <input type="url" value={imgUrl} onChange={changeImg} />
                    <button
                        onClick={() => {
                            changeImgFct(imgUrl)
                        }}
                    >
                        Go!
                    </button>
                </>
            ) : (
                <>
                    <button onClick={mintFct}>Mint</button>
                </>
            )}
        </NFTDetail>
    )
}
