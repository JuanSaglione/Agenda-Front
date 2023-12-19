import { Component, Input, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact.interface';
import { ContactService } from 'src/app/core/services/contact.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { ContactsComponent } from '../../pages/contacts/contacts.component';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  constructor(
    private cService: ContactService,
    private dialog: MatDialog,
    private cComponent: ContactsComponent
  ) {}

  @Input() contact: ContactJsonPlaceholder = {};

  ngOnInit(): void {
    console.log(this.contact);
  }

  async deleteContact(contactId: number | undefined) {
    if (contactId) {
      const response = await this.cService.deleteContact(contactId);

      if (response === true) {
        this.cComponent.getData(); //para recargar los contactos
        this.openPopUp('Contacto borrado correctamente');
      } else {
        this.openPopUp('Error al borrar contacto');
      }
    }
  }

  openPopUp(msg: string) {
    this.dialog.open(PopUpComponent, {
      width: '200px',
      height: '130px',
      data: {
        message: msg,
        type: 'ok',
      },
    });
  }
}
