import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
mode:number=1;
contact:Contact
  constructor(public activatedRoute:ActivatedRoute) {
           console.log(activatedRoute.snapshot.params['id']);
  }

  ngOnInit() {
  }
  updateContact(){

  }
}
