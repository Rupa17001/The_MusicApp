package com.song.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.AmazonS3Exception;

import com.song.model.Songdata;
import com.song.repo.Songrepo;

@Service
public class Songservice {
	
	@Autowired
	private Songrepo repo;
	@Autowired 
	private AmazonS3 s3client;
	
	@Value("${minio_bucketName}")
	String bucketName ;
	// creates MinIO Bucket
	public void createBucket() {
		 
	    try {
	  
	        s3client.createBucket(bucketName);
	    }
		catch( AmazonS3Exception e)
	    {
	        System.err.println(e.getErrorMessage());
	    }
	} 
	public String uploadFile(MultipartFile file, String songname, String singer) throws IOException {
		
		File fileobj = convertMultipartFiletoFile(file);
		Songdata m = new Songdata();
		
		
		Songdata m1 = repo.save(m);
		m1.setSongname(songname);
		m1.setSinger(singer);
		m1.setPath("http://127.0.0.1:9000/"+bucketName+"/"+m.getId());
		
		Songdata m2 = repo.save(m1);
		String fileName = m2.getId();
		s3client.putObject("song", fileName, fileobj);
		return "File Uploaded";
	}   
	// part of above method
	public File convertMultipartFiletoFile(MultipartFile file) throws IOException {
		File convertFile = new File(file.getOriginalFilename());
		try (FileOutputStream fos = new FileOutputStream(convertFile)) {
			fos.write(file.getBytes());
			fos.close();
		}
		return convertFile;
	}
	
	
}
