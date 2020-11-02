import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Todolist.css';
import classNames from 'classnames';
import check from '../img/check.svg'
import checkComplete from '../img/check-complete.svg'

class Todolist extends Component {
  render() {
    const {item, onClick} = this.props

    let url = check
    if(item.isComplete){
      url = checkComplete
    }

    return (
      <div className={classNames('Todolist', {
        'Todolist-complete': item.isComplete
      })}>
        <img onClick={onClick} src={url} width={32}></img>
        <p>{item.title}</p>
      </div>                         
    );
  }
    
  }

  Todolist.propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired
    }),
    onClick: PropTypes.func
  }
export default Todolist;