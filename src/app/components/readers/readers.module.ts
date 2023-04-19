import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReadersComponent} from "./readers.component";
import {ShowReadersComponent} from './show-readers/show-readers.component';
import {DialogReadersComponent} from './dialog-readers/dialog-readers.component';
import {CreateReaderComponent} from './create-reader/create-reader.component';
import {InfoReaderComponent} from './info-reader/info-reader.component';


@NgModule({
  declarations: [
    ReadersComponent,
    ShowReadersComponent,
    DialogReadersComponent,
    CreateReaderComponent,
    InfoReaderComponent,
  ],
  exports: [
    ReadersComponent,
    ShowReadersComponent,
    DialogReadersComponent,
    CreateReaderComponent,
    InfoReaderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ReadersModule {
}
