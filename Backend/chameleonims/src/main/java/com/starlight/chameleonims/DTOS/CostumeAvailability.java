package com.starlight.chameleonims.DTOS;

import com.starlight.chameleonims.ENUMS.CostumeSize;

public class CostumeAvailability {

    private CostumeSize size;
    private Integer quantity;

    public CostumeAvailability () {}

    public CostumeAvailability(CostumeSize size, Integer quantity) {
        this.size = size;
        this.quantity = quantity;
    }

    public CostumeSize getSize() {
        return size;
    }

    public void setSize(CostumeSize size) {
        this.size = size;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}