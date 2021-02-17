package com.januszbrodacki.ewidencja.mapper;

import com.januszbrodacki.ewidencja.dto.UserDto;
import com.januszbrodacki.ewidencja.model.User;
import org.modelmapper.ModelMapper;
import org.modelmapper.PropertyMap;
import org.springframework.stereotype.Component;

@Component
public class Mapper {

  public ModelMapper UserToUserDto() {
    ModelMapper modelMapper = new ModelMapper();
    modelMapper.addMappings(
        new PropertyMap<User, UserDto>() {
          @Override
          protected void configure() {
            map().setId(source.getId());
            map().setUsername(source.getUsername());
            map().setRole(source.getRole());
          }
        });
    return modelMapper;
  }

  public ModelMapper UserDtoToUser(){
      ModelMapper modelMapper = new ModelMapper();
      modelMapper.addMappings(
      new PropertyMap<UserDto, User>() {
          @Override
          protected void configure() {
              map().setId(source.getId());
              map().setUsername(source.getUsername());
              map().setRole(source.getRole());
          }
      });
        return modelMapper;
  }
}
