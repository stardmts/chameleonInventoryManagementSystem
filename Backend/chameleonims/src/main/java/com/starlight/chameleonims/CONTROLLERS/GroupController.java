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

import com.starlight.chameleonims.Group;
import com.starlight.chameleonims.REPOSITORIES.GroupRepository;

@RestController
@RequestMapping("/api/Groups")
@CrossOrigin(origins = "http://localhost:3000")
public class GroupController {

    private GroupRepository groupRepository;

    @GetMapping
    public List<Group> getAllGroups() 
    {
        return groupRepository.findAllAsc();
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

        return ResponseEntity.ok("Group succesfully deleted");
    }

    @PostMapping("/AddGroup")
    public Group createGroup(@RequestBody Group group) {
           return groupRepository.save(group);
    }
    
}