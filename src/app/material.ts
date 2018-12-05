import {MatButtonModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import {MatTabsModule, MatTab} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule, MatToolbarModule, MatIconModule],
    exports: [MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule { }