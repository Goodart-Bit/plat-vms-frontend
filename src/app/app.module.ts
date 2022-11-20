import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FuncionarioNavbarComponent } from './components/funcionario-navbar/funcionario-navbar.component';
import { AgenteNavbarComponent } from './components/agente-navbar/agente-navbar.component';
import { LogUserComponent } from './components/log-user/log-user.component';
import { MenuComponent } from './user-components/menu/menu.component';
import { DetailsComponent } from './user-components/details/details.component';
import { TableViasComponent } from './user-components/table-vias/table-vias.component';

const appRoutes: Routes = [
  {path: '', component: LogUserComponent},
  {path: ':type/:id', component: MenuComponent},
  {path: ':type/:id/account-details', component: DetailsComponent},
  {path: ':type/:id/vias-asignadas', component: TableViasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FuncionarioNavbarComponent,
    AgenteNavbarComponent,
    LogUserComponent,
    MenuComponent,
    DetailsComponent,
    TableViasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
