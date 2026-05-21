import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { CreateCharacterComponent } from './pages/create-character/create-character.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogPageComponent },
  { path: 'personas/new', component: CreateCharacterComponent },
  { path: 'personas/:id', component: CharacterDetailsComponent },
  { path: 'personas/:id/edit', component: CreateCharacterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
