import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-command-details',
  templateUrl: './command-details.component.html',
  styleUrls: ['./command-details.component.css']
})
export class CommandDetailsComponent implements OnInit {
  // Input action attribute to handle the called menu by the command component
  @Input() action: any; 
  // In-memory list to save the book list
  bookList: any[] = [];
  // newBook is an attribute to bind with the Add-Book Form
  newBook: any = {
    id: '',
    title: '',
    author: '',
    publisher: '',
    publicationDate: ''
  };
  // selectedBookId is an attribute to bind with the id of the selected book in the Manage-Books Form
  selectedBookId: string | undefined;
  // selectedBook is an attribute to bind with the selected book of the Manage-Books Form
  selectedBook: any = {
    id: '',
    title: '',
    author: '',
    publisher: '',
    publicationDate: ''
  };

  constructor() { }

  ngOnInit(): void {
    // For demonstration purposes, let's add some dummy books
    // TO-DO : Get Books from an API
    this.bookList = [
      { id: '1', title: 'Book 1', author: 'Author 1', publisher: 'Publisher 1', publicationDate: '2023-07-24' },
      { id: '2', title: 'Book 2', author: 'Author 2', publisher: 'Publisher 2', publicationDate: '2023-07-25' },
      { id: '3', title: 'Book 3', author: 'Author 3', publisher: 'Publisher 3', publicationDate: '2023-07-26' }
    ];
  }

  onAddBookSubmit(): void {
    // Save the new book to the bookList array
    this.bookList.push(this.newBook);
    // Reset the newBook object for the next entry
    this.newBook = {
      id: '',
      title: '',
      author: '',
      publisher: '',
      publicationDate: ''
    };
  }

  onManageBookSubmit(): void {
    // Find the selected book by ID in the bookList
    const index = this.bookList.findIndex(book => book.id === this.selectedBookId);
    if (index !== -1) {
      // Update the book details with the edited values
      this.bookList[index] = this.selectedBook;
      // Reset the selected book for the next edit
      this.selectedBook = {
        id: '',
        title: '',
        author: '',
        publisher: '',
        publicationDate: ''
      };
    }
  }


  onDeleteBookSubmit(): void{
  // Find the index of the selected book by its ID in the bookList
  const index = this.bookList.findIndex(book => book.id === this.selectedBookId);

  // Check if the book with the given ID exists in the list
  if (index !== -1) {
    // Remove the book from the bookList using splice() a
    this.bookList.splice(index, 1)[0];

  } else {
    console.log('Book not found in the list.');
  }
  }
}
