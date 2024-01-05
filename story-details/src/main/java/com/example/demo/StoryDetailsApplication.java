package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
@EnableDiscoveryClient
@SpringBootApplication
public class StoryDetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(StoryDetailsApplication.class, args);
	}

}
