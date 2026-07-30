package com.starlight.chameleonims.REPOSITORIES;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Group;

public interface GroupRepository extends JpaRepository <Group, String>{

    List<Group> findAllByOrderByGroupIdAsc();
    
}
