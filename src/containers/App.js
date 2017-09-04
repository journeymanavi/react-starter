import React from 'react';
import Title from '../components/Title.js';
import reactAppLogo from '../images/react-app.svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      backgroundColor: "black",
      color: "white",
      textAlign: "center"
    };
    return(
      <div style={style}>
        <Title>React App Starter</Title>
        <img alt="React App Starter" src={reactAppLogo}/>
      </div>
    );
  }
}