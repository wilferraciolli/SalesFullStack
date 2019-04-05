import {Component, OnInit} from '@angular/core';
import {SalesService} from '../sales/sales.service';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {

  sale: any = {items: [], delivery: 0.0, total: 0.0};
  item: any = {};
  clients: Array<any>;
  products: Array<any>;

  constructor(private saleService: SalesService) {
  }

  ngOnInit() {
    this.saleService.listClients()
      .subscribe(response => this.clients = response);

    this.saleService.listProducts()
      .subscribe(response => this.products = response);
  }

  addItem() {
    // Calculate the total
    this.item.total = (this.item.product.value * this.item.quantity);

    this.sale.items.push(this.item);

    // initiates a new the item
    this.item = {};

    // calculate Total
    this.calculateTotal();
  }

  calculateTotal() {
    // calculate order total with delivery
    const totalItems = this.sale.items
      .map(item => (item.product.value * item.quantity))
      .reduce((total, currentValue) => total + currentValue, 0);

    this.sale.total = totalItems + this.sale.delivery;
  }

}
