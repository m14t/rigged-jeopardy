import { QuestionData } from '../types';

const questionData: QuestionData = [
  {
    category: 'The Year in Photos',
    questions: [
      // Question 1
      {
        easy: {
          text: 'Eliz was trapped in a silent movie this year.',
          image: `${process.env.PUBLIC_URL}/images/Year_Photos_250_easy.png`,
          answer: '2013',
        },
        hard: {
          text:
            'In 2013, Eliz was trapped in a silent movie in a take reminiscent of silent film stars. In this year, the first narrative silent film, The Great Train Robbery, was released.',
          image: `${process.env.PUBLIC_URL}/images/Year_Photos_250_easy.png`,
          answer: '1903',
        },
      },
      // Question 2
      {
        easy: {
          text: 'The year this image was photoshopped.',
          image: `${process.env.PUBLIC_URL}/images/Year_Photos_500_2006.jpg`,
          answer: '2019',
        },
        hard: {
          text: 'This is when Jess first learned to crochet.',
          image: `${process.env.PUBLIC_URL}/images/Year_Photos_500_2006.jpg`,
          answer: '1990',
        },
      },
      // Question 3
      {
        easy: {
          text:
            "This year's ball pit had 2011 balls and 2011 oz. of semen forever wrecked Wolf's plumbing system.",
          image: `${process.env.PUBLIC_URL}/images/Year_Photos_750_easy.jpg`,
          answer: 'What is 2011?',
        },
        hard: {
          text: "The number of balls that were in Gosselin 2011's ball pit",
          image: `${process.env.PUBLIC_URL}/images/Year_Photos_750_easy.jpg`,
          answer: 'What is 476?',
        },
      },
      // Question 4
      {
        easy: {
          text: 'When this happened.',
          image: `${process.env.PUBLIC_URL}/images/today.jpg`,
          answer: '????',
        },
        hard: {
          text: 'When this happened.',
          image: `${process.env.PUBLIC_URL}/images/today.jpg`,
          answer: '????',
        },
      },
    ],
  },
  {
    category: 'Twomb-atic Moments',
    questions: [
      // Question 1
      {
        easy: {
          text:
            "The year of Brexit and Trump's election couldn't stop this man from Mosh Kosh B'Goshin' his way through Forman.",
          image: `${
            process.env.PUBLIC_URL
          }/images/twomb-mautic_easy_250_2016.jpg`,
          answer: '2016',
        },
        hard: {
          text: "Osh Kosh B'Gosh, est. XXXX.",
          image: `${
            process.env.PUBLIC_URL
          }/images/twomb-matic_250_hard_1895.jpg`,
          answer: '1895',
        },
      },
      // Question 2
      {
        easy: {
          text:
            "Add 2002 to these sweet 16 cheeks to discover the year of Gosselin's sweet 16.",
          image: `${
            process.env.PUBLIC_URL
          }/images/twomb-mautic_500_easy_2018.jpg`,
          answer: '2018',
        },
        hard: {
          text:
            'Make sure you can name what year this was from, or the sheriff will be on your tail!',
          image: `${process.env.PUBLIC_URL}/images/twmob-matic_250_hard.jpg`,
          answer: '2007',
        },
      },
      // Question 3
      {
        easy: {
          text:
            "The midnight ride of Twombs Revere comes from Gosselin's 2nd year.",
          image: `${process.env.PUBLIC_URL}/images/twomb-mautic_750_2005.jpg`,
          answer: '2005',
        },
        hard: {
          text: '????',
          image: `${process.env.PUBLIC_URL}/images/twomb-mautic_750_2005.jpg`,
          answer: '???',
        },
      },
      // Question 4
      {
        easy: {
          text: "You'd have to be insane to not remember this 2013 posse!",
          image: `${
            process.env.PUBLIC_URL
          }/images/twomb-matic_1000_easy_2013.jpg`,
          answer: '2013',
        },
        hard: {
          text: 'The first trapeze act was premiered in this year in Paris.',
          image: `${
            process.env.PUBLIC_URL
          }/images/Twomb-matic_1000_hard_fem_2016.jpg`,
          answer: '1859',
        },
      },
    ],
  },
  {
    category: 'Food Through The Ages',
    questions: [
      // Question 1
      {
        easy: {
          text: "The year of Noah Wolf's BBQ.",
          image: `${process.env.PUBLIC_URL}/images/food_easy_wolf_2009.gif`,
          answer: '2004, 2005, 2007-2012, 2015, 2016, 2018',
        },
        hard: {
          text: "This was the year when Noah Wolf BBQ'ed the most meat.",
          // image: `${process.env.PUBLIC_URL}/images/Year_Photos_250_easy.png`,
          answer: '2010',
        },
      },
      // Question 2
      {
        easy: {
          text: "Whoa, did anyone audit last year's goblin cupcakes?",
          image: `${process.env.PUBLIC_URL}/images/food_500_easy_2018.jpg`,
          answer: '2018',
        },
        hard: {
          text: "Name the 6th ingredient from 2007's Jello brand Pudding.",
          image: `${process.env.PUBLIC_URL}/images/food_500_easy_2007.jpg`,
          answer: 'Tetrasodium Pyrohosphate',
        },
      },
      // Question 3
      {
        easy: {
          text:
            'Garnished with these sight-enhancing vegetables, King Erock should have 20/20 vision. But sadly, this Gosselin took place 8 years prior to his 2020 dreams.',
          image: `${process.env.PUBLIC_URL}/images/food_750_2012.jpg`,
          answer: '2012',
        },
        hard: {
          text:
            'The quantity of juice that this 2012 vegetable king could make with his herbaceous crown.',
          image: `${process.env.PUBLIC_URL}/images/food_750_2012.jpg`,
          answer: '15 fl. oz.',
        },
      },
      // Question 4
      {
        easy: {
          text: 'Y2K + 5 = Martini stew, no doi.',
          image: `${process.env.PUBLIC_URL}/images/food_1000_easy_2005.jpg`,
          answer: '2005',
        },
        hard: {
          text:
            'The year the last of the pudding was finally scraped off these walls.',
          image: `${
            process.env.PUBLIC_URL
          }/images/Year_Photos_1000_hard_2015.jpg`,
          answer: '2015',
        },
      },
    ],
  },
  {
    category: 'Celebrity Sightings',
    questions: [
      // Question 1
      {
        easy: {
          text:
            'Hey Daddy-o, this is the Goss you know, Ramones were the only band listened to',
          answer: '2004-2019',
        },
        hard: {
          text:
            'Doo doo doo do.  Doo doo doo do.  Doo doo doo do. Doo doo doo do.  Do you have the time?',
          answer: 'What is the 90s Medley from Gosselin 2008?',
        },
      },
      // Question 2
      {
        easy: {
          text:
            "Dave, dressed as Ellen Degeneres, coudln't get Ellen out of his mind, although the 1994-1998 smash sitcom had been cancelled 11 year prior to this Gosselin.",
          image: `${process.env.PUBLIC_URL}/images/Celebrity_easy_500_2009.png`,
          answer: '2009',
        },
        hard: {
          text: `In 2009, "Dave, dressed as Ellen Degeneres, coudln't get Ellen out of his mind."  In THIS year, Ellen Degeneres finally got cigarettes out of her mind, when she quit smoking.`,
          image: `${process.env.PUBLIC_URL}/images/Celebrity_easy_500_2009.png`,
          answer: '2005, no doi.',
        },
      },
      // Question 3
      {
        easy: {
          // text: '???',
          // image: `${process.env.PUBLIC_URL}/images/food_750_2012.jpg`,
          video: `${process.env.PUBLIC_URL}/videos/easy.mp4`,
          answer: '???',
        },
        hard: {
          // text: '???',
          video: `${process.env.PUBLIC_URL}/videos/hard.mp4`,
          answer: '???',
        },
      },
      // Question 4
      {
        easy: {
          text:
            "This was the year Martini had a John Wilkes Booth to commemorate the 150th anniversary of Lincoln's 1865 assassination.",
          image: `${process.env.PUBLIC_URL}/images/celebrity_1000__2015.jpg`,
          answer: '2015',
        },
        hard: {
          text: 'The year that John Wilkes Booth made his theatrical debut.',
          image: `${process.env.PUBLIC_URL}/images/celebrity_1000__2015.jpg`,
          answer: '1856',
        },
      },
    ],
  },
];

export default questionData;
