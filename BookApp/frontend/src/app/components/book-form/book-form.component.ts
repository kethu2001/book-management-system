import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit, OnChanges {
  @Input() bookToEdit: Book | null = null;
  @Output() bookSubmitted = new EventEmitter<Book>();
  @Output() cancelEdit = new EventEmitter<void>();

  bookForm!: FormGroup;
  isEditMode = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(): void {
    if (this.bookForm) {
      if (this.bookToEdit) {
        this.isEditMode = true;
        this.bookForm.patchValue({
          title: this.bookToEdit.title,
          author: this.bookToEdit.author,
          isbn: this.bookToEdit.isbn,
          publicationDate: this.bookToEdit.publicationDate?.split('T')[0] || ''
        });
      } else {
        this.isEditMode = false;
        this.bookForm.reset();
      }
    }
  }

  initForm(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      author: ['', [Validators.required, Validators.minLength(1)]],
      isbn: ['', [Validators.required]],
      publicationDate: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      const book: Book = {
        ...this.bookForm.value,
        id: this.bookToEdit?.id
      };
      this.bookSubmitted.emit(book);
      this.bookForm.reset();
      this.isEditMode = false;
    }
  }

  onCancel(): void {
    this.bookForm.reset();
    this.isEditMode = false;
    this.cancelEdit.emit();
  }
}
