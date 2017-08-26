import { Routes, RouterModule } from '@angular/router';

import { DeliveryComponent } from './delivery';
import { OrderComponent, ReviewComponent, ORDER_ROUTES } from './order';

export const APP_ROUTES: Routes = [
    { path: 'review', component: ReviewComponent, pathMatch:'full' },
    { path: 'order', component: OrderComponent, children: ORDER_ROUTES },
    { path: 'delivery', component: DeliveryComponent, pathMatch: 'full' },
    { path: '', redirectTo: 'order', pathMatch: 'full' },
    { path: '**', redirectTo: 'order', pathMatch: 'full' }, // component: NotFound // TODO: create not found page
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
