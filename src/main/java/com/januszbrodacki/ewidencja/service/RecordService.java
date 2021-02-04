package com.januszbrodacki.ewidencja.service;

import com.januszbrodacki.ewidencja.model.Record;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface RecordService {

  Record addNewRecord(Record record);

  List<Record> findAllRecords();

  Optional<Record> findRecordById(Integer id);

  void deleteByIdRecord(Integer id);
}
