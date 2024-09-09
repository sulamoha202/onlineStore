import { CategoryService } from './../../services/category.service';
import { Component } from '@angular/core';
import { Category } from '../../model/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories: Category[] = [];

  constructor(private categoryService:CategoryService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
}
