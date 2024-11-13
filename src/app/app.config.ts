import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { pizzaReducer } from './store/reducers/pizza.reducer';
// import { PizzaEffects } from './store/effects/pizza.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userReducer } from './store/reducers/user.reducer';


export const appConfig: ApplicationConfig = {
  providers: [
    AuthService,
    LoginComponent,
    ToastNotificationComponent,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideStore({ pizzaState: pizzaReducer,UserState:userReducer }),
    provideStoreDevtools(),
  ],
};