//define the initial state
const initialState = {
    books   : [0,1,2,3],
    cover   : "https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
    title   : "React.js for the Visual Learner",
    author  : "Mike Mangialardi",
    link    : "https://leanpub.com/reactjsforthevisuallearner"
  }

//define a reducer with an initialized state action
function BooksApp(state = initialState, action) {
    //eventually adding logic to handle create, update, and delete
    switch(action.type){
        case 'ADD_BOOK':
            let incremented = Object.assign({}, state)
            incremented.books.push(incremented.books.length)
            return incremented
        case 'DELETE_BOOK':
            let decremented = Object.assign({}, state)
            decremented.books.pop()
            return decremented
        default:
            return state
    }
  }

export default BooksApp;