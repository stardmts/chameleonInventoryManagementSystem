package com.starlight.chameleonims.REPOSITORIES;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.User;

public interface UserRepository extends JpaRepository <User, String> {

    List<User> findAllByOrderByUserRole();

    Optional<User> findByUserEmail(String email);
    
}
