import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact.interface';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  contact: ContactJsonPlaceholder = {
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    location: '',
  };

  constructor(
    private route: ActivatedRoute,
    private contactS: ContactService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const contactId = params.get('contactId');

      if (contactId) {
        this.contactS
          .getContactDetails(parseInt(contactId))
          .then((contactDetails) => {
            this.contact = contactDetails;
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

  async clickSubmit() {
    const response = await this.contactS.updateContact(this.contact);
    if (response) {
      console.log(response);
    }
  }
}
