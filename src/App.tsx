import React from 'react'
import { useSelector } from 'react-redux'
import GlobalStyleReset from './common/components/templates/GlobalStyleReset'
import Header from './common/components/templates/Header'
import LeftPanel from './common/components/templates/LeftPanel'
import { Loading } from './common/components/templates/Loading'
import RightPanel from './common/components/templates/RightPanel'
import { DappContainer } from './common/components/web3/DappContainer'
import { StadiumContainer } from './feature/map/components/StadiumContainer'
import { isMapLoadingSelector } from './common/store/nftSlice'
import { NFTDetailContainer } from './feature/NFTDetail/components/NFTDetailContainer'
import { NFTByOwnerContainer } from './feature/NFTByOwner/components/NFTByOwnerContainer'
import { RootState } from './store'
import { Toaster } from 'react-hot-toast'

const App = () => {
    const loading = useSelector((state: RootState) =>
        isMapLoadingSelector(state)
    )

    return (
        <>
            <GlobalStyleReset />
            <DappContainer>
                <Header />
                <StadiumContainer />
                {loading === 'loading' && <Loading />}
                <RightPanel>
                    <NFTDetailContainer />
                </RightPanel>
                <LeftPanel>
                    {' '}
                    <NFTByOwnerContainer />
                </LeftPanel>
            </DappContainer>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    )
}

export default App
