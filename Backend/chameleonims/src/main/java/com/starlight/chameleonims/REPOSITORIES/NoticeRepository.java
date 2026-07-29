package com.starlight.chameleonims.REPOSITORIES;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Notice;

public interface NoticeRepository extends JpaRepository <Notice, String>{
    
}
