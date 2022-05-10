import styled from 'styled-components';
import { NFTDetailContainer } from '../container/NFTDetailContainer';


const Panel = styled.div`
  background-color: #ca180b;
  font-family: "Open Sans",sans-serif;
  text-align: center;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9999;
  min-width: 20rem;
  min-height: 50rem;
  padding: 1rem;
`

const RightPanel = () => {
  return (
      <Panel>
        <NFTDetailContainer/>
      </Panel>
  )
}

export default RightPanel;