package com.example.backend.models;

import javax.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String email;
    private String phone;
    private String mfaMethod;

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getMfaMethod() { return mfaMethod; }
    public void setMfaMethod(String mfaMethod) { this.mfaMethod = mfaMethod; }
}
