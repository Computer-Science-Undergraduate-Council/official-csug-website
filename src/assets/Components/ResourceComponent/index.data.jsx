import csugTutoring from '../../images/tutoring.png';
import dandyHacks from '../../images/flower.png';
import internship from '../../images/internship.jpg';
import academics from '../../images/books.png';
import project from '../../images/project.png';
import workshop from '../../images/workshop.png';

const resources = [
    {
        id: 0,
        title: 'DandyHacks',
        img: dandyHacks,
        descriptions: 'We organize a 36 hours hackathon, DandyHacks. This is an amazing event where you can learn and demonstrate your skills and network with peers and employers.',
        link: 'https://dandyhacks.net/'
    },
    {
        id: 1,
        title: 'Roclab',
        img: academics,
        descriptions: '',
        link: ''
    },
    {
        id: 2,
        title: 'CSUG Tutoring',
        img: csugTutoring,
        description: 'We run a special tutoring service for Computer Science subjects to help our students. This is a free drop-in tutoring service where we have selected the best tutors for you.',
        link: '/tutoring'
    },
    {
        id: 3,
        title: 'Academics',
        img: academics,
        description: 'We have compiled resources that you can use for your classes. These resources have been compiled with the help of students who have taken the courses. Please make sure that the use of these resources doesn\'t violate any academic honesty policies.',
        link:'https://github.com/Computer-Science-Undergraduate-Council/CSUG-resources/tree/main/Academics'
    },
    {
        id: 4,
        title: 'Projects',
        img: project,
        description: 'Coming Soon',
        link: '#'
    },
    {
        id: 5,
        title: 'Internships',
        img: internship,
        description: 'We compile information about available internships with the help of the CS community and Alumni of UoR. You can use this information and find one that could be your next internship.',
        link: 'https://github.com/Computer-Science-Undergraduate-Council/CSUG-resources/tree/main/Jobs%20and%20Internship'
    }
]

export default resources;