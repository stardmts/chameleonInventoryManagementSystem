package com.starlight.chameleonims.ENUMS;

public enum CostumeSize {
    
    XSC,

    SC,

    MC,

    LC,

    XLC,

    XXLC,

    XSA,

    SA,

    MA,

    LA,

    XLA,

    XXLA,

    THREE_TO_FOUR_YEARS("3-4 Years"),
    
    FIVE_TO_SIX_YEARS("5-6 Years"),
    
    SEVEN_TO_EIGHT_YEARS("7-8 Years"),
    
    NINE_TO_ELEVEN_YEARS("9-11 Years"),
    
    TWELVE_TO_THIRTEEN_YEARS("12-13 Years"),
    
    SIZE_128CMS("128cm"),
    
    SIZE_140CMS("140cm"),
    
    SIZE_150CMS("150cm"),
    
    SIZE_152CMS("152cm"),

    SIZE_160CMS("160cm"),
    
    SIZE_164CMS("164cm"),
    
    SIZE_0,
    
    SIZE_1,
    
    SIZE_2A("2a"),
    
    SIZE_3A("3a"),
    
    SIZE_3,
    
    SIZE_4,
    
    SIZE_5,
    
    ONE_SIZE("One Size");
    
    private final String displayLabel;

    private CostumeSize(String displayLabel) {
        this.displayLabel = displayLabel;
    }

    private CostumeSize() {
        this.displayLabel = this.name(); 
    }

    public String getDisplayLabel() {
        return this.displayLabel;
    }

}