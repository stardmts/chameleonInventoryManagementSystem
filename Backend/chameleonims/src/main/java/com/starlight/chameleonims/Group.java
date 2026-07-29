package com.starlight.chameleonims;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "groups")
public class Group {
    
    @Id
    @Column(name = "groupId")
    private String groupId;

    @Column(name = "groupName")
    private String groupName;

    @Column(name = "qrString")
    private String qrString;

    public Group () {}

    public Group (String groupId, String groupName, String qrString) {
        this.groupId = groupId;
        this.groupName = groupName;
        this.qrString = qrString;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getQrString() {
        return qrString;
    }

    public void setQrString(String qrString) {
        this.qrString = qrString;
    }
}
