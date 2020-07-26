import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-t',
  templateUrl: './property-binding-t.component.html',

  styleUrls: ['./property-binding-t.component.css']
})
export class PropertyBindingTComponent implements OnInit {
title = 'Coders.Tokyo Updated';
imageSrc = 'https://salt.tikicdn.com/cache/280x280/ts/product/4f/df/60/98a0be169cc6c1fd9a3d9a5b5eed4e02.jpg';
textColor = 'tomato';
backgroundColor = 'pink'
  styleObj = {color: this.textColor, background: this.backgroundColor}
  withBorder = true;
  constructor() { }

  ngOnInit(): void {
  }

}
