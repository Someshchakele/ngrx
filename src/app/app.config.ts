import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { counterReducer } from './shared/store/counter.reducer';
import { blogReducer } from './shared/store/Blog/blog.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({counter:counterReducer,blog:blogReducer}),
    provideEffects([]),
    provideStoreDevtools({
      maxAge: 2,
      logOnly: false
    })
  ]
};
