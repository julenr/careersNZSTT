

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
    'Name': 'Darren',
    'Gender' : 'Male',
    'Ethnicity': 'Kiwi'
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
  'VocationalPathways': {
    'Selected': [],
    'Current': null
  },
  'WorkingConditions': {
    'Selected': [],
    'Current': null
  },
  'Questions': [
    {
      'ID': 1,
      'Active': false,
      'Text': '',
      'Description': 'Basic text input — some text entered, with placeholder and hint/help',
      'QuestionType': 'TextInput',
      'QuestionResponses': [],
      'PlaceHolder': 'Optional placeholder',
      'NextQuestionID': 2,
      'HasAlternative': false,
      'AlternativeText': '',
      'AlternativeNextQuestionID': null,
      'Endpoint': null
    },
    {
      'ID': 2,
      'Active': false,
      'Text': 'Goal',
      'Description': 'What is your goal in using this tool? Single choice',
      'QuestionType': 'SingleChoice',
      'NextQuestionID': null,
      'HasAlternative': false,
      'AlternativeText': '',
      'AlternativeNextQuestionID': null,
      'Endpoint': null,
      'QuestionResponses': [
        {
          'ResponseText': 'Id like to find a job that uses my skills',
          'NextQuestionID': 3
        },
        {
          'ResponseText': 'Id like to get ahead in my current job or industry',
          'NextQuestionID': 3
        },
        {
          'ResponseText': 'I want to do a course that builds on my skills',
          'NextQuestionID': 3
        },
        {
          'ResponseText': 'I want to turn my passion into a job',
          'NextQuestionID': 3
        },
        {
          'ResponseText': 'I want a change, but Im not sure what to do which has a really long title and may wrap to another line',
          'NextQuestionID': 3
        }
      ]
    },
    {
      'ID': 3,
      'Active': false,
      'Text': 'Most recent job',
      'Description': 'Ok great, the best place to start is by looking at the skills you have from jobs youve held.  What is your most recent job?',
      'QuestionType': 'SingleChoice',
      'NextQuestionID': null,
      'HasAlternative': true,
      'AlternativeText': 'I dont mind',
      'AlternativeNextQuestionID': 4,
      'Endpoint': null,
      'QuestionResponses': [{
        'ResponseText': 'Look up skills associated with job',
        'NextQuestionID': 4
      }, {
        'ResponseText': 'Ive never really had a job',
        'NextQuestionID': 4
      }, {
        'ResponseText': 'Im not sure what to put which has a really long title and may wrap to another line',
        'NextQuestionID': 4
      }]
    }, {
      'ID': 4,
      'Active': false,
      'Text': 'Skills match',
      'Description': 'Special questions - tag style - Job skills confirmation/edit question.',
      'QuestionType': 'TagCloud',
      'NextQuestionID': 5,
      'HasAlternative': false,
      'AlternativeText': '',
      'AlternativeNextQuestionID': null,
      'Endpoint': null,
      'QuestionResponses': [{
        'ResponseText': 'Coffee making',
        'NextQuestionID': 4
      }, {
        'ResponseText': 'Food safety',
        'NextQuestionID': 4
      }, {
        'ResponseText': 'Skill three',
        'NextQuestionID': 4,
      }, {
        'ResponseText': 'Skill four',
        'NextQuestionID': 4
      }, {
        'ResponseText': 'etc',
        'NextQuestionID': 4
      }]
    }, {
      'ID': 5,
      'Active': false,
      'Text': 'Another job',
      'Description': 'The more jobs you add the better idea we get of your skills, do you have another job to add?',
      'QuestionType': 'TagCloud',
      'NextQuestionID': 6,
      'HasAlternative': true,
      'AlternativeText': 'I dont mind',
      'AlternativeNextQuestionID': 6,
      'Endpoint': null,
      'QuestionResponses': []
    }, {
      'ID': 6,
      'Active': false,
      'Text': 'Another job',
      'Description': 'Do you have any more jobs to add?',
      'QuestionType': 'MultipleChoice',
      'NextQuestionID': null,
      'HasAlternative': true,
      'AlternativeText': 'I dont mind',
      'AlternativeNextQuestionID': 4,
      'Endpoint': null,
      'QuestionResponses': [{
        'ID': 1,
        'ResponseText': 'Option 1',
        'selected': false,
        'NextQuestionID': 7
      }, {
        'ID': 2,
        'ResponseText': 'Option 2',
        'selected': false,
        'NextQuestionID': 7
      }, {
        'ID': 3,
        'ResponseText': 'Option 3 which has a really long title and may wrap to another line',
        'selected': true,
        'NextQuestionID': 7
      }]
    }, {
      'ID': 7,
      'Active': false,
      'Text': 'Unpaid jobs',
      'Description': 'Many people gain valuable skills from unpaid work, have you got experience of any of these common unpaid or voluntary jobs:',
      'QuestionType': 'MultipleChoice',
      'NextQuestionID': null,
      'HasAlternative': false,
      'AlternativeText': '',
      'AlternativeNextQuestionID': 8,
      'Endpoint': null,
      'QuestionResponses': [{
        'ID': 0,
        'ResponseText': 'Option 1',
        'Selected': false,
        'NextQuestionID': 8
      }, {
        'ID': 1,
        'ResponseText': 'Option 2',
        'Selected': false,
        'NextQuestionID': 8
      }, {
        'ID': 2,
        'ResponseText': 'Option 3 which has a really long title and may wrap to another line',
        'Selected': false,
        'NextQuestionID': 8
      }, {'ID': 3, 'ResponseText': 'Option 4','Selected': false, 'NextQuestionID': 8}, {
        'ResponseText': 'Option 5',
        'NextQuestionID': 8
      }, {'ID': 4,'ResponseText': 'Option 6','Selected': false, 'NextQuestionID': 8}, {
        'ResponseText': 'Option 7',
        'NextQuestionID': 8
      }, {'ID': 5, 'ResponseText': 'Option 8','Selected': true, 'NextQuestionID': 8}, {
        'ResponseText': 'Option 9',
        'NextQuestionID': 8
      }, {'ID': 6,'ResponseText': 'Option 10','Selected': false, 'NextQuestionID': 8}, {
        'ResponseText': 'Option 11',
        'NextQuestionID': 8
      }, {'ID': 7, 'ResponseText': 'Option 12','Selected': false, 'NextQuestionID': 8}]
    }, {
      'ID': 8,
      'Active': false,
      'Text': '',
      'Description': 'Which unpaid or voluntary job did you do? TYPEAHEAD TYPE',
      'QuestionType': 'Typeahead',
      'NextQuestionID': 9,
      'HasAlternative': true,
      'PlaceHolder' : 'Write something here',
      'AlternativeText': 'It doesnt matter',
      'AlternativeNextQuestionID': 9,
      'Endpoint': 'Jobs',
      'QuestionResponses': [
        'Dentist', 'Software Developer', 'Nurse Practioner', 'Physician', 'Civil Engineer', 'Cost Estimator',
        'Logistician', 'Pharmacist', 'Optician', 'High School Teacher', 'Loan Officer', 'HR Specialist'
      ]
    }, {
      'ID': 9,
      'Active': false,
      'Text': 'Other unpaid job',
      'Description': 'Which unpaid or voluntary job did you do? TYPEAHEAD TYPE',
      'QuestionType': 'Typeahead',
      'NextQuestionID': null,
      'HasAlternative': false,
      'PlaceHolder' : 'Write something here',
      'AlternativeText': '',
      'AlternativeNextQuestionID': null,
      'Endpoint': 'Skills',
      'QuestionResponses': [
        'Dentist', 'Software Developer', 'Nurse Practioner', 'Physician', 'Civil Engineer', 'Cost Estimator',
        'Logistician', 'Pharmacist', 'Optician', 'High School Teacher', 'Loan Officer', 'HR Specialist'
      ]
    }, {
      'ID': 10,
      'Active': false,
      'Text': 'Skills match',
      'Description': 'Many [job-title-plural] (also known as `[job-title-alias]) have the following skills, would you like to have all these skills?',
      'QuestionType': 'TagCloud',
      'NextQuestionID': 11,
      'HasAlternative': true,
      'AlternativeText': 'It doesnt matter',
      'AlternativeNextQuestionID': 11,
      'Endpoint': 'Jobs',
      'QuestionResponses': []
    }, {
      'ID': 11,
      'Active': false,
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


export const mainContentHTML = {
  'Title': 'Demo General Content Page - with video',
  'FeatureType': 'Video',
  'Image': null,
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
      'Tips': [
        {
          'Title': 'First tip',
          'Text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem'
        },
        {
          'Title': 'Second tip',
          'Text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem'
        },
        {
          'Title': 'Third tip',
          'Text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem'
        }
      ]
    }
  ],
  'JobsCards': [
    {
      'Closed': false,
      'Fliped': false,
      'Title': 'Software Engineer',
      'Description': 'Researches, designs, develops and maintains software systems along with hardware development for medical, scientific, and industrial purposes.',
      'Interests': 'Gardening; Helping people; Cars.',
      'WorkConditions': 'Flexible hours; Business hours; Inside; Outside; Regular hours.',
      'VocationalPathways': 'Social and community services. Manufacturing and technology',
      'Image': '../src/assets/images/placeholders/software-engineer.jpg',
      'SkillsMatch': 80,
      'Interest': 70,
      'Demand': 20,
      'Pay': '$15–$40',
      'PerTime': 'per hour'
    },
    {
      'Closed': false,
      'Fliped': true,
      'Title': 'Human Resources',
      'Description': 'Plans, directs, and/or coordinates all human resource activities and staff of an organization.',
      'Interests': 'Gardening; Helping people; Cars.',
      'WorkConditions': 'Flexible hours; Business hours; Inside; Outside; Regular hours.',
      'VocationalPathways': 'Social and community services. Manufacturing and technology',
      'Image': '../src/assets/images/placeholders/human-resources.jpg',
      'SkillsMatch': 10,
      'Interest': 40,
      'Demand': 30,
      'Pay': '$120–$140',
      'PerTime': 'per hour'
    },
    {
      'Closed': false,
      'Fliped': false,
      'Title': 'Dental Hygienist',
      'Description': 'Assists dentists in diagnostic and therapeutic aspects of a group or private dental practice.',
      'Interests': 'Gardening; Helping people; Cars.',
      'WorkConditions': 'Flexible hours; Business hours; Inside; Outside; Regular hours.',
      'VocationalPathways': 'Social and community services. Manufacturing and technology',
      'Image': '../src/assets/images/placeholders/dental-hygienist.jpg',
      'SkillsMatch': 100,
      'Interest': 60,
      'Demand': 90,
      'Pay': '$180–$340',
      'PerTime': 'per hour'
    },
    {
      'Closed': false,
      'Fliped': false,
      'Title': 'Landscape gardener',
      'Description': 'Landscape gardeners design, develop, maintain and remodel gardens and landscapes.',
      'Interests': 'Gardening; Helping people; Cars.',
      'WorkConditions': 'Flexible hours; Business hours; Inside; Outside; Regular hours.',
      'VocationalPathways': 'Social and community services. Manufacturing and technology',
      'Image': '../src/assets/images/placeholders/placeholder-630x399-job.jpg',
      'SkillsMatch': 80,
      'Interest': 30,
      'Demand': 20,
      'Pay': '$110–$140',
      'PerTime': 'per hour'
    },
    {
      'Closed': false,
      'Fliped': false,
      'Title': 'Financial Planner',
      'Description': 'Related to careers in portfolio management, the financial planner offers a broad range of services aimed at assisting individuals in managing and planning their financial future.',
      'Interests': 'Gardening; Helping people; Cars.',
      'WorkConditions': 'Flexible hours; Business hours; Inside; Outside; Regular hours.',
      'VocationalPathways': 'Social and community services. Manufacturing and technology',
      'Image': '../src/assets/images/placeholders/financial-planner.jpg',
      'SkillsMatch': 20,
      'Interest': 50,
      'Demand': 90,
      'Pay': '$150–$240',
      'PerTime': 'per hour'
    }
  ],
  'CourseOptionPanel':
  {
    'Closed': false,
    'Text': 'Which course suits you best?',
    'Region': 'Northland',
    'Courses': [
      {
        'Closed': false,
        'Title': 'Graduate Diploma in Professional Supervision (Biculturalism in Practice)',
        'Institution': 'International College of New Zealand Limited',
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
        'Institution': 'International College of New Zealand Limited',
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
        'Institution': 'International College of New Zealand Limited',
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
    'Closed': false,
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

      

    
    