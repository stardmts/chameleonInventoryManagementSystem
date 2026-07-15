package com.starlight.chameleonims.ENUMs;

public enum costumeCategories {
    BASICS("Basics"),

    LYRICAL("Lyrical"),

    CONTEMPORARY("Contemporary"),

    JAZZ_AND_TAP("Jazz and Tap"), 
    
    BALLET("Ballet"),
    
    TUTUS("Tutus"),
    
    THEME_NOVELTY("Theme / Novelty"),
    
    ACROBATICS("Acrobatics"),
    
    COMMERCIAL("Commercial"),
    
    ACCESSORIES("Accessories"),
    
    HATS("Hats"),
    
    SHOES("Shoes");

    private final String displayLabel;

    private costumeCategories(String displayLabel) {
        this.displayLabel = displayLabel;
    }

    public String getDisplayLabel() {
        return this.displayLabel;
    }
}