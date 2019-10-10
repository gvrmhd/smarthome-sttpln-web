import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import { Context } from './utils/AppContext';
import NavBar from './components/NavBar';
import CustomPaper from './components/CustomPaper';
import bgImg from './assets/backimg.jpg';
import SensorData from './components/SensorData';

const Background = styled.div`
  min-height: 100%;
  &:before {
    z-index: -1;
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    filter: blur(5px);
    @media (min-width: 961px) {
      transform: scale(1.1);
    }
  }
`;

const GridContainer = styled(Grid)`
  padding: 1rem 0;
`;

const View = () => {
  const {
    lampu1,
    lampu2,
    lampu3,
    lampu4,
    kipas,
    jemuran,
    update,
    lampu4sts,
    lampu4lvl
  } = React.useContext(Context);

  return (
    <GridContainer container spacing={3}>
      <Grid item xs={12} md={4}>
        <SensorData />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomPaper
          title='Lampu Atas'
          variant='lampu'
          state={lampu1}
          handler={() => update('lampu1', !lampu1)}
        />
        <CustomPaper
          title='Lampu Luar'
          variant='lampu'
          state={lampu2}
          handler={() => update('lampu2', !lampu2)}
        />
        <CustomPaper
          title='Lampu Bawah'
          variant='lampu'
          state={lampu3}
          handler={() => update('lampu3', !lampu3)}
        />
        <CustomPaper
          title='Lampu Dalam'
          variant='lampu'
          useLevel
          state={lampu4.status}
          level={lampu4.level}
          handler={() => lampu4sts(!lampu4.status)}
          levelHandler={val => lampu4lvl(val)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomPaper
          title='Kipas'
          variant='kipas'
          state={kipas}
          handler={() => update('kipas', !kipas)}
        />
        <CustomPaper
          title='Jemuran'
          variant='jemuran'
          state={jemuran}
          handler={() => update('jemuran', !jemuran)}
        />
      </Grid>
    </GridContainer>
  );
};

const App = () => {
  const { loading } = React.useContext(Context);

  return (
    <Background img={bgImg}>
      <NavBar />
      <Container>{!loading && <View />}</Container>
    </Background>
  );
};

export default App;
