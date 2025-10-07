package com.exam.controller;

import com.exam.model.User;
import com.exam.service.UserService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class AuthController {
    private final UserService service;

    public AuthController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public List<User> all() { return service.getAll(); }

    @PostMapping
    public User create(@RequestBody User user) { return service.save(user); }
}
