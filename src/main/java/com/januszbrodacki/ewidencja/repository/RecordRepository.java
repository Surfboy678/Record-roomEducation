package com.januszbrodacki.ewidencja.repository;

import com.januszbrodacki.ewidencja.model.Record;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecordRepository extends MongoRepository<Record, String> {

    void deleteById(String is);
}
