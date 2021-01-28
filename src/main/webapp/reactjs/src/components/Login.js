import React, { Component } from 'react';
import { Row, Col, Card, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSignInAlt, faUndo, faLock } from '@fortawesome/free-solid-svg-icons'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        email: '', password: ''
    };

    credentialChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    resetFormLogin = () =>{
        this.setState(() => this.initialState)

    } 

    render() {
        const {email, password} = this.state;
        return (
            <Row className="justify-content-md-center">
                <Col xs={5}>
                    <Card className="border border-dark bg-dark text-white">

                    <Card.Header>
                    <FontAwesomeIcon icon={faSignInAlt}/> Login
                    </Card.Header>

                    <Card.Body>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl required autoComplete="off" type="text" name="email" value={email}
                                onChange={this.credentialChange}
                                className={"bg-dark text-white"} placeholder="Enter email address"/>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl required autoComplete="off" type="password" name="password" value={password}
                                onChange={this.credentialChange}
                                className={"bg-dark text-white"} placeholder="Enter password"/>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer stylr={{"text-align":"right"}}>
                        <Button size="sm" type="button" variant="success"
                        disabled={this.state.email.length === 0 || this.state.password === 0}>
                            <FontAwesomeIcon icon={faSignInAlt}/> Login
                        </Button>{' '}
                        <Button size="sm" type="button" variant="info" onClick ={this.resetFormLogin}
                        disabled={this.state.email.length === 0 && this.state.password === 0}>
                            <FontAwesomeIcon icon={faUndo}/> Reset
                        </Button>
                    </Card.Footer>
                    </Card>
                </Col> 
                
            </Row>
        );
    }
}

export default Login;