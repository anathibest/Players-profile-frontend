import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: '/' },

	{ path: 'about', component: AboutComponent },
	{ path: '', component: WelcomeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }