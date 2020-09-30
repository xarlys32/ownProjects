package com.recipes.backend.api.services;

import java.util.List;

import com.recipes.backend.api.model.PersonModel;

public interface UserService {
	List<PersonModel> findUsers();
}
