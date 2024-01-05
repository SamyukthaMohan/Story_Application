package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.FavModel;
import com.example.demo.Repository.FavRepo;


@Service
public class FavService {

	@Autowired
	private FavRepo favrep;
	
	public List<FavModel> getuserdetails(){
		return favrep.findAll();
	}
	
	public Optional<FavModel> getuserByID(int id){
		return favrep.findById(id);
	}
	
	public void postDetails(FavModel logobj) {
		favrep.save(logobj);
	}
	
	public FavModel putDetails(FavModel logobj) {
		return favrep.save(logobj);
	}
	
	public void deleteByID(int id) {
		favrep.deleteById(id);
	}
}
