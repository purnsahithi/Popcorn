import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MovieComponent } from './movie/movie.component';
import { DetailsComponent } from './details/details.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'joinus',component:JoinusComponent, children:[
    {path:'aboutus',component: AboutusComponent},
    {path:'login',component: LoginComponent},
    {path:'register',component: RegisterComponent},
    {path:'',redirectTo:'/joinus/aboutus',pathMatch:"full"}]
  },
  {path:'movie',component:MovieComponent},
  {path:'movie/:rank',component:DetailsComponent},
  {path:'payment',component:PaymentComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'',redirectTo:'/home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
