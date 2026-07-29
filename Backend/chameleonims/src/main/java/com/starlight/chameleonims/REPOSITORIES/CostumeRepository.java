package com.starlight.chameleonims.REPOSITORIES;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Costume;

public interface CostumeRepository extends JpaRepository <Costume, String> {

    List<Costume> findAllAsc();

    List<Costume> findByGroupId(String groupId);
    
}
