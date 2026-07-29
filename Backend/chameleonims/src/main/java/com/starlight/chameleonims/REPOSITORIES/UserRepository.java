package com.starlight.chameleonims.REPOSITORIES;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.User;

public interface UserRepository extends JpaRepository <User, String> {
    
}
