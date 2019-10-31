import React, { Component } from 'react';
import { feedbackData } from './MockFeedbackData';

const a = 1;
let data;

if (a === 1) {
  data = feedbackData.filter(feedbackData => feedbackData.sid === 'App01');
} else if (a === 2) {
  data = feedbackData.filter(feedbackData => feedbackData.sid === 'App02');
} else if (a === 3) {
  data = feedbackData.filter(feedbackData => feedbackData.sid === 'App03');
} else {
  data = feedbackData;
}

export default data;
