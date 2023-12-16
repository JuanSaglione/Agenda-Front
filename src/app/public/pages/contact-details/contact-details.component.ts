import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  ContactJsonPlaceholder,
  FakeContactJsonPlaceholder,
} from 'src/app/core/interfaces/contact.interface';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  changedContact!: FakeContactJsonPlaceholder;
  contact!: FakeContactJsonPlaceholder;

  constructor(
    private route: ActivatedRoute,
    private contactS: ContactService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const contactId = params.get('id');

      if (contactId) {
        this.contactS
          .getFakeContact(parseInt(contactId))
          .then((contactDetails) => {
            this.contact = contactDetails;
            this.changedContact = contactDetails;
            console.log(this.contact);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  }

  goToPreviousPage() {
    this.location.back();
  }

  clickSubmit(contactForm: NgForm) {
    console.log(this.contact);
    console.log(this.changedContact);
  }
}
