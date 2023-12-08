var initialBooks = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15.99 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.99 },
  { title: "1984", author: "George Orwell", price: 10.99 },
  { title: "Pride and Prejudice", author: "Jane Austen", price: 14.99 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 11.99 },
];

function populateInitialBooks() {
  var allBooksSection = document.getElementById("all-books-section");
  allBooksSection.innerHTML = "";

  initialBooks.forEach(function (book) {
    addBookCard(book.title, book.author, book.price);
  });
}

function showSection(section) {
  document.getElementById("welcome-text").style.display =
    section === "home" ? "block" : "none";
  document.getElementById("all-books-section").style.display =
    section === "all-books" ? "block" : "none";
  document.getElementById("add-book-section").style.display =
    section === "all-books" ? "block" : "none";
  document.getElementById("about-us-section").style.display =
    section === "about-us" ? "block" : "none";
  if (section === "all-books") {
    populateInitialBooks();
  }
}

function addBookCard(title, author, price) {
  var allBooksSection = document.getElementById("all-books-section");

  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <h3>${title}</h3>
        <p>Author: ${author}</p>
        <p>Price: $${price}</p>
        <button onclick="removeBookCard(this)">Remove</button>
    `;

  allBooksSection.appendChild(card);
}

function removeBookCard(button) {
  var card = button.parentNode;
  card.parentNode.removeChild(card);
}

function addBook() {
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var price = document.getElementById("price").value;

  if (title && author && price) {
    addBookCard(title, author, price);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
  } else {
    alert("Please enter all values to add a new book.");
  }
}

document.getElementById("home-link").addEventListener("click", function () {
  showSection("home");
});

document
  .getElementById("all-books-link")
  .addEventListener("click", function () {
    showSection("all-books");
  });

document.getElementById("about-link").addEventListener("click", function () {
  showSection("about-us");
});
