import React from 'react'
import { useSelector } from 'react-redux'
import Container from './common/components/templates/Container'
import Header from './common/components/templates/Header'
import { Loading } from './common/components/templates/Loading'
import RightPanel from './common/components/templates/RightPanel'
import { DappContainer } from './common/components/web3/DappContainer'
import { StadiumContainer } from './feature/map/StadiumContainer'
import { isMapLoadingSelector } from './common/store/nftSlice'
import { NFTDetailContainer } from './feature/NFTDetail/components/NFTDetailContainer'
import { RootState } from './store'
import { Toaster } from 'react-hot-toast'
import { Routes, Route } from 'react-router-dom';
import { CMSContainer } from './feature/cms/components/CMSContainer';
import Page404 from './common/components/templates/Page404'
import { isContentLoadingSelector } from './feature/cms/store/cmsSlice';
import { ThemeProvider } from 'styled-components'
import { curThemeSelector } from './common/store/appStateSlice'
import GlobalStyleReset from './common/components/templates/GlobalStyleReset'

const App = () => {
    const loading = useSelector((state: RootState) => {
        if (isMapLoadingSelector(state) === 'loading' || isContentLoadingSelector(state) === 'loading') {
            return 'loading'
        } else {
            return 'idle'
        }
    })

    const { theme } = useSelector((state: RootState) => ({
        theme: curThemeSelector(state),
    }))

    return (
        <>
            <GlobalStyleReset />
            <ThemeProvider theme={theme}>
                <DappContainer>
                    <Container>
                        <Header />
                        <Routes>
                            <Route path="/" element={<StadiumContainer />} />
                            <Route path="/about" element={<CMSContainer contentId='about-us'/>} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                        {loading === 'loading' && <Loading />}
                        <RightPanel>
                            <NFTDetailContainer />
                        </RightPanel>
                    </Container>
                </DappContainer>
            </ThemeProvider>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    )
}

export default App
