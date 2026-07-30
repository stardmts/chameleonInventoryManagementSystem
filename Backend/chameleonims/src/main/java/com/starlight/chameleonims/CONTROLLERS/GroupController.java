package com.starlight.chameleonims.CONTROLLERS;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starlight.chameleonims.DTOS.AvailabilityCheck;
import com.starlight.chameleonims.DTOS.CostumeAvailability;
import com.starlight.chameleonims.Group;
import com.starlight.chameleonims.REPOSITORIES.GroupRepository;

@RestController
@RequestMapping("/api/Groups")
@CrossOrigin(origins = "http://localhost:3000")
public class GroupController {

    @Autowired
    private GroupRepository groupRepository;

    @GetMapping
    public List<Group> getAllGroups() 
    {
        return groupRepository.findAllByOrderByGroupIdAsc();
    }

    //api for getting groups on colour, size, and category for filering. /Filter/{category} /Filter/{colour} /Filter/{size}

    @GetMapping("/{groupId}")
    public Group getAllGroups(@PathVariable String groupId) 
    {
        return groupRepository.findById(groupId).orElse(null);
    }
    
    @DeleteMapping("/Delete/{groupId}")
    public ResponseEntity<?> deleteGroupById(@PathVariable String groupId)
    {
        if (!groupRepository.existsById(groupId)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Group not found");
        }

        groupRepository.deleteById(groupId);

        return ResponseEntity.ok("Group succesfully deleted");
    }

    @PostMapping("/AddGroup")
    public Group createGroup(@RequestBody Group group) {
           return groupRepository.save(group);
    }

    @GetMapping("/CheckAvailability")
    public List<CostumeAvailability> checkAvailability(@ModelAttribute AvailabilityCheck availabilityCheck) 
    {
        /* Make find returns within x-y and find loans within x-y for each Id stored in given Group, for each do Available = totalStock - loanQuantity + returnQuantity, where loan and return quantity are totals of all loans or returns individual quantity summed */
        return null;
    }
    
}