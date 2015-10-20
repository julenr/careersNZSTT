

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
      'Description': 'BASIC TEXT INPUT QUESTION PROTOTYPE',
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
      'Description': 'SINGLE CHOICE QUESTION PROTOTYPE',
      'QuestionType': 'SingleChoice',
      'NextQuestionID': null,
      'HasAlternative': false,
      'AlternativeText': '',
      'AlternativeNextQuestionID': null,
      'Endpoint': null,
      'QuestionResponses': [
        {
          'ResponseText': 'Option 1. Single choice question prototype',
          'NextQuestionID': 3
        },
        {
          'ResponseText': 'Option 2. Single choice question prototype',
          'NextQuestionID': 3
        },
        {
          'ResponseText': 'Option 3. Single choice question prototype',
          'NextQuestionID': 3
        },
        {
          'ResponseText': 'Option 4. Single choice question prototype',
          'NextQuestionID': 3
        },
        {
          'ResponseText': 'Option 5. Single choice question prototype',
          'NextQuestionID': 3
        }
      ]
    }, {
      'ID': 3,
      'Active': false,
      'Text': 'Skills match',
      'Description': 'TAG CLOUD QUESTION PROTOTYPE',
      'QuestionType': 'TagCloud',
      'NextQuestionID': 5,
      'HasAlternative': false,
      'AlternativeText': '',
      'AlternativeNextQuestionID': null,
      'Endpoint': null,
      'QuestionResponses': [{
        'ResponseText': 'Tag 1.',
        'NextQuestionID': 4
      }, {
        'ResponseText': 'Tag 2.',
        'NextQuestionID': 4
      }, {
        'ResponseText': 'Tag 3.',
        'NextQuestionID': 4,
      }, {
        'ResponseText': 'Tag 4.',
        'NextQuestionID': 4
      }, {
        'ResponseText': 'Tag 5.',
        'NextQuestionID': 4
      }]
    }, {
      'ID': 4,
      'Active': false,
      'Text': 'Another job',
      'Description': 'MULTIPLE CHOICE QUESTION PROTOTYPE',
      'QuestionType': 'MultipleChoice',
      'NextQuestionID': null,
      'HasAlternative': true,
      'AlternativeText': 'I dont mind',
      'AlternativeNextQuestionID': 4,
      'Endpoint': null,
      'QuestionResponses': [{
        'ID': 1,
        'ResponseText': 'Option 1. Multiple choice question prototype',
        'selected': false,
        'NextQuestionID': 7
      }, {
        'ID': 2,
        'ResponseText': 'Option 2. Multiple choice question prototype',
        'selected': false,
        'NextQuestionID': 7
      }, {
        'ID': 3,
        'ResponseText': 'Option 3. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 7
      }, {
        'ID': 4,
        'ResponseText': 'Option 4. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 7
      }, {
        'ID': 5,
        'ResponseText': 'Option 5. Multiple choice question prototype',
        'selected': true,
        'NextQuestionID': 7
      }]
    }, {
      'ID': 5,
      'Active': false,
      'Text': '',
      'Description': 'TYPE AHEAD  QUESTION PROTOTYPE',
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
  'QualificationsPanel':
  {
    'Closed': false,
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

      

    
    