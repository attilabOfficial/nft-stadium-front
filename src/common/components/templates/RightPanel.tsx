import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import close from '../../images/close.svg'
import closeBlue from '../../images/close_b.svg'
import closeYellow from '../../images/close_y.svg'
import {
    isRightPanelOpenSelector,
    closeRightPanel,
    curThemeSelector,
} from '../../../common/store/appStateSlice'

import { RootState } from '../../../store'
import { ITheme } from '../../../themes'

const Panel = styled.div`
    background-color: #ffffff;
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

    const currentTheme = useSelector((state: RootState) =>
        curThemeSelector(state)
    )

    let curThemeId: ITheme['id'] = currentTheme.id

    const closeImg = (theme: ITheme['id']) => {
        if ((theme as unknown as string) === 'T_002') {
            return closeBlue
        } else if ((theme as unknown as string) === 'T_003') {
            return closeYellow
        } else {
            return close
        }
    }

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
                            <img src={closeImg(curThemeId)} alt="" />
                        </ClosePanel>
                    </div>
                    {children}
                </Panel>
            )}
        </>
    )
}

export default RightPanel
