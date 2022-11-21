import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { DatePipe } from '@angular/common';

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
import { RegisterComponent } from './components/register/register.component';
import { ReportesComponent } from './user-components/reportes/reportes.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { MisAlertasComponent } from './user-components/mis-alertas/mis-alertas.component';
import { FiltrarReportesComponent } from './user-components/filtrar-reportes/filtrar-reportes.component';
import { PanelesComponent } from './user-components/paneles/paneles.component';
import { PanelComponent } from './user-components/panel/panel.component';
import { PanelesByViaComponent } from './user-components/paneles-by-via/paneles-by-via.component';

const appRoutes: Routes = [
  {path: '', component: LogUserComponent},
  {path:'registro', component: RegisterComponent},
  {path: ':type', component: MenuComponent},
  {path: ':type/:id/account-details', component: DetailsComponent},
  {path: ':type/:id/vias-asignadas', component: TableViasComponent},
  {path: ':type/mis-reportes', component: ReportesComponent},
  {path: ':type/mis-reportes/new', component: ReporteComponent},
  {path: 'funcionario/mis-alertas', component: MisAlertasComponent},
  {path: 'funcionario/mis-alertas/filtrar/:ini&:end', component: FiltrarReportesComponent},
  {path: 'funcionario/paneles', component: PanelesComponent},
  {path: 'funcionario/panel/:id', component: PanelComponent},
  {path: 'funcionario/paneles-by-via/:id', component: PanelesByViaComponent}
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
    TableViasComponent,
    RegisterComponent,
    ReportesComponent,
    ReporteComponent,
    MisAlertasComponent,
    FiltrarReportesComponent,
    PanelesComponent,
    PanelComponent,
    PanelesByViaComponent
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
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
