import {Component, OnInit} from '@angular/core';
import {ReaderEntity} from "../../../entities/reader/readerEntity";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertsService} from "../../alerts/alerts.service";
import {ReadersService} from "../../../services/reader/readers.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-reader',
  templateUrl: './create-reader.component.html',
  styleUrls: ['./create-reader.component.css']
})
export class CreateReaderComponent implements OnInit {
  reader: ReaderEntity = new ReaderEntity();
  isCreated: boolean = false;

  formGroup = new FormGroup({
    name: new FormControl(this.reader.name, [Validators.required]),
    address: new FormControl(this.reader.address, [Validators.required]),
    phone: new FormControl(this.reader.phone, [Validators.required])
  });

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private alerts: AlertsService,
              private readerService: ReadersService) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.reader.id = parseInt(<string>params.get('id'))

    })
    if (this.reader.id != 0 && !isNaN(this.reader.id)) {
      this.readerService.callGetReaderByID(this.reader.id).subscribe(data => {
        this.reader = data;
        console.log("data:"+data);
        this.isCreated = true;
      })
    }
  }

  saveReader() {
    if(this.reader.address != "" && this.reader.name!="" && this.reader.phone != ""){
    this.readerService.callCreateReader(this.reader).subscribe(data => {
      if (data.id != null) {
        this.alerts.success("Lector guardado correctamente", {
          autoClose: true,
          keepAfterRouteChange: true
        });
        this.router.navigate(["/readers"])
      } else {
        this.alerts.error("Error al guardar lector", {
          autoClose: true,
          keepAfterRouteChange: true
        });
      }

    });
  }else{
    this.alerts.error("Todos los campos deben de tener información", {
      autoClose: true,
      keepAfterRouteChange: true
    });
  }
}

  deleteReader() {
    this.readerService.deleteById(this.reader.id).subscribe(data => {
      if (data) {
        this.router.navigate(['/readers'])
        this.alerts.success("Lector eliminado correctamente", {
          autoClose: true,
          keepAfterRouteChange: true
        });
      } else {
        this.alerts.error("El lector no se pudo eliminar", {
          autoClose: true,
          keepAfterRouteChange: true
        });
      }
    });
  }
}
