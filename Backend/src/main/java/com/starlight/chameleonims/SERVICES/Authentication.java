package com.starlight.chameleonims.SERVICES;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class Authentication {
    
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public String hashPassword(String password) {

        return encoder.encode(password);
        
    }

    public boolean authenticatePassword(String enteredPassword, String hashedPassword) {

        return encoder.matches(hashedPassword, enteredPassword);

    }

}
