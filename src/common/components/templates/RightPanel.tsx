import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import close from '../../images/close.svg'
import {
    isRightPanelOpenSelector,
    closeRightPanel,
} from '../../../common/store/appStateSlice'

import { RootState } from '../../../store'

const Panel = styled.div`
    background-color: #FFFFFF;
    color: #212936;
    position: fixed;
    right: 2.5vw;
    top: 151px;
    z-index: 7777;
    min-width: 396px;
    min-height: 536px;
    max-width: 396px;
    max-height: 536px;
    padding: 48px;
    border-radius: 12px;

    animation: fadein 0.5s linear;
    @keyframes fadein {

        0% {
            opacity: 0;
        }
    
        100% {
            opacity: 1;
        }
    }
`

const ClosePanel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 48px;

    p {
        font-family: 'Clash Display', sans-serif;
        font-weight: 600;
        font-size: 16px;
        letter-spacing: 0.1em;
        margin: 16px 8px;
    }

    :hover {
        cursor: default;
    }
`

const RightPanel = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch()
    const rightPanelIsOpen = useSelector((state: RootState) =>
        isRightPanelOpenSelector(state)
    )

    const clickOnClose = () => {
        dispatch(closeRightPanel())
    }

    return (
        <>
            {rightPanelIsOpen && (
                <Panel>
                    <div>
                        <ClosePanel onClick={clickOnClose}>
                            <p>CLOSE</p>
                            <img src={close} alt="" />
                        </ClosePanel>
                    </div>
                    {children}
                </Panel>
            )}
        </>
    )
}

export default RightPanel
