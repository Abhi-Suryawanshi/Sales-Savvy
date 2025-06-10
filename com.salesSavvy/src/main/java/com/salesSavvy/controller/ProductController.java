package com.salesSavvy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.salesSavvy.entity.Product;
import com.salesSavvy.service.ProductService;

@CrossOrigin("*")
@RestController
public class ProductController {
	@Autowired
	ProductService service;
	
	@PostMapping("/addProduct")
	public String addProduct(@RequestBody Product product) {
		return service.addProduct(product);
	}
	
	@GetMapping("/searchProduct")
	public Product searchProduct(@RequestParam long id) {
		return service.searchProduct(id);
	}
	
	@PostMapping("/updateProduct")
	public String updateProduct(@RequestBody Product product) {
		return service.updatProduct(product);
	}
	
	@GetMapping("/deleteProduct")
	public String deleteProduct(@RequestParam long id) {
		return service.deleteProduct(id);
	}
	
	@GetMapping("/getAllProducts")
	public List<Product> getAllProducts() {
		return service.getAllProducts();
	}


}
