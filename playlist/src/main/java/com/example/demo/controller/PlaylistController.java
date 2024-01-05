package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.PlaylistModel;

import com.example.demo.service.PlaylistService;

@RestController
@CrossOrigin("*")
@RequestMapping("/playlist")
public class PlaylistController {

	@Autowired
	public PlaylistService plays;
	
	@GetMapping("/getplaylist")
	public List<PlaylistModel> getplaylistdetails(){
		return plays.getplaylistdetails();
	}
	
	@GetMapping("/getplaylistbyid/{id}")
	public Optional<PlaylistModel> getuserByID(@PathVariable int id){
		return plays.getuserByID(id);
	}
	@PostMapping("/postplaylist")
	public void saveDetails(@RequestBody PlaylistModel gd) {
		plays.saveData(gd);
	}
	
	
	@DeleteMapping("/deletedetails/{id}")
	public void deleteByID(@PathVariable int id) {
		plays.deleteByID(id);
	}
}
