package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Repository.StoryDetailsRepo;
import com.example.demo.model.StoryDetailsModel;

@Service
public class StoryDetailsService {
	
	@Autowired
	public StoryDetailsRepo detail;
	
	public List<StoryDetailsModel> getstorydetails(){
		return detail.findAll();
	}
	
	public Optional<StoryDetailsModel> getuserByID(int id){
		return detail.findById(id);
	}
	
	public StoryDetailsModel putDetails(StoryDetailsModel logobj) {
		return detail.save(logobj);
	}
	
	public void deleteByID(int id) {
		detail.deleteById(id);
	}


}
