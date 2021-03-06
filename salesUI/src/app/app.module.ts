import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, LOCALE_ID} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {FormsModule} from '@angular/forms';

import {CurrencyMaskModule} from 'ng2-currency-mask';
import {MessageService} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {DropdownModule, GrowlModule, InputTextModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SalesListComponent} from './sales-list/sales-list.component';
import {SalesOrderComponent} from './sales-order/sales-order.component';

// add locale settings
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SalesListComponent,
    SalesOrderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    DropdownModule,
    InputTextModule,
    CurrencyMaskModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    AppRoutingModule,
    GrowlModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pt'
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
