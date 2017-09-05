import React from 'react';
import Title from '../components/Title.js';
import reactAppLogo from '../images/react-app.svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      fontFamily: 'sans-serif',
      fontWeight: 'lighter',
      textAlign: 'center'
    };
    return(
      <div style={style}>
        <Title>React App Starter</Title>
        <img 
          src={reactAppLogo} 
          width="100px" 
          height="100px" 
          alt="React App Starter"/>
      </div>
    );
  }
}