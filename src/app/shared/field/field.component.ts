import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styles: [
  ]
})
export class FieldComponent implements OnInit {
  @Input() label: string;
  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit(): void {
  }

}
