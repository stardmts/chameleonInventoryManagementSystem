package com.starlight.chameleonims.CONTROLLERS;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starlight.chameleonims.REPOSITORIES.TransactionRepository;
import com.starlight.chameleonims.REPOSITORIES.UserRepository;
import com.starlight.chameleonims.Transaction;
import com.starlight.chameleonims.User;



@RestController
@RequestMapping("/api/Users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() 
    {
        return userRepository.findAllByOrderByUserRole();
    }

    @GetMapping("/{UserId}")
    public User getUserById(@PathVariable String userId)
    {
        return userRepository.findById(userId).orElse(null);
    }
    
    @DeleteMapping("/Delete/{userId}")
    public ResponseEntity<?> deleteUserById(@PathVariable String userId)
    {
        if (!userRepository.existsById(userId)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        userRepository.deleteById(userId);

        String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        Random random = new Random();
        StringBuilder sb = new StringBuilder(6);
            
        for (int i = 0; i < 6; i++) {
            int index = random.nextInt(CHARACTERS.length());
            sb.append(CHARACTERS.charAt(index));
        }

        String result = sb.toString();

        LocalDateTime date = LocalDateTime.now();

        Transaction transaction = new Transaction();
        transaction.setTransactionId(result);
        transaction.setTransactionBody("User: " + userId + " has been deleted.");
        transaction.setTransactionDate(date);
        
        transactionRepository.save(transaction);

        return ResponseEntity.ok("User succesfully deleted");
    }

    @PostMapping("/AddUser")
    public User createUser(@RequestBody User user) 
    {
        String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        Random random = new Random();
        StringBuilder sb = new StringBuilder(6);
            
        for (int i = 0; i < 6; i++) {
            int index = random.nextInt(CHARACTERS.length());
            sb.append(CHARACTERS.charAt(index));
        }

        String result = sb.toString();

        LocalDateTime date = LocalDateTime.now();

        Transaction transaction = new Transaction();
        transaction.setTransactionId(result);
        transaction.setTransactionBody("User: " + user.getUserId() + " has been created.");
        transaction.setTransactionDate(date);
        
        transactionRepository.save(transaction);

        return userRepository.save(user);
    }
    
    @PatchMapping("/UpdatePassword/{userId}")
    public ResponseEntity<?> updateUserPassword(@PathVariable String userId, @RequestBody String passwordHash)
    {
        User toUpdate = userRepository.findById(userId).orElse(null);

        if (toUpdate == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User doesnt exist");
        }

        toUpdate.setPasswordHash(passwordHash);

        userRepository.save(toUpdate);

        return ResponseEntity.ok("User password updated");
    }

}