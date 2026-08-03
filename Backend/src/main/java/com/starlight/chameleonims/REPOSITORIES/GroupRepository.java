package com.starlight.chameleonims.REPOSITORIES;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.ENUMS.CostumeCategory;
import com.starlight.chameleonims.ENUMS.CostumeColour;
import com.starlight.chameleonims.ENUMS.CostumeSize;
import com.starlight.chameleonims.Group;

public interface GroupRepository extends JpaRepository <Group, String>{

    List<Group> findAllByOrderByGroupIdAsc();

    List<Group> findAllGroupsBySize(CostumeSize size);

    List<Group> findAllGroupsByColour(CostumeColour colour);

    List<Group> findAllGroupsByCategory(CostumeCategory category); 

    List<Group> findByNameContainingIgnoreCase(String searchString);
    
}
