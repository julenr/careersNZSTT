

export const questionnaire = {
  'Application': {
    'FormID': 'ccbb12487d7d27bc3841fc7be17de1f4be95e076',
    'Endpoints': {
      'Save': 'http:\/\/careersnz.stripetheweb.com\/tools\/skills-transition-tool\/save',
      'Jobs': 'http:\/\/careersnz.stripetheweb.com\/tools\/skills-transition-tool\/jobs',
      'Skills': 'http:\/\/careersnz.stripetheweb.com\/tools\/skills-transition-tool\/skills'
    }
  },
  'Member': {
    'UserID': null,
    'SessionID': 'de34dsfvm7lur0uk5psniogbr7',
    'Region': null,
    'Name': '',
    'Gender' : 'Male',
    'Ethnicity': 'Kiwi'
  },
  'ListTypes': {
    'Selected': [],
    'Current': null
  },
  'Jobs': {
    'Selected': [],
    'Current': null
  },
  'Skills': {
    'Selected': [],
    'Current': null
  },
  'Interests': {
    'Selected': [],
    'Current': null
  },
  'Qualifications': {
    'Selected': [],
    'Current': null
  },
  'VocationalPathways': {
    'Selected': [],
    'Current': null
  },
  'WorkingConditions': {
    'Selected': [],
    'Current': null
  },
  'ProgressBar': {
    'ListViewLinkText': 'Show me!',
    'ListViewLinkMinResults': 3,
    'ListViewLinkMaxResults': 24,
    'Results': 0,
    'Percentage': 0,
    'Text': 'You\'ve made the first step, you\'re here!'
  },
  'Questionnaire': [ ],
  'Questions': [
    {
      'ID': 1,
      'Text': '',
      'Description': 'BASIC TEXT INPUT QUESTION PROTOTYPE',
      'QuestionType': 'TextInput',
      'QuestionResponses': [],
      'PlaceHolder': 'Optional placeholder',
      'NextQuestionID': 2,
      'HasAlternative': false,
      'AlternativeText': '',
      'AlternativeNextQuestionID': null,
      'Endpoint': 'Member.Name',
      'MilestonePercentage': 10,
      'MilestoneText': 'Good start. We just need to know a little more to make a good list for you.',
    },
    {
      'ID': 2,
      'Text': '',
      'Description': 'YES/NO QUESTION PROTOTYPE FOR USER [name]',
      'QuestionType': 'YesNo',
      'QuestionResponses': [],
      'NextQuestionID': 3,
      'HasAlternative': false,
      'AlternativeText': 'I don\'t mind',
      'AlternativeNextQuestionID': 5,
      'Endpoint': null,
      'MilestonePercentage': 20,
      'MilestoneText': '[name]! we have a list of [results-count] job/courses, tell us a little more to narrow it down a bit.',
      'QuestionResponses': [
        {
          'ID': 0,
          'ResponseText': 'Yes',
          'NextQuestionID': 3,
          'EntityType': 'ListTypes',
          'EntityData': 'Job'
        },
        {
          'ID': 1,
          'ResponseText': 'No',
          'NextQuestionID': 1,
          'EntityType': 'ListTypes',
          'EntityData': 'Course'
        }
      ]
    },
    {
      'ID': 3,
      'Text': 'Goal',
      'Description': 'SINGLE CHOICE QUESTION PROTOTYPE',
      'QuestionType': 'SingleChoice',
      'NextQuestionID': null,
      'HasAlternative': false,
      'AlternativeText': '',
      'AlternativeNextQuestionID': null,
      'Endpoint': null,
      'MilestonePercentage': 30,
      'MilestoneText': 'That\'s better, we\'ve got it down to 23 courses.',
      'QuestionResponses': [
        {
          'ID': 0,
          'ResponseText': 'Option 1. Jumps to question prototype 1. Adds Interest: Gardening',
          'NextQuestionID': 1,
          'EntityType': 'Interests',
          'EntityData': 'Gardening'
        },
        {
          'ID': 1,
          'ResponseText': 'Option 2. Jumps to question prototype 2. Adds Job: Gardener',
          'NextQuestionID': 2,
          'EntityType': 'Jobs',
          'EntityData': 'Gardener'
        },
        {
          'ID': 2,
          'ResponseText': 'Option 3. Jumps to question prototype 4. Adds Qualification: Graduate Diploma in Professional Supervision',
          'NextQuestionID': 5,
          'EntityType': 'Qualifications',
          'EntityData': 'Graduate Diploma in Professional Supervision '
        },
        {'ID': 3,
          'ResponseText': 'Option 4. Jumps to question prototype 5. Adds Region: Wellington',
          'NextQuestionID': 5,
          'EntityType': 'WorkingConditions',
          'EntityData': 'Very hard'
        },
        {'ID': 4,
          'ResponseText': 'Option 5. Jumps to question prototype 6.',
          'NextQuestionID': 6,
          'EntityType': 'None',
          'EntityData': ''
        }
      ]
    }, {
      'ID': 5,
      'Text': 'Another job',
      'Description': 'MULTIPLE CHOICE QUESTION PROTOTYPE',
      'QuestionType': 'MultipleChoice',
      'NextQuestionID': 6,
      'HasAlternative': true,
      'AlternativeText': 'I don\'t mind',
      'AlternativeNextQuestionID': 4,
      'Endpoint': null,
      'MilestonePercentage': 40,
      'MilestoneText': 'Great, we\'ve got a nice list of 9 jobs/courses.',
      'QuestionResponses': [{
        'ID': 1,
        'ResponseText': 'Option 1. Multiple choice question prototype',
        'selected': false,
        'NextQuestionID': 6,
        'EntityType': 'Jobs',
        'EntityData': 'Software Engineer'
      }, {
        'ID': 2,
        'ResponseText': 'Option 2. Multiple choice question prototype',
        'selected': false,
        'NextQuestionID': 6,
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ID': 3,
        'ResponseText': 'Option 3. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 6,
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ID': 4,
        'ResponseText': 'Option 4. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 6,
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ID': 5,
        'ResponseText': 'Option 5. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 6,
        'EntityType': 'None',
        'EntityData': ''
      }]
    }, {
      'ID': 6,
      'Text': '',
      'Description': 'TYPE AHEAD  QUESTION PROTOTYPE',
      'QuestionType': 'Typeahead',
      'NextQuestionID': 7,
      'HasAlternative': true,
      'PlaceHolder' : 'Write something here',
      'AlternativeText': 'I don\'t have any other jobs to add',
      'AlternativeNextQuestionID': 8,
      'Endpoint': 'Jobs',
      'MilestonePercentage': 50,
      'MilestoneText': 'Great, we\'ve got a nice list of 5 jobs/courses.',
      'QuestionResponses': []
    }, {
      'ID': 7,
      'Text': 'Skills match',
      'Description': 'TAG CLOUD QUESTION PROTOTYPE',
      'QuestionType': 'TagCloud',
      'NextQuestionID': 8,
      'HasAlternative': false,
      'AlternativeText': '',
      'AlternativeNextQuestionID': null,
      'Endpoint': null,
      'MilestonePercentage': 70,
      'MilestoneText': 'Great, we\'ve got a nice [job-title-plural] list of 3 jobs/courses.',
      'QuestionResponses': [{
        'ResponseText': 'Skill 1.',
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ResponseText': 'Skill 2.',
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ResponseText': 'Skill 3.',
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ResponseText': 'Skill 4.',
        'EntityType': 'None',
        'EntityData': ''
      }, {
        'ResponseText': 'Skill 5.',
        'EntityType': 'None',
        'EntityData': ''
      }]
    }
    , {
      'ID': 8,
      'QuestionType': 'EndForm',
      'MilestonePercentage': 100,
      'MilestoneText': 'Great, you have finished.'
    }]
};


export const mainContentHTML = {
  'Title': 'Demo General Content Page - with image',
  'FeatureType': 'Image',
  'Image': {
    'Medium': {
      'EmbedHTML': '<img src=\'\' \/>'
    }
  },
  'Video': {
    'Title': 'YouTube Video',
    'Type': 'video',
    'SourceURL': 'https:\/\/www.youtube.com\/watch?v=udGgFUKxokg',
    'Width': '480',
    'Height': '270',
    'Description': null,
    'ThumbURL': 'https:\/\/i.ytimg.com\/vi\/udGgFUKxokg\/hqdefault.jpg',
    'EmbedHTML': '<div class=\'media\'><iframe width=\'480\' height=\'270\' src=\'https:\/\/www.youtube.com\/embed\/udGgFUKxokg?feature=oembed\' frameborder=\'0\' allowfullscreen><\/iframe><\/div>'
  },
  'Intro': 'Intro goes here ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  'Content': '            <!-- START WYSIWYG content -->\n            <h2>Take the next step (H2)<\/h2>\n            <p>Muse about prime number venture a mote of dust suspended in a sunbeam the ash of stellar alchemy intelligent beings the sky calls to us Vangelis trillion culture, kindling the energy hidden in matter decipherment worldlets. A mote of dust suspended in a sunbeam, a still more glorious dawn awaits kindling the energy hidden in matter radio telescope.<\/p>\n            <h3>Explorations billions and billions (H3)<\/h3>\n            <p class=\'h5\'>Harvesting star light galaxies two ghostly white figures:<\/p>\n            <ul>\n              <li>in coveralls and helmets<\/li>\n              <li>are softly dancing\n                <ul>\n                  <li>extraplanetary Hypatia,<\/li>\n                  <li>courage of our questions\n                    <ul>\n                      <li>emerged into consciousness<\/li>\n                      <li>Hydrogen atoms<\/li>\n                    <\/ul>\n                  <\/li>\n                  <li>the sky calls to us!<\/li>\n                <\/ul>\n              <\/li>\n              <li>Not a sunrise but a galaxyrise.<\/li>\n            <\/ul>\n            <p class=\'h5\'>Radio telescope extraordinary claims:<\/p>\n            <ol>\n              <li>require extraordinary evidence<\/li>\n              <li>two ghostly white figures\n                <ol class=\'list-alpha\'>\n                  <li>in coveralls and helmets<\/li>\n                  <li>are softly dancing finite\n                    <ol class=\'list-roman\'>\n                      <li>but unbounded<\/li>\n                      <li>extraplanetary radio telescope<\/li>\n                    <\/ol>\n                  <\/li>\n                  <li>star stuff harvesting star light<\/li>\n                <\/ol>\n              <\/li>\n              <li>Billions upon billions upon billions upon billions upon billions upon billions upon billions?<\/li>\n            <\/ol>\n            <h4>Corpus callosum (H4)<\/h4>\n            <p>Corpus callosum. Vanquish the impossible decipherment take root and flourish! Orions sword. The sky calls to us!<\/p>\n            <blockquote>\n              <p>Orions sword from which we spring! Astonishment laws of physics bits of moving fluff, science the sky calls to us gathered by gravity, cosmic ocean. <br>\n                <cite><strong>Carl Sagan<\/strong><\/cite><\/p>\n            <\/blockquote>\n            <p>Explorations billions upon billions permanence of the stars, \'Vangelis cosmos culture colonies\' ship of the imagination of brilliant syntheses at the edge of forever a still more glorious dawn awaits extraordinary claims require extraordinary evidence tesseract gathered by gravity rich in heavy atoms. AC\/DC Drake Equation globular star cluster quasar rich in heavy atoms realm of the galaxies<\/p>\n\n            <div class=\'captionImage left\'>\n              <img src=\'..\/images\/placeholders\/placeholder-1918x1082-people.jpg\' width=\'959\' height=\'541\' alt=\'\' \/>\n              <p class=\'caption\'>Image caption Lorem ipsum dolor sit amet, <a href=\'#\'>consectetur adipiscing elit<\/a>.<\/p>\n            <\/div>\n\n            <p>Consectetur adipiscing elit. Aliquam at link style sem. Strong erat emphasis. Donec placerat nisl magna, et faucibus arcu condimentum sed.<\/p>\n                \n            <h2>Tables<\/h2>            \n            <table>\n              <caption>\n              Tables\n              <\/caption>\n              <thead>\n                <tr>\n                  <th>Table header 1<\/th>\n                  <th>Table header 2<\/th>\n                  <th>Table header 3<\/th>\n                <\/tr>\n              <\/thead>\n              <tbody>\n                <tr>\n                  <td>Lorem ipsum<\/td>\n                  <td>Lorem ipsum<\/td>\n                  <td><p>Consectetur adipiscing elit. Aliquam at link style sem. Strong erat emphasis. Donec placerat nisl magna, et faucibus arcu condimentum sed.<\/p><\/td>\n                <\/tr>\n                <tr>\n                  <td>Lorem ipsum<\/td>\n                  <td>Lorem ipsum<\/td>\n                  <td><p>Consectetur adipiscing elit. Aliquam at link style sem. Strong erat emphasis. Donec placerat nisl magna, et faucibus arcu condimentum sed.<\/p><\/td>\n                <\/tr>\n                <tr>\n                  <td>Lorem ipsum<\/td>\n                  <td>Lorem ipsum<\/td>\n                  <td><p>Consectetur adipiscing elit. Aliquam at link style sem. Strong erat emphasis. Donec placerat nisl magna, et faucibus arcu condimentum sed.<\/p><\/td>\n                <\/tr>\n              <\/tbody>\n            <\/table>\n            <h2>Video<\/h2>\n            <div class=\'capionImage video\'>\n              <iframe width=\'730\' height=\'411\' src=\'https:\/\/www.youtube.com\/embed\/oZal3m3JOkk?rel=0&amp;showinfo=0\' frameborder=\'0\' allowfullscreen><\/iframe>\n              <p class=\'caption\'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.<\/p>\n            <\/div>\n            <!-- END WYSIWYG content -->'
};

export const footerData = {
  'Footer': {
    'Text': 'Here is some text, it does not have any HTML in it',
    'Menu': [
      {
        'Link': 'http:\/\/careers.local\/tools\/skills-transition-tool\/demo-general-content-page-with-image\/',
        'URLSegment': 'demo-general-content-page-with-image',
        'Title': 'Demo General Content Page - with image'
      }, {
        'Link': 'http:\/\/careers.local\/tools\/skills-transition-tool\/demo-general-content-page-with-video\/',
        'URLSegment': 'demo-general-content-page-with-video',
        'Title': 'Demo General Content Page - with video'
      }
    ]
  },
  'PopularJobs': {
    'Jobs': ['Landscape Gardener', 'Child care', 'Aborist', 'Software Architect', 'Teacher', 'Warden',
      'Landscape Gardener', 'Child care', 'Aborist', 'Software Architect', 'Teacher', 'Warden',
      'Landscape Gardener', 'Child care', 'Aborist', 'Software Architect', 'Teacher', 'Warden'],
    'Visible': 5
  }
};


export const listViewData = {
  'UndoPanel':
  {
    'Closed': false,
    'Text': 'No shift work'
  }
  ,
  'HelpPanels': [
    {
      'Closed': false,
      'Text': 'Here\u0027s a couple of tips to get you started',
      'Tips': '<p><strong>First tip</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p><p><strong>Second tip</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p><p><strong>Third tip</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.</p>'
    }
  ],
  'JobsCards': [
    {
      'Closed': false,
      'Flipped': false,
      'Title': 'Software Engineer',
      'Description': 'Researches, designs, develops and maintains software systems along with hardware development for medical, scientific, and industrial purposes.',
      'Interests': 'Gardening; Helping people; Cars.',
      'WorkConditions': ['Flexible hours', 'Business', 'hours', 'Inside', 'Outside', 'Regular hours'],
      'VocationalPathways': 'Social and community services. Manufacturing and technology',
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 82,
      'Interest': 74,
      'Demand': 23,
      'Pay': '$15–$40',
      'PerTime': 'per hour',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },
    {
      'Closed': false,
      'Flipped': true,
      'Title': 'Human Resources',
      'Description': 'Plans, directs, and/or coordinates all human resource activities and staff of an organization.',
      'Interests': 'Gardening; Helping people; Cars.',
      'WorkConditions': ['Flexible hours', 'hours', 'Outside', ],
      'VocationalPathways': 'Social and community services. Manufacturing and technology',
      'Image': '../src/assets/images/placeholders/human-resources.jpg',
      'SkillsMatch': 10,
      'Interest': 40,
      'Demand': 30,
      'Pay': '$120–$140',
      'PerTime': 'per hour',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },
    {
      'Closed': false,
      'Flipped': false,
      'Title': 'Dental Hygienist',
      'Description': 'Assists dentists in diagnostic and therapeutic aspects of a group or private dental practice.',
      'Interests': 'Gardening; Helping people; Cars.',
      'WorkConditions': ['Flexible hours', 'hours', 'Inside', 'Regular hours'],
      'VocationalPathways': 'Social and community services. Manufacturing and technology',
      'Image': '../src/assets/images/placeholders/dental-hygienist.jpg',
      'SkillsMatch': 100,
      'Interest': 60,
      'Demand': 90,
      'Pay': '$180–$340',
      'PerTime': 'per hour',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    },
    {
      'Closed': false,
      'Flipped': false,
      'Title': 'Landscape gardener',
      'Description': 'Landscape gardeners design, develop, maintain and remodel gardens and landscapes.',
      'Interests': 'Gardening; Helping people; Cars.',
      'WorkConditions': ['Flexible hours', 'Business'],
      'VocationalPathways': 'Social and community services. Manufacturing and technology',
      'Image': '../src/assets/images/placeholders/placeholder-630x399-job.jpg',
      'SkillsMatch': 80,
      'Interest': 30,
      'Demand': 20,
      'Pay': '$110–$140',
      'PerTime': 'per hour',
      'Skills': [
        'Evaluate reports or designs to determine work needs.',
        'Prepare chemicals for work application.',
        'Clean facilities or sites.',
        'Dispose of trash or waste materials.',
        'Remove debris from work sites.',
        'Plant greenery to improve landscape appearance.',
        'Cultivate lawns, turf, or gardens.',
        'Irrigate lawns, trees, or plants.',
        'Install equipment to protect or support trees.'
      ]
    },
    {
      'Closed': false,
      'Flipped': false,
      'Title': 'Financial Planner',
      'Description': 'Related to careers in portfolio management, the financial planner offers a broad range of services aimed at assisting individuals in managing and planning their financial future.',
      'Interests': 'Gardening; Helping people; Cars.',
      'WorkConditions': ['hours', 'Regular hours'],
      'VocationalPathways': 'Social and community services. Manufacturing and technology',
      'Image': '../src/assets/images/placeholders/financial-planner.jpg',
      'SkillsMatch': 20,
      'Interest': 50,
      'Demand': 90,
      'Pay': '$150–$240',
      'PerTime': 'per hour',
      'Skills': [
        'Examine characteristics or behavior of living organisms.',
        'Research methods to improve food products.',
        'Test quality of materials or finished products.',
        'Evaluate quality of materials or products.',
        'Analyze chemical compounds or substances.',
        'Clean objects.',
        'Prepare biological samples for testing or analysis.'
      ]
    }
  ],
  'QualificationsPanel':
  {
    'Text': 'Which course suits you best?',
    'Region': 'Northland',
    'Courses': [
      {
        'Closed': false,
        'Title': 'Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
        'Institution': 'at International College of New Zealand Limited',
        'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Level': '1',
        'LeadsTo': 'Groundsperson; Another job title; Job three'
      },
      {
        'Closed': false,
        'Title': 'Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
        'Institution': 'at International College of New Zealand Limited',
        'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Level': '3',
        'LeadsTo': 'Groundsperson; Another job title; Job three'
      },
      {
        'Closed': false,
        'Title': 'Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
        'Institution': 'at International College of New Zealand Limited',
        'Description': 'Descriptive text lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem lorem…',
        'VocationalPathways': [
          'Social and community services',
          'Manufacturing and technology'
        ],
        'Level': '5',
        'LeadsTo': 'Groundsperson; Another job title; Job three'
      }
    ]
  },
  'InstitutionsPanel':
  {
    'Text': 'Where would you like to study?',
    'Region': 'Northland',
    'Institutions': [
      {
        'Closed': false,
        'Title': 'Auckland University of Technology',
        'Location': 'Auckland'
      },
      {
        'Closed': false,
        'Title': 'University of Canterbury',
        'Location': 'Houghton Bay'
      },
      {
        'Closed': false,
        'Title': 'University of Otago',
        'Location': 'Dunedin'
      }
    ]
  }
};

export const jobSkills = {
  'Query': 'gardener',
  'Pagination':
    {
      'TotalItems': 17,
      'Start': 0,
      'Limit': 10,
      'CurrentPage': 1,
      'TotalPages': 2,
      'FirstItem': 1,
      'LastItem': 10
    },
  'Results': [
    {
      'SkillID': 16,
      'Title': 'Evaluate reports or designs to determine work needs.'
    }, {'SkillID': 372, 'Title': 'Prepare chemicals for work application.'}, {
      'SkillID': 390,
      'Title': 'Clean facilities or sites.'
    }, {'SkillID': 402, 'Title': 'Remove snow.'}, {
      'SkillID': 412,
      'Title': 'Dispose of trash or waste materials.'
    }, {'SkillID': 408, 'Title': 'Remove debris from work sites.'}, {
      'SkillID': 936,
      'Title': 'Plant greenery to improve landscape appearance.'
    }, {'SkillID': 934, 'Title': 'Cultivate lawns, turf, or gardens.'}, {
      'SkillID': 939,
      'Title': 'Irrigate lawns, trees, or plants.'
    }, {'SkillID': 957, 'Title': 'Install equipment to protect or support trees.'}
  ]
};


export const typeAheadData = {
  'Query': 'fake',
  'Pagination':
  {
    'TotalItems': 17,
    'Start': 0,
    'Limit': 10,
    'CurrentPage': 1,
    'TotalPages': 2,
    'FirstItem': 1,
    'LastItem': 10
  },
  'Results': [
    {
      'SkillID': 16,
      'Title': 'Evaluate reports or designs to determine work needs.'
    }, {'SkillID': 372, 'Title': 'Prepare chemicals for work application.'}, {
      'SkillID': 390,
      'Title': 'Clean facilities or sites.'
    }, {'SkillID': 402, 'Title': 'Remove snow.'}, {
      'SkillID': 412,
      'Title': 'Dispose of trash or waste materials.'
    }, {'SkillID': 408, 'Title': 'Remove debris from work sites.'}, {
      'SkillID': 936,
      'Title': 'Plant greenery to improve landscape appearance.'
    }, {'SkillID': 934, 'Title': 'Cultivate lawns, turf, or gardens.'}, {
      'SkillID': 939,
      'Title': 'Irrigate lawns, trees, or plants.'
    }, {'SkillID': 957, 'Title': 'Install equipment to protect or support trees.'}
  ]
};


