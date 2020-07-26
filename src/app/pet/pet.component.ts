import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName = 'puppie';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  // petImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOXYQYvPJIM7Gf2F9BWbTCbC6TBxRbg02lRw&usqp=CAU';

  constructor() {
  }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }
  ngOnInit(): void {
  }

}
