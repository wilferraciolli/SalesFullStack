package com.wiltech.sales.repository;

import com.wiltech.sales.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepo extends JpaRepository<Client, Long> {
}
