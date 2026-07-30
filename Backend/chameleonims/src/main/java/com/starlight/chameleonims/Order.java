package com.starlight.chameleonims;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.starlight.chameleonims.ENUMS.OrderStatus;

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
@Table(name = "orders")
public class Order {
    
    @Id
    @Column(name = "order_id")
    private String orderId;
    
    @Column(name = "user_email_address")
    private String userEmailAddress;

    @Column(name = "start_date")
    private LocalDateTime startDate;

    @Column(name = "end_date")
    private LocalDateTime endDate;

    @ElementCollection(targetClass = String.class)
    @CollectionTable(name = "loan_ids", joinColumns = @JoinColumn(name = "order_id"))
    @Column(name = "loan_id") 
    private List<String> loanIds = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private OrderStatus status;

    public Order () {}

    public Order (String orderId, String userEmailAddress, LocalDateTime startDate, LocalDateTime endDate, List<String> loanIds, OrderStatus status) {
        this.orderId = orderId;
        this.userEmailAddress = userEmailAddress;
        this.startDate = startDate;
        this.endDate = endDate;
        this.loanIds = loanIds;
        this.status = status;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
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

    public List<String> getLoanIds() {
        return loanIds;
    }

    public void setLoanIds(List<String> loanIds) {
        this.loanIds = loanIds;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }
}
