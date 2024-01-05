package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.PlaylistModel;

@Repository
public interface PlaylistRepo extends JpaRepository<PlaylistModel, Integer>{

}
