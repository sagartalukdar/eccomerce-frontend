package com.react.Service;

import com.react.Exception.UserException;
import com.react.Model.User;

public interface UserService {

	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
}
