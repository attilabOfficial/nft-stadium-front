import {
    initialState,
    nftsByOwnerSelector,
    nftSlice,
    transformToNFT,
} from '../nftSlice'

import { AnyAction } from 'redux'
import { MOCKED_STORE } from './mockedStore'
import { RootState } from '../../../store'
import { curNftSelector } from '../appStateSlice'

const { reducer } = nftSlice

test('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState)
})

//***** */ Now into appStateSlice *****
// test('should set the current nft', () => {
//     expect(reducer(undefined, setCurrentNFT(12))).toEqual({
//         loading: 'idle',
//         mapInfo: [],
//         curNft: 12,
//         transactionLoading: 'idle',
//     })
// })

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

// Exemple de test de selector
test('currentNFTSelector', () => {
    let myState: RootState = { ...MOCKED_STORE }
    myState.appState.curNft = 1

    expect(curNftSelector(myState)).toEqual({
        id: 1,
        owner: 'owner2',
        img: 'img2',
        link: 'link2',
    })
})

test('nftsByOwnerSelector', () => {
    let myState: RootState = { ...MOCKED_STORE }

    expect(nftsByOwnerSelector(myState, 'owner1')).toMatchObject([
        {
            id: 0,
            owner: 'owner1',
            img: 'img1',
            link: 'link1',
        },
    ])
})
