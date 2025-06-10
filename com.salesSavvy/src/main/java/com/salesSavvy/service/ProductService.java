package com.salesSavvy.service;

import java.util.List;

import com.salesSavvy.entity.Product;

public interface ProductService {
	String addProduct(Product product);
	Product searchProduct(Long id);
	Product searchProduct(String name);
	Product searchProductByCategory(String category);
	String updatProduct(Product product);
	String deleteProduct(Long id);
	
	List<Product> getAllProducts();

}
