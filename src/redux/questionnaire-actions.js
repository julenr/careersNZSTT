/**
 * Created by jr1500 on 19/10/15.
 */


export function responseClickedMultipleChoice(questionID, responseID) {
  return {
    type: 'RESPONSE_CLICKED_MULTIPLE_CHOICE',
    questionID,
    responseID
  }
}

export function responseClickedSingleChoice(questionID, responseID) {
  return {
    type: 'RESPONSE_CLICKED_SINGLE_CHOICE',
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

export function setTypeAheadText(questionID, typeAhead) {
  console.log(typeAhead);
  return {
    type: 'SET_INPUT_TEXT',
    questionID,
    text: typeAhead.state.entryValue
  }
}

export function setMemberName(name) {
  return {
    type: 'SET_MEMBER_NAME',
    name
  }
}

export function sellectAllTagCloud(questionID) {
  return {
    type: 'SELECT_ALL_TAG_CLOUD',
    questionID
  }
}

export function removeTag(questionID, tagID) {
  return {
    type: 'REMOVE_TAG',
    questionID,
    tagID
  }
}


