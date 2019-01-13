import {Component, OnInit} from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ContactsService} from "../../service/contacts.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  form: FormGroup;
  contact: Contact = new Contact();
  mode: number = 1;

  constructor(
    public contactsService: ContactsService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
      dateNaissance: ['', [Validators.required]],
      tel: ['', [Validators.required, Validators.minLength(9)]],
      photo: ['', [Validators.required]]

    });
  }

  saveContact() {
    this.contact = this.form.value;
    this.contactsService.saveContact(this.contact)
      .subscribe(data => {
          this.contact = data;
          this.mode = 2
        }, err => {
          console.log(err);
        }
      )
  }

}
