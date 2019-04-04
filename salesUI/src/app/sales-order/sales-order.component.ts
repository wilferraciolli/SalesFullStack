import { Component, OnInit } from '@angular/core';
import {SalesService} from '../sales/sales.service';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {

  sale = {};
  item = {};
  clients: Array<any>;
  products: Array<any>;

  constructor(private saleService: SalesService) { }

  ngOnInit() {
    this.saleService.listClients()
      .subscribe(response => this.clients = response);



  }

}
