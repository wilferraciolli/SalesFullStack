import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SalesService} from '../sales/sales.service';
import {FormGroup} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {

  sale: any;
  item: any;
  clients: Array<any>;
  products: Array<any>;

  @Output() savedSale = new EventEmitter();

  constructor(private saleService: SalesService, private messageService: MessageService) {
  }

  ngOnInit() {
    this.saleService.listClients()
      .subscribe(response => this.clients = response);

    this.saleService.listProducts()
      .subscribe(response => this.products = response);

    this.initiateVars();
  }

  initiateVars() {
    this.sale = {items: [], delivery: 0.0, total: 0.0};
    this.item = {};
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

  addSale(frm: FormGroup) {
    this.saleService.addSale(this.sale)
      .subscribe(response => {
        // clear the form for new sales to be created
        frm.reset();

        this.initiateVars();

        // display message
        this.messageService.add({severity: 'success', detail: 'Order added successfully!'});

        // publish an event when a new sale was recorded
        this.savedSale.emit(response);
      });
  }

}
