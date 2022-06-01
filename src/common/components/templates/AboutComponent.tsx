import React from 'react'

interface IAboutUs {
  data: {
      id: number
      attributes: {
          content: string
          createdAt: string
          updatedAt: string
          publishedAt: string
      }
  }
  meta: object
}

export const AboutComponent = ({ aboutUs }: { aboutUs: IAboutUs | undefined }) => {

    console.log('***' ,aboutUs);

    return (
      <>
        <h1>About Us</h1>
        <p>
          {aboutUs! && aboutUs.data.attributes.content}
        </p>
      </>
    )
}
