import { render, screen } from '@testing-library/react'
import React from 'react'

import OneCell from '../OneCell'

import NFTMint from '../../../../common/images/NFTMint.svg'

test('OneCell render the NFT mint with img', () => {
    render(
        <OneCell
            id={3}
            img={'test.jpg'}
            owner="192"
            centerRef={null}
            clickOnCell={() => {}}
        />
    )

    const renderedImg = screen.getByRole('img')
    expect(renderedImg).toHaveAttribute('src', 'test.jpg')
})

// Doubt on the utility of this one !
test('OneCell render the NFT mint with no img', () => {
    render(
        <OneCell
            id={1}
            // here :
            img={NFTMint}
            owner="192"
            centerRef={null}
            clickOnCell={() => {}}
        />
    )

    const renderedImg = screen.getByRole('img')
    expect(renderedImg).toHaveAttribute('src', NFTMint)
})

test('OneCell render nothing when the NFT is not mint', () => {
    render(
        <OneCell
            id={1}
            img={''}
            owner="0x0000000000000000000000000000000000000000"
            centerRef={null}
            clickOnCell={() => {}}
        />
    )

    const renderedImg = screen.queryByRole('img')
    expect(renderedImg).not.toBeInTheDocument()
})
