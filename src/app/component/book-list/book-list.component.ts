import { Component, OnInit } from '@angular/core';
import { BookDetails } from 'src/app/model/book';
import { DataService } from 'src/app/providers/data/data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookLists:BookDetails[] = [];
  constructor(private dataService:DataService) {}

  ngOnInit(): void {
    this.bookLists = this.dataService.getData();
  }

}
