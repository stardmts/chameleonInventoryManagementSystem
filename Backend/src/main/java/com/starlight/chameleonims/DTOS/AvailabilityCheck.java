package com.starlight.chameleonims.DTOS;

import java.time.LocalDateTime;

public class AvailabilityCheck {

    private String groupId;
    
    private LocalDateTime startDate;

    private LocalDateTime endDate;

    public AvailabilityCheck () {}

    public AvailabilityCheck (String groupId, LocalDateTime startDate, LocalDateTime endDate) {

        this.groupId = groupId;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public String getCostumeId() {
        return groupId;
    }

    public void setgroupId(String groupId) {
        this.groupId = groupId;
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

    
}
