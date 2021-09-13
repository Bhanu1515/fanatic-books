import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetails } from 'src/app/model/book';
import { DataService } from 'src/app/providers/data/data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: any;
  imageObject: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value) => {
      this.book = this.dataService.getDataByID(value.id);
    });
    this.imageObject = this.dataService.getRelatedImages();
  }
}
