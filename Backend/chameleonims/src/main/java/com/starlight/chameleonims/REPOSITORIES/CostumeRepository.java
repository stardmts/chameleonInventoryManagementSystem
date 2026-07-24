package com.starlight.chameleonims.REPOSITORIES;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Costume;

public interface CostumeRepository extends JpaRepository <Costume, Long> {
    
}
