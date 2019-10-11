import React from 'react';
import firebase from './firebase';
import App from '../App';
import LoadingScreen from '../components/LoadingScreen';

const database = firebase.database().ref('smarthome');
const control = database.child('control');
const sensor = database.child('sensor');

export const Context = React.createContext();

class Provider extends React.Component {
  state = {
    laundry: false,
    fan: false,
    light1: false,
    light2: false,
    light3: false,
    light4: {
      level: 1,
      status: false
    },
    manual: true,
    sensor: {
      bright: false,
      rain: false,
      temp: 0
    },
    loading: true,
    update: (ref, val) => control.update({ [ref]: val }),
    light4sts: val => control.child('light4').update({ status: val }),
    light4lvl: val => control.child('light4').update({ level: val })
  };

  componentDidMount() {
    // On Change Listener
    sensor.on('value', snap => this.setState({ sensor: snap.val() }));

    control
      .child('light1')
      .on('value', snap => this.setState({ light1: snap.val() }));
    control
      .child('light2')
      .on('value', snap => this.setState({ light2: snap.val() }));
    control
      .child('light3')
      .on('value', snap => this.setState({ light3: snap.val() }));
    control
      .child('light4')
      .on('value', snap => this.setState({ light4: snap.val() }));
    control
      .child('laundry')
      .on('value', snap => this.setState({ laundry: snap.val() }));
    control
      .child('fan')
      .on('value', snap => this.setState({ fan: snap.val() }));
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
