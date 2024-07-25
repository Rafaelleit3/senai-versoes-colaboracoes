import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { AtualizarComponent } from './pages/atualizar/atualizar.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "cadastrar",
        component: CadastroComponent
    },
    {
        path: "editar/:id",
        component: AtualizarComponent
    }
];
