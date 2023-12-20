import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact.interface';
import { ContactService } from 'src/app/core/services/contact.service';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  @ViewChild('contactForm') contactForm!: NgForm;
  formChanged: boolean = false;

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
    private location: Location,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const contactId = params.get('contactId');

      if (contactId) {
        this.contactS
          .getContactDetails(parseInt(contactId))
          .then((contactDetails) => {
            this.contact = contactDetails;
            this.contactForm.reset(this.contact);
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
      this.openPopUp('Contacto editado correctamente');
      this.contactForm.reset(this.contact);
    }
  }

  hasFormChanged(): boolean {
    return this.formChanged;
  }

  onFormChange() {
    console.log('changed');
    this.formChanged = true;
    this.cdr.detectChanges();
  }

  openPopUp(msg: string) {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '200px',
      data: {
        message: msg,
        type: 'ok',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.goToPreviousPage();
    });
  }
}
