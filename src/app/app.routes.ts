
import { RouterModule, Routes} from '@angular/router';
import { InsertarComponent } from './componentes/insertar/insertar.component';
import { ConsultarComponent } from './componentes/consultar/consultar.component';


const RUTAS_APP: Routes = [
{path: 'insertar', component:InsertarComponent},
{path: 'consultar', component:ConsultarComponent},
{path: '',redirectTo:'insertar',pathMatch:'full'}

];

export const APP_ROUTING = RouterModule.forRoot(RUTAS_APP);