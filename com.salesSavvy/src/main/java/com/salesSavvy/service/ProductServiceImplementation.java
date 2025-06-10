package com.salesSavvy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.salesSavvy.entity.Product;
import com.salesSavvy.repository.ProductRepository;

@Service
public class ProductServiceImplementation implements ProductService{
	
	@Autowired
	ProductRepository repo;
	
	@Override
	public String addProduct(Product product) {
		repo.save(product);
		return "Product added successfully";
	}

	@Override
	public Product searchProduct(Long id) {
		return repo.findById(id).get();
	}

	@Override
	public Product searchProduct(String name) {
		return repo.findByName(name);
	}
	
	@Override
	public Product searchProductByCategory(String category) {
		return repo.findByCategory(category);
	}


	@Override
	public String updatProduct(Product product) {
		repo.save(product);
		return "Product updated succcessfully";
	}

	@Override
	public String deleteProduct(Long id) {
		repo.deleteById(id);
		return "Product deleted successfully";
	}

	@Override
	public List<Product> getAllProducts() {
		return repo.findAll();
	}

}
