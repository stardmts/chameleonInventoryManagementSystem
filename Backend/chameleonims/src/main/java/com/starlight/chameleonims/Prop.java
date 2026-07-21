package com.starlight.chameleonims;

import java.math.BigDecimal;

import jakarta.persistence.*;

@Entity
@Table(name = "props")

public class Prop {

    @Id
    @Column(name = "propId")
    private Long propId;

    @Column(name = "name")
    private String name;

    @Column(name = "variant")
    private String variant;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "locationCode")
    private String locationCode;

    @Column(name = "cost")
    private BigDecimal cost;

    @Column(name = "inStock")
    private Integer inStock;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "qrString")
    private String qrString;

    public Prop () {}

    public Prop (Long propId, String name, String variant, Integer quantity, String locationCode, BigDecimal cost, Integer inStock, String imageUrl, String qrString) {
        this.propId = propId;
        this.name = name;
        this.variant = variant;
        this.quantity = quantity;
        this.locationCode = locationCode;
        this.cost = cost;
        this.inStock = inStock;
        this.imageUrl = imageUrl;
        this.qrString = qrString;
    }

    public Long getPropId() {
        return propId;
    }

    public void setPropId(Long propId) {
        this.propId = propId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getVariant() {
        return variant;
    }

    public void setVariant(String variant) {
        this.variant = variant;
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