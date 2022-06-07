import React from 'react'
import { IContent } from '../store/cmsSlice'

export const CMSComponent = ({ content }: { content: IContent | undefined }) => {

    return (
        <p>
          {content! && content.data.attributes.content}
        </p>
    )
}
