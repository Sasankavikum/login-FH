package com.example.demo.login;

import org.springframework.http.ResponseEntity;

public interface LoginService {

    ResponseEntity<String> loginMethod(Login login);

}