package com.wiltech.sales.repository;

import com.wiltech.sales.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Long> {
}
