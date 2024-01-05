package com.example.demo.Service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Model.TableModel;
import com.example.demo.Repository.TableRepo;

@Service
public class TableService {

	@Autowired
	  TableRepo tableRepository;
	  
	  public TableModel create(TableModel book)
		{
			return tableRepository.save(book);
		}
		public Optional<TableModel> read(int id)
		{
			return tableRepository.findById(id);
		}
		public Optional<TableModel>getByName(String storyTitle,String authorName)
		{
			return tableRepository.getByBook(storyTitle, authorName);
		}
		
		
		public Optional<TableModel>getByName(String storyTitle)
		{
			return tableRepository.findByKeyword(storyTitle);
		}
		
		public TableModel update(TableModel book)
		{
			return tableRepository.save(book);
		}
		public void delete(int id)
		{
			tableRepository.deleteById(id);
		}
		public Iterable<TableModel> readAll()
		{
			return tableRepository.findAll();
		}
		
		public ResponseEntity<TableModel>updateById(int id,TableModel book)
		{
			tableRepository.save(book);
			return ResponseEntity.ok(book);
		}
		
		
		public Iterable<TableModel> sortBook(String field)
	  {
		  return tableRepository.findAll(Sort.by(Direction.DESC, field));
		//return bookRepository.findAll(Sort.by(field));
	  }
		public Iterable<TableModel> getData()
		{
			return tableRepository.findAll();
		}
	  public TableModel saveBook(TableModel book)
	  {
		  return tableRepository.save(book);
	  }
	  public String saveBooks(TableModel book)
	  {
		   tableRepository.save(book);
		   return "Thanks for Posting";
	  }
	  public Page<TableModel>pagingBook(int page,int pageSize)
	  {
		  Pageable paging=PageRequest.of(page, pageSize);
		  return tableRepository.findAll(paging);
	  }
	  public Page<TableModel>pagingAndSorting(int pageNo,int pageSize,String field)
	  {
		  Pageable paging=PageRequest.of(pageNo, pageSize).withSort(Sort.by(Direction.DESC, field));
		  return tableRepository.findAll(paging);
	  }
}

