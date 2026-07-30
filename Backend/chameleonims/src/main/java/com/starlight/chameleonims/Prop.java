package com.starlight.chameleonims;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "props")

public class Prop {

    @Id
    @Column(name = "prop_id")
    private String propId;

    @Column(name = "name")
    private String name;

    @Column(name = "variant")
    private String variant;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "location_code")
    private String locationCode;

    @Column(name = "cost")
    private BigDecimal cost;

    @Column(name = "in_Stock")
    private Integer inStock;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "qr_String")
    private String qrString;

    public Prop () {}

    public Prop (String propId, String name, String variant, Integer quantity, String locationCode, BigDecimal cost, Integer inStock, String imageUrl, String qrString) {
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

    public String getPropId() {
        return propId;
    }

    public void setPropId(String propId) {
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