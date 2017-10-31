import React from 'react';
export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:''
        }
    }
    handleChange=(event)=>{
        this.setState({
            term: event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
    }
  render(){
      return(
          <form onSubmit={this.handleSubmit} className='input-group'> 
              <input 
                placeholder='give a five-day forecast in your city'
                className='form-control'
                value={this.state.term}
                onChange={this.handleChange}/>
              <span className='input-group-btn'>
                  <button type='submit' className='btn btn-secondary'>Submit</button>
              </span>
          </form>

      )
  }
}