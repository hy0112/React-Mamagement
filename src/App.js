import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customer={
  'name' : '김현영',
  'birthday' : '940112',
  'gender' : '남자',
  'job' : '취준생',
}

class App extends Component {
    render(){
      return (
        <Customer 
          name={customer.name}
          birthday={customer.birthday}
          gender={customer.gender}
          job={customer.job}
        />
          
      )
  }
} 
export default App;
