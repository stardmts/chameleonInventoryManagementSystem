package com.starlight.chameleonims.ENUMs;

public enum costumeSizes {
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
    
    NINE_TO_ELLEVEN_YEARS("9-11 Years"),
    
    TWELVE_TO_THIRTEEN_YEARS("12-13 Years"),
    
    SIZE_128CMS("128cm"),
    
    SIZE_140CMS("140cm"),
    
    SIZE_152CMS("152cm"),
    
    SIZE_164CMS("164cm"),
    
    SIZE_00,
    
    SIZE_SIZE_0,
    
    SIZE_1,
    
    SIZE_2A("2a"),
    
    SIZE_3A("3a"),
    
    SIZE_3,
    
    SIZE_4,
    
    SIZE_5,
    
    CHILD_6("Child size 6"),

    CHILD_65("Child size 6.5"),
    
    CHILD_7("Child size 7"),

    CHILD_75("Child size 7.5"),
    
    CHILD_8("Child size 8"),
    
    CHILD_85("Child size 8.5"),

    CHILD_9("Child size 9"),
    
    CHILD_95("Child size 9.5"),

    CHILD_10("Child size 10"),
    
    CHILD_105("Child size 10.5"),

    CHILD_11("Child size 11"),
    
    CHILD_115("Child size 11.5"),

    CHILD_12("Child size 12"),

    CHILD_125("Child size 12.5"),
    
    CHILD_13("Child size 13"),

    CHILD_135("Child size 13.5"),
    
    ADULT_1("adult size 1"),

    ADULT_15("adult size 1.5"),
    
    ADULT_2("adult size 2"),

    ADULT_25("adult size 2.5"),
    
    ADULT_3("adult size 3"),

    ADULT_35("adult size 3.5"),
    
    ADULT_4("adult size 4"),

    ADULT_45("adult size 4.5"),
    
    ADULT_5("adult size 5"),

    ADULT_55("adult size 5.5"),
    
    ADULT_6("adult size 6"),

    ADULT_65("adult size 6.5"),
    
    ADULT_7("adult size 7"),

    ADULT_75("adult size 7.5"),
    
    ADULT_8("adult size 8"),

    ADULT_85("adult size 8.5"),
    
    ADULT_9("adult size 9"),

    ADULT_95("adult size 9.5"),
    
    ONE_SIZE("One Size");
    
    private final String displayLabel;

    private costumeSizes(String displayLabel) {
        this.displayLabel = displayLabel;
    }

    private costumeSizes() {
        this.displayLabel = this.name(); 
    }

    public String getDisplayLabel() {
        return this.displayLabel;
    }

}