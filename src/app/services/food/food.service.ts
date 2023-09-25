import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag)); 
  }

  getAllTag():Tag[]{
    return[
      { name:'All',count:8},
      { name:'FastFood',count:4},
      { name:'Pizza',count:2},
      { name:'Lunch',count:3},
      { name:'SlowFood',count:2},
      { name:'HamBurger',count:2},
      { name:'Fry',count:1},
      { name:'Soup',count:1},      
    ]
  }


  getAll(): Foods[] {
    return [ 
      {
        id: 1,
        name: ' Spicy Pastha',
        price: 12,
        cookTime: '10-20',
        favorite: false,
        origins: ['Italy', 'China', 'Korea'],
        star: 4.5,
        imageUrl: '/assets/1.jpg',
        tags: ['FastFood', 'Pastha'],
      },
      {
        id: 2,
        name: 'Beaf Biriyani',
        price: 16,
        cookTime: '30-45',
        favorite: false,
        origins: ['Indian'],
        star: 4.5,
        imageUrl: '/assets/2.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 3,
        name: 'Chicken tikka',
        price: 25,
        cookTime: '10-15',
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/3.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 4,
        name: 'Veg Pulav',
        price: 19,
        cookTime: '10-20',
        favorite: false,
        origins: ['italy', 'India'],
        star: 4.5,
        imageUrl: '/assets/4.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 5,
        name: 'Chicken Curry',
        price: 23,
        cookTime: '15-34',
        favorite: false,
        origins: ['italy', 'Japan', 'India'],
        star: 4.5,
        imageUrl: '/assets/5.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 6,
        name: 'Alfam',
        price: 45,
        cookTime: '10-25',
        favorite: false,
        origins: ['italy', 'Europe'],
        star: 4.5,
        imageUrl: '/assets/6.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 7,
        name: 'Burger',
        price: 15,
        cookTime: '10-20',
        favorite: false,
        origins: ['Germany'],
        star: 4.5,
        imageUrl: '/assets/7.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 8,
        name: 'Mutton Roll',
        price: 8,
        cookTime: '10-20',
        favorite: false,
        origins: ['Ireland'],
        star: 4.5,
        imageUrl: '/assets/8.jpg',
        tags: ['FastFood', 'Pizza'],
      }
    ];
  }
}
