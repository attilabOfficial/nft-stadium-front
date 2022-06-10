import React from 'react'
import styled from 'styled-components'
import AllMap from './AllMap'
import ZoomInButton from './ZoomInButton'
import ZoomOutButton from './ZoomOutButton'
import { INFT } from '../../../common/store/nftSlice'
import ThemesButtons from './ThemesButtons';

const Container = styled.div`
    margin-top: 102px;
    width: 100vw;
    text-align: center;
    background-color: #F3F4F6;
`

const ZoomButtonsContainer = styled.div`
    position: fixed;
    bottom: 2.5vw;
    right: 2.5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StadiumComponent = ({
    containerRef,
    zoomIn,
    zoomOut,
    mapInfo,
}: {
    containerRef: React.RefObject<HTMLInputElement>
    zoomIn: () => void
    zoomOut: () => void
    mapInfo: INFT[]
}) => {
    if (mapInfo && mapInfo.length > 0) {
        return (
            <div>
                <Container ref={containerRef}>
                    <AllMap mapInfo={mapInfo} />
                </Container>
                <ZoomButtonsContainer>
                    <ZoomInButton buttonLabel="zoom_in" fctOnClick={zoomIn} />
                    <ZoomOutButton buttonLabel="zoom_out" fctOnClick={zoomOut} />
                </ZoomButtonsContainer>
                <ThemesButtons />
            </div>
        )
    } else {
        return <h1>Loading</h1>
    }
}
