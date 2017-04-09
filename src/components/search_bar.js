import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props); //passing prop to the base constructor

        this.state = {term: "Starting Value"};
    }


    onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
    }

    render () {
          return(
           <div className="search-bar">
                <input
                value = {this.state.term}
                onChange = { (e) => this.onInputChange(e.target.value)}
                type="text"/>
           </div>
        )
    }

}

export default SearchBar;