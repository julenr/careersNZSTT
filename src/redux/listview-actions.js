/**
 * Created by jr1500 on 19/10/15.
 */


/* List View Actions */
export function jobClosed(jobID) {
  return {
    type: 'CLOSE_JOB_CARD',
    jobID
  }
}

export function jobOpen(jobID) {
  return {
    type: 'OPEN_JOB_CARD',
    jobID
  }
}

export function jobCardFlip(jobID) {
  return {
    type: 'FLIP_JOB_CARD',
    jobID
  }
}

export function undoPanelClosed() {
  return {
    type: 'CLOSE_UNDO_PANEL'
  }
}

export function helpPanelClosed(panelID) {
  return {
    type: 'CLOSE_HELP_PANEL',
    panelID
  }
}

export function courseOptionPanelClosed() {
  return {
    type: 'CLOSE_COURSE_OPTION_PANEL'
  }
}

export function courseCardClose(courseID) {
  return {
    type: 'CLOSE_COURSE_CARD',
    courseID
  }
}

export function courseCardOpen(courseID) {
  return {
    type: 'OPEN_COURSE_CARD',
    courseID
  }
}

export function institutionsPanelClose(institutionID) {
  return {
    type: 'CLOSE_INSTITUTION_PANEL',
    institutionID
  }
}

export function institutionCardClose(institutionID) {
  return {
    type: 'CLOSE_INSTITUTION_CARD',
    institutionID
  }
}

export function institutionCardOpen(institutionID) {
  return {
    type: 'OPEN_INSTITUTION_CARD',
    institutionID
  }
}

