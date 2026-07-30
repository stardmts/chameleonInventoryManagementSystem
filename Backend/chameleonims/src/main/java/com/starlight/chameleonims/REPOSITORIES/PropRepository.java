package com.starlight.chameleonims.REPOSITORIES;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.starlight.chameleonims.Prop;

public interface PropRepository extends JpaRepository <Prop, String>{
    
    List<Prop> findAllAsc();
}
