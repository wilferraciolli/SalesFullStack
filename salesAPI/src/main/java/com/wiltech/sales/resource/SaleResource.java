package com.wiltech.sales.resource;

import com.wiltech.sales.model.Sale;
import com.wiltech.sales.repository.SaleRepo;
import com.wiltech.sales.service.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/sales")
public class SaleResource {

    @Autowired
    private SaleService saleService;

    @Autowired
    private SaleRepo saleRepo;

    @GetMapping
    public List<Sale> getClients() {
        return saleRepo.findAll();
    }

    @PostMapping
    public Sale add(@RequestBody @Valid final Sale sale) {
        return saleService.add(sale);
    }
}
