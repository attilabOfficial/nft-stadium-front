import { RootState } from '../../../store'

export const MOCKED_STORE: RootState = {
    nfts: {
        loading: 'idle',
        nftList: [
            { id: 0, owner: 'owner1', img: 'img1', link: 'link1' },
            { id: 1, owner: 'owner2', img: 'img2', link: 'link2' },
        ],
        transactionLoading: 'idle',
    },
    appState: {
        headerPanelIsOpen: false,
        rightPanelIsOepn: false,
        curNft: undefined,
    },
    cmsState: { content: {}, loading: 'idle', aboutOpen: false },
}
