import { Article } from './article';
import { Pipe, PipeTransform } from '@angular/core';
import { ArticleService } from './article.service';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {

  constructor(private articleService: ArticleService) {

  }

  transform(value: Article[], keyword: string): Article[] {
    return this.articleService.filterArticles(value, keyword);
  }

}
