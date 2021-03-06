import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Record from './components/Record';
import DetailView from './components/DetailView';
import Register from './components/Register';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import User from './components/User';
import RecordList from './components/RecordList';
import Footer from './components/Footer';
import {Container, Row,  Col } from 'react-bootstrap';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


function App() {
  const marginTop = {
    marginTop : "10px"
  }
  return (
    <Router>
      <NavigationBar/>
        <Container>
          <Row>
            <Col lg = {12} style = {marginTop}>
              <Switch>
                  <Route path="/" exact component ={Welcome}/>
                  <Route path="/add" exact component ={Record}/>
                  <Route path="/edit/:id" exact component ={Record}/>
                  <Route path="/details/:id" exact component ={DetailView}/>
                  <Route path="/list" exact component ={RecordList}/>
                  <Route path="/register" exact component ={Register}/>
                  <Route path="/login" exact component ={Login}/>
                  
                  <Route path="/adminPanel" exact component ={AdminPanel}/>
                  <Route path="/editUser/:id" exact component ={User}/>
              </Switch>            
            </Col>
          </Row>
        </Container>
        <Footer/>
        </Router>
  );
}
export default App;
