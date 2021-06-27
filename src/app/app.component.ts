import { ArticleService } from './article.service';
import { Article } from './article';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit 123';
  subTitle = 'A place to share your <u>knowledge</u>.';

  keyword = 'sunt';

  // get articles() {
  //   return this.articleService.articles;
  // }
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articleService
      .getArticles('')
      .pipe(
        map(data => data.articles)
      )
      .subscribe(articles => {
        // console.log(data);
        this.articles = articles;
      });
  }

  searchArticle(keyword: string){
    this.keyword = keyword;
    // this.articleService.searchArticle(keyword);
    // this.articles = this.articleService.articles;
  }
}
