package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="story_details")
public class StoryDetailsModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String storyname;
	private String storygenre;
	private String authorname;
	private int volume;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStoryname() {
		return storyname;
	}
	public void setStoryname(String storyname) {
		this.storyname = storyname;
	}
	public String getStorygenre() {
		return storygenre;
	}
	public void setStorygenre(String storygenre) {
		this.storygenre = storygenre;
	}
	public String getAuthorname() {
		return authorname;
	}
	public void setAuthorname(String authorname) {
		this.authorname = authorname;
	}
	public int getVolume() {
		return volume;
	}
	public void setVolume(int volume) {
		this.volume = volume;
	}
	
	
	

}
