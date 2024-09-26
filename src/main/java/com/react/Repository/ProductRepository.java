package com.react.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.react.Model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
    @Query("Select p from Product p "
    		+ "Where (p.category.name= :category OR :category='')"
    		+ "AND ((:minPrice is NULL AND :maxPrice is NULL )OR (p.discountedPrice BETWEEN :minPrice AND :maxPrice))"
    		+ "AND (:minDiscount is NULL OR p.discountPersent>=:minDiscount)"
    		+ "ORDER BY "
    		+ "CASE WHEN :sort='price_low' THEN p.discountedPrice END ASC,"
    		+ "CASE WHEN :sort='price_high' THEN p.discountedPrice END DESC ")
	public List<Product> filterProduct(String category,Integer minPrice,Integer maxPrice,Integer minDiscount,String sort);
}
