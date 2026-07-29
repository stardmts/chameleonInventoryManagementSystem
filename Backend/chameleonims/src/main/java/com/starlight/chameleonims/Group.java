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

    @Column(name = "groupQuantity")
    private Integer groupQuantity;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "qrString")
    private String qrString;

    public Group () {}

    public Group (String groupId, String groupName, Integer groupQuantity, String imageUrl, String qrString) {
        this.groupId = groupId;
        this.groupName = groupName;
        this.groupQuantity = groupQuantity;
        this.imageUrl = imageUrl;
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

    public Integer getGroupQuantity() {
        return groupQuantity;
    }

    public void setGroupQuantity(Integer groupQuantity) {
        this.groupQuantity = groupQuantity;
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
