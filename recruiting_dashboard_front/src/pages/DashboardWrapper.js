import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import DropDown from '../components/DropDown';
import Dashboard from '../components/Dashboard';
import axios from 'axios';


class DashboardWrapper extends React.Component{
  constructor() {
    super()
    this.state = {
      jobs: [],
      candidates: [],
      selectedJobTitle: null,
      selectedJobId: null, 
      displayDropdown: false
    }
  }

  componentDidMount() {
    this._isMounted = true;
    axios.get(process.env.REACT_APP_DASHBOARD_API_URI+'/api/v1/job_openings')
      .then(res => {
        const jobs = [];
        res.data.job_openings.forEach(function(job) {
          jobs.push(job);
        });
        if (this._isMounted) {
          this.setState({ jobs });
        }
    }).catch((error) => {
      console.log(error);
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  resetThenSet = (id, title) => {
    this.loadCandidates(id);
    setInterval(() => {
      this.loadCandidates(id);
    }, 1000)
    this.setState({
      selectedJobId: id, 
      selectedJobTitle: title
    });
  }

  loadCandidates = (jobId) => {
    axios.get(process.env.REACT_APP_DASHBOARD_API_URI + '/api/v1/candidates?job_id='+ jobId)
      .then(res => {
        const candidates = [];
        res.data.candidates.forEach(function(candidate) {
          candidate['name'] = `${candidate.first_name} - ${candidate.last_name}`
          candidates.push(candidate);
        });
        this.setState({ candidates });
    }).catch((error) => {
      console.log(error);
    });
  }

  onClick = () => {
    this.setState({
      displayDropdown: !this.state.displayDropdown
    });
  }

  render() {
      return (
        <div className='dashboard-wrapper'>
          <div id='flex-box'>
            <div className='dashboard-icons'>
              <FontAwesomeIcon icon={faBars} onClick={this.onClick} className='stream-icon click' />
              { this.state.displayDropdown ? <DropDown
                                                title='Select a position'
                                                list={this.state.jobs}
                                                resetThenSet={this.resetThenSet} /> : null }
            </div>
            <div id='dashboard-nav'> {this.state.selectedJobTitle} </div>
            <div className='dashboard-icons'><FontAwesomeIcon icon={faBell} className='stream-icon' /></div>
          </div>
          <Dashboard filteredCandidates={this.state.candidates} />
        </div>
      );
  }
}

export default DashboardWrapper;
