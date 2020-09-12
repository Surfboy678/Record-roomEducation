import React, {Component} from 'react';
import { Card, Table } from 'react-bootstrap';

export default class RecordList extends Component{
    render(){
        return(
            <Card className= {"border border-dark bg-dark text-white"}>
                <Card.Header >Lista sal</Card.Header>
                <Card.Body>
                    <Table  striped bordered hover variant="dark" size="xl">
                    <thead>
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
                            <th>Wymagane uprawnienia do rezerwacji</th>
                            <th>Kod referencyjny</th>
                            <th>Kod karty</th>
                            <th>Jednostka odpowiedzialna</th>
                            <th>Uwagi dodatkowe</th>
                            <th>Akcja</th>
                            </tr>
                        </thead>
                        <tbody>
                           <tr align="center">
                               <td colSpan="10">Ewidencja jest pusta</td>
                           </tr>
                        </tbody>
                    </Table>
                </Card.Body>

            </Card>
        );
    }
}
 