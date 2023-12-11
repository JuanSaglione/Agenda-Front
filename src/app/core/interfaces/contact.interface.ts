export interface Contact {
  userId?: number;
  id: number;
  name?: string;
  title?: string;
  body?: string;
}

// export const defaultContact: Contact = {
//   Id: 0,
//   Name: 'Seba',
//   LastName: 'Comparada',
//   Number: '+5412345678',
//   Description: 'Contact',
// };

// export const defaultContact1: Contact = {
//   Id: 1,
//   Name: 'Santi',
//   LastName: 'Crucianelli',
//   Number: '+5412345678',
//   Description: 'Contact1',
// };

// export const defaultContact2: Contact = {
//   Id: 2,
//   Name: 'Mateo',
//   LastName: 'Monti',
//   Number: '+5412345678',
//   Description: 'Contact2',
// };

// export const defaultContact3: Contact = {
//   Id: 3,
//   Name: 'Batu',
//   LastName: 'Fantin',
//   Number: '+5412345678',
//   Description: 'Contact3',
// };

export interface ContactJsonPlaceholder {
  userId?: number;
  id?: number;
  name?: string;
  title?: string;
  body?: string;
}

// export interface ContactJsonPlaceholder {
//   id?: number;
//   name?: string;
//   username?: string;
//   email?: string;
//   phone?: string;
//   website?: string;
// }
