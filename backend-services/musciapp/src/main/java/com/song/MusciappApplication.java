package com.song;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//@EnableEurekaClient
public class MusciappApplication {

	public static void main(String[] args) {
//		System.setProperty("server.port", "7070");
//		System.setProperty("spring.security.oauth2.resourceserver.jwt.jwk-set-uri", "http://localhost:8080/auth/realms/springrealm/protocol/openid-connect/certs");
//		System.setProperty("spring.servlet.multipart.max-request-size", "200MB");
//		System.setProperty("spring.servlet.multipart.max-file-size", "200MB");
//		System.setProperty("spring.servlet.multipart.file-size-threshold", "250KB");
//		System.setProperty("spring.data.mongodb.uri", "mongodb://localhost:27017/song_data");
		SpringApplication.run(MusciappApplication.class, args);
	}

}
