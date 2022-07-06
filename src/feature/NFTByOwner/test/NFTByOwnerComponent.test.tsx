import { MOCKED_STORE } from '../../../common/store/test/mockedStore'
import { RootState } from '../../../store'
import { render, screen } from '@testing-library/react';
import { NFTByOwnerComponent } from '../components/NFTByOwnerComponent';
import React from 'react';

test('NFTs own', () => {
    let myState: RootState = { ...MOCKED_STORE }
    const curOwner = 'owner1'
    const NFTByOwner = myState.nfts.nftList && myState.nfts.nftList.filter((nft) => nft.owner === curOwner)

    expect(NFTByOwner).toEqual([{ id: 0, owner: 'owner1', img: 'img1', link: 'link1' }])

})

test('Render NFTs own', () => {
    let myState: RootState = { ...MOCKED_STORE }
    const curOwner = 'owner1'
    const NFTByOwner = myState.nfts.nftList && myState.nfts.nftList.filter((nft) => nft.owner === curOwner)

    render(
        <NFTByOwnerComponent
            NFTsOwn={NFTByOwner}
            curOwner={'owner1'}
        />
    )

    // expect(screen.getByText(/#0/i)).toBeInTheDocument()

})
