package com.starlight.chameleonims;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class Order {
    
    @Id
    @Column(name = "orderId")
    private Long orderId;
    
    @Column(name = "userEmailAddress")
    private String userEmailAddress;

    @Column(name = "startDate")
    private LocalDateTime startDate;

    @Column(name = "endDate")
    private LocalDateTime endDate;

    @Column(name = "costumeId")
    private Long costumeId;

    @Column(name = "quantity")
    private Integer quantity;
    public Order () {}

    public Order(Long orderId, String userEmailAddress, LocalDateTime startDate, LocalDateTime endDate, Long costumeId, Integer quantity) {
        this.orderId = orderId;
        this.userEmailAddress = userEmailAddress;
        this.startDate = startDate;
        this.endDate = endDate;
        this.costumeId = costumeId;
        this.quantity = quantity;
    }

    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public String getUserEmailAddress() {
        return userEmailAddress;
    }

    public void setUserEmailAddress(String userEmailAddress) {
        this.userEmailAddress = userEmailAddress;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDateTime endDate) {
        this.endDate = endDate;
    }

    public Long getCostumeId() {
        return costumeId;
    }

    public void setCostumeId(Long costumeId) {
        this.costumeId = costumeId;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

}
