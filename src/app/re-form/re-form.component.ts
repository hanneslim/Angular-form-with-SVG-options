import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-re-form',
  templateUrl: './re-form.component.html',
  styleUrls: ['./re-form.component.scss'],
})
export class ReFormComponent {
  public reservationForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required], []),

    weekday: new FormControl('', [Validators.required], []),

    seat: new FormControl('', [Validators.required], []),
  });
}
