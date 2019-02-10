import { QuestionData } from '../types';

const questionData: QuestionData = [
  {
    category: 'The Year in Photos',
    questions: [
      {
        easy: {
          image: '/images/celebrity_250_hard_2008.jpg',
          answer: '2019',
        },
        hard: {
          text: 'Year Hard 1',
          answer: '2019',
        },
      },
      {
        easy: {
          text: 'Year Easy 2',
          answer: '2019',
        },
        hard: {
          text: 'Year Hard 2',
          answer: '2019',
        },
      },
    ],
  },
  {
    category: 'Twomb-matic Moments',
    questions: [
      {
        easy: {
          text: 'Twomb Easy 1',
          answer: '2019',
        },
        hard: {
          text: 'Twomb Hard 1',
          answer: '2019',
        },
      },
      {
        easy: {
          text: 'Twomb Easy 2',
          answer: '2019',
        },
        hard: {
          text: 'Twomb Hard 2',
          answer: '2019',
        },
      },
    ],
  },
];

export default questionData;
