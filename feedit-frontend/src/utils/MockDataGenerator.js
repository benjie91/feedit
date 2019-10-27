export const times = x => f => {
  if (x > 0) {
    f();
    times(x - 1)(f);
  }
};

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateMockFeedbacks = systemIds => {
  let mockData = [];

  systemIds.forEach(systemId => {
    const numOfFeedbacks = getRandomIntInclusive(1, 300);

    times(numOfFeedbacks)(() => {
      mockData = mockData.concat({
        systemId: systemId,
        feedbackType: 'Text',
        feedbackQuestion: 'How is your experience today?',
        feedbackAnswer: 'The Application X seems laggy and unresponsive',
        userId: '1001',
        userGroup: 'Department A',
      });
    });
  });

  return mockData;
};
