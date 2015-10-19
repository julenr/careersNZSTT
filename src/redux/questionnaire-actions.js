/**
 * Created by jr1500 on 19/10/15.
 */


export function responseClicked(questionID, responseID) {
  return {
    type: 'RESPONSE_CLICKED',
    questionID,
    responseID
  }
}

export function setInputText(questionID, text) {
  return {
    type: 'SET_INPUT_TEXT',
    questionID,
    text
  }
}

export function setMemberName(name) {
  return {
    type: 'SET_MEMBER_NAME',
    name
  }
}

