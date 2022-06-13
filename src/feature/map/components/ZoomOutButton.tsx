import React from 'react'

import styled from 'styled-components'
import zoom_out from '../images/minus.svg'
import zoom_out_white from '../images/minus_white.svg'

const Zoom = styled.button`
  background: no-repeat center url(${zoom_out});
  background-color: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 0 0 8px 8px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;

  :hover {
      cursor: pointer;
      background: no-repeat center url(${zoom_out_white});
      background-color: ${({ theme }) => theme.colors.primaryColor};
  }
`

const ZoomOutButton = ({
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

export default ZoomOutButton