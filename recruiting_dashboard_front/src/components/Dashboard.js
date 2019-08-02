import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      filteredCandidates: this.props.filteredCandidates
  }
}
  componentWillReceiveProps(candidates) {
   this.setState({ filteredCandidates: candidates });
  }

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData('id', id);
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  updateCandidate = (candidate) => {
    const params = { candidate: { category: candidate.category, id: candidate.id } }
    var uri = process.env.REACT_APP_DASHBOARD_API_URI +'/api/v1/candidates/' + candidate.id;
    axios.put(uri, params).catch((error) => {
      console.log(error);
    });
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData('id');
    let filteredCandidates = this.props.filteredCandidates.filter((candidate) => {
      if (candidate.name === id) {
        candidate.category = cat;
        this.updateCandidate(candidate);
      }
      return candidate;
    });
    this.setState({
      ...this.state, 
      filteredCandidates
    });
  }

  render() {
    var filteredCandidates = {
      waiting: [],
      interview: []
    }
    this.props.filteredCandidates.forEach ((candidate) => {
      filteredCandidates[candidate.category].push(
        <div key={candidate.name} 
          onDragStart = {(e) => this.onDragStart(e, candidate.name)}
          draggable='true' className='card draggable'
        >
          <div className='avatar'>
            <img src={candidate.avatar_link} alt='avatar' className='card-user' />
          </div>
          <div className='card-infos'>
            <h2>{ candidate.name }</h2>
            <p>{ candidate.job_name }</p>
            <FontAwesomeIcon icon={faBell} className='stream-icon' id='bell-icon' />
          </div>
        </div>
        )
      });
      return (
        <div id='dashboard'>
          <div id='column' className='waiting' 
               onDragOver={(e)=>{this.onDragOver(e)}}
               onDrop={(e)=>this.onDrop(e, 'waiting')}>
            <h2 id='column-title'> To see </h2>
            {filteredCandidates.waiting}
          </div>

          <div id='column' className='droppable' 
               onDragOver={(e)=>{this.onDragOver(e)}}
               onDrop={(e)=>this.onDrop(e, 'interview')}>
            <h2 id='column-title'> Interview </h2>
            {filteredCandidates.interview}
          </div>
        </div>
      );
  }
}

export default Dashboard;
