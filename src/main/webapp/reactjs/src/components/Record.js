import React, {Component} from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faPlusSquare } from '@fortawesome/free-solid-svg-icons'

export default class Record  extends Component{

    constructor(props){
        super(props);
        this.state = {nameBuilding:'',roomNumber:'' ,personResponsible:'' ,numberOfSeat:'' ,typeRoom:'' ,
        numberOfComputer:'', numberOfBoard:'', numberOfMultimediaProjectors:'', numberOfTraditionalProjectors:'',
        referenceCode:'', responseUnit:''};
        this.recordChange = this.recordChange.bind(this);
        this.submitRecord = this.submitRecord.bind(this);

    }

    submitRecord(event){
        alert('nameBuilding: ' + this.statate.nameBuilding, 'personResponsible: ' + this.state.personResponsible);
        event.preventDeafoult();
    }

    recordChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render(){
        return(
            <Card rsonsive className={"border border-dark bg-dark text-white"}>
                <Card.Header> <FontAwesomeIcon icon={faPlusSquare}/> Dodaj salę</Card.Header>
                <Form onSubmit={this.submitRecord} id="recordFormId">
                <Card.Body>
                       <Form.Row>
                            <Form.Group as={Col} controlId="formGridnameBuilding">
                                <Form.Label>Budynek</Form.Label>
                                <Form.Control required
                                    type="text" name="nameBuilding"
                                    value={this.state.nameBuilding}
                                    onChange={this.recordChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Budynek"/>                     
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridRoomNumber">
                                <Form.Label>Nr. Pomieszczenia</Form.Label>
                                <Form.Control required
                                    type="number" name="roomNumber"
                                    value={this.state.roomNumber}
                                    onChange={this.recordChange} 
                                    className={"bg-dark text-white"}
                                    placeholder="nr. Pomieszczenia"/>                     
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controllId="formGridPersonReponsible">
                                <Form.Label>Osoba odpowiedzialna</Form.Label>
                                <Form.Control required
                                    type="text" name="personResponsible"
                                    value={this.state.personResponsible}
                                    onChange={this.recordChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Osoba odpowiedzialna" />                     
                            </Form.Group>
                            <Form.Group as={Col} controllId="formGridNumberOfSeat">
                                <Form.Label>Liczba miejsc</Form.Label>
                                <Form.Control required
                                    type="number" name="numberOfSeat"
                                    value={this.state.numberOfSeat}
                                    onChange={this.recordChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Liczba miejsc"/>                     
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controllId="formGridTypeRoom">
                                <Form.Label>Rodzaj pomieszczenia</Form.Label>
                                <Form.Control required
                                    type="text" name="typeRoom"
                                    value={this.state.typeRoom}
                                    onChange={this.recordChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Rodzaj pomieszczenia" />                     
                            </Form.Group>
                            <Form.Group as={Col} controllId="formGridNumberOfComputer">
                                <Form.Label>Liczba komputerów</Form.Label>
                                <Form.Control required
                                    type="tnumber" name="numberOfComputer"
                                    value={this.state.numberOfComputer}
                                    onChange={this.recordChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Liczba komputerów"/>                     
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controllId="formGridNumberOfBoard">
                                <Form.Label>Liczba tablic</Form.Label>
                                <Form.Control required
                                    type="number" name="numberOfBoard"
                                    value={this.state.numberOfBoard}
                                    onChange={this.recordChange}
                                    className={"bg-dark text-white"}
                                    placeholder="Liczba tablic" />                     
                            </Form.Group>
                            <Form.Group as={Col} controllId="formGridNumberOfMultimediaProjectors">
                                <Form.Label>Projektory multimedialne</Form.Label>
                                <Form.Control required
                                    type="number" name="numberOfMultimediaProjectors"
                                    value={this.state.numberOfMultimediaProjectors}
                                    onChange={this.recordChange} 
                                    className={"bg-dark text-white"}
                                    placeholder="Projektory multimedialne"/>                     
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridNumberOfTraditionalProjectors">
                                <Form.Label>Projektory tradycyjne</Form.Label>
                                <Form.Control required
                                    type="numbert" name="numberOfTraditionalProjectors"
                                    value={this.state.numberOfTraditionalProjectors}
                                    onChange={this.recordChange} 
                                    className={"bg-dark text-white"}
                                    placeholder="Projektory tradycyjne" />                     
                            </Form.Group>
                            <Form.Group as={Col} controllId="formGridReferenceCode">
                                <Form.Label>Kod referencyjny</Form.Label>
                                <Form.Control required
                                    type="text" name="referenceCode"
                                    value={this.state.referenceCode}
                                    onChange={this.recordChange} 
                                    className={"bg-dark text-white"}
                                    placeholder="Kod referencyjny"/>                     
                            </Form.Group>
                        </Form.Row>                      
                        <Form.Row>
                              <Form.Group as={Col} controllId="formGridResponseUnit">
                                <Form.Label>Jednostka odpowiedzialna</Form.Label>
                                <Form.Control required
                                    type="text" name="responseUnit"
                                    value={this.state.responseUnit}
                                    onChange={this.recordChange} 
                                    className={"bg-dark text-white"}
                                    placeholder="Jednostka odpowiedzialna"/>                     
                            </Form.Group>
                        </Form.Row>
                        </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" variant="success" type="submit">
                    <FontAwesomeIcon icon={faSave}/>Dodaj
                    </Button>
                    </Card.Footer>
                    </Form>                 
            </Card>
        );
    }
}
