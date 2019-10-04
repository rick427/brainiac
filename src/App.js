import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import './App.css';

const options = {
  particles: {
    number:{
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = e => {
    console.log(e.target.value);
  }

  onSubmit = () => {
    console.log('Clicked')
  }

  render(){
    return (
      <div className="App">
        <Particles className="particles" params={options}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default App;
