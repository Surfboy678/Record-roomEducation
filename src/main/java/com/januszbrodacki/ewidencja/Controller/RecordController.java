package com.januszbrodacki.ewidencja.Controller;

import com.januszbrodacki.ewidencja.model.Record;
import com.januszbrodacki.ewidencja.service.RecordServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/record")
@RestController
@CrossOrigin
public class RecordController {

  private static final Logger logger = LoggerFactory.getLogger("RECORDS");

  private RecordServiceImpl recordServiceImpl;

  @Autowired
  public RecordController(RecordServiceImpl recordServiceImpl) {
    this.recordServiceImpl = recordServiceImpl;
  }

  @PostMapping("/add")
  public @ResponseBody ResponseEntity<Record> saveRecord(@RequestBody Record record) {
    logger.info("Received {}", record.getId());
    return ResponseEntity.ok(recordServiceImpl.addNewRecord(record));
  }

  @GetMapping("/list")
  public @ResponseBody ResponseEntity<List<Record>> getAllRecords() {
    return ResponseEntity.ok(recordServiceImpl.findAllRecords());
  }

  @GetMapping("/{id}")
  public @ResponseBody ResponseEntity<Optional<Record>> getRecordById(@PathVariable Integer id) {
    return ResponseEntity.ok(recordServiceImpl.findRecordById(id));
  }

  @PutMapping("/update")
  public @ResponseBody ResponseEntity<Record> updateRecord(@Validated @RequestBody Record record) {
    return ResponseEntity.ok(recordServiceImpl.addNewRecord(record));
  }

  @PutMapping("/update/{id}")
  public void newUpdateRecord(@PathVariable Integer id, @RequestBody Record record){
    recordServiceImpl.updateRecord(id, record);
  }

  @DeleteMapping("/delete/{id}")
  public void deleteRecord(@PathVariable Integer id) {
    if (recordServiceImpl.findRecordById(id) != null) {
      recordServiceImpl.deleteByIdRecord(id);
    }
  }
}
