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

export const generateFakeSystemIds = num => {
  let systemIds = [];
  for (let i = 0; i < num; i++) {
    systemIds = systemIds.concat(getRandomIntInclusive(1, 9999));
  }
  return systemIds;
};

export const generateFakeSystemData = systemIds => {
  let systemData = [];
  systemIds.forEach(systemId => {
    systemData = systemData.concat({
      systemId: systemId,
      systemName: faker.internet.domainWord(),
      custodianName: faker.name.findName(),
      registeredDateTime: '',
    });
  });
  return systemData;
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
        timestamp: faker.date.past(1), // Generate base on one year of data
      });
    });
  });

  console.info(mockData);

  return mockData;
};
