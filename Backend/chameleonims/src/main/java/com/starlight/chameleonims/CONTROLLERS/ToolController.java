package com.starlight.chameleonims.CONTROLLERS;

import java.util.List;

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

import com.starlight.chameleonims.REPOSITORIES.ToolRepository;
import com.starlight.chameleonims.Tool;


@RestController
@RequestMapping("/api/Tools")
@CrossOrigin(origins = "http://localhost:3000")
public class ToolController {

    private ToolRepository toolRepository;

    @GetMapping
    public List<Tool> getAllTools() 
    {
        return toolRepository.findAllAsc();
    }

    @GetMapping("/{toolId}")
    public Tool getToolById(@PathVariable String toolId)
    {
        return toolRepository.findById(toolId).orElse(null);
    }
    
    @DeleteMapping("/Delete/{toolId}")
    public ResponseEntity<?> deleteToolById(@PathVariable String toolId) 
    {
        if (!toolRepository.existsById(toolId)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tool doesnt exist");
        }

        toolRepository.deleteById(toolId);

        return ResponseEntity.ok("Tool deleted");
    }

    @PostMapping("/AddTool")
    public Tool createTool(@RequestBody Tool tool) 
    {
        return toolRepository.save(tool);
    }

    @PatchMapping("/Update/{toolId}")
    public ResponseEntity<?> updateToolById(@PathVariable String toolId, @RequestBody Tool incomingUpdates)
    {
        Tool toUpdate = toolRepository.findById(toolId).orElseThrow(() -> new RuntimeException("Tool not found"));

        if (incomingUpdates.getName() != null) toUpdate.setName(incomingUpdates.getName());
        if (incomingUpdates.getQuantity() != null) toUpdate.setQuantity(incomingUpdates.getQuantity());
        if (incomingUpdates.getLocation() != null) toUpdate.setLocation(incomingUpdates.getLocation());
        if (incomingUpdates.getCondition() != null) toUpdate.setCondition(incomingUpdates.getCondition());
        if (incomingUpdates.getAssignedTo() != null) toUpdate.setAssignedTo(incomingUpdates.getAssignedTo());
        if (incomingUpdates.getOwnedBy() != null) toUpdate.setOwnedBy(incomingUpdates.getOwnedBy());
        if (incomingUpdates.getCategory() != null) toUpdate.setCategory(incomingUpdates.getCategory());
        if (incomingUpdates.getImageUrl() != null) toUpdate.setImageUrl(incomingUpdates.getImageUrl());
        if (incomingUpdates.getQrString() != null) toUpdate.setQrString(incomingUpdates.getQrString());

        toolRepository.save(toUpdate);

        return ResponseEntity.ok("Tool updated successfully");
    }
   
}