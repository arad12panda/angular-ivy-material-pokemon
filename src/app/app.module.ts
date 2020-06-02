import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule ],
  declarations: [ AppComponent, TopHeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
