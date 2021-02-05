import React, { Component } from 'react';
import {Table, ButtonGroup, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import MyToast from './MyToast';
import {Link} from 'react-router-dom';


class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []

        };
    }

    componentDidMount() {
        this.findAllUsers();
    }

    findAllUsers() {
        axios.get("http://localhost:8080/allUsers")
            .then(response => response.data)
            .then((data) => {
                this.setState({users: data});
            });

    };
    render() {
        return (
            <div>
                 <div style={{"display": this.state.show ? "block" : "none"}}>
                    <MyToast show={this.state.show} message={"Użytkownik został usunięty."} type={"danger"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>               
                <Table float left striped bordered hover variant="dark">
                    <thead>
                    <tr align="left">
                        <td colSpan="12"><FontAwesomeIcon icon={faList}/> Lista użutkowników</td>
                    </tr>
                    <tr>
                    <th>Lp.</th>
                        <th>username</th>
                        <th>rola</th>
                        <th>aktywne konto</th>
                        <th>Akcja</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.length === 0 ?
                        <tr align="center">
                            <td colSpan="12">Ewidencja jest pusta</td>
                        </tr> :
                        this.state.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td>{user.enabled}</td>
                                <td>
                                    <ButtonGroup>
                                    <Link to={"editUser/" + user.id}
                                              className="btn btn-sm btn-outline-primary"><FontAwesomeIcon
                                            icon={faEdit}/></Link>
                                    </ButtonGroup>
                                </td>

                            </tr>

                        ))
                    }
                    </tbody>
                </Table>
                </Card>
            </div>


        );
    }
}

export default AdminPanel;