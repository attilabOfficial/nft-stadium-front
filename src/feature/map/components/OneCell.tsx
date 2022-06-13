import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { openRightPanel, curNftSelector } from '../../../common/store/appStateSlice';

import { setCurrentNFT } from '../../../common/store/appStateSlice'
import { ZERO_ADDRESS } from '../../../const';
import { RootState } from '../../../store';

import NFTMint from '../../../common/images/NFTMint.svg'

interface CellProps {
    border: string;
}

const CellContainer = styled.div<CellProps>`
    background-color: rgba(171, 226, 186, 0.3);
    aspect-ratio: 1;
    display: grid;
    place-items: center;

    border: ${props => props.border};

    ::before {
        content: '';
        padding-bottom: 100%;
        display: block;
        grid-area: 1 / 1 / 2 / 2;
    }

    :hover {
        border: solid black 1px;
    }
`

const CellMint = styled.img`
    background-color: black;
    max-width: 100%;
    max-heigth: 100%;
    grid-area: 1 / 1 / 2 / 2;
`

const CellImg = styled.img`
    max-width: 100%;
    max-heigth: 100%;
    grid-area: 1 / 1 / 2 / 2;
`

const OneCell = ({ id, img, owner }: {id:number, img:string, owner:string}) => {
    const dispatch = useDispatch()

    const clickOnCell = () => {
        dispatch(openRightPanel())
        console.log('click ion', id)
        dispatch(setCurrentNFT(id))
    }

    const { currentNFT } = useSelector((state: RootState) => ({
        currentNFT: curNftSelector(state),
    }))

    return (
        <CellContainer onClick={clickOnCell} border={currentNFT?.id === id ? "solid black 1px" : "none"} >
            {owner === ZERO_ADDRESS ? '' :
            img !== '' ? <CellImg src={img} alt="" /> : <CellMint src={NFTMint} alt='' /> }
        </CellContainer>
    )
}

export default OneCell
