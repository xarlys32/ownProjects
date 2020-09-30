package com.recipes.backend.api.model;

public class PersonModel {
	private String name;
	private String surname;
	private String rol;
	private String passwd;
	
	
	public PersonModel(String name, String surname, String rol, String passwd) {
		this.name = name;
		this.surname = surname;
		this.rol = rol;
		this.passwd = passwd;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getRol() {
		return rol;
	}
	public void setRol(String rol) {
		this.rol = rol;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	
	
	
}
