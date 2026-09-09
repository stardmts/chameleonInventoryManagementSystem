package com.starlight.chameleonims.CONTROLLERS;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starlight.chameleonims.REPOSITORIES.TransactionRepository;
import com.starlight.chameleonims.Transaction;

@RestController
@RequestMapping("/api/Transactions")
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionController {

    @Autowired
    private TransactionRepository transactionRepository;

    @GetMapping
    public List<Transaction> getAllTransactions() 
    {
        return transactionRepository.findAllByOrderByTransactionIdAsc();
    }

    @PostMapping("/AddTransaction")
    public Transaction createTransaction(@RequestBody Transaction transaction) {
           return transactionRepository.save(transaction);
    }
    
}