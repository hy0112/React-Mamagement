import React, {Component} from 'react';
import './App.css';
import Paper  from '@mui/material/Paper';
import Customer from './components/Customer'
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {withStyles} from '@mui/material/styles';

const styles = theme => ({
    root: {
      width:'100%', 
      maginTop: theme.spacing.unit * 3 , 
      overflowx:"auto"
    },
    table:{
      minWidth: 1000
    }
  })


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
      const { classes } = this.props;
      return (
        <Paper className = {classes.root}>
          <Table className={classes.table}> 
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>  
              {customers.map(c => { return (<Customer  key={c.id} id={c.id} image={c.image}  name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ) })}
            </TableBody>
          </Table>
          
        </Paper>
      )
  }
} 
export default withStyles(styles)(App);
