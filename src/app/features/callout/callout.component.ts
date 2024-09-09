import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { content } from '../../docs/content/content';
import { LanguageService } from '../../services/navLanguage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'callout',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './callout.component.html',
  styleUrl: './callout.component.css'
})
export class CalloutComponent {
  @Input() path!: [string, string, string];
  @Input() article!: string;
  @Input() write!: string;
  @Input() type!: string;

  constructor(
    private languageService: LanguageService,
  ) { }

  writer: string = '';

  ngOnInit(): void {
    this.article = this.concatArticle(this.article);
    this.subscribeToLanguageChanges();
    this.resolveContent();
  }

  languageSubscription!: Subscription;
  private subscribeToLanguageChanges(): void {
    this.languageSubscription = this.languageService.currentLanguage$.subscribe((Lang) => {
      this.path[0] = Lang;
      this.resolveContent();
    });
  }

  private resolveContent(): void {
    const [lang, title, page] = this.path;
    const article = this.article;
    const write = this.write;
    this.writer = content[lang][title][page][article][write];
    console.log(`Paragraph: ${this.writer}`);
    console.log(`path: ${this.path}`);
    console.log(`article: ${this.article}`);
    // this.writer = content[lang][title][page][article].d1;
  }

  private concatArticle(article: string): string {
    return `article_${article}`;
  }

}
