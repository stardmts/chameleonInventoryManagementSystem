package com.starlight.chameleonims.DTOS;

import com.starlight.chameleonims.ENUMS.UserRole;


public class UserDTO {

    private String userId;

    private String firstName;

    private String secondName;

    private String userEmail;

    private UserRole userRole;

    public UserDTO () {}

    public UserDTO (String userId, String firstName, String secondName, String userEmail, UserRole userRole) {
        this.userId = userId;
        this.firstName = firstName;
        this.secondName = secondName;
        this.userEmail = userEmail;
        this.userRole = userRole;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }
}
