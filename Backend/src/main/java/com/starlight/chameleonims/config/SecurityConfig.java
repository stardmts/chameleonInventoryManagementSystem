package com.starlight.chameleonims.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // 1. Disable CSRF so your React API requests don't get blocked
            .csrf(csrf -> csrf.disable()) 
            
            // 2. Disable default CORS rules so we can handle it cleanly later
            .cors(cors -> cors.disable()) 
            
            // 3. 🔓 TURN OFF THE LOGIN SCREEN (Permit all endpoints for now)
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll() 
            );

        return http.build();
    }

}
