package com.lendingplatform.service;

import com.lendingplatform.dto.JwtAuthenticationResponse;
import com.lendingplatform.dto.RefreshTokenRequest;
import com.lendingplatform.dto.SigninRequest;
import com.lendingplatform.dto.SignupRequest;
import com.lendingplatform.entities.User;

public interface AuthenticationService {
	User signup(SignupRequest signupRequest);
	JwtAuthenticationResponse signin(SigninRequest signinRequest);
	JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
