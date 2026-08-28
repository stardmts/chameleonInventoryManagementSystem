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
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starlight.chameleonims.DTOS.AvailabilityCheck;
import com.starlight.chameleonims.DTOS.CostumeAvailability;
import com.starlight.chameleonims.ENUMS.CostumeCategory;
import com.starlight.chameleonims.ENUMS.CostumeColour;
import com.starlight.chameleonims.ENUMS.CostumeSize;
import com.starlight.chameleonims.Group;
import com.starlight.chameleonims.REPOSITORIES.GroupRepository;
import com.starlight.chameleonims.REPOSITORIES.TransactionRepository;
import com.starlight.chameleonims.Transaction;


@RestController
@RequestMapping("/api/Groups")
@CrossOrigin(origins = "http://localhost:3000")
public class GroupController {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private GroupRepository groupRepository;

    @GetMapping
    public List<Group> getAllGroups() 
    {
        return groupRepository.findAllByOrderByGroupIdAsc();
    }

    @GetMapping("/Filter/Colour{costumeColour}")
    public List<Group> getGroupsbyColour(@PathVariable CostumeColour costumeColour)
    {
        return groupRepository.findAllGroupsByColoursContaining(costumeColour);
    }

    @GetMapping("/Filter/Size{costumeSize}")
    public List<Group> getGroupsBySize(@PathVariable CostumeSize costumeSize)
    {
        return groupRepository.findAllGroupsBySizesContaining(costumeSize);
    }

    @GetMapping("/Filter/Category{costumeCategory}")
    public List<Group> getGroupsByCategory(@PathVariable CostumeCategory costumeCategory)
    {
        return groupRepository.findAllGroupsByCategoriesContaining(costumeCategory);
    }

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
        transaction.setTransactionBody("Group: " + groupId + " has been deleted.");
        transaction.setTransactionDate(date);
        
        transactionRepository.save(transaction);

        return ResponseEntity.ok("Group succesfully deleted");
    }

    @PostMapping("/AddGroup")
    public Group createGroup(@RequestBody Group group) 
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
        transaction.setTransactionBody("Group: " + group.getGroupName() + " has been created.");
        transaction.setTransactionDate(date);
        
        transactionRepository.save(transaction);

        return groupRepository.save(group);
    }

    @GetMapping("/Search/{searchString}")
    public List<Group> getGroupsBySearch(@PathVariable String searchString) 
    {
        return groupRepository.findByNameContainingIgnoreCase(searchString);
    }
    

    @GetMapping("/CheckAvailability")
    public List<CostumeAvailability> checkAvailability(@ModelAttribute AvailabilityCheck availabilityCheck) 
    {
        /* Make find returns within x-y and find loans within x-y for each Id stored in given Group, for each do Available = totalStock - loanQuantity + returnQuantity, where loan and return quantity are totals of all loans or returns individual quantity summed */
        return null;
    }
    
}