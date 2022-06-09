import React from 'react'

import styled from 'styled-components'
import { ZERO_ADDRESS } from '../../../const'
import { INFT } from '../../../common/store/nftSlice'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import NFTMint from '../../../common/images/NFTMint.svg'
import NFTToMint from '../../../common/images/NFTToMint.svg'
import credit from '../../../common/images/credit.svg'

const NFTDetail = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        overflow: hidden;
        font-size: 14px;
        margin-bottom: 24px;
    }

    form {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    button {
        background-color: #212936;
        color: #FFFFFF;
        border: none;
        border-radius: 4px;
        padding: 9px 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            margin-right: 8px;
        }

        p {
            margin: 0;
        }
    }
`

const NFTCard = styled.div`
    border: 1px solid #E5E7EB;
    border-radius: 4px;
    width: 184px;
    height: 225px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 12px 12px 12px;
    text-align: center;
    margin-bottom: 24px;

    div {
        min-width: 160px;
        min-height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;


        img {
            max-width: 160px;
            max-height: 160px;
            aspect-ratio: auto;
        }
    }

    p {
        font-size: 24px;
        margin-bottom: 0px;
    }
`

const Field = styled.input`
    height: 46px;
    border: solid 1px #8F95A0;
    border-radius: 4px 0px 0px 4px;
`

const Upload = styled.input`
    background-color: #212936;
    color: white;
    height: 50px;
    border: none;
    border-radius: 0px 4px 4px 0px;
    padding: 0 24px;
`

interface IFormInput {
    uploadImg: string
}

const uploadImgSchema = yup.object().shape({
    uploadImg: yup.string().url().required(),
})

export const NFTDetailComponent = ({
    currentOwner,
    currentNFT,
    changeImgFct,
    mintFct,
}: {
    currentOwner: string
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
            {currentNFT && currentNFT.owner !== ZERO_ADDRESS ? (
                <>
                    <NFTCard>
                        <div>
                        {currentNFT.img !== '' ? (
                            <img src={currentNFT.img} alt="NFT" />
                        ) : ( 
                            <img src={NFTMint} alt="NFT" /> 
                        )}
                        </div>
                        <p><b>#{currentNFT.id}</b></p>
                    </NFTCard>
                    <p><b>Owner : </b>{currentNFT.owner.slice(0, 10)}...{currentNFT.owner.toLowerCase() === currentOwner && ' (You)'}</p>
                    <div>
                        <label><b>Change image</b></label>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Field {...register("uploadImg")} type="string" name='uploadImg' placeholder='Browse your image' />
                            <Upload type="submit" id="submit" />
                        </form>
                        <p> {errors.uploadImg?.message} </p>
                    </div>
                </>
            ) : (
                <>
                    <NFTCard>
                        <div>
                            <img src={NFTToMint} alt="NFT" />
                        </div>
                        <p><b>#{currentNFT.id}</b></p>
                    </NFTCard>
                    <p><b>Owner : </b>Nobody yet ! Maybe you ?</p>
                    <button onClick={mintFct}>
                        <img src={credit} alt="" />
                        <p>Buy it now !</p>
                    </button>
                </>
            )}
        </NFTDetail>
    )
}
