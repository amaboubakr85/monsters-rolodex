import React from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/SearchBox.component";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchTerm: ''
        }
        //this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(users => this.setState({monsters: users}));

        // const response = axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then(data=>console.log(data.data));
    }

    // onSearchChange=(term)=>{
    //   this.setState({searchTerm:term});
    // }

    handleChange=(e)=> {
        this.setState({searchTerm: e.target.value})
    }


    render() {
        const {monsters, searchTerm} = this.state;
        const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchTerm.toLowerCase()));
        // console.log(filteredMonsters);
        return (
            <div className="App">
                <div>
                    <h1>Monster Rolodex</h1>
                    <SearchBox placeHolder="search for monster" onSearch={this.handleChange}/>
                    <CardList theMonsters={filteredMonsters}></CardList>

                </div>
            </div>
        );
    }
}

export default App;
