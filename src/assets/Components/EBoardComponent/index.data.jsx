import samFrank from '../../images/E-board/2023-2024/Sam_Frank.png'; // president
import zachNguyen from '../../images/E-board/2023-2024/Zach.png'; // vice-president
import aryanDhawan from '../../images/E-board/2024-2025/Aryan.png'; // tutoring chair
import richardChuong from '../../images/E-board/2023-2024/richard.jpg'; // event chair
import katieSeo from '../../images/E-board/2023-2024/Katie.jpg'; // internal communication chair
import kevinWang from '../../images/E-board/2023-2024/Kevin.png'; // business manager
import gingerLi from '../../images/E-board/2023-2024/Ginger.jpeg'; // DandyHacks chair
import tiffanyXiang from '../../images/E-board/2023-2024/tiff.png'; // social media manager
import sungjaeBae from '../../images/E-board/2023-2024/SJ.JPG'
import rusmiyaAqid from '../../images/E-board/2023-2024/rusmiya.png'; // first-year rep
import Joy from '../../images/E-board/2024-2025/Joy.jpg'; // business manager


const eboardmembers = [
    {
        id: 0,
        name: 'Duong (Zach) Nguyen',
        title:'President',
        img: zachNguyen,
        gitlink: 'https://github.com/cszach',
        linkedInlink: 'https://www.linkedin.com/in/zach-nguyen/',
    },
    {
        id: 1,
        name: 'Katie Seo',
        title:'Vice Presdient',
        gitlink: '',
        linkedInlink: '',
        img: katieSeo,
    },
    {
        id: 2,
        name: 'Aryan Raj Dhawan',
        title:'Tutoring Chair',
        img: aryanDhawan,
        gitlink: 'hi',
        linkedInlink: 'hi',

    },
    {
        id: 3,
        name: 'Joy Xiang',
        title:'Event Chair',
        img: Joy,
    },
    // {
    //     id: 4,
    //     name: 'Christin Guo',
    //     title:'Business Manager',
    //     img: kevinWang,
    // },
    // {
    //     id: 5,
    //     name: 'Andy Feng Chen',
    //     title:'Publicity Chair',
    //     img: richardChuong,

    // },
    // {
    //     id: 5,
    //     name: 'Alan Jimenez',
    //     title:'DandyHacks Chair',
    //     img: gingerLi,
    // },
    {
        id: 6,
        name: 'Tiffany Xiang',
        title:'Social Media Manager',
        img: tiffanyXiang,
    },
    {
        id: 7,
        name: 'Sung Jae Bae',
        title: 'RocLab Director',
        img: sungjaeBae
    },
    {
        id: 8,
        name: 'Rusmiya Aqid',
        title: 'First-Year Representative',
        img: rusmiyaAqid
    }
]

for(let i = 0; i < eboardmembers.length; i++)
    {
        eboardmembers[i].name = '';
        eboardmembers[i].title = '';
    }


export default eboardmembers;
