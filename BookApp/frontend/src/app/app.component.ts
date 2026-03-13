import { Component } from '@angular/core';
import { Book } from './models/book.model';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedBook: Book | null = null;
  refreshTrigger = 0;

  constructor(private bookService: BookService) {}

  onBookSubmitted(book: Book): void {
    if (book.id) {
      this.bookService.updateBook(book.id, book).subscribe({
        next: () => {
          this.selectedBook = null;
          this.refreshTrigger++;
        }
      });
    } else {
      this.bookService.createBook(book).subscribe({
        next: () => {
          this.refreshTrigger++;
        }
      });
    }
  }

  onEditBook(book: Book): void {
    this.selectedBook = { ...book };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onCancelEdit(): void {
    this.selectedBook = null;
  }
}
