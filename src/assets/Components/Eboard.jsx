import React from 'react'

import { makeStyles } from '@material-ui/core/styles';


import Aman from '../images/E-board/Aman.png';
import Anh from '../images/E-board/PhuongAnh.jpg';
import Minghui from '../images/E-board/Emily.jpg';
import Jerry from '../images/E-board/Jerry.png';
import Tash from '../images/E-board/Tash.jpg';
import Ashley from '../images/E-board/Ashley.jpeg';
import Carolina from '../images/E-board/Ashley.jpeg';
import Haochen from '../images/E-board/Haochen.jpg';


import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    eboardSection:{
        background: '#113F77',
        padding: '32px 0',
    },
    title: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      fontSize: '3rem',
      paddingBottom:'0',
      fontWeight:'bold',
    },
    eboardBody: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        paddingTop:'4px',
        fontSize: '1.5rem',
        margin: '0 auto',
        width:'75%',
    },
    avatarSize:{
        width: '256px',
        height:'256px',
        border: '5px solid #113f77',
        boxShadow: '-15px 15px 5px rgba(0, 0, 0, 0.5)',
        margin: '24px auto'
    }
  }));

export const eboardmembers = [
    {
        id: 0,
        name: 'Aman Shreshta',
        title:'President',
        img: Aman,
        description: 'Aman is the president of the Computer Science Undergraduate Council. He previously served CSUG as DandyHacks Chair and Tutoring chair.',
        gitlink: 'https://github.com/amnshrestha',
        linkedInlink: 'https://www.linkedin.com/in/aman-shrestha/',
        email: '#'
    },
    {
        id: 1,
        name: 'Anh (Jessie) Nguyen',
        title:'Vice - President',
        img: Anh,
        description: 'Jessie is a Junior (class of 2022) majoring in Computer Science. She is the Vice President of CSUG, and her role is to assist the President in making decisions and help planning events. She is also the Founder and former President of Google DSC (Developer Student Club). Her hobbies include photography, cooking, and outdoors activities.',
        gitlink: 'https://github.com/jessieAnhNguyen',
        linkedInlink: 'https://www.linkedin.com/in/jessieanh/',
        email: '#'
    },
    {
        id: 2,
        name: 'Jiahao (Jerry) Liu',
        title:'Tutoring Chair',
        img: Jerry,
        description: "Jerry is a senior majoring computer science and minoring in business. He serves as the tutoring chair and runs our biweekly coding workshop program. Besides school, you can often find him in the gym or securing that pentakill in summoner\'s rift. And here is his favorite quote \"In Carnage, I bloom like a flower in the dawn\"" ,
        gitlink: 'https://github.com/yanyujianshen',
        linkedInlink: 'https://www.linkedin.com/in/jiahao-jerry-lu/',
        email: '#'

    },
    {
        id: 3,
        name: 'Minghui (Emily) Zheng',
        title:'Event Planning Chair',
        img: Minghui,
        description: 'Emily is a Sophomore studying Computer Science and minoring in Digital Media Studies and Economics. She currently serves as the Event Coordinator and looks forward to connecting with new members of CSUG. Outside of academics, she likes to take photos, indulge in fine cuisines, and hangout with friends.',
        gitlink: 'https://github.com/eeeemily',
        linkedInlink: 'https://www.linkedin.com/in/minghui-zheng/',
        email: '#'
    },
    {
        id: 4,
        name: 'Tasheem Brown',
        title:'Internal Communication Chair',
        img: Tash,
        description: 'This is Tash, our Internal Communications Chair. He is currently majoring in both CS and DMS. Tash is responsible for sharing any upcoming news and updates surrounding the club and CS that students alike could benefit from. Apart from that, he enjoys playing badminton and nurturing is odd obsession with vacuums in his free time.',
        gitlink: 'https://github.com/tashbrown',
        linkedInlink: 'https://www.linkedin.com/in/tasheembrown/',
        email: '#'
    },
    {
        id: 5,
        name: 'Sungwoon (Ashley) Yoon',
        title:'Business Manager',
        img: Ashley,
        description: 'Ashley is a sophomore majoring in Computer Science and minoring in Journalism. She\'s currently serving as the Business Manager and is responsible for overseeing any transactions in CSUG. Outside of CSUG, she\'s also involved in the Campus Times and Liberty in North Korea.',
        gitlink: '#',
        linkedInlink: '#',
        email: '#'
    },
    {
        id: 6,
        name: 'Carolina Lion He',
        title:'DandyHacks Chair (2020)',
        img: Ashley,
        description: 'Hello, there! I am Carolina :^) It was a great experience to work with my team members to create the first-ever virtual DandyHacks experience! I am so proud of us!! I am always down to chat about learning and about hackathons! :^) ',
        gitlink: '#',
        linkedInlink: 'www.linkedin.com/in/carolina-lionhe ',
        email: '#'
    },
    {
        id: 7,
        name: 'Haochen Zeng',
        title:'DandyHacks Chair (2021)',
        img: Haochen,
        description: 'Haochen is a junior majoring in Business Analytics and Computer Science. He is on the DandyHacks organizing team for 2020 and the upcoming DandyHacks 2021. In his free time, he enjoys traveling, cycling, and any outing activities. Currently, he\'s working on improving his skills in Geoguessr.',
        gitlink: '#',
        linkedInlink: 'https://www.linkedin.com/in/haochen-zeng-5b9a92175/',
        email: '#'
    }
]


export default function Eboard() {

    const classes = useStyles();

    const eboard = (eboard) => {
        return eboard.map(eboardmem => {
            return  <div className="col-lg-4 d-flex"><Avatar alt={eboardmem.name} src={eboardmem.img} className={classes.avatarSize}/></div>
        })
    }

    return (
        <div className={classes.eboardSection}>
            <div className={classes.title}>E-Board</div>

                <div className="container text-center">
                    <div className="row">

                        {eboard(eboardmembers)}

                    </div>

                </div>



        </div>
    )
}
