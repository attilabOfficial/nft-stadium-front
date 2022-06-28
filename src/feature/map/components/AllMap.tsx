import React from 'react'

import styled from 'styled-components'
import OneCell from './OneCell'
import { REACT_APP_NBR_COL, REACT_APP_NBR_ROW } from '../../../const'
import { INFT } from '../../../common/store/nftSlice'
import stadiumGrey from '../images/stadium-with-lines.svg'
import stadiumBlue from '../images/stadium-blue-with-lines.svg'
import stadiumYellow from '../images/stadium-yellow-with-lines.svg'

const GridContainer = styled.div`
    background: no-repeat center url(${({ theme }) => theme.id === 'T_002' ? stadiumBlue : theme.id === 'T_003' ? stadiumYellow : stadiumGrey });
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
    grid-template-columns: repeat(${REACT_APP_NBR_COL}, 1fr);
    grid-template-rows: repeat(${REACT_APP_NBR_ROW}, 1fr);
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
