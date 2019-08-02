import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

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
    }).catch((error) => {
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
          draggable='true' className='draggable card-wrapper'
        >
          <div className='card'>
            <div className='avatar'>
              <img src={candidate.avatar_link} alt='avatar' className='card-user' />
              <FontAwesomeIcon icon={faBell} className='icon-bell color-icon' />
            </div>
            <div className='card-infos'>
              <h2>{ candidate.name }</h2> 
              <p>{ candidate.job_name }</p>
            </div>
          </div>
          <div className='card-bottom'>
            <div className='icon-bottom'> <FontAwesomeIcon icon={faThumbsUp} className='color-icon' /> { candidate.approval_count } </div>
          </div>
        </div>
        )
      });
      return (
        <div id='dashboard' className='dashboard'>
          <div id='column' className='waiting' 
               onDragOver={(e)=>{this.onDragOver(e)}}
               onDrop={(e)=>this.onDrop(e, 'waiting')}>
            <div className='column-title'> 
              <div id='column-header'> To see</div> 
              <div className='candidate-count'> {filteredCandidates.waiting.length} </div> 
            </div> 
            {filteredCandidates.waiting}
          </div>

          <div id='column' className='droppable' 
               onDragOver={(e)=>{this.onDragOver(e)}}
               onDrop={(e)=>this.onDrop(e, 'interview')}>
            <div className='column-title'> 
              <div id='column-header'> Interview </div> 
              <div className='candidate-count'> {filteredCandidates.interview.length} </div> 
            </div>
            {filteredCandidates.interview}
          </div>
        </div>
      );
  }
}

export default Dashboard;
