import { Component, OnInit } from '@angular/core';
import {ContactsService} from "../../service/contacts.service";
import {Contact} from "../../model/model.contact";

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  //contact:Contact=new Contact();
  constructor(public contactsService:ContactsService) { }

  ngOnInit() {
  }
  onSaveContact(dataForm){
    this.contactsService.saveContact(dataForm)
      .subscribe(data=>{}

        //this.mode=2
          ,err=>{
          console.log(err);
        }
      )

  }

}
