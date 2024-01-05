package com.example.demo.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.TableModel;
import com.example.demo.Repository.TableRepo;
import com.example.demo.Service.TableService;


import org.springframework.data.rest.webmvc.ResourceNotFoundException;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class TableController {
	
	@Autowired
	private TableService storyService;
	@Autowired
	private TableRepo tableRepo;
	
	@PostMapping("/posting")
	public String saveAll(@RequestBody TableModel story)
	{
		return storyService.saveBooks(story);
	}
	@GetMapping("/geting")
	public Iterable<TableModel> get()
	{
		return storyService.readAll();
	}
	
	
	@PutMapping("/updatebyid/{id}")
	public ResponseEntity<TableModel> Update(@PathVariable int id ,@RequestBody TableModel book) 
	{
		TableModel update=tableRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("not found exception"));
		update.setAuthorName(book.getAuthorName());
		update.setStoryTitle(book.getStoryTitle());
		update.setDescription(book.getDescription());
		update.setImageurl(book.getImageurl());
		update.setAudiourl(book.getAudiourl());
		tableRepo.save(update);
		return ResponseEntity.ok(update);
	}
	@GetMapping("/getwithid/{id}")
	public ResponseEntity<Optional<TableModel>> getWithId(@PathVariable int id)
	{
		Optional<TableModel>book=tableRepo.findById(id);
		return ResponseEntity.ok(book);
	}
	

	@DeleteMapping("/deleting/{id}")
	public void Delete(@PathVariable("id") int id)
	{
	     storyService.delete(id);
	}
	
	//get with query
	@GetMapping("/getforsearch/{bookName}/{authorName}")
	public Optional<TableModel>getbyName(@PathVariable String storyTitle,@PathVariable String authorName)
	{
		return storyService.getByName(storyTitle,authorName);
	}
	
	@GetMapping("/search")
    public Optional<TableModel> searchItems(@RequestParam("keyword") String keyword)
	{
        return tableRepo.findByKeyword(keyword);
    }

}
