import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Output() editBook = new EventEmitter<Book>();
  @Input() refreshTrigger: number = 0;

  books: Book[] = [];
  filteredBooks: Book[] = [];
  isLoading = true;
  searchQuery = '';
  deleteConfirmId: number | null = null;
  successMessage = '';
  errorMessage = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  ngOnChanges(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.isLoading = true;
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.filteredBooks = books;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load books. Is the backend running?';
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    const q = this.searchQuery.toLowerCase();
    this.filteredBooks = this.books.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.isbn.toLowerCase().includes(q)
    );
  }

  onEdit(book: Book): void {
    this.editBook.emit(book);
  }

  confirmDelete(id: number): void {
    this.deleteConfirmId = id;
  }

  cancelDelete(): void {
    this.deleteConfirmId = null;
  }

  onDelete(id: number): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        this.books = this.books.filter(b => b.id !== id);
        this.filteredBooks = this.filteredBooks.filter(b => b.id !== id);
        this.deleteConfirmId = null;
        this.showSuccess('Book deleted successfully!');
      },
      error: () => {
        this.errorMessage = 'Failed to delete book.';
        this.deleteConfirmId = null;
      }
    });
  }

  showSuccess(msg: string): void {
    this.successMessage = msg;
    setTimeout(() => this.successMessage = '', 3000);
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
