package com.januszbrodacki.ewidencja.service;

import com.januszbrodacki.ewidencja.dto.UserDto;
import com.januszbrodacki.ewidencja.mapper.Mapper;
import com.januszbrodacki.ewidencja.model.User;
import com.januszbrodacki.ewidencja.model.VerificationToken;
import com.januszbrodacki.ewidencja.repository.UserRepository;
import com.januszbrodacki.ewidencja.repository.VerificationTokenRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class UserService {

  private static String ROLE_USER = "ROLE_USER";

  private static String ROLE_ADMIN = "ROLE_ADMIN";

  private PasswordEncoder passwordEncoder;

  private UserRepository userRepository;

  private VerificationTokenRepository verificationTokenRepository;

  private MailSenderService mailSenderService;

  private Mapper mapper;

  public UserService(
      PasswordEncoder passwordEncoder,
      UserRepository userRepository,
      VerificationTokenRepository verificationTokenRepository,
      MailSenderService mailSenderService,
      Mapper mapper) {
    this.passwordEncoder = passwordEncoder;
    this.userRepository = userRepository;
    this.verificationTokenRepository = verificationTokenRepository;
    this.mailSenderService = mailSenderService;
    this.mapper = mapper;
  }

  public void addNewUser(User user, HttpServletRequest request) {
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    user.setRole(ROLE_USER);
    userRepository.save(user);

    String token = UUID.randomUUID().toString();

    VerificationToken verificationToken = new VerificationToken(user, token);
    verificationTokenRepository.save(verificationToken);
    String getRoleByVerificationToken =
        verificationTokenRepository.findByValue(token).getUser().getRole();

    String url =
        "http://"
            + request.getServerName()
            + ":"
            + request.getServerPort()
            + request.getContextPath()
            + "/verify-token?token="
            + token;

    try {
      if (getRoleByVerificationToken.equals(ROLE_USER)) {
        mailSenderService.sendMail(user.getUsername(), "Verification Token", url, false);
      }
    } catch (MessagingException e) {
      e.printStackTrace();
    }
  }

  public void verifyToken(String token) {
    User user = verificationTokenRepository.findByValue(token).getUser();
    user.setEnabled(true);
    userRepository.save(user);
    Integer idVerificationToken = verificationTokenRepository.findByValue(token).getId();
    verificationTokenRepository.deleteById(idVerificationToken);
  }

  public List<UserDto> getUsersListWithRole() {
    List<UserDto> userDto =
        userRepository.findAll().stream()
            .map(user -> mapper.getModelMapper().map(user, UserDto.class))
            .collect(Collectors.toList());
    return userDto;
  }
}
