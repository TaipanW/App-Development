package com.lendingplatform.repo;

import java.util.Optional;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lendingplatform.entities.Role;
import com.lendingplatform.entities.User;
@Configuration
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
Optional<User> findByEmail(String email);
User findByRole(Role role);
}
