import React from 'react';
import firebase from './firebase';
import App from '../App';
import LoadingScreen from '../components/LoadingScreen';

const database = firebase.database().ref('smarthome-v2');
const control = database.child('control');
const sensor = database.child('sensor');

export const Context = React.createContext();

class Provider extends React.Component {
  state = {
    jemuran: false,
    kipas: false,
    lampu1: false,
    lampu2: false,
    lampu3: false,
    lampu4: {
      level: 1,
      status: false
    },
    update: (ref, val) => control.update({ [ref]: val }),
    lampu4sts: val => control.child('lampu4').update({ status: val }),
    lampu4lvl: val => control.child('lampu4').update({ level: val }),
    manual: true,
    sensor: {
      cahaya: '-',
      cuaca: '-',
      suhu: 0
    },
    loading: true
  };

  componentDidMount() {
    // On Change Listener
    sensor.on('value', snap => this.setState({ sensor: snap.val() }));

    control
      .child('lampu1')
      .on('value', snap => this.setState({ lampu1: snap.val() }));
    control
      .child('lampu2')
      .on('value', snap => this.setState({ lampu2: snap.val() }));
    control
      .child('lampu3')
      .on('value', snap => this.setState({ lampu3: snap.val() }));
    control
      .child('lampu4')
      .on('value', snap => this.setState({ lampu4: snap.val() }));
    control
      .child('jemuran')
      .on('value', snap => this.setState({ jemuran: snap.val() }));
    control
      .child('kipas')
      .on('value', snap => this.setState({ kipas: snap.val() }));
    control
      .child('manual')
      .on('value', snap =>
        this.setState({ manual: snap.val(), loading: false })
      );
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <App />
        <LoadingScreen loading={this.state.loading} />
      </Context.Provider>
    );
  }
}

export default Provider;
