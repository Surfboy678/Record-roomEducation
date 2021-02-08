import React, { Component } from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlusSquare, faSave, faUndo, faList, faEdit} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import MyToast from './MyToast';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.userChange = this.userChange.bind(this);
        this.submitUser = this.submitUser.bind(this);
    };

    initialState = {
        id: '',
        username: '',
        role: '',
        enabled: ''

    };

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        console.log(this.props.match.params);
        if (id) {
            this.findUserById(id);
        }
    }

    findUserById = (id) => {
        axios.get("http://localhost:8080/" + id)
            .then(response => {
                console.log(response);
                console.log(response.data);
                if (response.data != null) {
                    this.setState({
                        id: response.data.id,
                        username: response.data.username,
                        role: response.data.role,
                        enabled: response.data.enabled
                        
                    });


                }

            }).catch((error) => {
            console.error("Error -" + error);

        });

    }


    resetRecord = () => {
        this.setState(() => this.initialState);
    };

    submitUser = event => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            role: this.state.role,
            enebled: this.state.enabled
        };


        


        axios.put("http://localhost:8080/update", user)
            .then(response => {
                if (response.data != null) {
                    this.setState({"show": true, "method": "put"});
                    setTimeout(() => this.setState({"show": false}), 3000);
                    setTimeout(() => this.userList(), 3000);
                } else {
                    this.setState({"show": false});
                }
            });
        this.setState(this.initialState);

    };


    userChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    userList = () => {
        return this.props.history.push("/adminPanel")
    };

    render() {
        const {
            username, role, enabled 
        } = this.state;
        return (
            <div>
                <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast show={this.state.show}
                             message={this.state.method === "put" ? "Sala została uaktualniona." : "Sala została zapisana."}
                             type={"success"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header> <FontAwesomeIcon
                        icon={this.state.id ? faEdit : faPlusSquare}/>{this.state.id ? " Zmień" : " Dodaj salę"}
                    </Card.Header>
                    <Form onReset={this.resetRecord} onSubmit={this.state.id ? this.updateRecord : this.submitUser}
                          id="recordFormId">
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridUsername">
                                    <Form.Label>użytkownik</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="username"
                                                  value={username} onChange={this.userChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="użytkownik"/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridRole">
                                    <Form.Label>Rola</Form.Label>
                                    <Form.Control required autoComplete="off"
                                                  type="text" name="role"
                                                  value={role === "ROLE_USER" ? "USER" : "ADMIN"} onChange={this.userChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="role"/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridPersonResponsible">
                                    <Form.Label>konto</Form.Label>
                                    <Form.Control autoComplete="off"
                                                  type="text" name="personResponsible"
                                                  value={enabled === true ? "Aktywne" : "nie aktywne"} onChange={this.userChange}
                                                  className={"bg-dark text-white"}
                                                  placeholder="aktywność"/>
                                </Form.Group>
                               
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign": "right"}}>
                            <Button size="sm" variant="success" type="submit">
                                <FontAwesomeIcon icon={faSave}/> Zapisz
                            </Button>{' '}
                            <Button size="sm" variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo}/> Wyczyść
                            </Button>{' '}
                            <Button size="sm" variant="info" type="button" onClick={this.userList.bind()}>
                                <FontAwesomeIcon icon={faList}/>Lista użytkowników
                            </Button>
                        </Card.Footer>
                    </Form>

                </Card>
            </div>

        );
    }
}


export default User;