package com.search.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.search.model.Songdata;
import com.search.repo.Songrepo;



@Service
public class Songservice {
	
	@Autowired
	private Songrepo repo;
	
	String bucketName="song";
	
	
	
	public List<Songdata> searchFromAll(String songname, String singer ){
		//System.out.println("name and album "+name +album);
		List<Songdata> m = repo.findBySongnameContainingIgnoreCaseOrSingerContainingIgnoreCase(songname, singer); 
		return m;
	}

	
//	public List<Object> ListAllFiles() {
//		ListObjectsV2Result listObjectsV2Result = s3client.listObjectsV2("song");
//		return listObjectsV2Result.getObjectSummaries().stream().map(S3ObjectSummary::getKey)
//				.collect(Collectors.toList());
//	}
}

