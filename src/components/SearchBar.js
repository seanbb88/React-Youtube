import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }; 

    onFormSubmit = (event) => {
        event.preventDefault(); 
        this.props.onFormSubmit(this.state.term)
        //Todo: make sure we call callback from parent component 
    }

    render() {
        return (
            <div className="search-bar ui segment" style={{ marginTop: '10px' }}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            value={this.state.term}
                            type="text"
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar; 