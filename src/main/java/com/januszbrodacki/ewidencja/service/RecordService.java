package com.januszbrodacki.ewidencja.service;

import com.januszbrodacki.ewidencja.model.Record;

import java.util.List;
import java.util.Optional;

public interface RecordService {

  Record addNewRecord(Record record);

  List<Record> findAllRecords();

  Optional<Record> findRecordById(Integer id);

  void deleteByIdRecord(Integer id);
}
