
import axios from 'axios';


let SkillsTransitionTool = axios.get('/tools/skills-transition-tool/form')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
    console.error(response);
  });



/*

let SkillsTransitionTool = {
  'Application': {
    'FormID': '152b93f6fd2c11580930df6e3e6b74c27d8c03a2',
    'Endpoints': {
      'Save': 'http:\/\/careers.local\/tools\/skills-transition-tool\/save',
      'Jobs': 'http:\/\/careers.local\/tools\/skills-transition-tool\/jobs',
      'Skills': 'http:\/\/careers.local\/tools\/skills-transition-tool\/skills'
    }
  },
  'Member': {
    'UserID': null,
    'SessionID': '',
    'Region': null,
    'Name': '',
    'Gender': '',
    'Ethnicity': ''
  },
  'Jobs': {'Selected': [], 'Current': null},
  'Skills': {'Selected': [], 'Current': null},
  'Interests': {'Selected': [], 'Current': null},
  'VocationalPathways': {'Selected': [], 'Current': null},
  'WorkingConditions': {'Selected': [], 'Current': null},
  'Questions': [{
    'ID': 1,
    'Text': 'Name',
    'Description': 'What is your name?',
    'QuestionType': 'TextInput',
    'QuestionResponses': [],
    'NextQuestionID': 2,
    'HasAlternative': false,
    'AlternativeText': '',
    'AlternativeNextQuestionID': null,
    'Endpoint': null
  }, {
    'ID': 2,
    'Text': 'Goal',
    'Description': 'What is your goal in using this tool?',
    'QuestionType': 'SingleChoice',
    'NextQuestionID': null,
    'HasAlternative': false,
    'AlternativeText': '',
    'AlternativeNextQuestionID': null,
    'Endpoint': null,
    'QuestionResponses': [{
      'ResponseText': 'Id like to find a job that uses my skills',
      'NextQuestionID': 3
    }, {
      'ResponseText': 'Id like to get ahead in my current job or industry',
      'NextQuestionID': 3
    }, {
      'ResponseText': 'I want to do a course that builds on my skills',
      'NextQuestionID': 3
    }, {
      'ResponseText': 'I want to turn my passion into a job',
      'NextQuestionID': 3
    }, {
      'ResponseText': 'I want a change, but Im not sure what to do which has a really long title and may wrap to another line',
      'NextQuestionID': 3
    }]
  }, {
    'ID': 3,
    'Text': 'Most recent job',
    'Description': 'Ok great, the best place to start is by looking at the skills you have from jobs you ve held.  What is your most recent job?',
    'QuestionType': 'SingleChoice',
    'NextQuestionID': null,
    'HasAlternative': true,
    'AlternativeText': 'I don t mind',
    'AlternativeNextQuestionID': 4,
    'Endpoint': null,
    'QuestionResponses': [{
      'ResponseText': 'Look up skills associated with job',
      'NextQuestionID': 4
    }, {
      'ResponseText': 'I ve never really had a job',
      'NextQuestionID': 4
    }, {
      'ResponseText': 'I m not sure what to put which has a really long title and may wrap to another line',
      'NextQuestionID': 4
    }]
  }, {
    'ID': 4,
    'Text': 'Skills match',
    'Description': 'Many [job-title-plural] (also known as [job-title-alias]) have the following skills, do these look about right? Note: job title alias is included if the user searched for that name, rather than the canonical one.',
    'QuestionType': 'TagCloud',
    'NextQuestionID': 5,
    'HasAlternative': false,
    'AlternativeText': '',
    'AlternativeNextQuestionID': null,
    'Endpoint': null,
    'QuestionResponses': []
  }, {
    'ID': 5,
    'Text': 'Another job',
    'Description': 'The more jobs you add the better idea we get of your skills, do you have another job to add?',
    'QuestionType': 'TagCloud',
    'NextQuestionID': 6,
    'HasAlternative': true,
    'AlternativeText': 'I don t mind',
    'AlternativeNextQuestionID': 6,
    'Endpoint': null,
    'QuestionResponses': []
  }, {
    'ID': 6,
    'Text': 'Another job',
    'Description': 'Do you have any more jobs to add?',
    'QuestionType': 'MultipleChoice',
    'NextQuestionID': null,
    'HasAlternative': true,
    'AlternativeText': 'I don t mind',
    'AlternativeNextQuestionID': 4,
    'Endpoint': null,
    'QuestionResponses': [{
      'ResponseText': 'Option 1',
      'NextQuestionID': 7
    }, {
      'ResponseText': 'Option 2',
      'NextQuestionID': 7
    }, {
      'ResponseText': 'Option 3 which has a really long title and may wrap to another line',
      'NextQuestionID': 7
    }]
  }, {
    'ID': 7,
    'Text': 'Unpaid jobs',
    'Description': 'Many people gain valuable skills from unpaid work, have you got experience of any of these common unpaid or voluntary jobs:',
    'QuestionType': 'MultipleChoice',
    'NextQuestionID': null,
    'HasAlternative': false,
    'AlternativeText': '',
    'AlternativeNextQuestionID': 8,
    'Endpoint': null,
    'QuestionResponses': [{
      'ResponseText': 'Option 1',
      'NextQuestionID': 8
    }, {
      'ResponseText': 'Option 2',
      'NextQuestionID': 8
    }, {
      'ResponseText': 'Option 3 which has a really long title and may wrap to another line',
      'NextQuestionID': 8
    }, {'ResponseText': 'Option 4', 'NextQuestionID': 8}, {
      'ResponseText': 'Option 5',
      'NextQuestionID': 8
    }, {'ResponseText': 'Option 6', 'NextQuestionID': 8}, {
      'ResponseText': 'Option 7',
      'NextQuestionID': 8
    }, {'ResponseText': 'Option 8', 'NextQuestionID': 8}, {
      'ResponseText': 'Option 9',
      'NextQuestionID': 8
    }, {'ResponseText': 'Option 10', 'NextQuestionID': 8}, {
      'ResponseText': 'Option 11',
      'NextQuestionID': 8
    }, {'ResponseText': 'Option 12', 'NextQuestionID': 8}]
  }, {
    'ID': 8,
    'Text': 'Other unpaid job',
    'Description': 'Which unpaid or voluntary job did you do?',
    'QuestionType': 'Typeahead',
    'NextQuestionID': 9,
    'HasAlternative': true,
    'AlternativeText': 'It doesn t matter',
    'AlternativeNextQuestionID': 9,
    'Endpoint': 'Jobs',
    'QuestionResponses': []
  }, {
    'ID': 9,
    'Text': 'Other unpaid job',
    'Description': 'Which unpaid or voluntary job did you do?',
    'QuestionType': 'Typeahead',
    'NextQuestionID': null,
    'HasAlternative': false,
    'AlternativeText': '',
    'AlternativeNextQuestionID': null,
    'Endpoint': 'Skills',
    'QuestionResponses': []
  }, {
    'ID': 10,
    'Text': 'Skills match',
    'Description': 'Many [job-title-plural] (also known as `[job-title-alias]) have the following skills, would you like to have all these skills?',
    'QuestionType': 'TagCloud',
    'NextQuestionID': 11,
    'HasAlternative': true,
    'AlternativeText': 'It doesn t matter',
    'AlternativeNextQuestionID': 11,
    'Endpoint': 'Jobs',
    'QuestionResponses': []
  }, {
    'ID': 11,
    'Text': 'Skills match',
    'Description': 'Many [job-title-plural] (also known as [job-title-alias]) have the following skills, do these look about right? Note: job title alias is included if the user searched for that name, rather than the canonical one.',
    'QuestionType': 'TagCloud',
    'NextQuestionID': null,
    'HasAlternative': false,
    'AlternativeText': '',
    'AlternativeNextQuestionID': null,
    'Endpoint': 'Skills',
    'QuestionResponses': []
  }]
};
*/


export { SkillsTransitionTool as default };