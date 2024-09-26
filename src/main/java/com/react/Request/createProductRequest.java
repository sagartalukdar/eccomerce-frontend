package com.react.Request;

import java.util.HashSet;
import java.util.Set;

import com.react.Model.Size;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class createProductRequest {

	private String title;
	private String description;
	private String price;
	private String discountedPrice;
	private String discountPersent;
	private Integer quantity;
	private String brand;
	private String color;
	private Set<Size> sizes=new HashSet<>();
	private String imageUrl;
	private String topLavelCategory;
	private String secondLavelCategory;
	private String thirdLavelCategory;
}
