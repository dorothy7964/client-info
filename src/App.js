import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
}
  
  

class App extends Component {
  render() {
    return (
     <Customer 
        customer={customer}
     />
    );
  }
}

export default App;
