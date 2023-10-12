package com.flashfunds.service;

import java.util.List;

import com.flashfunds.entity.BorrowerVerifyEntity;

public interface BorrowerVerifyService {
	 public List<BorrowerVerifyEntity> getBorrower();
	 public BorrowerVerifyEntity postBorrower(BorrowerVerifyEntity bve);
	 public BorrowerVerifyEntity putBorrower(BorrowerVerifyEntity bve);
	 public void deleteBorrower(int id);
}
