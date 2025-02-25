/*************************** buddy/findBuddyDisplay Options data: GET    UI to be displayed on page     *******************************/
export const findBuddyPgData = {
  /* day: {
     label: 'Select Day',
     type: 'checkbox',
     options: [
       { label: 'dyn_Today', value: 'dyn_today', apiKey: 'dateTimeSlots' }, //If a value  is prefixed with "dyn_",, it will be replaced with current date
       { label: 'Tomorrow', value: 'dyn_tomorrow', apiKey: 'dateTimeSlots' },
       {
         label: 'Day After Tomorrow',
         value: 'dyn_day_after_tomorrow',
         apiKey: 'dateTimeSlots',
       },
     ],
   },
    preferences: {
     label: 'Select Multiple preferences ',
     type: 'checkbox',
     options: [
       { label: 'Male', value: 'male', apiKey: 'gender' },
       { label: 'Female', value: 'female', apiKey: 'gender' },
       { label: 'Video', value: 'video', apiKey: 'video' },
       { label: 'No Video', value: 'no_video', apiKey: 'video' },
       { label: 'Anyone from my circle', value: 'circle', apiKey: 'buddy' },
       { label: 'Anybody', value: 'anybody', apiKey: 'buddy' },
     ],
   }, */
  expertiseLevel: {
    label: "Your expertise level in the selected skill",
    type: "checkbox",
    options: [
      { label: "Beginner", value: 1, apiKey: "expertiseLevel" },
      {
        label: "Intermediate",
        value: 2,
        apiKey: "expertiseLevel",
      },
      { label: "Expert", value: 3, apiKey: "expertiseLevel" },
    ],
  },
  participantsPreferences: {
    label: `Who all can participate in the session
      <div> <span style="background: #FFE4E6; color: #E11D48; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; margin-left: 0.5rem;">Not yet implemented</span> <span style="font-size: 0.7rem; font-style: italic; margin-left: 0.5rem; color: #fff;">- Please engage with it as if its available, This helps us evaluate its usability</span></div>`,
    type: "checkbox",
    options: [
      { label: "Not from my class", value: "not_class", apiKey: "classmate" },
      { label: "Not from my college", value: "not_college", apiKey: "college" },
      {
        label: "Anyone",
        value: "anyone",
        apiKey: "participant_type",
        onClickUnselect: ["restAll"], // When  this option is selected,  list  which options should be   UN selected
      },
      {
        label:
          "No one,  instead I would share the session link with my friends",
        value: "friends_only",
        apiKey: "share_preference",
        onClickUnselect: ["restAll"],
      },
    ],
  },
};

/*************************** buddy/findBuddy   POST *******************************/
const findBuddyReqData = {
  preferences: {
    gender: "any", //optional
    buddy: ["circle"], //optional
    sessions: [
      {
        dateTimeSlots: ["2024-06-14T10:00:00Z,2024-06-14T15:20:00Z"], //"," in time: Separates from & to value
        catId: "software",
        subSkillId: "ReactJS",
        participantsExpertiseLevel: [2], //Expected expertise of the other participants
        participantsReqd: [2, 3], //min, max
        duration: 45, //optional
        sessionDetails: [{ format: "qa", role: ["questioner"] }], //Optional, applicable  for technical sessions
      },
    ],
    video: "any", //optional
    profession: ["student"], //In future, we would have different apps for different professions
  },
  userDetails: {
    expertiseLevel: [{ Communication: 3 }], //For the first time user would be asked to select expertise level
  },
};

//Variation 1: If buddy is matched
const findBuddyRespData1 = {
  matchedSessionDetails: [
    {
      confirmedTime: "2024-06-14T10:00:00Z,2024-06-14T15:20:00Z",
      catId: "software",
      subSkillId: "communication",
      sessionDetails: [{ format: "qa", role: ["questioner"] }], //optional
      duration: 45, //optional
      sessionId: "1234567890",
    },
  ],
};

//Variation 2: If buddy is not matched
const findBuddyRespData2 = {
  matchedSessionDetails: [], //Empty array, If no buddy is matched
  isNewSessionCreated: true, //If new session is created without any match
  similarSessions: [
    //Not required for now
    {
      catId: "software",
      subSkillId: "communication",
      sessionDetails: [{ format: "qa", role: ["questioner"] }],
      duration: 45,
      sessionId: "1234567890",
    },
  ],
};

/*************************** /buddy/joinExistingSession  POST ***
  If user joins existings sessions
  * ****************************/

/* const postJoinExistingSessionReqData = {
   selectedSessions: [
     {
       sessionDetails: [{ role: ['questioner'] }],
       sessionId: '1234567890',
       selectedDateTime: ['2024-06-14T10:00:00Z,2024-06-14T15:20:00Z'],
     },
   ],
 };
 const postBookSessionRespData = findBuddyRespData1;  */ //same as findBuddyRespData1

/*************************** /buddy/getSkills  GET*******************************/

/* const getSkillsRespData = [
   {
     displayName: 'Communication',
     id: 'communication',
     description: 'Improve your communication skills.',
     subSkills: [
       {
         displayName: 'Verbal Communication',
         id: 'verbal_communication',
         description: 'Enhance your verbal communication skills.',
         participantsReqd: 2,
       },
       {
         displayName: 'Debate',
         id: 'debate',
         description: 'Enhance your verbal communication skills.',
         participantsReqd: 4,
       },
     ],
   },
   {
     displayName: 'Software',
     id: 'software',
     description: 'Improve your communication skills.',
     subSkills: [
       {
         displayName: 'React js',
         id: 'react',
         description: 'Enhance your verbal communication skills.',
         participantsReqd: 2,
       },
       {
         displayName: 'Angular',
         id: 'angular',
         description: 'Enhance your verbal communication skills.',
         participantsReqd: 4,
       },
       {
         displayName: 'js',
         id: 'js',
         alt: ['Javascript'],
         description: 'Enhance your verbal communication skills.',
         participantsReqd: 4,
       },
     ],
   },
 ]; */

/*************************** /buddy/getUserBookings  GET*******************************/

const getUserBookingsReqData = {
  userId: "",
  periodRange: "2024-06-14T10:00:00Z,2024-06-14T15:20:00Z", //"," in time: Separates from & to value- Date range
};

const getUserBookingsRespData = {
  sessions: [
    {
      confirmedTime: "2024-06-14T10:00:00Z,2024-06-14T15:20:00Z", //session confirmed
      catId: "software",
      subSkillId: "communication",
      sessionDetails: [{ format: "qa", role: ["questioner"], duration: 45 }],
      duration: 45, //not required
      sessionId: "1234567890",
      meetingUrl: "https://meet.google.com/abc-xyz-123",
      confirmedParticipants: 2,
      participantsReqd: [2, 3], //min, max
    },
    {
      dateTimeSlot: ["2024-06-14T10:00:00Z"], //Waitlisted
      catId: "software",
      subSkillId: "communication",
      sessionDetails: [{ format: "qa", role: ["questioner"], duration: 45 }],
      duration: 45, //not required
      sessionId: "1234567890",
      confirmedParticipants: 2,
      participantsReqd: [4, 5], //min, max
      meetingUrl: "https://meet.google.com/abc-xyz-123",
    },
  ],
};

/*************************** /buddy/postEvaluation websocket POST*******************************/

const postEvaluationReqData = {
  sessionId: "",
  userId: "",
  evaluatedFor: "",
  evaluation: {},
};

const postEvaluationRespData = {
  isEvaluationPosted: true,
};

/*************************** /buddy/getEvaluation websocket  POST*******************************/
const getEvaluationReqData = {
  sessionId: "",
  userId: "",
};

const getEvaluationRespData = {
  evaluation: {},
};

/*************************** /buddy/getEvaluation websocket  POST*******************************/

const getSkillsDataReq1 = {
  dateTimeRange: ["2024-08-12T00:00:00.000Z", "2024-08-15T23:59:59.000Z"],
  sessions: {
    verbalCommunication: ["debate", "rolePlay"],
  },
};
const getSkillsDataReq2 = {
  dateTimeRange: ["2024-08-12T00:00:00.000Z", "2024-08-15T23:59:59.000Z"],
  sessions: "*",
};

export const getSkillsRespData = [
  {
    catName: "Verbal Communication",
    catId: "verbalCommunication",
    catDescription: "Sharpen your verbal communication skills.",
    skills: [
      {
        skillName: "Debate",
        skillId: "debate",
        skillDescription: "Strengthen your argumentation abilities.",
        participantsReqd: [2],
        evaluation: "spoken",
        guidelines: "spoken",
        slots: {
          "2024-08-16": [8, 14],
          "2024-08-17": [11, 15],
          "2024-08-18": [8, 16],
          "2024-08-19": [10, 14],
        },
      },
      {
        skillName: "Role Play",
        skillId: "rolePlay",
        skillDescription:
          "Engage in role play scenarios to improve your communication and interpersonal skills.",
        participantsReqd: [2],
        evaluation: "spoken",
        guidelines: "spoken",
        slots: {
          "2024-08-16": [9, 16],
          "2024-08-17": [12, 18],
          "2024-08-18": [7, 14],
          "2024-08-19": [10, 17],
        },
      },
    ],
  },
];
