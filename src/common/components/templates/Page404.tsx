import React from 'react'
import styled from 'styled-components'

const Page404Container = styled.div`
  background-color: #F3F4F6;
  font-family: 'Clash Grotesk', sans-serif;
  font-size: 3rem;
  color: #212936;
  width: 100vw;
  height: 100vh;

  h1 {
    position: absolute;
    top: 30%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 50%;
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
`

const Page404 = () => {
    return (
      <Page404Container>
        <h1>404 Error</h1>
      </Page404Container>
    )
}

export default Page404
