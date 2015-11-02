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

export function openQualificationsPanel() {
  return {
    type: 'OPEN_QUALIFICATIONS_PANEL'
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

export function closeInstitutionsPanel() {
  return {
    type: 'CLOSE_INSTITUTION_PANEL'
  }
}

export function openInstitutionsPanel() {
  return {
    type: 'OPEN_INSTITUTION_PANEL'
  }
}

export function closeInstitutionCard(institutionID) {
  return {
    type: 'CLOSE_INSTITUTION_CARD',
    institutionID
  }
}

export function openInstitutionCard(institutionID) {
  return {
    type: 'OPEN_INSTITUTION_CARD',
    institutionID
  }
}

// JOB CARD MODAL
export function closeRemoveJobCardModal() {
  return {
    type: 'CLOSE_REMOVE_JOB_CARD_MODAL'
  }
}
export function openRemoveJobCardModal(jobCardID) {
  return {
    type: 'OPEN_REMOVE_JOB_CARD_MODAL',
    jobCardID
  }
}

// INSTITUTION CARD MODAL
export function closeRemoveInstitutionCardModal() {
  return {
    type: 'CLOSE_REMOVE_INSTITUTION_CARD_MODAL'
  }
}
export function openRemoveInstitutionCardModal(institutionCardID) {
  return {
    type: 'OPEN_REMOVE_INSTITUTION_CARD_MODAL',
    institutionCardID
  }
}

// QUALIFICATION CARD MODAL
export function closeRemoveQualificationCardModal() {
  return {
    type: 'CLOSE_REMOVE_QUALIFICATION_CARD_MODAL'
  }
}
export function openRemoveQualificationCardModal(qualificationCardID) {
  return {
    type: 'OPEN_REMOVE_QUALIFICATION_CARD_MODAL',
    qualificationCardID
  }
}

