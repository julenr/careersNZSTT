/**
 * Created by jr1500 on 19/10/15.
 */


/* List View Actions */
export function closeJobCard(jobID) {
  return {
    type: 'CLOSE_JOB_CARD',
    jobID
  }
}

export function openJobCard(jobID) {
  return {
    type: 'OPEN_JOB_CARD',
    jobID
  }
}

export function flipJobCard(jobID) {
  return {
    type: 'FLIP_JOB_CARD',
    jobID
  }
}

export function openMatchSkillsModal(idJobCard) {
  return {
    type: 'SHOW_MATCH_SKILLS_MODAL',
    idJobCard
  }
}
export function closeMatchSkillsModal(idJobCard) {
  return {
    type: 'CLOSE_MATCH_SKILLS_MODAL',
    idJobCard
  }
}

export function closeUndoPanel() {
  return {
    type: 'CLOSE_UNDO_PANEL'
  }
}

export function closeHelpPanel(panelID) {
  return {
    type: 'CLOSE_HELP_PANEL',
    panelID
  }
}

export function closeQualificationsPanel() {
  return {
    type: 'CLOSE_QUALIFICATIONS_PANEL'
  }
}

export function closeQualificationCard(qualificationID) {
  return {
    type: 'CLOSE_QUALIFICATION_CARD',
    qualificationID
  }
}

export function openQualificationCard(qualificationID) {
  return {
    type: 'OPEN_QUALIFICATION_CARD',
    qualificationID
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

