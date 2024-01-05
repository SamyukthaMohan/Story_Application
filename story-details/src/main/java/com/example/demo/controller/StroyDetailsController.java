package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.StoryDetailsService;
import com.example.demo.model.StoryDetailsModel;


@RestController
@RequestMapping("/story")
public class StroyDetailsController {
	
	@Autowired
	public StoryDetailsService detailserver;
	
	@GetMapping("/getstorydetails")
	public List<StoryDetailsModel> getstorydetails(){
		return detailserver.getstorydetails();
	}
	
	@GetMapping("/getstorydetailsbyid/{id}")
	public Optional<StoryDetailsModel> getuserByID(@PathVariable int id){
		return detailserver.getuserByID(id);
	}
	
	@PutMapping("/putstorydetails/{id}")
	public void putDetails(@PathVariable int id,@RequestBody StoryDetailsModel sdm) {
		sdm.setId(id);
		detailserver.putDetails(sdm);
	}
	
	@DeleteMapping("/deletestorydetails/{id}")
	public void deleteByID(@PathVariable int id) {
		detailserver.deleteByID(id);
	}

}
