package com.starlight.chameleonims;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.starlight.chameleonims.ENUMS.CostumeCategory;
import com.starlight.chameleonims.ENUMS.CostumeColour;
import com.starlight.chameleonims.ENUMS.CostumeSize;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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

    @ElementCollection(targetClass = CostumeCategory.class)
    @CollectionTable(name = "costume_categories", joinColumns = @JoinColumn(name = "costume_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private List<CostumeCategory> category = new ArrayList<>();

    @ElementCollection(targetClass = CostumeColour.class)
    @CollectionTable(name = "costume_colours", joinColumns = @JoinColumn(name = "costume_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "colour")
    private List<CostumeColour> colour = new ArrayList<>();

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

    @Column(name = "qr_string")
    private String qrString;

    public Costume () {}

    public Costume(String costumeId, String name, String group, List<CostumeCategory> category, List<CostumeColour> colour, CostumeSize size, Integer quantity, Integer inStock, String locationCode, LocalDateTime lastUpdated, BigDecimal cost, String imageUrl, String qrString) {
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

    public List<CostumeCategory> getCategory() {
        return category;
    }

    public void setCategory(List<CostumeCategory> category) {
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