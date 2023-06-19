import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from '../../const/validation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  signupform!:FormGroup
 
  constructor() { }

  ngOnInit(): void {
     this.createsignupform()
      this.getallcontrol['password']
       .valueChanges
       .subscribe((res:any)=>{
        console.log(`reponce`);
        if(this.getallcontrol['password'].valid){
          this.getallcontrol['conformpassword'].enable()
        }else{
          this.getallcontrol['conformpassword'].disable()
        }
       })
  }

  createsignupform(){
    this.signupform=new FormGroup({
      fname:new FormControl(null,[Validators.required,Validators.maxLength(7),Validators.minLength(4),Validators.pattern(CustomRegex.onlyText)]),
      lname:new FormControl(null,[Validators.required,Validators.maxLength(7),Validators.pattern(CustomRegex.onlyText)]),
      gender:new FormControl(null),
      email:new FormControl(null,[Validators.required, Validators.pattern(CustomRegex.email)]),
      number:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required,Validators.pattern(CustomRegex.password)]),
      conformpassword:new FormControl({value:null, disabled:true}),
      DOB:new FormControl(null,[Validators.required])
    })
   
    
  }
   

  onsignup(){
    if(this.getallcontrol['password'].value === this.getallcontrol['conformpassword'].value && this.signupform.valid){
      console.log(this.signupform); 
       
    }
    this.signupform.reset()
    console.log(this.signupform); 
    
  }

  get getallcontrol(){
    return this.signupform.controls
   }

  get getusernamecontrol(){
   return this.signupform.get('fname') as FormControl
  }
}
