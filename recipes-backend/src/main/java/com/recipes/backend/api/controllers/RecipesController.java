package com.recipes.backend.api.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.recipes.backend.api.model.PersonModel;


@RestController
@RequestMapping("/recipes")
public class RecipesController {
	
	@GetMapping(value="/saludo", produces = "application/json")
	public ResponseEntity<String> saludo(HttpServletResponse response) {
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin", "http://localhost:4200");
		headers.setContentType(MediaType.APPLICATION_JSON);
		String greeting = "Saludos desde backend";
		return new ResponseEntity<String>(greeting, headers, HttpStatus.OK);
	}
	
	@GetMapping(value="/modeljson", produces = "application/json")
	public ResponseEntity<PersonModel> sendJson(HttpServletResponse response) {
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin", "http://localhost:4200");
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		PersonModel personModel = new PersonModel("Nemesion", "Umbrella","aa","qwe");
		
		return new ResponseEntity<PersonModel>(personModel, headers, HttpStatus.OK);
	}
	
	@GetMapping(value="/listjson", produces = "application/json")
	public ResponseEntity<List<PersonModel>> sendListJson(HttpServletResponse response) {
		HttpHeaders headers = new HttpHeaders();
		headers.add("Access-Control-Allow-Origin", "http://localhost:4200");
		headers.setContentType(MediaType.APPLICATION_JSON);
		
		List<PersonModel> list = new ArrayList<PersonModel>();
		list.add(new PersonModel("Hunter", "Umbrella", "aa","oo"));
		list.add(new PersonModel("Lickerino", "Umbrella","aaa", "eaa"));
		
		return new ResponseEntity<List<PersonModel>>(list, headers, HttpStatus.OK);
	}
}
