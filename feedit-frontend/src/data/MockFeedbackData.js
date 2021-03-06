import faker from 'faker';

export const feedbackData = [
  // Will be having 2 data that will be within 1 day ago
  // Jan: 3, Feb: 5, Mar: 1, Apr: 3, May: 2, Jun: 3
  // Jul: 7, Aug: 5, Sep: 2, Oct: 2, Nov: 4, Dec: 2
  // Will give a date and time that is within 1 day ago
  // The data has to be sorted such that the earlier dates are at the top and the later dates at the bottom
  // Because the accumulator from LineChart sorts the data based on when it receives it not by the value
  //
  // Will give a date and time that is during 2019 Jan (3x)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-01-01', '2019-01-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-01-01', '2019-01-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-01-01', '2019-01-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is during 2019 Feb (5x)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-02-01', '2019-02-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-02-01', '2019-02-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-02-01', '2019-02-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-02-01', '2019-02-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-02-01', '2019-02-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is during 2019 Mar (1x)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-03-01', '2019-03-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is during 2019 Apr (3x)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-04-01', '2019-04-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-04-01', '2019-04-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-04-01', '2019-04-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is during 2019 May (2x)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-05-01', '2019-05-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-05-01', '2019-05-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is during 2019 Jun (3x)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-06-01', '2019-06-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-06-01', '2019-06-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-06-01', '2019-06-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is during 2019 Jul (7x)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-07-01', '2019-07-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-07-01', '2019-07-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-07-01', '2019-07-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-07-01', '2019-07-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-07-01', '2019-07-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-07-01', '2019-07-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-07-01', '2019-07-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is during 2019 Aug (5x)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-08-01', '2019-08-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-08-01', '2019-08-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-08-01', '2019-08-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-08-01', '2019-08-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-08-01', '2019-08-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is during 2019 Sep (2x)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-09-01', '2019-09-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-09-01', '2019-09-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is during 2019 Oct (2x)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-10-01', '2019-10-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-10-01', '2019-10-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is during 2019 Nov (4x)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-11-01', '2019-11-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },

  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-11-01', '2019-11-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-11-01', '2019-11-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-11-01', '2019-11-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is during 2019 Dec (x2)
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-12-01', '2019-12-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-12-01', '2019-12-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is within 1 day ago
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.recent(),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is within 1 day ago
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.recent(),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Will give a date and time that is within 1 day ago
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.recent(),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // For system_id 2, will have 1 day in Jan, Mar, Oct 2019
  // Jan 2019
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '2',
    timestamp: faker.date.between('2019-01-01', '2019-01-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Mar 2019
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '2',
    timestamp: faker.date.between('2019-03-01', '2019-03-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  //Oct 2019
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '2',
    timestamp: faker.date.between('2019-10-01', '2019-10-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // For system_id 3 will have 1 day in Feb, Jun, Jul 2019
  // Feb 2019
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '1',
    timestamp: faker.date.between('2019-02-01', '2019-02-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  // Jun 2019
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '3',
    timestamp: faker.date.between('2019-06-01', '2019-06-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
  // Jul 2019
  {
    feedback_id: '123',
    feedback_answer: 'qwerty',
    feedback_question: 'uiop',
    feedback_type: 'text',
    system_id: '3',
    timestamp: faker.date.between('2019-07-01', '2019-07-28'),
    user_group: 'Toys',
    user_id: 'qwertyuiop',
  },
];
