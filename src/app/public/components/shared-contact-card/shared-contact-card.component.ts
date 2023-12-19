import { Component, Input, OnInit } from '@angular/core';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contact.interface';

@Component({
  selector: 'app-shared-contact-card',
  templateUrl: './shared-contact-card.component.html',
  styleUrls: ['./shared-contact-card.component.scss'],
})
export class SharedContactCardComponent implements OnInit {
  constructor() {}

  @Input() contact: ContactJsonPlaceholder = {};

  ngOnInit(): void {
    console.log(this.contact);
  }
}
