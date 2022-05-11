import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100vw;
  max-width: 100vw;
`

const Title = styled.h1`
  background-color: #ca180b;
  font-family: "Open Sans",sans-serif;
  font-size: 4rem;
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin: 0;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Title>NFT Stade Rennais</Title>
    </HeaderContainer>
  )
}

export default Header;