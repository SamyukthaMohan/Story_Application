package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.TableModel;

import jakarta.transaction.Transactional;

@Repository
public interface TableRepo extends JpaRepository<TableModel, Integer> ,PagingAndSortingRepository<TableModel, Integer>{

	
	@Query(value="select * from BookDetails where bookName=?1 or authorName=?2", nativeQuery=true)
	public Optional<TableModel> getByBook(String storyTitle,String AuthorName);
	
	@Transactional
	@Query(value="select * from BookDetails where bookName=?1", nativeQuery=true)
	public Optional<TableModel> findByKeyword(String keyword);
}
