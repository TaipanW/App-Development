package com.onlinelending.Service;

import java.util.List;

import com.onlinelending.Entity.BorrowerVerifyEntity;

public interface BorrowerVerifyServiceInt {
	
	public List<BorrowerVerifyEntity> getBorrower(); 
	public BorrowerVerifyEntity postBorrower(BorrowerVerifyEntity bvp);
	public BorrowerVerifyEntity updateBorrower(BorrowerVerifyEntity bvu);
	public void deleteBorrower(int id);
	

}
