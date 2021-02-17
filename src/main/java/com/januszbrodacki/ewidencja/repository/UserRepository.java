package com.januszbrodacki.ewidencja.repository;

import com.januszbrodacki.ewidencja.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

  User findByUsername(String username);
}
