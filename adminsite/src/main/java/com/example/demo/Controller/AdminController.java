package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AdminModel;

import com.example.demo.Service.AdminService;


@RestController
public class AdminController {
	
	@Autowired
	public AdminService admin;
	
	@GetMapping("/getadmin")
	public List<AdminModel> getdashboarddetails(){
		return admin.getdashboarddetails();
	}
	
	@GetMapping("/getdashboardbyid/{id}")
	public Optional<AdminModel> getuserByID(@PathVariable int id){
		return admin.getuserByID(id);
	}
	@PostMapping("/postadmin")
	public void saveDetails(@RequestBody AdminModel sam) {
		admin.saveData(sam);
	}

}
