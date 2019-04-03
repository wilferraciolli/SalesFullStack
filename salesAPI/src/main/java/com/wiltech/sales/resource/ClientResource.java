package com.wiltech.sales.resource;

import com.wiltech.sales.model.Client;
import com.wiltech.sales.repository.ClientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/clients")
public class ClientResource {

    @Autowired
    private ClientRepo clientRepo;

    @GetMapping
    public List<Client> getClients() {
        return clientRepo.findAll();
    }
}
