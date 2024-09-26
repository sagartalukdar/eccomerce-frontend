package com.react.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.react.Config.JwtProvider;
import com.react.Exception.UserException;
import com.react.Model.User;
import com.react.Repository.UserRepository;
import com.react.Request.LoginRequest;
import com.react.Response.AuthResponse;
import com.react.Service.CustomUserServiceImpl;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtProvider jwtProvider;
	
	@Autowired
	private CustomUserServiceImpl customUserServiceImpl ;

	@PostMapping("/signup")
	public ResponseEntity<AuthResponse> Register(@RequestBody User user) throws UserException {
		String firstName=user.getFirstName();
		String lastName=user.getLastName();
		String email=user.getEmail();
		String password=user.getPassword();
		
		User isEmailExists=userRepository.findByEmail(email);
		if(isEmailExists!=null) {
			throw new UserException("email is already used in another account");
		}
		User createdUser=new User();
		createdUser.setEmail(email);
		createdUser.setPassword(passwordEncoder.encode(password));
		createdUser.setFirstName(firstName);
		createdUser.setLastName(lastName);
		
		User savedUser=userRepository.save(createdUser);
		Authentication authentication=new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String jwt=jwtProvider.generateToken(authentication);
		
		return new ResponseEntity<AuthResponse>(new AuthResponse(jwt,"registration successfull"),HttpStatus.CREATED);
		
	}
	@PostMapping("/signin")
	public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest){
		String email=loginRequest.getEmail();
		String password=loginRequest.getPassword();
		
		Authentication authentication=authenticate(email,password);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String jwt=jwtProvider.generateToken(authentication);
		
		return new ResponseEntity<AuthResponse>(new AuthResponse(jwt,"login successfull"),HttpStatus.CREATED);
	}
	
	private Authentication authenticate(String email,String password) {
		UserDetails userDetails=customUserServiceImpl.loadUserByUsername(email);
		if(userDetails==null) {
			throw new BadCredentialsException("invalid username");
		}
		if(!passwordEncoder.matches(password, userDetails.getPassword())) {
			throw new BadCredentialsException("invalid pasword");
		}
		return new UsernamePasswordAuthenticationToken(userDetails, null,userDetails.getAuthorities());
	}
}
