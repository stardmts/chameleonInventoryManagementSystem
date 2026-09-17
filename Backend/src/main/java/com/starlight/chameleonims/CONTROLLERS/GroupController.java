package com.starlight.chameleonims.CONTROLLERS;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

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

import com.starlight.chameleonims.Costume;
import com.starlight.chameleonims.DTOS.AvailabilityCheck;
import com.starlight.chameleonims.DTOS.CostumeAvailability;
import com.starlight.chameleonims.ENUMS.CostumeCategory;
import com.starlight.chameleonims.ENUMS.CostumeColour;
import com.starlight.chameleonims.ENUMS.CostumeSize;
import com.starlight.chameleonims.Group;
import com.starlight.chameleonims.Loan;
import com.starlight.chameleonims.REPOSITORIES.CostumeRepository;
import com.starlight.chameleonims.REPOSITORIES.GroupRepository;
import com.starlight.chameleonims.REPOSITORIES.LoanRepository;
import com.starlight.chameleonims.REPOSITORIES.TransactionRepository;
import com.starlight.chameleonims.Transaction;

@RestController
@RequestMapping("/api/Groups")
@CrossOrigin(origins = "http://localhost:3000")
public class GroupController {

    private final TransactionRepository transactionRepository;
    
    private final GroupRepository groupRepository;

    private final CostumeRepository costumeRepository;

    private final LoanRepository loanRepository;

    public GroupController(TransactionRepository transactionRepository, GroupRepository groupRepository, CostumeRepository costumeRepository, LoanRepository loanRepository) {
        this.transactionRepository = transactionRepository;
        this.groupRepository = groupRepository;
        this.costumeRepository = costumeRepository;
        this.loanRepository = loanRepository;
    }

    @GetMapping
    public List<Group> getAllGroups() 
    {
        return groupRepository.findAllByOrderByGroupIdAsc();
    }

    @GetMapping("/Filter/Colour/{costumeColour}")
    public List<Group> getGroupsbyColour(@PathVariable CostumeColour costumeColour)
    {
        List<Group> groups = groupRepository.findAll();

        return groups.stream().filter(group -> group.getGroupColours() != null && Arrays.asList(group.getGroupColours()).contains(costumeColour)).toList();
    }

    @GetMapping("/Filter/Size/{costumeSize}")
    public List<Group> getGroupsBySize(@PathVariable CostumeSize costumeSize)
    {
        List<Group> groups = groupRepository.findAll();

        return groups.stream().filter(group -> group.getGroupSizes() != null && Arrays.asList(group.getGroupSizes()).contains(costumeSize)).toList();
    }

    @GetMapping("/Filter/Category/{costumeCategory}")
    public List<Group> getGroupsByCategory(@PathVariable CostumeCategory costumeCategory)
    {
        List<Group> groups = groupRepository.findAll();

        return groups.stream().filter(group -> group.getGroupCategories() != null && Arrays.asList(group.getGroupCategories()).contains(costumeCategory)).toList();
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
    public List<CostumeAvailability> checkAvailability(@RequestBody AvailabilityCheck availabilityCheck) 
    {

        LocalDate startDate = availabilityCheck.getStartDate();

        LocalDate endDate = availabilityCheck.getEndDate();

        String groupId = availabilityCheck.getGroupId();

        List<Costume> costumes = costumeRepository.findByGroup(groupId);

        List<CostumeAvailability> availabilities = new ArrayList<>();

        for (Costume costume : costumes) {
            
            Integer totalQuantity = costume.getQuantity();

            List<Loan> loans = loanRepository.findAllByCostumeId(costume.getCostumeId()).stream().filter(loan -> ((loan.getStartDate() != null) && (loan.getEndDate() != null)) && ((loan.getStartDate().isBefore(endDate)) && (loan.getEndDate().isAfter(startDate)))).toList();

            if (loans != null) {

                Integer availableQuantity = totalQuantity;

                for (Loan loan : loans) {

                    Integer quantity = loan.getQuantity();
                    
                    availableQuantity -= quantity;

                }

                CostumeAvailability costumeAvailability = new CostumeAvailability((costume.getSize()), availableQuantity);

                availabilities.add(costumeAvailability);

            }

        }

        return availabilities;
    }
    
}