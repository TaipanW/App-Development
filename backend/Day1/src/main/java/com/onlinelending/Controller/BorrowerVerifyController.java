package com.onlinelending.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.onlinelending.Entity.BorrowerVerifyEntity;
import com.onlinelending.Service.BorrowerVerifyService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
public class BorrowerVerifyController {
	@Autowired
	private BorrowerVerifyService serv;
	@Tag(name = "List Products", description = "wejkhlwgejk")
	@GetMapping("/getBorr")
	public List<BorrowerVerifyEntity> getBorrower(){
		return serv.getBorrower();
	}
	@PostMapping("/postBorr")
	public BorrowerVerifyEntity postBorrower(@RequestBody BorrowerVerifyEntity ve) {
		return serv.postBorrower(ve);
	}
	@PutMapping("/putBorr")
	public BorrowerVerifyEntity updateBorrower(@RequestBody BorrowerVerifyEntity ve,@RequestParam int id) {
		ve.setId(id);
		return serv.updateBorrower(ve);
	}
	@DeleteMapping("/delBorr")
	public void deleteBorrower(@RequestParam int id) {
		serv.deleteBorrower(id);
	}
}
