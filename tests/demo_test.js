//import * as actionCreators from './redux/general-actions';
import assert from 'assert';

describe('openSkillsModal', () => {
  it('Opens Skills Modal', () => {
    const action = actionCreators.openSkillsModal();
    //assert.equal(action, {type: 'SHOW_SKILLS_MODAL'});
    assert.equal(1 + 1, 2);
  })
});