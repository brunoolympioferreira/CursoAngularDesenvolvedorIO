import { ProdutosResolve } from './services/produto.resolve';
import { ProdutoService } from './services/produto.service';
import { ProdutoAppComponent } from './produto.app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoDetalheComponent } from './componentes/produto-card-detalhe.component';

import { ProdutoRoutingModule } from './produto.route';
import { ProdutoCountComponent } from './componentes/produto-count.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent,
        ProdutoAppComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    providers: [
        ProdutoService,
        ProdutosResolve
    ],
    exports: []
})
export class ProdutoModule { }