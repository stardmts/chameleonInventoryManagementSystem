package com.starlight.chameleonims.REPOSITORIES;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Tool;

public interface ToolRepository extends JpaRepository <Tool, String>{

    List<Tool> findAllByOrderByToolIdAsc();
    
}
