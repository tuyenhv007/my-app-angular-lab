import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit {
  title = 'Ứng dụng Angular đầu tiên';
  age: number = 21;
  name: string = 'Trịnh Văn Bảo';
  isMarried: boolean = false;
  user = {
    name: 'Vu Thi Dung',
    address: 'Hai Duong',
    age: 22,
    isMarried: false
  }
  imgLink: string = 'https://media.ngoisao.vn/news/2017/05/22/hotgirl-kieu-trinh-la-ai-2-ngoisao.vn-w580-h580.stamp2.jpg';
  link: string = 'http://news.zing.vn';
  textLink: string = 'Go to zing.vn';
  imgWidth: number = 500;
  isValid: boolean = true;
  tbWidth:number = 300;
  tbBorder:number = 1;

  isBorder:boolean = true;
  isChecked: number = 0; // 0 : add class, 1 : remove class


  constructor() {
  }

  ngOnInit(): void {
  }

  showInfo() {
    return `Tên : ${this.user['name']}`;
  }

}
