import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import close from '../../images/x_icon.svg'
import {
    isLeftPanelOpenSelector,
    closeLeftPanel,
} from '../../../common/store/appStateSlice'
import { RootState } from '../../../store'

const Panel = styled.div`
    background-color: #ca180b;
    font-family: 'Open Sans', sans-serif;
    color: white;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9999;
    min-width: 20vw;
    min-height: calc(100vh - 150px);
    max-width: 20vw;
    max-height: calc(100vh - 150px);
    padding: 1rem;
    border-radius: 0 5px 0 0;
`

const ClosePanel = styled.img`
    position: absolute;
    right: 1rem;
    width: 30px;
`

const LeftPanel = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch()
    const leftPanelIsOpen = useSelector((state: RootState) =>
        isLeftPanelOpenSelector(state)
    )

    const clickOnClose = () => {
        dispatch(closeLeftPanel())
    }

    return (
        <>
            {leftPanelIsOpen && (
                <Panel>
                    <ClosePanel
                        src={close}
                        alt="close"
                        onClick={clickOnClose}
                    />
                    {children}
                </Panel>
            )}
        </>
    )
}

export default LeftPanel
