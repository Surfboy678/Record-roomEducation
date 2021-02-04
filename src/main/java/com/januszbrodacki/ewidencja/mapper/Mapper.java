package com.januszbrodacki.ewidencja.mapper;

import com.januszbrodacki.ewidencja.dto.UserDto;
import com.januszbrodacki.ewidencja.model.User;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class Mapper {


    public ModelMapper getModelMapper(){
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.addMappings(new PropertyMap<User, UserDto>() {
            @Override
            protected void configure() {
                map().setUsername(source.getUsername());
                map().setRole(source.getRole());
            }
        });
        return modelMapper;
    }
}