package com.januszbrodacki.ewidencja.service;

import com.januszbrodacki.ewidencja.model.Record;
import com.januszbrodacki.ewidencja.repository.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecordServiceImpl implements RecordService {

  private RecordRepository recordRepository;

  @Autowired
  public RecordServiceImpl(RecordRepository recordRepository) {
    this.recordRepository = recordRepository;
  }

  public Record addNewRecord(Record record) {
    return recordRepository.save(record);
  }

  @Override
  public List<Record> findAllRecords() {
    return recordRepository.findAll();
  }

  public Optional<Record> findRecordById(Integer id) {
    return recordRepository.findById(id);
  }

  public void deleteByIdRecord(Integer id) {
    recordRepository.deleteById(id);
  }

  public void updateRecord(Integer id, Record record){
    Optional<Record> recordDate = recordRepository.findById(id);
    if (recordDate.isPresent()){
      Record newRecord= recordDate.get();
      newRecord.setNameBuilding(record.getNameBuilding());
      newRecord.setRoomNumber(record.getRoomNumber());
      newRecord.setPersonResponsible(record.getPersonResponsible());
      newRecord.setNumberOfSeat(record.getNumberOfSeat());
      newRecord.setTypeRoom(record.getTypeRoom());
      newRecord.setNumberOfComputer(record.getNumberOfComputer());
      newRecord.setNumberOfBoard(record.getNumberOfBoard());
      newRecord.setNumberOfMultimediaProjectors(record.getNumberOfMultimediaProjectors());
      newRecord.setNumberOfTraditionalProjectors(record.getNumberOfTraditionalProjectors());
      newRecord.setAuthorizeToBook(record.getAuthorizeToBook());
      newRecord.setReferenceCode(record.getReferenceCode());
      newRecord.setCardCode(record.getCardCode());
      newRecord.setResponseUnit(record.getResponseUnit());
      newRecord.setComments(record.getComments());
      recordRepository.save(newRecord);
    }
  }
}
