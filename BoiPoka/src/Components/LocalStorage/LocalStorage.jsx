const getReadBooks = () => {
    const BooksList = localStorage.getItem('books');
    if (BooksList) {
        return JSON.parse(BooksList);
    }
    else return [];

}


const setReadBooks = (id) => {
    const arr = getReadBooks();
  
    if (getReadBooks().includes(id)) {
        alert("you cant mark twice");
        return;
    }
      arr.push(id);
    localStorage.setItem('books', JSON.stringify(arr));
}

export  { setReadBooks ,getReadBooks};

