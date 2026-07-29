package com.starlight.chameleonims;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import com.starlight.chameleonims.ENUMS.OrderStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {
    
    @Id
    @Column(name = "orderId")
    private String orderId;
    
    @Column(name = "userEmailAddress")
    private String userEmailAddress;

    @Column(name = "startDate")
    private LocalDateTime startDate;

    @Column(name = "endDate")
    private LocalDateTime endDate;

    @JdbcTypeCode(SqlTypes.ARRAY)
    @Column(name = "loansId", columnDefinition = "bigint[]") 
    private List<String> loanIds = new ArrayList<>();

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

    public List<String> getLoans() {
        return loanIds;
    }

    public void setLoans(List<String> loanIds) {
        this.loanIds = loanIds;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }
}
