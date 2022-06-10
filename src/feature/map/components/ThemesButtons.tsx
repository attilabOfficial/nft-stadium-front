import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { setCurrentTheme } from '../../../common/store/appStateSlice';
import { blueTheme, greyTheme, yellowTheme } from '../../../themes';

const Container = styled.div`
  position: fixed;
  bottom: 2.5vw;
  left: 2.5vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const GreyButton = styled.button`
  background-color: #8F95A0;
  border: 2px solid white;
  border-radius: 50%;
  width: 2rem;
  height : 2rem;
  margin: 0.25rem;

  :hover {
    cursor: pointer;
    border: 2px solid black;
  }
`

const BlueButton = styled.button`
  background-color: #2E55FF;
  border: 2px solid white;
  border-radius: 50%;
  width: 2rem;
  height : 2rem;
  margin: 0.25rem;

  :hover {
    cursor: pointer;
    border: 2px solid black;
  }
`

const YellowButton = styled.button`
  background-color: #EFBA1E;
  border: 2px solid white;
  border-radius: 50%;
  width: 2rem;
  height : 2rem;
  margin: 0.25rem;

  :hover {
    cursor: pointer;
    border: 2px solid black;
  }
`

const ThemesButtons = () => {
    const dispatch = useDispatch();

    const clickOnGrey = () => {
      dispatch(setCurrentTheme(greyTheme))
    }

    const clickOnBlue = () => {
      dispatch(setCurrentTheme(blueTheme))
    }

    const clickOnYellow = () => {
      dispatch(setCurrentTheme(yellowTheme))
    }

    return (
      <Container>
        <GreyButton onClick={clickOnGrey} ></GreyButton>
        <BlueButton onClick={clickOnBlue} ></BlueButton>
        <YellowButton onClick={clickOnYellow} ></YellowButton>
      </Container>
    )
}

export default ThemesButtons;
