export function selectBook(book) {
    // this is an action creator!
    // must return an action, an object with a type property and the payload!
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

