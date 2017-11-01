import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js';
class SearchBar extends React.Component{
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
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ''
        })

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
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}
export default connect (null, mapDispatchToProps)(SearchBar);