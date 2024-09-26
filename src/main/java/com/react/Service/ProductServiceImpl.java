package com.react.Service;

import java.time.LocalDateTime;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.react.Exception.ProductException;
import com.react.Model.Category;
import com.react.Model.Product;
import com.react.Repository.CategoryRepository;
import com.react.Repository.ProductRepository;
import com.react.Request.createProductRequest;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private CategoryRepository categoryRepository;
	@Autowired
	private UserService userService;

	@Override
	public Product createProduct(createProductRequest req) {
		// TODO Auto-generated method stub
		Category topLavel=categoryRepository.findByName(req.getTopLavelCategory());
		if(topLavel==null) {
			Category topLavelCategory=new Category();
			topLavelCategory.setName(req.getTopLavelCategory());
			topLavelCategory.setLavel(1);
			
			topLavel=categoryRepository.save(topLavelCategory);
		}
		Category secondLavel=categoryRepository.findByNameAndParent(req.getSecondLavelCategory(), topLavel.getName());
		if(secondLavel==null) {
			Category secondLavelCategory=new Category();
			secondLavelCategory.setName(req.getSecondLavelCategory());
			secondLavelCategory.setParentCategory(topLavel);
			secondLavelCategory.setLavel(2);
			
			secondLavel=categoryRepository.save(secondLavelCategory);
		}
		Category thirdLavel=categoryRepository.findByNameAndParent(req.getThirdLavelCategory(), secondLavel.getName());
		if(thirdLavel==null) {
			Category thirdLavelCategory=new Category();
			thirdLavelCategory.setName(req.getThirdLavelCategory());
			thirdLavelCategory.setParentCategory(secondLavel);
			thirdLavelCategory.setLavel(3);
			
			thirdLavel=categoryRepository.save(thirdLavelCategory);
		}
		
		Product product=new Product();
		product.setTitle(req.getTitle());
		product.setDescription(req.getDescription());
		product.setColor(req.getColor());
		product.setDiscountedPrice(req.getDiscountedPrice());
		product.setDiscountPersent(req.getDiscountPersent());
		product.setImageUrl(req.getImageUrl());
		product.setBrand(req.getBrand());
		product.setPrice(req.getPrice());
		product.setSizes(req.getSizes());
		product.setQuantity(req.getQuantity());
		product.setCategory(thirdLavel);
		product.setCreatedAt(LocalDateTime.now());
		
		return productRepository.save(product);
	}

	@Override
	public String deleteProduct(Long productId) throws ProductException {
		Product product=findProductById(productId);
		product.getSizes().clear();
		productRepository.delete(product);
		return "product deleted successfully";
	}

	@Override
	public Product updateProduct(Long productId, Product req) throws ProductException {
		Product product=findProductById(productId);
		if(req.getQuantity()!=0) {
			product.setQuantity(req.getQuantity());
		}
		return productRepository.save(product);
	}

	@Override
	public Product findProductById(Long id) throws ProductException {
		Optional<Product> opt=productRepository.findById(id);
		if(opt.isEmpty()) {
			throw new ProductException("product not found with id "+id);
		}
		return opt.get();
	}

	@Override
	public List<Product> findProductByCategory(String category) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minPrice,
			Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
		Pageable pageable=PageRequest.of(pageNumber,pageSize);
		List<Product> products=productRepository.filterProduct(category, minPrice, maxPrice, minDiscount, sort);
		if(!colors.isEmpty()) {
			products=products.stream().filter(p->colors.stream().anyMatch(c->c.equalsIgnoreCase(p.getColor())))
					.collect(Collectors.toList());
		}
		if(stock!=null) {
			if(stock.equals("in_stock")) {
				products=products.stream().filter(p->p.getQuantity()>0).collect(Collectors.toList());
			}else if(stock.equals("out_of_stock")) {
				products=products.stream().filter(p->p.getQuantity()<1).collect(Collectors.toList());
			}
		}
		
		int startIndex=(int) pageable.getOffset();
		int endIndex=Math.min(startIndex+pageable.getPageSize(),products.size());
		
		List<Product> pageContent=products.subList(startIndex, endIndex);
		Page<Product>filterProducts=new PageImpl<>(pageContent,pageable,products.size());
		return filterProducts;
	}

}
