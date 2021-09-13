import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  bookLists = [
    {
      id: 1,
      title: 'Murder in Paradise',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: 'James Patterson',
      rating: '5',
      price: '15.90',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'Grand Central Publishing',
      language: 'English',
      paperback: '448 pages',
      itemWeight: '500g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
    {
      id: 2,
      title: 'Blood in the Low Country',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: 'Paul Attaway',
      rating: '4-5',
      price: '24.57',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'Grand Central Publishing',
      language: 'English',
      paperback: '330 pages',
      itemWeight: '500g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
    {
      id: 3,
      title: 'Abandoned in Death',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: 'J. D. Robb',
      rating: '4',
      price: '21.99',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'St. Martins Press',
      language: 'English',
      paperback: '352 pages',
      itemWeight: '500g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
    {
      id: 4,
      title: 'Devoted',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: 'Dean Koontz',
      rating: '5',
      price: '13',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'Grand Central Publishing',
      language: 'English',
      paperback: '448 pages',
      itemWeight: '500g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
    {
      id: 5,
      title: 'The Good Turn',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: 'Dervla McTiernan ',
      rating: '3',
      price: '36.99',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'Bolinda Publishing Pty Ltd ',
      language: 'English',
      paperback: '448 pages',
      itemWeight: '500g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
    {
      id: 6,
      title: 'The Terminal List',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: 'Jack Carr',
      rating: '5',
      price: '16.24',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'Atria/Emily Bestler Books',
      language: 'English',
      paperback: '434 pages',
      itemWeight: '300g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
    {
      id: 7,
      title: 'The Guardians: A Novel',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: 'John Grisham',
      rating: '3-5',
      price: '8.06',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'Dell',
      language: 'English',
      paperback: '386 pages',
      itemWeight: '500g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
    {
      id: 8,
      title: 'Three Hours in Paris',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: 'Cara Black',
      rating: '4',
      price: '14.18',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'Soho Crime',
      language: 'English',
      paperback: '361 pages',
      itemWeight: '500g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
    {
      id: 9,
      title: 'The Searcher: A Novel',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: ' Tana French',
      rating: '4',
      price: '27',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'Viking',
      language: 'English',
      paperback: '468 pages',
      itemWeight: '500g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
    {
      id: 10,
      title: 'One by One',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: 'Ruth Ware ',
      rating: '4',
      price: '25',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'Grand Central Publishing',
      language: 'English',
      paperback: '448 pages',
      itemWeight: '500g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
    {
      id: 11,
      title: 'The Family Upstairs',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: 'Lisa Jewell ',
      rating: '2',
      price: '22.64',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'Grand Central Publishing',
      language: 'English',
      paperback: '448 pages',
      itemWeight: '500g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
    {
      id: 12,
      title: 'The End of Her: A Novel',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam doloribus optio consectetur ex harum debitis, expedita non minima earum voluptatibus molestias deserunt fugiat necessitatibus et aspernatur cum quisquam rerum suscipit!',
      author: 'Shari Lapena, Karissa Vacker',
      rating: '3',
      price: '17',
      imageURL: '../assets/placeholder-image.png',
      publisher: 'Penguin Audio',
      language: 'English',
      paperback: '448 pages',
      itemWeight: '500g',
      dimensions: '4.19 x 1.13 x 7.5 inches',
    },
  ];

  relatedSliderImages = [
    {
      image: '../../../assets/placeholder-image.png',
      thumbImage: '../../../assets/placeholder-image.png',
      title: 'Book 1',
    },
    {
      image: '../../../assets/placeholder-image.png',
      thumbImage: '../../../assets/placeholder-image.png',
      title: 'Book 2',
    },
    {
      image: '../../../assets/placeholder-image.png',
      thumbImage: '../../../assets/placeholder-image.png',
      title: 'Book 3',
    },
    {
      image: '../../../assets/placeholder-image.png',
      thumbImage: '../../../assets/placeholder-image.png',
      title: 'Book 4',
    },
    {
      image: '../../../assets/placeholder-image.png',
      thumbImage: '../../../assets/placeholder-image.png',
      title: 'Book 5',
    },
    {
      image: '../../../assets/placeholder-image.png',
      thumbImage: '../../../assets/placeholder-image.png',
      title: 'Book 6',
    },
  ];

  constructor() {}

  getData() {
    return this.bookLists;
  }
  getDataByID(id: any) {
    return this.bookLists.find((x) => x.id === parseInt(id));
  }
  getRelatedImages() {
    return this.relatedSliderImages;
  }
}
