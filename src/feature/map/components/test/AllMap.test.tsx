import { render } from '@testing-library/react';
import React from 'react';
import AllMap from '../AllMap';
import { MOCKED_STORE } from '../../../../common/store/test/mockedStore'
import { RootState } from '../../../../store';

test('The nft list length', () => {
  let myState: RootState = { ...MOCKED_STORE }
  expect(myState.nfts.nftList.length).toBe(2)
})

test('The grid should render', () => {
  let myState: RootState = { ...MOCKED_STORE }

  render (
    <AllMap
      mapInfo={myState.nfts.nftList}
      centerRef={null}
      clickOnCell={() => {}}
      currentNFT={undefined}
    />
  )
  // I want to test the grid render...
})
