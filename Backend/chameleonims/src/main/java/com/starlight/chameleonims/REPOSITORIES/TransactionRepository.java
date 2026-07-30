package com.starlight.chameleonims.REPOSITORIES;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.starlight.chameleonims.Transaction;

public interface TransactionRepository extends JpaRepository <Transaction, String> {

    List<Transaction> findAllAsc();
    
}
