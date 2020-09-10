package com.januszbrodacki.ewidencja.Controller;

import com.januszbrodacki.ewidencja.model.Record;
import com.januszbrodacki.ewidencja.service.RecordServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/record")
@RestController
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
}
