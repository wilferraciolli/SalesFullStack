package com.wiltech.sales.resource;

import com.wiltech.sales.model.Product;
import com.wiltech.sales.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/products")
public class ProductResource {

    @Autowired
    private ProductRepo productRepo;

    @GetMapping
    public List<Product> getClients() {
        return productRepo.findAll();
    }
}
