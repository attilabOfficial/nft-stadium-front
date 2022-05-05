import styled from 'styled-components';

const Title = styled.h1`
  background-color: red;
  font-size: 4rem;
  text-align: center;
  padding: 1rem 0;
  margin: 0;
`

const Header = () => {
  return (
    <Title>NFT Stade Rennais</Title>
  )
}

export default Header;