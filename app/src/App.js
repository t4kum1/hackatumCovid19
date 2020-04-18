import React from 'react';
import logo from './logo.svg';
import { HashRouter, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage.js'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isBusiness: false,
      name: '',
      id: -1
    }
  }

  update(props){
    this.setState({isBusiness: this.props.isBusiness, name: this.props.name, id: this.props.id});
    console.log(this.state);
  }

  render(){
    return (
     <HashRouter>
        <div>
          <Route path='/' render={(props) => <LoginPage update={this.update.bind(this)} {...props} />}/>
        </div>
    </HashRouter>
    );
  }
}

export default App;
