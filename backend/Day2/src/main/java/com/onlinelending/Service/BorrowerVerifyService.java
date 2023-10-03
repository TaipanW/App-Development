package com.onlinelending.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.onlinelending.Entity.BorrowerVerifyEntity;
import com.onlinelending.Repository.BorrowerVerifyRepo;
@Service
public class BorrowerVerifyService implements BorrowerVerifyServiceInt {
	@Autowired
	private BorrowerVerifyRepo repo;

	@Override
	public List<BorrowerVerifyEntity> getBorrower() {
		return repo.findAll();
	}

	@Override
	public BorrowerVerifyEntity postBorrower(BorrowerVerifyEntity bvp) {
		return repo.save(bvp);
	}

	@Override
	public BorrowerVerifyEntity updateBorrower(BorrowerVerifyEntity bvu) {
		return repo.save(bvu);
	}

	@Override
	public void deleteBorrower(int id) {
		repo.deleteById(id);
	}
	


}
 