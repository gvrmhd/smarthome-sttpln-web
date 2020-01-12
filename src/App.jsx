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
    light1,
    light2,
    light3,
    light4,
    fan,
    laundry,
    update,
    light4sts,
    light4lvl
  } = React.useContext(Context);

  return (
    <GridContainer container spacing={3}>
      <Grid item xs={12} md={4}>
        <SensorData />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomPaper
          title='Balcony'
          variant='light'
          state={light1}
          handler={() => update('light1', !light1)}
        />
        <CustomPaper
          title='Bedroom'
          variant='light'
          state={light2}
          handler={() => update('light2', !light2)}
        />
        <CustomPaper
          title='Outdoor'
          variant='light'
          state={light3}
          handler={() => update('light3', !light3)}
        />
        <CustomPaper
          title='Living Room'
          variant='light'
          useLevel
          state={light4.status}
          level={light4.level}
          handler={() => light4sts(!light4.status)}
          levelHandler={val => light4lvl(val)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <CustomPaper
          title='Fan'
          variant='fan'
          state={fan}
          handler={() => update('fan', !fan)}
        />
        <CustomPaper
          title='Laundry'
          variant='laundry'
          state={laundry}
          handler={() => update('laundry', !laundry)}
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
