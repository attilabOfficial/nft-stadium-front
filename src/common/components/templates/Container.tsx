import React from 'react'
import styled from 'styled-components'

const BodyContainer = styled.div`
  
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Clash Grotesk', sans-serif;


`

const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <BodyContainer>
      {children}
    </BodyContainer>
  )
}

export default Container;
