import React from 'react'

import styled from 'styled-components'
import { ZERO_ADDRESS } from '../../../const'
import { INFT } from '../../../common/store/nftSlice'
import { FormattedMessage } from 'react-intl'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

interface IFormInput {
    uploadImg: string
}

const uploadImgSchema = yup.object().shape({
    uploadImg: yup.string().url().required(),
})

export const NFTDetailComponent = ({
    currentNFT,
    changeImgFct,
    mintFct,
}: {
    currentNFT: INFT
    changeImgFct: (newImg: string) => void
    mintFct: () => void
}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(uploadImgSchema),
      });

    const onSubmit = (data: IFormInput) => {
        console.log(data);
        changeImgFct(data.uploadImg)
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("uploadImg")} type="string" name='uploadImg' />
                        <p> {errors.uploadImg?.message} </p>
                        <input type="submit" id="submit" />
                    </form>
                </>
            ) : (
                <>
                    <button onClick={mintFct}>Mint</button>
                </>
            )}
        </NFTDetail>
    )
}
