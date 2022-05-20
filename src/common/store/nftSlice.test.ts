import { nftSlice, setCurrentNFT, transformToNFT } from './nftSlice'

import { AnyAction } from 'redux'

const { reducer } = nftSlice

test('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual({
        loading: 'idle',
        mapInfo: [],
        curNft: 0,
        transactionLoading: 'idle',
    })
})

test('should set the current nft', () => {
    expect(reducer(undefined, setCurrentNFT(12))).toEqual({
        loading: 'idle',
        mapInfo: [],
        curNft: 12,
        transactionLoading: 'idle',
    })
})

test('transform to NFT', () => {
    expect(
        transformToNFT([
            ['owner1', 'owner2'],
            ['img1', 'img2'],
            ['link1', 'link2'],
        ])
    ).toEqual([
        { id: 0, owner: 'owner1', img: 'img1', link: 'link1' },
        { id: 1, owner: 'owner2', img: 'img2', link: 'link2' },
    ])
    expect(transformToNFT([])).toEqual([])
})
