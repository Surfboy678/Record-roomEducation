import React, {Component} from 'react';
import {Card, Form, Button, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faSave, faUndo } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import MyToast from './MyToast';

export default class Record  extends Component{

   constructor(props){
       super(props);
       this.state = this.initialState;
       this.state.show = false;
       this.recordChange = this.recordChange.bind(this);
       this.submitRecord = this.submitRecord.bind(this);
   }

   initialState = {
    nameBuilding:'',roomNumber:'' ,personResponsible:'', numberOfSeat: '', typeRoom:'',
    numberOfComputer: '', numberOfBoard: '', numberOfMultimediaProjectors: '', formGridNumberOfTraditionalProjectors: '',
      authorizeToBook: '', referenceCode: '', cardCode: '', responseUnit: '', comments: ''

   }

   resetRecord = () =>{
       this.setState(() => this.initialState);
   }

   submitRecord = event =>{
       event.preventDefault();

       const record = {
           nameBuilding: this.state.nameBuilding,
           roomNumber: this.state.roomNumber,
           personResponsible: this.state.personResponsible,
           numberOfSeat: this.state.numberOfSeat,
           typeRoom: this.state.typeRoom,
           numberOfComputer: this.state.numberOfComputer,
           numberOfBoard: this.state.numberOfBoard,
           numberOfMultimediaProjectors: this.state.numberOfMultimediaProjectors,
           numberOfTraditionalProjectors: this.state.numberOfTraditionalProjectors,
           authorizeToBook: this.state.authorizeToBook,
           referenceCode: this.state.referenceCode,
           cardCode: this.state.cardCode,
           responseUnit: this.state.responseUnit,
           comments: this.state.comments
          };
        

          axios.post("http://localhost:8080/record/add", record)
                .then(response => {
                    if(response.data != null){
                       this.setState({"show":true});
                       setTimeout(() => this.setState({"show":false}), 3000)                      
                    }else{
                        this.setState({"show":false});
                    }
                });
                this.setState(this.initialState);
            }
   

   recordChange = event =>{
       this.setState({
           [event.target.name]:event.target.value
       });
   }

    render() {
        const {nameBuilding, roomNumber, personResponsible, numberOfSeat, typeRoom,
            numberOfComputer, numberOfBoard, numberOfMultimediaProjectors,
            numberOfTraditionalProjectors, authorizeToBook, referenceCode, 
            cardCode, responseUnit, comments} = this.state;
        return(
            <div>
                <div style={{"display":this.state.show ? "block": "none"}}>
                    <MyToast children = {{show:this.state.show, message:"Sala została zapisana."}}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header> <FontAwesomeIcon icon={faPlusSquare}/> Dodaj salę</Card.Header>
                <Form onReset={this.resetRecord} onSubmit={this.submitRecord} id = "recordFormId">
                <Card.Body>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridNameBuilding">
                        <Form.Label>Budynek</Form.Label>
                        <Form.Control  required autoComplete="off"
                        type="text" name="nameBuilding"
                        value={nameBuilding} onChange={this.recordChange}
                        className = {"bg-dark text-white"}
                        placeholder="budynek"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridRoomNumber">
                        <Form.Label>Nr.Pomieszczenia</Form.Label>
                        <Form.Control required autoComplete="off"
                        type="number" name="roomNumber"
                        value={roomNumber} onChange={this.recordChange}
                        className = {"bg-dark text-white"}
                        placeholder="nr.Pomieszczenia"/>
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridPersonResponsible">
                        <Form.Label>osoba odpowiedzialna</Form.Label>
                        <Form.Control autoComplete="off"
                        type="text" name="personResponsible"
                        value={personResponsible}  onChange={this.recordChange}                      
                        className = {"bg-dark text-white"}
                        placeholder="osoba odpowiedzialna" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNumberOfSeta">
                        <Form.Label>liczba miejsc</Form.Label>
                        <Form.Control autoComplete="off"
                        type="number" name="numberOfSeat"
                        value={numberOfSeat} onChange={this.recordChange}                       
                        className = {"bg-dark text-white"}
                        placeholder="liczba miejsc"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridTypeRoom">
                        <Form.Label>Rodzaj pomieszczenia</Form.Label>
                        <Form.Control autoComplete="off"
                        type="text" name="typeRoom"
                        value={typeRoom} onChange={this.recordChange}                      
                        className = {"bg-dark text-white"}
                        placeholder="Rodzaj pomieszczenia" />
                    </Form.Group>
                        </Form.Row>
                        <Form.Row>
                    <Form.Group as={Col} controlId="formGridNumberOfComputer">
                        <Form.Label>liczba komputerów</Form.Label>
                        <Form.Control autoComplete="off"
                        type="number" name="numberOfComputer"
                        value={numberOfComputer} onChange={this.recordChange}
                        className = {"bg-dark text-white"}
                        placeholder="liczba komputerów" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNumberOfBoard">
                        <Form.Label>liczba tablic</Form.Label>
                        <Form.Control autoComplete="off"
                        type="number" name="numberOfBoard"
                        value={numberOfBoard} onChange={this.recordChange}
                        className = {"bg-dark text-white"}
                        placeholder="liczba tablic"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridNumberOfMultimediaProjectors">
                        <Form.Label>projektory multimedialne</Form.Label>
                        <Form.Control autoComplete="off"
                        type="number" name="numberOfMultimediaProjectors"
                        value={numberOfMultimediaProjectors} onChange={this.recordChange}
                        className = {"bg-dark text-white"}
                        placeholder="projektory multimedialne" />
                    </Form.Group>
                        </Form.Row>
                        <Form.Row>
                    <Form.Group as={Col} controlId="formGridNumberOfTraditionalProjectors">
                        <Form.Label>Projektory tradycyjne</Form.Label>
                        <Form.Control autoComplete="off"
                        type="number" name="numberOfTraditionalProjectors"
                        value={numberOfTraditionalProjectors} onChange={this.recordChange}
                        className = {"bg-dark text-white"}
                        placeholder="Projektory tradycyjne" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAuthorizeToBook">
                        <Form.Label>Wymagane uprawnienei do rezerwacji</Form.Label>
                        <Form.Control autoComplete="off"
                        type="text" name="authorizeToBook"
                        value={authorizeToBook} onChange={this.recordChange}
                        className = {"bg-dark text-white"}
                        placeholder="Wymagane uprawnienei do rezerwacji"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridReferenceCode">
                        <Form.Label>kod referencyjny</Form.Label>
                        <Form.Control autoComplete="off"
                        type="text" name="referenceCode"
                        value={referenceCode} onChange={this.recordChange}
                        className = {"bg-dark text-white"}
                        placeholder="kod referencyjny"/>
                    </Form.Group>
                        </Form.Row>
                        <Form.Row>
                    <Form.Group as={Col} controlId="formGridCardCode">
                        <Form.Label>kod karty</Form.Label>
                        <Form.Control autoComplete="off"
                        type="text" name="cardCode"
                        value={cardCode} onChange={this.recordChange}
                        className = {"bg-dark text-white"}
                        placeholder="kod karty" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridResponseUnit">
                        <Form.Label>jednostka odpowiedzialna</Form.Label>
                        <Form.Control autoComplete="off"
                        type="text" name="responseUnit"
                        value={responseUnit} onChange={this.recordChange}
                        className = {"bg-dark text-white"}
                        placeholder="jednostka odpowiedzialna"/>
                    </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridComments">
                        <Form.Label>uwagi ogólne</Form.Label>
                        <Form.Control autoComplete="off"
                        type="text" name="comments"
                        value={comments} onChange={this.recordChange}
                        className = {"bg-dark text-white"}
                        placeholder="uwagi ogólne" />
                    </Form.Group>
                        </Form.Row>
                </Card.Body>
                <Card.Footer style={{"textAlign":"right"}}>
                <Button size="sm" variant="success" type="submit">
                <FontAwesomeIcon icon={faSave}/> Zapisz
                    </Button>{' '}
                    <Button size="sm" variant="info" type="reset">
                <FontAwesomeIcon icon={faUndo}/> Wyczyść
                    </Button>
                </Card.Footer>
                </Form>
                      
            </Card>
            </div>
          
        );
    }
}
