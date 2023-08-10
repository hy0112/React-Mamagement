import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer'

const customers=
[
  {
    'id': 1 ,
    'image' : 'https://placeimg.com/64/64/any' ,
    'name' : '김현영',
    'birthday' : '940112',
    'gender' : '남자',
    'job' : '취준생',
  },
  {
    'id': 2 ,
    'image' : 'https://placeimg.com/64/64/1' ,
    'name' : '고객1',
    'birthday' : '000001',
    'gender' : '남자',
    'job' : '취업',
  },
  {
    'id': 3 ,
    'image' : 'https://placeimg.com/64/64/2' ,
    'name' : '고객2',
    'birthday' : '000002',
    'gender' : '남자',
    'job' : '하고싶다',
  }
]

class App extends Component {
    render(){
      return (
        <div>
          {customers.map(c => { return (<Customer  key={c.id} id={c.id} image={c.image}  name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ) })}
        </div>
      )
  }
} 
export default App;
