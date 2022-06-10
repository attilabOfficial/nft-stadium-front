import React from 'react'
import { closeAbout, IContent, isAboutOpenSelector } from '../store/cmsSlice'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import about from '../images/about.svg'
import close from '../../../common/images/close.svg'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { Link } from 'react-router-dom'


const AboutContainer = styled.div`
  position: fixed;
  z-index: 9988;
  background-color: #FFFFFF;
  color: #212936;
  width: 100vw;
  height: 100vh;
  display: flex;
`

const Close = styled(Link)`
  position: fixed;
  top: 48px;
  right: 48px;
  display: flex;
  color: #212936;
  text-decoration: none;

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

const LeftContainer = styled.div`
  width: 50%;
  padding: 144px 0 144px 144px;
`

const RightContainer = styled.div`
  width: 50%;
  padding: 144px 144px 144px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CMSComponent = ({ content }: { content: IContent | undefined }) => {
  const dispatch = useDispatch()
  const aboutIsOpen = useSelector((state: RootState) =>
      isAboutOpenSelector(state)
  )

  const clickOnClose = () => {
      dispatch(closeAbout())
  }

    return (
      <>
        {aboutIsOpen && (
          <AboutContainer>
              <Close to='/' onClick={clickOnClose}>
                <p>CLOSE</p>
                <img src={close} alt="" />
              </Close>
              <LeftContainer>
                <ReactMarkdown>{content! && content.data.attributes.content}</ReactMarkdown>
              </LeftContainer>
              <RightContainer>
                <img src={about} alt="" />
              </RightContainer>
          </AboutContainer>
      )}
    </>
    )
}
