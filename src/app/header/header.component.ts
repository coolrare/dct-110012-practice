import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword = 'test';
  isHighlight = false;
  fontSize = 24;

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(event: MouseEvent) {
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
    this.keyword += '!';
    console.log(event.altKey);
    // console.log(event);
  }
}
