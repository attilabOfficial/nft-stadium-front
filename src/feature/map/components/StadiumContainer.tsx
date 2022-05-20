import React, { useRef } from 'react'

import { useContext, useEffect } from 'react'
import { Web3Context } from '../../../common/components/web3/DappContainer'
import { useDispatch, useSelector } from 'react-redux'
import {
    getAllMapInfo,
    mapSelector,
} from '../../../common/store/nftSlice'
import { StadiumComponent } from './StadiumComponent'
import { MOCK } from '../../../const'
import { AppDispatch, RootState } from '../../../store'

export const StadiumContainer = () => {
    const web3Context = useContext(Web3Context)
    const dispatch: AppDispatch = useDispatch()
    const mapInfo = useSelector((state: RootState) => mapSelector(state))

    let mapSize = 1

    const containerRef: React.RefObject<HTMLInputElement> = useRef(null)

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
                console.log('click -')
            }
        }
    }

    useEffect(() => {
        if (web3Context.contract || MOCK) {
            dispatch(getAllMapInfo(web3Context.contract))
        }
    }, [web3Context.contract, dispatch])

    return (
        <StadiumComponent
            containerRef={containerRef}
            mapInfo={mapInfo}
            zoomIn={zoomIn}
            zoomOut={zoomOut}
        />
    )
}
