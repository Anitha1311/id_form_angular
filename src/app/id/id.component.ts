import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {
idFormGroup:FormGroup;
  constructor() { 
    this.idFormGroup=new this.idFormGroup
    firstName:new HTMLFormControlsCollection(' ',validators.required)
  }

  ngOnInit() {
  }

}
