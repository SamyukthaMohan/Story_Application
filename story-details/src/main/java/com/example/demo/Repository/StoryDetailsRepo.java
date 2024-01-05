package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.StoryDetailsModel;

@Repository
public interface StoryDetailsRepo extends JpaRepository<StoryDetailsModel, Integer>{

}
