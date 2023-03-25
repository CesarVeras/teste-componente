import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcordeaoComponent } from './acordeao/acordeao.component';
import { FormsModule } from '@angular/forms';
import { BotaoComponent } from './botao/botao.component';

@NgModule({
  declarations: [
    AppComponent,
    AcordeaoComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
