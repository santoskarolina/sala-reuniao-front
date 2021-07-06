import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './componentes/pages/sala/create/create.component';
import { ListComponent } from './componentes/pages/sala/list/list.component';
import { DetailsComponent } from './componentes/pages/sala/details/details.component';
import { UpdateComponent } from './componentes/pages/sala/update/update.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './componentes/templates/header/header.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/templates/footer/footer.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { EspacoComponent } from './componentes/pages/espaco/espaco.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    DetailsComponent,
    UpdateComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EspacoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    HttpClientModule, 
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule, 
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
