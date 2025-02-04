package com.react.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.react.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	public User findByEmail(String Email);
}
