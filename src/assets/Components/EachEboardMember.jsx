import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import Aman from '../images/E-board/Aman.png';
import Anh from '../images/E-board/PhuongAnh.jpg';
import Minghui from '../images/E-board/Emily.jpg';
import Jerry from '../images/E-board/Jerry.png';
import Tash from '../images/E-board/Tash.jpg';
import Ashley from '../images/E-board/Ashley.jpeg';


const useStyles = makeStyles((theme) => ({
    avatarSize:{
        width: '256px',
        height:'256px',
        border: '5px solid #113f77',
        boxShadow: '-15px 15px 5px rgba(0, 0, 0, 0.5)',
        margin: '24px auto'
    }
  }));
export default function EachEboardMember(props) {
    const classes = useStyles();

    var image=Aman;
    switch (props.image){
        case "Aman":
            image=Aman;
            break;
        case "Anh":
            image=Anh;
            break;
        case "Minghui":
            image=Minghui;
            break;
        case "Jerry":
            image=Jerry;
            break;
        case "Tash":
            image=Tash;
            break;
        case "Ashley":
            image=Ashley;
            break;
        default:
            image=Aman;
    }


    return (
        <div>
            <Avatar alt={props.name} src={image} className={classes.avatarSize}/>
        </div>
    )
}
