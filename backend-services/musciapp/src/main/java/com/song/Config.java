package com.song;


import org.springframework.context.annotation.Bean; 
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class Config{ 

	@Bean
	public SecurityFilterChain filter(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.authorizeHttpRequests()
		.antMatchers("/actuator/*").permitAll()
		.anyRequest()
		.authenticated()
//		.and()
//		.oauth2Login()
		.and()
		.oauth2ResourceServer()
		.jwt(); // to redirect to oauth2 login page.
		http.cors();
		return http.build();
	}	
}
