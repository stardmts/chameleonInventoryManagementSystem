package com.starlight.chameleonims;

import jakarta.persistence.*;

import com.starlight.chameleonims.ENUMs.ToolCategory;
import com.starlight.chameleonims.ENUMs.Condition;

@Entity
@Table(name = "tools")
public class Tool {
    
    @Id
    @Column(name = "toolId")
    private Long toolId;

    @Column(name = "name")
    private String name;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "location")
    private String location;

    @Enumerated(EnumType.STRING)
    @Column(name = "condition")
    private Condition condition;

    @Column(name = "assignedTo")
    private String assignedTo;

    @Column(name = "ownedBy")
    private String ownedBy;

    @Enumerated(EnumType.STRING)
    @Column(name = "category")
    private ToolCategory category;

    @Column(name = "imageUrl")
    private String imageUrl;

    @Column(name = "qrString")
    private String qrString;

    public Tool () {}

    public Tool (Long toolId, String name, Integer quantity, String location, Condition condition, String assignedTo, String ownedBy, ToolCategory category, String imageUrl, String qrString) {
        this.toolId = toolId;
        this.name = name;
        this.quantity = quantity;
        this.location = location;
        this.condition = condition;
        this.assignedTo = assignedTo;
        this.ownedBy = ownedBy;
        this.category = category;
        this.imageUrl = imageUrl;
        this.qrString = qrString;
    }

    public Long getToolId() {
        return toolId;
    }

    public void setToolId(Long toolId) {
        this.toolId = toolId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Condition getCondition() {
        return condition;
    }

    public void setCondition(Condition condition) {
        this.condition = condition;
    }

    public String getAssignedTo() {
        return assignedTo;
    }

    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }

    public String getOwnedBy() {
        return ownedBy;
    }

    public void setOwnedBy(String ownedBy) {
        this.ownedBy = ownedBy;
    }

    public ToolCategory getCategory() {
        return category;
    }

    public void setCategory(ToolCategory category) {
        this.category = category;
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
