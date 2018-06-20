import { Http } from '@angular/http';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {
 idFormGroup:FormGroup;
   constructor(private httpService: Http) { 
     this.idFormGroup=new FormGroup({
      firstName: new FormControl('', Validators.required),
      
     })
//     firstName:new HTMLFormControlsCollection(' ',validators.required)
   }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.idFormGroup.value);

    const postData = {

    }
    const url = 'https://id-application-form.firebaseio.com/applicationIds.json';
    this.httpService.post(url, this.idFormGroup.value)
      .subscribe(rsp => console.log(rsp));
    console.log('Posted');
  }

}
