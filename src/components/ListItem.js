import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { priorityMapping } from '../utils/utils'

import DelImg from '../res/del.png'

//TODO: Dynamic css with styled components
import '../css/ListItem.css'


const Wrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: calc(100% - 30px);
  align-items: center;
  text-align: center;
  background: #FFFFFF;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.0416667);
  margin: 9px;
  min-height: 50px;
  border-left: 16px solid ${({priority}) => {
    if (priority === 'LOW') {
      return '#DBCC10'
    } else if (priority === 'MEDIUM') {
      return '#F5A623'
    }
    return '#D0021B'}};
`

const Input = styled.input`
  border: none;
  height: 19px;
  width: 19px;
`

const FinishedButton = styled(Input)`
  border-radius: 50%;
  margin: 5px;
  margin-left: 30px;
  color: white;
  float: left;
`

const DeleteButton = styled(Input)`
  background-image: url(${DelImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: white;
  margin: 5px;
  position: relative;
  right: 0px;
`

const Header = styled.h3`
  top: calc(50% - 17px/2 - 208px);

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: #050505;
`

const Date = styled.p`
  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  margin-left: 15px;
  margin-right: 8px;

  color: #050505;
`

const ListItem = props => {
  const dateInFinnishFormat = date => String(
    date.getDate()+ '.' +
    (date.getMonth() + 1 ) + '.' +
    date.getYear())

  return (
    <Wrapper priority={props.note.priority}className="div-list-item">
      <FinishedButton
        type="button"
        className={props.note.finished ? 'input-finished': ''}
        onClick={() => props.markAsFinished(props.note)}
      />
      <Header
        className={props.note.finished ? 'text-finished': ''}
      >
        {props.note.title}
      </Header>
      <Date
        className={props.note.finished ? 'text-finished': ''}>
        {dateInFinnishFormat(props.note.deadline)}
      </Date>
      <DeleteButton
        type="button"
        className="input-del"
        onClick={() => props.removeNote(props.note)}
      />
    </Wrapper>
  )
} 

ListItem.propTypes = {
  note: PropTypes.shape({
    finished: PropTypes.bool.isRequired,
    title: PropTypes.string,
    deadline: PropTypes.instanceOf(Date),
    priority: PropTypes.oneOf(priorityMapping),
    id: PropTypes.string.isRequired,
  }).isRequired,
  markAsFinished: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
}

export default ListItem