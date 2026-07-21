package com.starlight.chameleonims;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "notices")
public class Notice {
    
    @Id
    @Column(name = "noticeId")
    private Long noticeId;

    @Column(name = "noticeBody")
    private String noticeBody;

    @Column(name = "noticeDate")
    private LocalDateTime noticeDate;

    @Column(name = "sender")
    private String sender;

    public Notice () {}

    public Notice (Long noticeId, String noticeBody, LocalDateTime noticeDate, String sender) {
        this.noticeId = noticeId;
        this.noticeBody = noticeBody;
        this.noticeDate = noticeDate;
        this.sender = sender;
    }

    public Long getNoticeId() {
        return noticeId;
    }

    public void setNoticeId(Long noticeId) {
        this.noticeId = noticeId;
    }

    public String getNoticeBody() {
        return noticeBody;
    }

    public void setNoticeBody(String noticeBody) {
        this.noticeBody = noticeBody;
    }

    public LocalDateTime getNoticeDate() {
        return noticeDate;
    }

    public void setNoticeDate(LocalDateTime noticeDate) {
        this.noticeDate = noticeDate;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }
}
