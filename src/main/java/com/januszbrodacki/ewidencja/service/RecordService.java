package com.januszbrodacki.ewidencja.service;

import com.januszbrodacki.ewidencja.model.Record;

import java.util.List;

public interface RecordService {

    public Record addNewRecord(Record record);

    public List <Record> findAllRecords();
}
