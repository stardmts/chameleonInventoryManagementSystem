package com.starlight.chameleonims.CONTROLLERS;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starlight.chameleonims.DTOS.SignInDTO;
import com.starlight.chameleonims.SECURITY.JwtUtils;
import com.starlight.chameleonims.SERVICES.AuthService;



@RestController
@RequestMapping("/api/Auth")
public class AuthController {
    
    private final AuthService authService;

    private final JwtUtils jwtUtils;

    public AuthController(AuthService authService, JwtUtils jwtUtils) {
        this.authService = authService;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/SignIn")
    public ResponseEntity<?> signIn(@RequestBody SignInDTO signInDTO) {

        try {

            Authentication authentication = authService.authenticate(signInDTO.getUserEmail(), signInDTO.getUserPassword());

            SecurityContextHolder.getContext().setAuthentication(authentication);

            String jwtToken = jwtUtils.generateJwtToken(authentication);

            ResponseCookie jwtCookie = ResponseCookie.from("AUTH_TOKEN", jwtToken)
                .httpOnly(true)
                .secure(false)
                .path("/")
                .maxAge(86400)
                .sameSite("Lax")
                .build();

            return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString()).body("Authentication successful");

        } catch (Exception e) {
            return ResponseEntity.status(401).body("Authentication failed: " + e.getMessage());
        }

    }

}
