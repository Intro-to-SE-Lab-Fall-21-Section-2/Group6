package com.example.emailsystem;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController
{
    @GetMapping("/")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
