import { Routes, RouterModule } from '@angular/router';

import { MenuComponent, ProductListComponent, ProductComponent } from './menu';
import { CheckoutComponent } from './checkout';

export const ORDER_ROUTES: Routes = [
    { path: '', redirectTo: 'menu', pathMatch:'full' },
    { path: 'category/:id/product/:prod_id', component: ProductComponent },
    { path: 'category/:id', component: ProductListComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'cart', component: CheckoutComponent },
];
