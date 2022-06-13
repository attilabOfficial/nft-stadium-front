import React from 'react'

import styled from 'styled-components'
import zoom_in from '../images/plus.svg'
import zoom_in_white from '../images/plus_white.svg'

const Zoom = styled.button`
    background: no-repeat center url(${zoom_in});
    background-color: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 8px 8px 0 0;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px;

    :hover {
        cursor: pointer;
        background: no-repeat center url(${zoom_in_white});
        background-color: #212936;
    }
`

const ZoomInButton = ({
    buttonLabel,
    fctOnClick,
}: {
    buttonLabel: string
    fctOnClick: () => void
}) => {
    return (
        <Zoom onClick={fctOnClick}>
            
        </Zoom>
    )
}

export default ZoomInButton
