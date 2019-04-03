package com.wiltech.sales.repository;

import com.wiltech.sales.model.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepo extends JpaRepository<Sale, Long> {
}
