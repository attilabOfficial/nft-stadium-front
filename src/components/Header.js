import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { openLeftPanel } from '../store/leftPanelSlice';

const HeaderContainer = styled.div`
  background-color: #ca180b;
  font-family: "Open Sans",sans-serif;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: start;
`

const Menu = styled.button`
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  width: 4rem;
  height: 3rem;
  margin: 0 2rem;
  vertical-align: center;
`

const Title = styled.h1`
  font-size: 4rem;
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin: 0;
`

const Header = () => {
  const dispatch = useDispatch();

  const clickOnMenu = () => {
    dispatch(openLeftPanel())
  }

  return (
    <HeaderContainer>
      <Menu onClick={(clickOnMenu)} >Menu</Menu>
      <Title>NFT Stade Rennais</Title>
    </HeaderContainer>
  )
}

export default Header;