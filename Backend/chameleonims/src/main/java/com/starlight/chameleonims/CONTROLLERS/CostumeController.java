package com.starlight.chameleonims.CONTROLLERS;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starlight.chameleonims.Costume;
import com.starlight.chameleonims.DTOS.AvailabilityCheck;
import com.starlight.chameleonims.DTOS.CostumeAvailability;
import com.starlight.chameleonims.REPOSITORIES.CostumeRepository;


@RestController
@RequestMapping("/api/Costumes")
@CrossOrigin(origins = "http://localhost:3000")
public class CostumeController {

    @Autowired
    private CostumeRepository costumeRepository;

    @GetMapping
    public List<Costume> getAllCostumes() 
    {
        return costumeRepository.findAllByOrderByCostumeIdAsc();
    }

    @GetMapping("/Group/{groupId}")
    public List<Costume> getCostumesByGroup(@PathVariable String groupId) 
    {
        return costumeRepository.findByGroup(groupId);
    }

    @GetMapping("/{costumeId}")
    public Costume getCostumeById(@PathVariable String costumeId)
    {
        return costumeRepository.findById(costumeId).orElse(null);
    }
    
    @DeleteMapping("/Delete/{costumeId}")
    public ResponseEntity<?> deleteCostumeById(@PathVariable String costumeId) 
    {
        if (!costumeRepository.existsById(costumeId)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Costume doesnt exist");
        }

        costumeRepository.deleteById(costumeId);

        return ResponseEntity.ok("Costume deleted");
    }

    @PostMapping("/AddCostume")
    public Costume createCostume(@RequestBody Costume costume) 
    {
        return costumeRepository.save(costume);
    }

    @PatchMapping("/Update/{costumeId}")
    public ResponseEntity<?> updateCostumeById(@PathVariable String costumeId, @RequestBody Costume incomingUpdates)
    {
        Costume toUpdate = costumeRepository.findById(costumeId).orElseThrow(() -> new RuntimeException("Costume not found"));

        if (incomingUpdates.getName() != null) toUpdate.setName(incomingUpdates.getName());
        if (incomingUpdates.getGroup() != null) toUpdate.setGroup(incomingUpdates.getGroup());
        if (incomingUpdates.getCategory() != null) toUpdate.setCategory(incomingUpdates.getCategory());
        if (incomingUpdates.getColour() != null) toUpdate.setColour(incomingUpdates.getColour());
        if (incomingUpdates.getSize() != null) toUpdate.setSize(incomingUpdates.getSize());
        if (incomingUpdates.getQuantity() != null) toUpdate.setQuantity(incomingUpdates.getQuantity());
        if (incomingUpdates.getInStock() != null) toUpdate.setInStock(incomingUpdates.getInStock());
        if (incomingUpdates.getLocationCode() != null) toUpdate.setLocationCode(incomingUpdates.getLocationCode());
        if (incomingUpdates.getLastUpdated() != null) toUpdate.setLastUpdated(incomingUpdates.getLastUpdated());
        if (incomingUpdates.getCost() != null) toUpdate.setCost(incomingUpdates.getCost());
        if (incomingUpdates.getImageUrl() != null) toUpdate.setImageUrl(incomingUpdates.getImageUrl());
        if (incomingUpdates.getQrString() != null) toUpdate.setQrString(incomingUpdates.getQrString());

        costumeRepository.save(toUpdate);

        return ResponseEntity.ok("Costume updated successfully");
    }
 

    @GetMapping("/CheckAvailability")
    public List<CostumeAvailability> checkAvailability(@ModelAttribute AvailabilityCheck availabilityCheck) 
    {
        /* Make find returns within x-y and find loans within x-y for each Id stored in given Group, for each do Available = totalStock - loanQuantity + returnQuantity, where loan and return quantity are totals of all loans or returns individual quantity summed */
        return null;
    }

}