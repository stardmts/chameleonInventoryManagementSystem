package com.starlight.chameleonims.SERVICES;

import java.util.Collections;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.starlight.chameleonims.REPOSITORIES.UserRepository;
import com.starlight.chameleonims.User;


@Service
public class AuthService {

    private final UserRepository userRepository;
    
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Authentication authenticate(String userEmail, String enteredPassword) {

        User user = userRepository.findByUserEmail(userEmail).orElseThrow(() -> new BadCredentialsException("Invalid email or password"));

        if (!encoder.matches(enteredPassword, user.getPasswordHash())) {
            throw new BadCredentialsException("Invalid email or password");
        }

        SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + user.getUserRole().toString());

        return new UsernamePasswordAuthenticationToken(
            user.getUserEmail(),
            null,
            Collections.singletonList(authority)
        );
    
    }

    public String hashPassword(String password) {

        return encoder.encode(password);
        
    }

}
