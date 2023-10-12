package com.flashfunds.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.flashfunds.entity.BorrowerVerifyEntity;
@Repository
public interface BorrowerVerifyRepo extends JpaRepository<BorrowerVerifyEntity, Integer> {

}
