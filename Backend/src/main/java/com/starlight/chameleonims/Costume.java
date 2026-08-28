package com.starlight.chameleonims;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.starlight.chameleonims.ENUMS.CostumeCategory;
import com.starlight.chameleonims.ENUMS.CostumeColour;
import com.starlight.chameleonims.ENUMS.CostumeSize;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "costumes")

public class Costume {
    
    @Id
    @Column(name = "costume_id")
    private String costumeId;
    
    @Column(name = "name")
    private String name;

    @Column(name = "group_id")
    private String group;

    @Column(name = "category", columnDefinition = "text[]")
    private CostumeCategory[] category;

    @Column(name = "colour", columnDefinition = "text[]")
    private CostumeColour[] colour;

    @Enumerated(EnumType.STRING)
    @Column(name = "size")
    private CostumeSize size;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "in_stock")
    private Integer inStock;

    @Column(name = "location_code")
    private String locationCode;

    @Column(name = "last_updated")
    private LocalDateTime lastUpdated;

    @Column(name = "cost")
    private BigDecimal cost;

    @Column(name = "image_url")
    private String imageUrl;

    public Costume () {}

    public Costume(String costumeId, String name, String group, CostumeCategory[] category, CostumeColour[] colour, CostumeSize size, Integer quantity, Integer inStock, String locationCode, LocalDateTime lastUpdated, BigDecimal cost, String imageUrl) {
        this.costumeId = costumeId;
        this.name = name;
        this.group = group;
        this.category = category;
        this.colour = colour;
        this.size = size;
        this.quantity = quantity;
        this.inStock = inStock;
        this.locationCode = locationCode;
        this.lastUpdated = lastUpdated;
        this.cost = cost;
        this.imageUrl = imageUrl;
    }

    public String getCostumeId() {
        return costumeId;
    }

    public void setCostumeId(String costumeId) {
        this.costumeId = costumeId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGroup() {
        return group;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public CostumeCategory[] getCategory() {
        return category;
    }

    public void setCategory(CostumeCategory[] category) {
        this.category = category;
    }

    public CostumeColour[] getColour() {
        return colour;
    }

    public void setColour(CostumeColour[] colour) {
        this.colour = colour;
    }

    public CostumeSize getSize() {
        return size;
    }

    public void setSize(CostumeSize size) {
        this.size = size;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getInStock() {
        return inStock;
    }

    public void setInStock(Integer inStock) {
        this.inStock = inStock;
    }

    public String getLocationCode() {
        return locationCode;
    }

    public void setLocationCode(String locationCode) {
        this.locationCode = locationCode;
    }

    public LocalDateTime getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(LocalDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}