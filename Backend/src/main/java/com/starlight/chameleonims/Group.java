package com.starlight.chameleonims;

import java.util.ArrayList;
import java.util.List;

import com.starlight.chameleonims.ENUMS.CostumeCategory;
import com.starlight.chameleonims.ENUMS.CostumeColour;
import com.starlight.chameleonims.ENUMS.CostumeSize;

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
@Table(name = "groups")
public class Group {
    
    @Id
    @Column(name = "group_id")
    private String groupId;

    @Column(name = "group_name")
    private String groupName;

    @Column(name = "group_quantity")
    private Integer groupQuantity;

    @ElementCollection(targetClass = CostumeCategory.class)
    @CollectionTable(name = "costume_categories", joinColumns = @JoinColumn(name = "group_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "categories")
    private List<CostumeCategory> categories = new ArrayList<>();

    @ElementCollection(targetClass = CostumeCategory.class)
    @CollectionTable(name = "costume_colours", joinColumns = @JoinColumn(name = "group_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "colours")
    private List<CostumeColour> colours = new ArrayList<>();

    @ElementCollection(targetClass = CostumeColour.class)
    @CollectionTable(name = "sizes", joinColumns = @JoinColumn(name = "group_id"))
    @Enumerated(EnumType.STRING)
    @Column(name = "sizes")
    private List<CostumeSize> sizes = new ArrayList<>();

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "qr_string")
    private String qrString;

    public Group () {}

    public Group (String groupId, String groupName, Integer groupQuantity, List<CostumeCategory> categories, List<CostumeColour> colours, List<CostumeSize> sizes, String imageUrl, String qrString) {
        this.groupId = groupId;
        this.groupName = groupName;
        this.groupQuantity = groupQuantity;
        this.categories = categories;
        this.colours = colours;
        this.sizes = sizes;
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

    public List<CostumeCategory> getGroupCategories() {
        return categories;
    }

    public void setGroupQuantity(List<CostumeCategory> categories) {
        this.categories = categories;
    }

    public List<CostumeColour> getGroupColours() {
        return colours;
    }

    public void setGroupColours(List<CostumeColour> colours) {
        this.colours = colours;
    }

    public List<CostumeSize> getGroupSizes() {
        return sizes;
    }

    public void setGroupSizes(List<CostumeSize> sizes) {
        this.sizes = sizes;
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
