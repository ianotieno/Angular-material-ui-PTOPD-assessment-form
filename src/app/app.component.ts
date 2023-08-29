import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private formBuilder:FormBuilder){

  }

  profileForm=this.formBuilder.group({
  ReferringDoctor:['',Validators.required],
  Diagnosis:['',Validators.required],
  chiefcomplians:['',Validators.required],
  PastMedical:['',Validators.required],
  SurgicalHistory:['',Validators.required],
  Rue:['',Validators.required],
  Lue:['',Validators.required],
  Rle:['',Validators.required],
  Lle:['',Validators.required],
  Rom:['',Validators.required],
  Gait:['',Validators.required],
  Mobility:['',Validators.required],
  Motor:['',Validators.required],
  RightUpper:['',Validators.required],
  });
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }
}

