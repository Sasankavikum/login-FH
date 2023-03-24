package com.example.demo.login;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.login.LoginService;

@Service
public class LoginServiceImplementation implements LoginService {

    @Override
    public ResponseEntity<String> loginMethod(Login login) {
        String email = "sasanka@gmail.com";
        String password = "Sasanka";
        if (login.getEmail().equals(email) && login.getPassword().equals(password)) {
            return ResponseEntity.ok().body("Login Successful");
        } else {
            return ResponseEntity.badRequest().body("Login Successful");
        }
    }
}