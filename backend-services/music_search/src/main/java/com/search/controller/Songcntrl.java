package com.search.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.search.model.Songdata;
import com.search.repo.Songrepo;
import com.search.service.Songservice;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/search")
public class Songcntrl {
	@Autowired
	private Songservice service;
	@Autowired
	private Songrepo repo;

	

	@GetMapping("/search/{name}")
	public ResponseEntity<List<Songdata>> searchFromAll(@PathVariable("name") String name) {
		return new ResponseEntity<>(service.searchFromAll(name, name), HttpStatus.OK);
	}

//	@GetMapping("/files/{name}")
//	public ResponseEntity<List<Songdata>> searchFromAll(@PathVariable ("name")String name){
//		return new ResponseEntity<>(service.searchFromAll(name,name,name),HttpStatus.FOUND);
//	}
//	
	@GetMapping("/files")
	public ResponseEntity<List<Songdata>> getAllFiles() {
		return new ResponseEntity<>(repo.findAll(), HttpStatus.OK);
	}
//	@GetMapping()
//	public List<Object> getAllFiles() {
//		return service.ListAllFiles();

} 
