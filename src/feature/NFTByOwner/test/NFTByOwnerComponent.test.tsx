import { MOCKED_STORE } from '../../../common/store/test/mockedStore'
import { RootState } from '../../../store'
import { render } from '@testing-library/react'
import { NFTByOwnerComponent } from '../components/NFTByOwnerComponent'
import React from 'react'
import { INFT } from '../../../common/store/nftSlice'

test('NFTs own', () => {
    let myState: RootState = { ...MOCKED_STORE }
    const curOwner = 'owner1'
    const NFTByOwner =
        myState.nfts.nftList &&
        myState.nfts.nftList.filter((nft) => nft.owner === curOwner)

    expect(NFTByOwner).toEqual([
        { id: 0, owner: 'owner1', img: 'img1', link: 'link1' },
    ])
})

test('Render NFTs own', () => {
    let myState: RootState = { ...MOCKED_STORE }
    const curOwner = 'owner1'
    const NFTByOwner =
        myState.nfts.nftList &&
        myState.nfts.nftList.filter((nft) => nft.owner === curOwner)

    render(
        <NFTByOwnerComponent
            NFTsOwn={NFTByOwner}
            curOwner={'owner1'}
            clickOnNft={(id: INFT['id']) => {}}
        />
    )

    // expect(screen.getByText(/#0/i)).toBeInTheDocument()
})
