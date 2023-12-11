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
  contact!: ContactJsonPlaceholder;

  constructor(
    private route: ActivatedRoute,
    private contactS: ContactService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const contactId = params.get('id');

      if (contactId) {
        // Llama al servicio para obtener los detalles del contacto
        this.contactS
          .getContactDetails(parseInt(contactId))
          .then((contactDetails) => {
            this.contact = contactDetails;
            console.log(this.contact);
          })
          .catch((error) => {
            console.error(error);
            // Maneja el error, por ejemplo, muestra un mensaje al usuario
          });
      }
    });
  }
}
