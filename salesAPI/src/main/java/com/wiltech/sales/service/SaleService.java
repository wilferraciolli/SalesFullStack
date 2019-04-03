package com.wiltech.sales.service;

import com.wiltech.sales.model.Sale;
import com.wiltech.sales.repository.ProductRepo;
import com.wiltech.sales.repository.SaleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
public class SaleService {

    @Autowired
    private SaleRepo saleRepo;

    @Autowired
    private ProductRepo productRepo;

    public Sale add(final Sale sale) {
        //populate sale details
        sale.setCreatedDateTime(LocalDateTime.now());
        sale.getItems().forEach(item -> {
            item.setSale(sale);
            item.setProduct(productRepo.findById(item.getProduct().getId()).orElse(null));
        });

        //calculate the value of each product against the quantity
        final BigDecimal totalItems = sale.getItems().stream()
                .map(item -> item.getProduct().getValue().multiply(new BigDecimal(item.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        sale.setTotal(totalItems.add(sale.getDelivery()));

        return saleRepo.save(sale);
    }
}
