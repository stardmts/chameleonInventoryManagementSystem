package com.starlight.chameleonims.REPOSITORIES;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Transaction;

public interface TransactionRepository extends JpaRepository <Transaction, String> {
    
}
