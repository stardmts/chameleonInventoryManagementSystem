package com.starlight.chameleonims.DTOS;

public class PasswordReset {

    private String password;

    public PasswordReset() {};
    
    public PasswordReset(String password) {
        this.password = password;
    };

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
}
