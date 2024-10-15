import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../../service/data-handler.service';
import { Category } from '../../model/Category';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {
    
  categories:Category[] | undefined;
  
  constructor(private dataHandler:DataHandlerService){
    
  }

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
    
  }
  
}
