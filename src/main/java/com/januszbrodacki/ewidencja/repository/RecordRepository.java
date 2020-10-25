package com.januszbrodacki.ewidencja.repository;

import com.januszbrodacki.ewidencja.model.Record;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface RecordRepository extends JpaRepository<Record, Integer> {

    void deleteById(Integer id);
}
