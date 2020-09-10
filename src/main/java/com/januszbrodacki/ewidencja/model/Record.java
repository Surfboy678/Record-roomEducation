package com.januszbrodacki.ewidencja.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Record {
    @Id
    String id;
    String nameBuilding;
    String roomNumber;
    String personResponsible;
    Integer numberOfSeat;
    String typeRoom;
    Integer numberOfComputer;
    Integer numberOfBoard;
    Integer numberOfMultimediaProjectors;
    Integer numberOfTraditionalProjectors;
    String authorizeToBook;
    String referenceCode;
    String cardCode;
    String responseUnit;
    String comments;

    public Record(String id, String nameBuilding, String roomNumber, String personResponsible, Integer numberOfSeat, String typeRoom, Integer numberOfComputer, Integer numberOfBoard, Integer numberOfMultimediaProjectors, Integer numberOfTraditionalProjectors, String authorizeToBook, String referenceCode, String cardCode, String responseUnit, String comments) {
        this.id = id;
        this.nameBuilding = nameBuilding;
        this.roomNumber = roomNumber;
        this.personResponsible = personResponsible;
        this.numberOfSeat = numberOfSeat;
        this.typeRoom = typeRoom;
        this.numberOfComputer = numberOfComputer;
        this.numberOfBoard = numberOfBoard;
        this.numberOfMultimediaProjectors = numberOfMultimediaProjectors;
        this.numberOfTraditionalProjectors = numberOfTraditionalProjectors;
        this.authorizeToBook = authorizeToBook;
        this.referenceCode = referenceCode;
        this.cardCode = cardCode;
        this.responseUnit = responseUnit;
        this.comments = comments;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNameBuilding() {
        return nameBuilding;
    }

    public void setNameBuilding(String nameBuilding) {
        this.nameBuilding = nameBuilding;
    }

    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    public String getPersonResponsible() {
        return personResponsible;
    }

    public void setPersonResponsible(String personResponsible) {
        this.personResponsible = personResponsible;
    }

    public Integer getNumberOfSeat() {
        return numberOfSeat;
    }

    public void setNumberOfSeat(Integer numberOfSeat) {
        this.numberOfSeat = numberOfSeat;
    }

    public String getTypeRoom() {
        return typeRoom;
    }

    public void setTypeRoom(String typeRoom) {
        this.typeRoom = typeRoom;
    }

    public Integer getNumberOfComputer() {
        return numberOfComputer;
    }

    public void setNumberOfComputer(Integer numberOfComputer) {
        this.numberOfComputer = numberOfComputer;
    }

    public Integer getNumberOfBoard() {
        return numberOfBoard;
    }

    public void setNumberOfBoard(Integer numberOfBoard) {
        this.numberOfBoard = numberOfBoard;
    }

    public Integer getNumberOfMultimediaProjectors() {
        return numberOfMultimediaProjectors;
    }

    public void setNumberOfMultimediaProjectors(Integer numberOfMultimediaProjectors) {
        this.numberOfMultimediaProjectors = numberOfMultimediaProjectors;
    }

    public Integer getNumberOfTraditionalProjectors() {
        return numberOfTraditionalProjectors;
    }

    public void setNumberOfTraditionalProjectors(Integer numberOfTraditionalProjectors) {
        this.numberOfTraditionalProjectors = numberOfTraditionalProjectors;
    }

    public String getAuthorizeToBook() {
        return authorizeToBook;
    }

    public void setAuthorizeToBook(String authorizeToBook) {
        this.authorizeToBook = authorizeToBook;
    }

    public String getReferenceCode() {
        return referenceCode;
    }

    public void setReferenceCode(String referenceCode) {
        this.referenceCode = referenceCode;
    }

    public String getCardCode() {
        return cardCode;
    }

    public void setCardCode(String cardCode) {
        this.cardCode = cardCode;
    }

    public String getResponseUnit() {
        return responseUnit;
    }

    public void setResponseUnit(String responseUnit) {
        this.responseUnit = responseUnit;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
