package com.onlinelending.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onlinelending.Entity.BorrowerVerifyEntity;

public interface BorrowerVerifyRepo extends JpaRepository<BorrowerVerifyEntity, Integer> {

}
