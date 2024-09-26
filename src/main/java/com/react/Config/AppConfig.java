package com.react.Config;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import jakarta.servlet.http.HttpServletRequest;

@Configuration
public class AppConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity https) throws Exception{
		https.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and().authorizeHttpRequests(authorize->authorize.requestMatchers("/api/**").authenticated().anyRequest()
				.permitAll()).addFilterBefore(new JwtValidator(), BasicAuthenticationFilter.class).csrf().disable()
		        .cors().configurationSource(new CorsConfigurationSource() {
					
					@Override
					public CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
						// TODO Auto-generated method stub
						CorsConfiguration ccf=new CorsConfiguration();
						ccf.setAllowedOriginPatterns(Arrays.asList("http://localhost:3000"));
						ccf.setAllowedMethods(Collections.singletonList("*"));
						ccf.setAllowCredentials(true);
						ccf.setAllowedHeaders(Collections.singletonList("*"));
						ccf.setExposedHeaders(Arrays.asList("Authorization"));
						ccf.setMaxAge(3600L);
						
						return ccf;
					}
				}).and().httpBasic().and().formLogin();
		return https.build();
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
