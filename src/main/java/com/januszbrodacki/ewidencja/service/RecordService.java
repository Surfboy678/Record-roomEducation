package com.januszbrodacki.ewidencja.service;

import com.januszbrodacki.ewidencja.model.Record;

import java.util.List;
import java.util.Optional;

public interface RecordService {

    public Record addNewRecord(Record record);

    public List <Record> findAllRecords();

    public Optional<Record> findRecordById(String id);

    void deleteByIdRecord(String id);


}
