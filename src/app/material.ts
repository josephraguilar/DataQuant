import {MatButtonModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import {MatTabsModule, MatTab} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';


@NgModule({
    imports: [MatTableModule, MatSortModule, MatCardModule, MatButtonToggleModule, MatRadioModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule, MatToolbarModule, MatIconModule],
    exports: [MatTableModule, MatSortModule, MatCardModule, MatButtonToggleModule, MatRadioModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatTabsModule, MatToolbarModule, MatIconModule],
})
export class MaterialModule { }