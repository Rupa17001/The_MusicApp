package com.search.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.search.model.Songdata;



public interface Songrepo extends MongoRepository<Songdata,String> {
	
	public List<Songdata> findBySongnameContainingIgnoreCaseOrSingerContainingIgnoreCase(String songname, String singer);
}
