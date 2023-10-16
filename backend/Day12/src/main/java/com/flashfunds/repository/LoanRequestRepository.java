package com.flashfunds.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flashfunds.entity.LoanRequestEntity;

public interface LoanRequestRepository extends JpaRepository<LoanRequestEntity, Long> {

}
