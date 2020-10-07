package com.januszbrodacki.ewidencja.Controller;

import com.januszbrodacki.ewidencja.model.Record;
import com.januszbrodacki.ewidencja.service.RecordServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/record")
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RecordController {

    private RecordServiceImpl recordServiceImpl;

    @Autowired
    public RecordController(RecordServiceImpl recordServiceImpl) {
        this.recordServiceImpl = recordServiceImpl;
    }

    @PostMapping("/add")
    public Record saveRecord(@RequestBody Record record){
        return recordServiceImpl.addNewRecord(record);
    }

    @GetMapping("/list")
    public List<Record> getAllRecords(){
       return recordServiceImpl.findAllRecords();
    }

    @GetMapping("/{id}")
    public Optional<Record> getRecordById(@PathVariable String id){
        return recordServiceImpl.findRecordById(id);
    }

    @PutMapping("/update")
    public @ResponseBody
    ResponseEntity<Record> updateRecord(@Validated @RequestBody Record record){
        return ResponseEntity.ok(recordServiceImpl.addNewRecord(record));
    }
    @DeleteMapping("/delete/{id}")
    public void deleteRecord(@PathVariable String id){
        if(recordServiceImpl.findRecordById(id) != null){
            recordServiceImpl.deleteByIdRecord(id);
        }

    }

}
