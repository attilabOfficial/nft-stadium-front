import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { aboutSelector, getAbout } from '../../store/cmsSlice';
import { AboutComponent } from './AboutComponent';
import { useEffect } from 'react';
import { AppDispatch } from '../../../store';

const About = styled.div`
  margin-top: 125px;
  color: white;
  text-align: center;
  margin-left: 25%;
  margin-right: 2rem;
`

export const AboutContainer = () => {
  const dispatch = useDispatch<AppDispatch>()

  let { aboutUs } = useSelector((state: RootState) => ({
    aboutUs: aboutSelector(state),
  }))

  useEffect(() => {
    dispatch(getAbout())
  }, [dispatch])

  return (
    <About>
      <AboutComponent aboutUs={aboutUs} />
    </About>
  )
}
