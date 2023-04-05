import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { counterReducer, messageReducer } from './store/reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, OneComponent, TwoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, message: messageReducer }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
