import React, {Component} from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';




export default class RecordList extends Component{

        constructor(props){
            super(props);
            this.state = {
                records : []

            };
        }

        componentDidMount(){
           this.findAllRecords();
        }

        findAllRecords(){
            axios.get("http://localhost:8080/record/list")
            .then(response => response.data)
            .then((data) => {
                this.setState({records: data});
            });

        }

    render(){
        return(
                    <Table float left striped bordered hover variant="dark">                        
                   
                    <tr align="left">
                               <td colSpan="12"><FontAwesomeIcon icon={faList}/> Lista sal</td>
                           </tr>
                            <tr>
                            <th>Budynek</th>
                            <th>Numer pomieszczenia</th>
                            <th>Osoba odpowiedzialna</th>
                            <th>Liczba miejsc</th>
                            <th>Rodzaj pomieszczenia</th>
                            <th>Liczba komputerów</th>
                            <th>Liczba tablic</th>
                            <th>Projektory multimedialne</th>
                            <th>Projektory tradycyjne</th>
                            <th>Kod referencyjny</th>
                            <th>Jednostka odpowiedzialna</th>
                            <th>Akcja</th>
                            </tr>
                        
                        <tbody>
                        {this.state.records.length === 0 ?
                           <tr align="center">
                                <td colSpan="12">Ewidencja jest pusta</td>
                           </tr> :
                           this.state.records.map((record) => (
                               <tr key={record.id}>
                                   <td>{record.nameBuilding}</td>
                                   <td>{record.roomNumber}</td>
                                   <td>{record.personResponsible}</td>
                                   <td>{record.numberOfSeat}</td>
                                   <td>{record.typeRoom}</td>
                                   <td>{record.numberOfComputer}</td>
                                   <td>{record.numberOfBoard}</td>
                                   <td>{record.numberOfMultimediaProjectors}</td>
                                   <td>{record.numberOfTraditionalProjectors}</td>
                                   <td>{record.referenceCode}</td>
                                   <td>{record.responseUnit}</td>
                                   <td>
                                       <ButtonGroup>
                                           <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit}/></Button>{' '}
                                           <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash}/></Button>
                                       </ButtonGroup>
                                   </td>

                               </tr>

                           ))
                            }
                        </tbody>
                    </Table>
                                
        );
    }
}
 