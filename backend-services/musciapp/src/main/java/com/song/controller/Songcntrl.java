package com.song.controller;

import java.io.IOException; 

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import com.song.service.Songservice;

@CrossOrigin(origins = "http://127.0.0.1:3000")
@RestController
@RequestMapping("/api/document")
public class Songcntrl {
	@Autowired
	private Songservice service;
	
	@PostMapping("/upload")
	public ResponseEntity<String> uploadFile(@RequestParam(value = "music") MultipartFile file,
			HttpServletRequest request) throws IOException {
		String songname = request.getHeader("songname");
		String singer = request.getHeader("singer");

		service.createBucket();
		return new ResponseEntity<>(service.uploadFile(file, songname, singer), HttpStatus.OK);
	}

	
}
