import {MatButtonModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import {MatTabsModule, MatTab} from '@angular/material/tabs';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule],
    exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule],
})
export class MaterialModule { }