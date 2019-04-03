import {Component, OnInit} from '@angular/core';

import {SalesService} from '../sales/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  sales: Array<any>;

  constructor(private salesService: SalesService) {
  }

  ngOnInit() {
    this.salesService.listSales()
      .subscribe(response => this.sales = response);
  }

}
