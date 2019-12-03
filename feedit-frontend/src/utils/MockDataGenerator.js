import faker from 'faker';
import { getRandomIntInclusive, times } from './UtilityFunctions';

const generateFakeUsers = numOfUsers => {
  let users = [];
  times(numOfUsers)(() => {
    users = users.concat({
      userId: faker.internet.userName(),
      userDepartment: faker.commerce.department(),
    });
  });

  return users;
};

export const generateMockFeedbacks = systemIds => {
  let mockData = [];

  systemIds.forEach(systemId => {
    const numOfFeedbacks = getRandomIntInclusive(1, 300);
    const users = generateFakeUsers(50);

    times(numOfFeedbacks)(() => {
      const user = users[Math.floor(Math.random() * users.length)];
      mockData = mockData.concat({
        systemId: systemId,
        feedbackType: 'Text',
        feedbackQuestion: 'How is your experience today?', // Todo: Change this
        feedbackAnswer: 'The Application X seems laggy and unresponsive', // Todo: Change this
        userId: user.userId,
        userGroup: user.userDepartment,
        timestamp: faker.date.past(1),
      });
    });
  });

  console.info(mockData);

  return mockData;
};
