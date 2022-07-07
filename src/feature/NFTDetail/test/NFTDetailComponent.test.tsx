import React from 'react'
import { render, screen } from '@testing-library/react'

import { NFTDetailComponent } from '../components/NFTDetailComponent'

import NFTMint from '../../../common/images/NFTMint.svg'
import { greyTheme } from '../../../themes';

test('Render the Current NFT Detail mint with image', () => {
    // let myState: RootState = { ...MOCKED_STORE }

    render(
      <NFTDetailComponent
          currentOwner={'owner1'}
          currentNFT={{ id: 0, owner: 'owner1', img: 'img1', link: 'link1' }}
          changeImgFct={() => {}}
          mintFct={() => {}}
          curTheme={greyTheme}
      />
    )

    const renderedImg = screen.getByRole('img')
    expect(renderedImg).toHaveAttribute('src', 'img1')
})

test('Render the Current NFT Detail mint without image', () => {

  render(
    <NFTDetailComponent
        currentOwner={'owner1'}
        currentNFT={{ id: 0, owner: '', img: NFTMint, link: 'link1' }}
        changeImgFct={() => {}}
        mintFct={() => {}}
        curTheme={greyTheme}
    />
  )

  const renderedImg = screen.getByRole('img')
  expect(renderedImg).toHaveAttribute('src', NFTMint)
})

test('Render the Current NFT Detail not mint', () => {

  render(
    <NFTDetailComponent
        currentOwner={''}
        currentNFT={{ id: 0, owner: '0x0000000000000000000000000000000000000000', img: '', link: '' }}
        changeImgFct={() => {}}
        mintFct={() => {}}
        curTheme={greyTheme}
    />
  )

  expect(screen.getByText(/Nobody/i)).toBeInTheDocument()
})
