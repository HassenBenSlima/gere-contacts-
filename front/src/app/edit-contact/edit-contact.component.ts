import {Component, OnInit} from '@angular/core';
import {Contact} from "../../model/model.contact";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../../service/contacts.service";

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  mode: number = 1;
  contact: Contact = new Contact();
  idContact: number;

  constructor(public activatedRoute: ActivatedRoute, public contactService: ContactsService, public router: Router) {
    this.idContact = activatedRoute.snapshot.params['id'];
  }


  ngOnInit() {
    this.contactService.getContact(this.idContact)
      .subscribe(data => {
        this.contact = data;
      }, err => {
        console.log(err);
      })

  }

  updateContact(id: number) {
    this.contactService.updateContact(this.contact)
      .subscribe(data => {
        alert('mise a jour avec succée ');
        this.router.navigate(['contacts'])
      }, err => {
        console.log(err);
      })
  }
}
