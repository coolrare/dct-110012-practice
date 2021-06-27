import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  @Input() keyword = 'test';
  @Output() keywordChange = new EventEmitter<string>();

  isHighlight = false;
  fontSize = 24;

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(event: MouseEvent) {
    this.search.emit(this.keyword);
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
    // this.keyword += '!';
    console.log(event.altKey);
    // console.log(event);
  }

  keywordInput() {
    this.keywordChange.emit(this.keyword);
  }
}
