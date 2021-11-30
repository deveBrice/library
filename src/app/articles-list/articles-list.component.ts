import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const posts = [
      { id : 1, label : "Mon titre", content : "..." },
      { id : 2, label : "Mon titre", content : "..." },
    ];
    const comments = [
      { id : 1, post_id : 1, content : "..." },
      { id : 2, post_id : 2, content : "..." },
      { id : 3, post_id : 2, content : "..." },
      { id : 4, post_id : 2, content : "..." },
    ];
  }

}
