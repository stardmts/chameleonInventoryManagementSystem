package com.starlight.chameleonims;

import java.time.LocalDateTime;

import com.starlight.chameleonims.ENUMS.LoanStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class Loan {
    
    @Id
    @Column(name = "orderId")
    private String loanId;
    
    @Column(name = "order")
    private String orderId;

    @Column(name = "startDate")
    private LocalDateTime startDate;

    @Column(name = "endDate")
    private LocalDateTime endDate;

    @Column(name = "costumeId")
    private Long costumeId;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "status")
    private LoanStatus status;

    public Loan () {}

    public Loan (String loanId, String orderId, LocalDateTime startDate, LocalDateTime endDate, Long costumeId, Integer quantity, LoanStatus status) {
        this.loanId = loanId;
        this.orderId = orderId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.costumeId = costumeId;
        this.quantity = quantity;
        this.status = status;
    }

    public String getLoanId() {
        return loanId;
    }

    public void setLoanId(String loanId) {
        this.loanId = loanId;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
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

    public LoanStatus getStatus() {
        return status;
    }

    public void setStatus(LoanStatus status) {
        this.status = status;
    }

}
