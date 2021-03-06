package com.januszbrodacki.ewidencja.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class webSecurityConfig extends WebSecurityConfigurerAdapter {

  private RestAuthenticationFailureHandler authenticationFailureHandler;

  private RestAuthenticationSuccessHandler authenticationSuccessHandler;

  private UserDetailsService userDetailsService;

  @Bean
  public PasswordEncoder getPasswordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Autowired
  public webSecurityConfig(
      RestAuthenticationFailureHandler authenticationFailureHandler,
      RestAuthenticationSuccessHandler authenticationSuccessHandler,
      UserDetailsService userDetailsService) {
    this.authenticationFailureHandler = authenticationFailureHandler;
    this.authenticationSuccessHandler = authenticationSuccessHandler;
    this.userDetailsService = userDetailsService;
  }

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {

    auth.userDetailsService(userDetailsService);
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.cors()
        .and()
        .csrf()
        .disable()
        .authorizeRequests()
        .antMatchers("/record/list")
        .permitAll()
        .antMatchers("/record/add")
        .permitAll()
        .antMatchers("/allUsers")
        .permitAll()
        .antMatchers("/register")
        .permitAll()
        .antMatchers("/verify-token")
        .permitAll()
        .antMatchers("/record/{id}")
        .permitAll()
        .antMatchers("/record/update/{id}")
        .permitAll()
        .antMatchers("/{id}")
        .permitAll()
        .antMatchers("/update/{id}")
        .permitAll()
        .anyRequest()
        .authenticated()
        .and()
        .addFilterBefore(authenticationFilter(), UsernamePasswordAuthenticationFilter.class)
        .exceptionHandling()
        .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED));
  }

  @Bean
  public JsonObjectAuthenticationFilter authenticationFilter() throws Exception {
    JsonObjectAuthenticationFilter filter = new JsonObjectAuthenticationFilter();
    filter.setAuthenticationSuccessHandler(authenticationSuccessHandler);
    filter.setAuthenticationFailureHandler(authenticationFailureHandler);
    filter.setAuthenticationManager(super.authenticationManager());
    return filter;
  }
}
