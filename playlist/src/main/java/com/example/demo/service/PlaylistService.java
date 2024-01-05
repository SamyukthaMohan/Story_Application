package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.PlaylistRepo;
import com.example.demo.model.PlaylistModel;


@Service
public class PlaylistService {

	@Autowired
	private PlaylistRepo listrepo;
	
	public List<PlaylistModel> getplaylistdetails(){
		return listrepo.findAll();
	}
	
	public Optional<PlaylistModel> getuserByID(int id){
		return listrepo.findById(id);
	}
	public void saveData(PlaylistModel pl) {
		
		listrepo.save(pl);
	}
	public void deleteByID(int id) {
		listrepo.deleteById(id);
	}
}
