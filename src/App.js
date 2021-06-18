import React, { Component, Fragment } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import Cards from './components/Cards/Cards';
import FilterButton from './components/FilterButtton/FilterButton';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      searchData: null,
      sortByTitle: false,
      sortByYear: false,
      loading: false,
      isFocused: false
    }
  
    this.textInput = React.createRef();
  }

  handleSubmit = async () => {
    if(this.textInput.current.value) {
      this.setState({loading: true});
    }
    console.log('handleSubmit hittttttttttt', this.textInput.current.value);
    let bookName = (this.textInput.current.value).split(' ').join('+');
    try {
      if(bookName) {
        const res = await axios.get(`https://openlibrary.org/search.json?q=${bookName}`);
        console.log('res----------------------', res.data.docs);
        this.setState({
          loading: false,
          searchData: res.data.docs
        });
      }
    }
    catch(e) {
      console.log('error----', e);
    }
  }

  handleFilter = (val) => {
    if(!this.state.sortByTitle && val == 'title') {
      const data = this.state.searchData;
      const sortedByTitle = data.sort(
        function(a, b) {
          var textA = a.title.toUpperCase();
          var textB = b.title.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
      this.setState({sortByTitle: true, sortByYear: false})
    } else if(!this.state.sortByYear && val == 'year') {
      const data = this.state.searchData;
      const sortedByYear = data.sort(
        function(a, b) {
          var yearA = a.first_publish_year;
          var yearB = b.first_publish_year;
          return (yearA < yearB) ? 1 : (yearA > yearB) ? -1 : 0;
      });
      this.setState({sortByTitle: false, sortByYear: true})
    }
  }

  handleFocus = (val) => {
    if(this.textInput.current.value) {
      if(val == 'focus') {
        this.setState({isFocused: false});
      } else {
          this.setState({isFocused: true});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleSubmit={() => this.handleSubmit()} textInput={this.textInput} loading={this.state.loading} isFocused={this.state.isFocused} searchData={this.state.searchData} handleFocus={(val) => this.handleFocus(val)}/>

        {this.state.loading ?
        <p>Fetching Data...</p> :
        ''
        }

        {
          this.state.searchData ?
          <Fragment>
            <ul className="filter-wrapper">
              <FilterButton handleFilter={(type) => this.handleFilter(type)} title="Sort Alphabetical" sortByTitle={this.state.sortByTitle}/>
              <FilterButton handleFilter={(type) => this.handleFilter(type)} title="Most Recently Published" sortByYear={this.state.sortByYear}/>
            </ul>
            <Cards data={this.state.searchData} />
          </Fragment> :
          ''
        }

      </div>
    );
  }
}

export default App;
