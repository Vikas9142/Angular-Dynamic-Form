import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", []],
      // address: this.fb.array([
      //   this.fb.group({
      //     city: ["", []],
      //     state: ["", []],
      //     country: ["", []]
      //   })
      // ])
      address : this.fb.array([])
    });
  }

get retAddress() {
  return this.myForm.get('address') as FormArray;
}
  addAddress() {
    // this.myForm.get("address").push(
    //   this.fb.group({
    //     city: ["", []],
    //     state: ["", []],
    //     country: ["", []]
    //   })
    // );

    console.log(this.myForm);
    const addressGroup = this.fb.group ({
      city : ['',[]],
      state : ['',[]],
      country : ['',[]]
    })
    this.retAddress.push(addressGroup);
  }

  removeNode(param) {
   this.retAddress.removeAt(param);
  
  }
}
