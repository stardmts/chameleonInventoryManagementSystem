package com.starlight.chameleonims;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "transactions")
public class Transaction {
    
    @Id
    @Column(name = "transactionId")
    private Long transactionId;

    @Column(name = "transactionBody")
    private String transactionBody;

    @Column(name = "transactionDate")
    private LocalDateTime transactionDate;

    @Column(name = "user")
    private String user;

    public Transaction () {}

    public Transaction (Long transactionId, String transactionBody, LocalDateTime transactionDate, String user) {
        this.transactionId = transactionId;
        this.transactionBody = transactionBody;
        this.transactionDate = transactionDate;
        this.user = user;
    }

    public Long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Long transactionId) {
        this.transactionId = transactionId;
    }

    public String getTransactionBody() {
        return transactionBody;
    }

    public void setTransactionBody(String transactionBody) {
        this.transactionBody = transactionBody;
    }

    public LocalDateTime getTransactionDate() {
        return transactionDate;
    }

    public void setTransactionDate(LocalDateTime transactionDate) {
        this.transactionDate = transactionDate;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}
