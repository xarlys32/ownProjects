package com.recipes.backend.api.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.recipes.backend.api.model.PersonModel;

@Service
public class UserServiceImpl implements UserService {

	@Override
	public List<PersonModel> findUsers() {
		List<PersonModel> lista = new ArrayList<PersonModel>();
		PersonModel person = new PersonModel("Nemesio", "Tyrant", "ROLE_USER", "STAARS");
		lista.add(person);
		person = new PersonModel("Lickerino", "Umbrella", "ROLE_ADMIN", "SLASH");
		lista.add(person);
		return lista;
	}

}
