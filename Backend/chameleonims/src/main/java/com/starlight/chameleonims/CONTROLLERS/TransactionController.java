package com.starlight.chameleonims.CONTROLLERS;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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

    private TransactionRepository transactionRepository;

    @GetMapping
    public List<Transaction> getAllTransactions() 
    {
        return transactionRepository.findAllAsc();
    }
    
    @DeleteMapping("/Delete/{transactionId}")
    public ResponseEntity<?> deleteTransactionById(@PathVariable String transactionId)
    {
        if (!transactionRepository.existsById(transactionId)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Transaction not found");
        }

        transactionRepository.deleteById(transactionId);

        return ResponseEntity.ok("Transaction succesfully deleted");
    }

    @PostMapping("/AddTransaction")
    public Transaction createTransaction(@RequestBody Transaction transaction) {
           return transactionRepository.save(transaction);
    }
    
}