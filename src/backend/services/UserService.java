package com.example.backend.services;

import com.example.backend.models.User;
import com.example.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(User user) throws Exception {
        // Validate user data
        if (user.getEmail() == null || user.getPhone() == null) {
            throw new IllegalArgumentException("Email and phone are required.");
        }
        // Save user to database
        userRepository.save(user);
        // Initiate MFA setup (e.g., send OTP)
        // ...
    }
}
