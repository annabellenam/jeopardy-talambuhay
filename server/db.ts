import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What are the names of these two? (left to right)',
        imgSrc: 'https://m.media-amazon.com/images/M/MV5BYWM0NDM5OGUtMDA4ZC00OWNhLWI4NjctNWJkZDM4ODc4MzU1XkEyXkFqcGc@._V1_.jpg',
        answer: 'Red and Yellow',
    },
    {
        points: 200,
        question:
            'What is the pigs name in minecraft story mode that dies',
        imgSrc: "https://i.ytimg.com/vi/z4Vx_lUSkLs/maxresdefault.jpg",
        answer: 'Reuben',
    },
    {
        points: 300,
        question:
            'What is the name of the island on the bottom?',
        imgSrc: 'https://thumbs.dreamstime.com/b/south-korea-map-outline-vector-illustration-south-korea-map-outline-vector-illustration-isolated-white-background-125666007.jpg',
        answer: 'Jeju',
    },
    {
        points: 400,
        question: 'What year of the winter olympic did this mascot originate from?',
        imgSrc: "https://i.ytimg.com/vi/YtWnQaOrT5Y/maxresdefault.jpg",
        answer: '2018',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What breed of dog is this?',
            imgSrc: 'https://i.postimg.cc/dt3CNdw2/IMG-8905.jpg',
            answer: 'Shih tzu',
        },
        {
            points: 100,
            question:
                'What is one of wingstop\'s most popular flavor?',
            answer: 'Hot honey rub',
        },
        {
            points: 300,
            question: 'What figurine is this?',
            imgSrc: 'https://m.media-amazon.com/images/I/517yOWsdJHL.jpg',
            answer: 'Smiski',
        },
        {
            points: 400,
            question:
                'Which ski mountain is this? (in Utah)',
            imgSrc:
                "https://www.snowbird.com/_gatsby/image/af030026b947428decbbdd5318186c97/d298c4ee68d00d31120f71f9492913f4/snowbird_trailmap_winter_2425.webp?u=https%3A%2F%2Fcms.snowbird.com%2Fsites%2Fdefault%2Ffiles%2F2024-11%2Fsnowbird_trailmap_winter_2425.jpg&a=w%3D960%26h%3D1159%26fm%3Dwebp%26q%3D100&cd=d59ecdae071431f32661109b31e7af82",
            answer: 'Snow bird',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'Which city used to be called New Amsterdam?',
        answer: 'New York',
    }
]);


const categories = [
    {
        title: 'My Past',
        questions: pastQuestions
    },
    {
        title: 'My Present',
        questions: presentQuestions
    },
    {
        title: 'My Future',
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}