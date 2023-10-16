package com.flashfunds.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flashfunds.entity.BorrowerVerifyEntity;
import com.flashfunds.repository.BorrowerVerifyRepo;
import com.flashfunds.service.BorrowerVerifyService;
@Service
public class BorrowerVerifyServiceImpl implements BorrowerVerifyService {
    @Autowired
    private BorrowerVerifyRepo bvr;
    @Override
	public List<BorrowerVerifyEntity> getBorrower() {
		return bvr.findAll();
	}

	@Override
	public BorrowerVerifyEntity postBorrower(BorrowerVerifyEntity bve) {
		return bvr.save(bve);
	}

	@Override
	public BorrowerVerifyEntity putBorrower(BorrowerVerifyEntity bve) {
		return bvr.save(bve);
	}

	@Override
	public void deleteBorrower(int id) {
		bvr.deleteById(id);
		
	}



}
