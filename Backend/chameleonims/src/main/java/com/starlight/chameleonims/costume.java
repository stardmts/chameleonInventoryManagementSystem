package com.starlight.chameleonims;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.starlight.chameleonims.ENUMs.costumeCategories;
import com.starlight.chameleonims.ENUMs.costumeColours;
import com.starlight.chameleonims.ENUMs.costumeSizes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "costumes")

public class costume {
    
    @Id
    @Column(name = "costumeId")
    private Long costumeId;
    
    @Column(name = "name")
    private String name;

    @Column(name = "group")
    private String group;

    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private costumeCategories category;

    @Enumerated(EnumType.STRING)
    @Column(name = "colour")
    private costumeColours colour;

    @Enumerated(EnumType.STRING)
    @Column(name = "size")
    private costumeSizes size;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "inStock")
    private Integer inStock;

    @Column(name = "locationCode")
    private String locationCode;

    @Column(name = "lastUpdated")
    private LocalDateTime lastUpdated;

    @Column(name = "cost")
    private BigDecimal cost;

    @Column(name = "notes")
    private String notes;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "qrString")
    private String qrString;

    public costume(Long costumeId, String name, String group, costumeCategories category, costumeColours colour, costumeSizes size, Integer quantity, Integer inStock, String locationCode, LocalDateTime lastUpdated, BigDecimal cost, String notes, String imageUrl, String qrString) {
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
        this.notes = notes;
        this.imageUrl = imageUrl;
        this.qrString = qrString;
    }

    public Long getCostumeId() {
        return costumeId;
    }

    public void setCostumeId(Long costumeId) {
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

    public costumeCategories getCategory() {
        return category;
    }

    public void setCategory(costumeCategories category) {
        this.category = category;
    }

    public costumeColours getColour() {
        return colour;
    }

    public void setColour(costumeColours colour) {
        this.colour = colour;
    }

    public costumeSizes getSize() {
        return size;
    }

    public void setSize(costumeSizes size) {
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

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getQrString() {
        return qrString;
    }

    public void setQrString(String qrString) {
        this.qrString = qrString;
    }
}