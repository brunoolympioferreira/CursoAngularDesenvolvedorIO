import { TodoModule } from './demos/todo-list/todo.module';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { CadastroGuard } from './services/cadastro.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NgBrazil } from 'ng-brazil'
import { TextMask } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation'

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NavegacaoModule,
    HttpClientModule,
    TodoModule,
    TextMask.TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca938c99a0e9ff91029dc'
    })
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    //BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
