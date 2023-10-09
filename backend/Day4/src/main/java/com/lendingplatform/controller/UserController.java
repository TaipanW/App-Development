package com.lendingplatform.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lendingplatform.dto.SignupRequest;
import com.lendingplatform.repo.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
	
	public SignupRequest signupReq;
	@GetMapping
	public ResponseEntity<String> sayHello(){
		return ResponseEntity.ok("Hi "+signupReq.getName());
	}
}
