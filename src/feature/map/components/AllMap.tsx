import React from 'react'

import styled from 'styled-components'
import OneCell from './OneCell'
import { NBR_COL, NBR_ROW } from '../../../const'
import { INFT } from '../../../common/store/nftSlice'
import stadiumWithLines from '../images/stadium-with-lines.svg'

const GridContainer = styled.div`
    background: no-repeat center url(${stadiumWithLines});
    background-size: contain;
    margin: 0 auto;
    width: 650px;
    height: auto;
    max-width: 1400px;
    padding: 300px 0;
`

const StadeGrid = styled.div`
    margin: 0 auto;
    width: 55%;
    heigth: 100%;
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(${NBR_COL}, 1fr);
    grid-template-rows: repeat(${NBR_ROW}, 1fr);
    border: solid 1px transparent;

    :hover {
        cursor: pointer;
    }
`

const AllMap = ({
    mapInfo,
    centerRef,
}: {
    mapInfo: INFT[]
    centerRef: React.RefObject<HTMLInputElement>
}) => {
    return (
        <>
            <GridContainer>
                <StadeGrid>
                    {mapInfo.map((cell, index) => (
                        <OneCell
                            centerRef={index === 212 ? centerRef : null}
                            key={index}
                            id={cell.id}
                            img={cell.img}
                            owner={cell.owner}
                        />
                    ))}
                </StadeGrid>
            </GridContainer>
        </>
    )
}

export default AllMap
