package com.starlight.chameleonims.CONTROLLERS;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starlight.chameleonims.DTOS.StockDisplay;
import com.starlight.chameleonims.REPOSITORIES.CostumeRepository;
import com.starlight.chameleonims.REPOSITORIES.PropRepository;
import com.starlight.chameleonims.REPOSITORIES.ToolRepository;


@RestController
@RequestMapping("/api/Stock")
@CrossOrigin(origins = "http://localhost:3000")
public class StockController {

    private CostumeRepository costumeRepository;

    private PropRepository propRepository;

    private ToolRepository toolRepository;

    @GetMapping
    public StockDisplay getAllStock() 
    {
        StockDisplay stockDisplay = new StockDisplay();

        stockDisplay.setCostumes(costumeRepository.findAll());
        stockDisplay.setProps(propRepository.findAll());
        stockDisplay.setTools(toolRepository.findAll());

        return stockDisplay;
    }

}