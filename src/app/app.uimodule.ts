import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

const matModules = [
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule
];

@NgModule({
    imports: [...matModules],
    exports: [...matModules]
})
export class AppUiModule {
}