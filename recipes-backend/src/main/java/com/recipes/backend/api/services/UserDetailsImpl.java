package com.recipes.backend.api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.recipes.backend.api.model.PersonModel;

@Service
public class UserDetailsImpl implements UserDetailsService{
	
	@Autowired
	private UserService userService;
	
	private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		List<PersonModel> listPerson = userService.findUsers();
		List<PersonModel> personFilter = listPerson.stream().filter(
				person -> person.getName().equals(username)).collect(Collectors.toList());
		if (personFilter.size() > 0) {
		authorities.add(new SimpleGrantedAuthority(personFilter.get(0).getRol()));
		 return new User(
				 personFilter.get(0).getName(), 
				 passwordEncoder.encode(personFilter.get(0).getPasswd()), 
					true, true, true, true, authorities);
		} else {
			throw new UsernameNotFoundException("Usuario no encontrado");
		}
	}

}
