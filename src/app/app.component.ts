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
  RightUpper:['',Validators.required],
  Left:['',Validators.required],
  RightLower:['',Validators.required],
  Balance:['',Validators.required],
  Pain:['',Validators.required],
  Gait:['',Validators.required],
  Posture:['',Validators.required],
  SpecialTests:['',Validators.required],
  Assessment:['',Validators.required],
  Precautions:['',Validators.required],
  Treatment:['',Validators.required],
  WeekDuration:['',Validators.required],
  Interventions:['',Validators.required],
  });
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }
}

