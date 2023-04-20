import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReadersComponent} from "./readers.component";
import {ShowReadersComponent} from './show-readers/show-readers.component';
import {DialogReadersComponent} from './dialog-readers/dialog-readers.component';
import {CreateReaderComponent} from './create-reader/create-reader.component';
import {InfoReaderComponent} from './info-reader/info-reader.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import { ShowReadersTableComponent } from './show-readers/show-readers-table/show-readers-table.component';
import { FilterReaderComponent } from './filter-reader/filter-reader.component';


@NgModule({
  declarations: [
    ReadersComponent,
    ShowReadersComponent,
    DialogReadersComponent,
    CreateReaderComponent,
    InfoReaderComponent,
    ShowReadersTableComponent,
    FilterReaderComponent,
  ],
  exports: [
    ReadersComponent,
    ShowReadersComponent,
    DialogReadersComponent,
    CreateReaderComponent,
    InfoReaderComponent,
    ShowReadersTableComponent,
    FilterReaderComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink
  ]
})
export class ReadersModule {
}
