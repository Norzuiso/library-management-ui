import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlertsService} from "../alerts/alerts.service";
import {LibraryService} from "../../services/library/library.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string = ""
  formGroup = new FormGroup({
    password: new FormControl(this.password, [Validators.required])
  });

  constructor(public libraryService: LibraryService,
              public alertsService: AlertsService,
              private router: Router,) {
  }

  ngOnInit(): void {
  }

  submitLogin() {
    this.libraryService.callLoginLibrary(this.password).subscribe(data => {
      if (data) {
        this.libraryService.libraryRole = "ADMINISTRADOR";
        this.alertsService.success("Te has logueado correctamente", {
          autoClose: true,
          keepAfterRouteChange: true
        });
        this.router.navigate(["/inicio"]);
      } else {
        this.alertsService.error("La contraseña es incorrecta, intentalo de nuevo", {
          autoClose: true,
          keepAfterRouteChange: true
        });
      }
    })
  }
}
