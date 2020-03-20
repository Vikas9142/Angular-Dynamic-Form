import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  person: FormGroup;
  myForm: FormGroup;
  messagefromparent = "Message sent and received from Parent To Child";
  messageReceivedByParent;
  dataMessage;
  apiData : any;
  constructor(private dataService: DataService, private fb: FormBuilder) {
    this.dataService.sharedMessage.subscribe(res => {
      this.dataMessage = res;
    });
  }

  ngOnInit() {
    //this.dataService.sharedMessage.next("Message Data Service")
    this.dataService.changeMessage("Hello from Siblings");
    localStorage.setItem("user", "Vikas");
    // this.person = new FormGroup({
    //   personName : new FormControl('Todd Moto', [Validators.required, Validators.minLength(2)]),
    //   personPassword : new FormControl( '123', [Validators.required, Validators.minLength(2)]),
    //   personEmail : new FormControl('')
    // })

    this.person = this.fb.group({
      personName: ["Todd Moto", [Validators.required, Validators.minLength(2)]],
      personPassword: ["123", [Validators.required, Validators.minLength(2)]],
      personEmail: [""]
    });

    this.person.patchValue({ personEmail: "vikas.amu@gmail.com" });

    this.myForm = this.fb.group({
      name: ["Urvashi", [Validators.required]],
      email: ["", []],
      address: this.fb.array([
        this.fb.group({
          city: ["", []],
          state: ["", []],
          country: ["", []]
        })
      ])
    });
  }

  updateInfo(m) {
    console.log(m);
  }

  receiveMessage(e) {
    this.messageReceivedByParent = e;
  }

  callAPI() {
    this.dataService.getAPIMethod().subscribe(res => {
      if (res) {
        this.apiData = res.filter(
          (element, index, inputArr) => element.userId === 5
        );
      }
    });
  }

  submitForm(personDetail) {
    console.log(personDetail);
  }

  reactiveForm(person) {
    console.log(person);
  }

  //   get retAddress() {
  //   return this.myForm.get('address') as FormArray;
  // }

  addAddress() {
    // this.myForm.get("address").push(
    //   this.fb.group({
    //     city: ["", []],
    //     state: ["", []],
    //     country: ["", []]
    //   })
    // );
    let usersArray = this.myForm.controls.address as FormArray;
    let addressGroup = this.fb.group({
      city: ["", []],
      state: ["", []],
      country: ["", []]
    });
    usersArray.push(addressGroup);
  }

  removeNode(param) {
    let usersArray = this.myForm.controls.address as FormArray;
    usersArray.removeAt(param);
  }
}
