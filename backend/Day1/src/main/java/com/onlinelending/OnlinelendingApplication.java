package com.onlinelending;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
@OpenAPIDefinition(
		info =@Info(
				title = "Online Lending",
				version = "1.1.2",
				description = "P2P lending platform",
				contact = @Contact(
						name = "Arjun K Shibu",
						email = "arjunbackupmailid@gmail.com"
						)
				)
		)

@SpringBootApplication
public class OnlinelendingApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlinelendingApplication.class, args);
	}

}
