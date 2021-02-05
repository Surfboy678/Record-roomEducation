package com.januszbrodacki.ewidencja.Controller;

import com.januszbrodacki.ewidencja.dto.UserDto;
import com.januszbrodacki.ewidencja.model.User;
import com.januszbrodacki.ewidencja.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin
@RestController
public class UserController {

  private UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/login")
  public ResponseEntity<User> loginUser(@RequestBody User user) {
    return ResponseEntity.ok(user);
  }

  @PostMapping("/register")
  public void registerUser(@RequestBody User user, HttpServletRequest request) {
    userService.addNewUser(user, request);
  }

  @RequestMapping("/verify-token")
  public String confirmationByEmail(@RequestParam String token) {
    userService.verifyToken(token);
    return "Gratulacje.Twój adres mailowy został potwierdzony";
  }

  @GetMapping("/allUsers")
  public List<UserDto> getAllUsers() {
    return userService.getUsersListWithRole();
  }

  @GetMapping("/{id}")
  public @ResponseBody ResponseEntity getUserById(@PathVariable Integer id){
    return ResponseEntity.ok(userService.findUserById(id));
  }
}
