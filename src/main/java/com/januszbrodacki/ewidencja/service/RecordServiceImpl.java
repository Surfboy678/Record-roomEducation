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

    public Record addNewRecord(Record record){
        return recordRepository.save(record);
    }

    @Override
    public List<Record> findAllRecords() {
        return recordRepository.findAll();
    }

    public Optional<Record> findRecordById(String id){
        return recordRepository.findById(id);
    }




}
