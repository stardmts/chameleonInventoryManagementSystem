package com.starlight.chameleonims.REPOSITORIES;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Prop;

public interface PropRepository extends JpaRepository <Prop, String>{
    
    List<Prop> findAllByOrderByPropIdAsc();
}
