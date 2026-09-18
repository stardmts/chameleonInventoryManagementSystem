package com.starlight.chameleonims.CONTROLLERS;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    private final TransactionRepository transactionRepository;

    public TransactionController(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @GetMapping
    public List<Transaction> getAllTransactions() 
    {
        return transactionRepository.findAllByOrderByTransactionDateDesc();
    }

    @PostMapping("/AddTransaction")
    public Transaction createTransaction(@RequestBody Transaction transaction) {
           return transactionRepository.save(transaction);
    }

    @GetMapping("/Search/{searchString}")
    public List<Transaction> getTransactionsBySearch(@PathVariable String searchString) 
    {
        return transactionRepository.findAll().stream().filter(transaction -> (transaction.getTransactionBody().contains(searchString))).toList();
    }
    
}