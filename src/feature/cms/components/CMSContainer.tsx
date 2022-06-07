import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import {cmsSelector, getContent } from '../store/cmsSlice';
import { CMSComponent } from './CMSComponent';
import { useEffect } from 'react';
import { AppDispatch } from '../../../store';

const CMSStyle = styled.div`
  margin-top: 125px;
  color: #212936;
  text-align: center;
  margin-left: 25%;
  margin-right: 2rem;
`

export const CMSContainer = ({contentId} : {contentId : string}) => {
  const dispatch = useDispatch<AppDispatch>()

  let { content } = useSelector((state: RootState) => ({
    content : cmsSelector(state, contentId),
  }))

  useEffect(() => {
    dispatch(getContent(contentId))
  }, [dispatch, contentId])

  return (
    <CMSStyle>
      <CMSComponent content={content} />
    </CMSStyle>
  )
}
