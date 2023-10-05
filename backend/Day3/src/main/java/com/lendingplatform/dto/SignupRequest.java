package com.lendingplatform.dto;

import lombok.Data;

@Data
public class SignupRequest {
  private String name;
  private String email;
  private String password;
  private String phone;
  private String c_password;
}
