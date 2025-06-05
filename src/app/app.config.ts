import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    provideAnimations(),
    provideToastr({
        timeOut: 1000,
        positionClass: 'toast-top-right',
        preventDuplicates: false, 
        closeButton: true,
        progressBar: true,
        tapToDismiss: false,
        extendedTimeOut: 2000
    }),
  ]
};
