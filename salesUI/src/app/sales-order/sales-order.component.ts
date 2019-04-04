import { Component, OnInit } from '@angular/core';
import {SalesService} from '../sales/sales.service';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {

  sale: any = {items: [] };
  item: any = {};
  clients: Array<any>;
  products: Array<any>;

  constructor(private saleService: SalesService) { }

  ngOnInit() {
    this.saleService.listClients()
      .subscribe(response => this.clients = response);

    this.saleService.listProducts()
      .subscribe(response => this.products = response);
  }

  addItem() {
    // Calculate the total
    this.item.total = this.item.product.value * this.item.quantity;

    this.sale.items.push(this.item);

    // initiates a new the item
    this.item = {};
  }

}
