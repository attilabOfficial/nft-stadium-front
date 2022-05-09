import styled from 'styled-components';
import AllMap from './AllMap';

const Container = styled.div`
  width: 100vw;
  text-align: center;
  background-color: black;
`

const StadiumContainer = () => {
    return (
        <Container>
            <AllMap />
        </Container>
    )
}

export default StadiumContainer;