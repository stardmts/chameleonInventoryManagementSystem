package com.starlight.chameleonims;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

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
    @Column(name = "costumeId")
    private String costumeId;
    
    @Column(name = "name")
    private String name;

    @Column(name = "group")
    private String group;

    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private CostumeCategory category;

    @Enumerated(EnumType.STRING)
    @Column(name = "colour")
    private List<CostumeColour> colour = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    @Column(name = "size")
    private CostumeSize size;

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

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "qrString")
    private String qrString;

    public Costume () {}

    public Costume(String costumeId, String name, String group, CostumeCategory category, List<CostumeColour> colour, CostumeSize size, Integer quantity, Integer inStock, String locationCode, LocalDateTime lastUpdated, BigDecimal cost, String imageUrl, String qrString) {
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
        this.qrString = qrString;
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

    public CostumeCategory getCategory() {
        return category;
    }

    public void setCategory(CostumeCategory category) {
        this.category = category;
    }

    public List<CostumeColour> getColour() {
        return colour;
    }

    public void setColour(List<CostumeColour> colour) {
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

    public String getQrString() {
        return qrString;
    }

    public void setQrString(String qrString) {
        this.qrString = qrString;
    }
}