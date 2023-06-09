import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Broim Vir';
  chars = ["SM","BK","DL","Elf","MG"]
  constructor(public fb: FormBuilder) {}
  registrationForm = this.fb.group({
    name: ["",[Validators.required]],
    character: ['', [Validators.required]],
  });
  members:any= [];

  changeChar(e: any) {
    this.character?.setValue(e.target.value);
  }
  get character(){
    return this.registrationForm.get("character")
  }
  get name(){
    return this.registrationForm.get("name")
  }
  onSubmit(): void {
    let newMember = this.registrationForm.value
    let newUser:{name:string | undefined|null,char:string| undefined|null} = {
      name : newMember.name,
      char : newMember.character
    };
    this.members.push(newUser)
    console.log(this.members)
  }

  deleteMember(name:any) {
    console.log(name)
   this.members =  this.members.filter((member:any)=> member.name != name)
  }
}
