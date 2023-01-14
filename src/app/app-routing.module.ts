import { PerfilComponent } from './perfil/perfil.component';
import { ModalComponent } from './modal/modal.component';
import { ConfigComponent } from './config/config.component';
import { PlanosComponent } from './planos/planos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: 'main' , component: MainComponent  },
{path: 'dashboard' , component: DashboardComponent  },
{path: 'planos' , component: PlanosComponent  },
{path: 'modal' , component: ModalComponent  },
{path: 'perfil' , component: PerfilComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
