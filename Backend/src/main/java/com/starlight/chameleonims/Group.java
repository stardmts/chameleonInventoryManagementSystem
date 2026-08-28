package com.starlight.chameleonims;

import com.starlight.chameleonims.ENUMS.CostumeCategory;
import com.starlight.chameleonims.ENUMS.CostumeColour;
import com.starlight.chameleonims.ENUMS.CostumeSize;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "groups")
public class Group {
    
    @Id
    @Column(name = "group_id")
    private String groupId;

    @Column(name = "group_name")
    private String name;

    @Column(name = "group_quantity")
    private Integer groupQuantity;

    @Column(name = "categories", columnDefinition = "text[]")
    private CostumeCategory[] categories;

    @Column(name = "colours", columnDefinition = "text[]")
    private CostumeColour[] colours;

    @Column(name = "sizes", columnDefinition = "text[]")
    private CostumeSize[] sizes;

    @Column(name = "image_url")
    private String imageUrl;

    public Group () {}

    public Group (String groupId, String groupName, Integer groupQuantity, CostumeCategory[] categories, CostumeColour[] colours, CostumeSize[] sizes, String imageUrl) {
        this.groupId = groupId;
        this.name = groupName;
        this.groupQuantity = groupQuantity;
        this.categories = categories;
        this.colours = colours;
        this.sizes = sizes;
        this.imageUrl = imageUrl;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return name;
    }

    public void setGroupName(String groupName) {
        this.name = groupName;
    }

    public Integer getGroupQuantity() {
        return groupQuantity;
    }

    public void setGroupQuantity(Integer groupQuantity) {
        this.groupQuantity = groupQuantity;
    }

    public CostumeCategory[] getGroupCategories() {
        return categories;
    }

    public void setGroupQuantity(CostumeCategory[] categories) {
        this.categories = categories;
    }

    public CostumeColour[] getGroupColours() {
        return colours;
    }

    public void setGroupColours(CostumeColour[] colours) {
        this.colours = colours;
    }

    public CostumeSize[] getGroupSizes() {
        return sizes;
    }

    public void setGroupSizes(CostumeSize[] sizes) {
        this.sizes = sizes;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

}
