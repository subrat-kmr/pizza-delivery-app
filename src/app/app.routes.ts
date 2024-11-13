import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OrderCartComponent } from './order-cart/order-cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { RegisterComponent } from './register/register.component';
import { AllPizza } from './resolvers/allPizza.resolver';
import { OrderHistory } from './resolvers/order-history.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'pizzas', component: PizzaListComponent,
    resolve: {
      pizzas: AllPizza
    }
  },
  { path: 'pizzas/:id', component: PizzaDetailComponent },
  { path: 'cart', component: OrderCartComponent },
  {
    path: 'order-history', component: OrderHistoryComponent,
    resolve: {
      orders: OrderHistory
    }
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
