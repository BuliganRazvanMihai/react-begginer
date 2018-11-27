import React , { Component } from 'react';
import { connect }  from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

 class BookList extends Component {
   //renduim lista de carti
 renderList(){
   return this.props.books.map((book) => {
     return (
       <li  key={book.title}
       onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
     );
   });
 }

//renduim tot showpage ul
  render() {
    return(
      <ul className="list-group col-sm-4">
       {this.renderList()}
      </ul>
    )
  }
}

//Puntea de legatura intre react si redux
function mapStateToProps(state) {
  //whatever is returned will show props
  return {
    books: state.books
  };
}
//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called,the result should be passed to all reducers
  return bindActionCreators({selectBook:selectBook},dispatch)
}

//Promote BookList from a component to a container
export default connect(mapStateToProps,mapDispatchToProps)(BookList);
