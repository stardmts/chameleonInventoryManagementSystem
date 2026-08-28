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

import com.starlight.chameleonims.Prop;
import com.starlight.chameleonims.REPOSITORIES.PropRepository;
import com.starlight.chameleonims.REPOSITORIES.TransactionRepository;
import com.starlight.chameleonims.Transaction;


@RestController
@RequestMapping("/api/Props")
@CrossOrigin(origins = "http://localhost:3000")
public class PropController {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private PropRepository propRepository;

    @GetMapping
    public List<Prop> getAllProps() 
    {
        return propRepository.findAllByOrderByPropIdAsc();
    }

    @GetMapping("/{propId}")
    public Prop getPropById(@PathVariable String propId)
    {
        return propRepository.findById(propId).orElse(null);
    }
    
    @DeleteMapping("/Delete/{propId}")
    public ResponseEntity<?> deletePropById(@PathVariable String propId) 
    {
        if (!propRepository.existsById(propId)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Prop doesnt exist");
        }

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
        transaction.setTransactionBody("Prop: " + propId + " has been deleted.");
        transaction.setTransactionDate(date);
        
        transactionRepository.save(transaction);

        propRepository.deleteById(propId);

        return ResponseEntity.ok("Prop deleted");
    }

    @PostMapping("/AddProp")
    public Prop createProp(@RequestBody Prop prop) 
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
        transaction.setTransactionBody("Prop: " + prop.getPropId() + " has been deleted.");
        transaction.setTransactionDate(date);
        
        transactionRepository.save(transaction);

        return propRepository.save(prop);
    }

    @PatchMapping("/Update/{propId}")
    public ResponseEntity<?> updatePropById(@PathVariable String propId, @RequestBody Prop incomingUpdates)
    {
        Prop toUpdate = propRepository.findById(propId).orElseThrow(() -> new RuntimeException("Prop not found"));

        if (incomingUpdates.getName() != null) toUpdate.setName(incomingUpdates.getName());
        if (incomingUpdates.getVariant() != null) toUpdate.setVariant(incomingUpdates.getVariant());
        if (incomingUpdates.getQuantity() != null) toUpdate.setQuantity(incomingUpdates.getQuantity());
        if (incomingUpdates.getLocationCode() != null) toUpdate.setLocationCode(incomingUpdates.getLocationCode());
        if (incomingUpdates.getCost() != null) toUpdate.setCost(incomingUpdates.getCost());
        if (incomingUpdates.getInStock() != null) toUpdate.setInStock(incomingUpdates.getInStock());
        if (incomingUpdates.getImageUrl() != null) toUpdate.setImageUrl(incomingUpdates.getImageUrl());

        propRepository.save(toUpdate);

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
        transaction.setTransactionBody("Prop: " + propId + " has been updated.");
        transaction.setTransactionDate(date);
        
        transactionRepository.save(transaction);

        return ResponseEntity.ok("Prop updated successfully");
    }
 
    //Open this up when completed, and costumes on the website go live
    /* @GetMapping("/CheckAvailability")
    public List<CostumeAvailability> checkAvailability(@ModelAttribute AvailabilityCheck availabilityCheck) 
    {
        Make find returns within x-y and find loans within x-y for each Id stored in given Group, 
        for each do Available = totalStock - loanQuantity + returnQuantity, 
        where loan and return quantity are totals of all loans or returns individual quantity summed
        return null;
    } */

    

}