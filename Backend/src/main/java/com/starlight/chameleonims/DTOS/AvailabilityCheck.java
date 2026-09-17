package com.starlight.chameleonims.DTOS;

import java.time.LocalDate;

public class AvailabilityCheck {

    private String groupId;
    
    private LocalDate startDate;

    private LocalDate endDate;

    public AvailabilityCheck () {}

    public AvailabilityCheck (String groupId, LocalDate startDate, LocalDate endDate) {

        this.groupId = groupId;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setgroupId(String groupId) {
        this.groupId = groupId;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    
}
