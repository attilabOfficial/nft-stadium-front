import React, { useRef } from 'react'

import { useContext, useEffect } from 'react'
import { Web3Context } from '../../common/components/web3/DappContainer'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAllMapInfo,
    INFT,
    mapSelector,
} from '../../common/store/nftSlice'
import { StadiumComponent } from './components/StadiumComponent'
import { REACT_APP_MOCK } from '../../const'
import { AppDispatch, RootState } from '../../store'
import {
    curNftSelector,
    openRightPanel,
    setCurrentNFT,
} from '../../common/store/appStateSlice'

export const StadiumContainer = () => {
    const web3Context = useContext(Web3Context)
    const dispatch: AppDispatch = useDispatch()
    const mapInfo = useSelector((state: RootState) => mapSelector(state))

    const clickOnCell = (id: INFT['id']) => {
        dispatch(openRightPanel())
        dispatch(setCurrentNFT(id))
    }

    const { currentNFT } = useSelector((state: RootState) => ({
        currentNFT: curNftSelector(state),
    }))

    let mapSize = 1

    const containerRef: React.RefObject<HTMLInputElement> = useRef(null)
    const centerRef: React.RefObject<HTMLInputElement> = useRef(null)

    const centerScroll = () => {
        if (centerRef && centerRef.current) {
            const elementRect = centerRef.current.getBoundingClientRect()
            const middleTop =
                elementRect.top + window.scrollY - window.innerHeight / 2
            const middleLeft =
                elementRect.left + window.scrollX - window.innerWidth / 2
            window.scrollTo(middleLeft, middleTop)
        }
    }

    const zoomIn = () => {
        if (
            containerRef &&
            containerRef.current &&
            containerRef.current.style
        ) {
            containerRef.current.style.transform = `scale(${(mapSize += 0.5)})`
            containerRef.current.style.transformOrigin = `top left`
            containerRef.current.style.position = `${
                mapSize > 1 ? 'absolute' : undefined
            }`
            containerRef.current.style.top = `${mapSize > 1 ? 0 : undefined}`
            containerRef.current.style.left = `${mapSize > 1 ? 0 : undefined}`
            centerScroll()
        }
    }

    const zoomOut = () => {
        if (mapSize > 1) {
            if (
                containerRef &&
                containerRef.current &&
                containerRef.current.style
            ) {
                containerRef.current.style.transform = `scale(${(mapSize -= 0.5)})`
                centerScroll()
            }
        }
    }

    useEffect(() => {
        if (web3Context.contract || REACT_APP_MOCK) {
            dispatch(getAllMapInfo(web3Context.contract))
        }
    }, [web3Context.contract, dispatch])

    return (
        <StadiumComponent
            containerRef={containerRef}
            centerRef={centerRef}
            mapInfo={mapInfo}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            clickOnCell={clickOnCell}
            currentNFT={currentNFT}
        />
    )
}
