import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

/* Después de agregar AngularFireModule, también necesita agregar módulos 
para los @NgModules individuales que su aplicación necesita. */

/* AngularFirestoreModule
AngularFireAuthModule
AngularFireDatabaseModule
AngularFireStorageModule
AngularFireMessagingModule (Future release) */
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './componentes/chat/chat.component';
import { ChatService } from './servicios/chat.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LoginComponent } from './componentes/login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MientrasComponent } from './mientras/mientras.component';
import { InsertarComponent } from './componentes/insertar/insertar.component';
import { ConsultarComponent } from './componentes/consultar/consultar.component';
import { APP_ROUTING } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    MientrasComponent,
    InsertarComponent,
    ConsultarComponent
   ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    APP_ROUTING
    
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
