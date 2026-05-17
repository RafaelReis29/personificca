import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { CreateCharacterComponent } from './pages/create-character/create-character.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeatureGridComponent } from './components/feature-grid/feature-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogPageComponent,
    CreateCharacterComponent,
    CharacterDetailsComponent,
    HeroComponent,
    FeatureGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
