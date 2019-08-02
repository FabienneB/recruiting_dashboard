import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

class Dropdown extends Component{
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      list: this.props.list,
      headerTitle: this.props.title
    }
    this.close = this.close.bind(this);
  }

  componentDidUpdate() {
    const { listOpen } = this.state;
    setTimeout(() => {
      if (listOpen) {
        window.addEventListener('click', this.close);
      }
      else {
        window.removeEventListener('click', this.close);
      }
    }, 0)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.close);
  }

  close() {
    this.setState({
      listOpen: false
    })
  }

  selectItem(title, id) {
    this.setState({
      headerTitle: title,
      listOpen: false
    }, this.props.resetThenSet(id, title));
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render() {
    const list = this.state.list;
    const { listOpen, headerTitle } = this.state;
    return(
      <div className='dd-wrapper'>
        <div className='dd-header' onClick={() => this.toggleList()}>
          <div className='dd-header-title'>{headerTitle}</div>
          {listOpen
            ?  <FontAwesomeIcon icon={faAngleUp} />
            :  <FontAwesomeIcon icon={faAngleDown} />
          }
        </div>
        {listOpen && <ul className='dd-list' onClick={e => e.stopPropagation()}>
          {list.map((item)=> (
            <li className='dd-list-item' key={item.id} onClick={() => this.selectItem(item.title, item.id)}>{item.title} </li>
          ))}
        </ul>}
      </div>
    )
  }
}
export default Dropdown;