import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { TestDate } from '../date/TestDate';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getCategories(): Category[]{

    return TestDate.categories
  }
}
