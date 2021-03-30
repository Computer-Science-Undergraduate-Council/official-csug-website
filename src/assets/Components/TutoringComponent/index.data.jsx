import { current } from "immer";

const tutorDetails = [
    {
        name: "test",
        zoomLink: "test123",
        schedule: [{day: "Wednesday", time: 9},{day: "Tuesday", time: 17}],
        subjects: 'CSC 171'
    },
    {
        name: "test2",
        zoomLink: "test123",
        schedule: [{day: "Monday", time: 9},{day: "Tuesday", time: 17}],
        subjects: 'CSC 171'
    },
    {
        name: "test3",
        zoomLink: "test123",
        schedule: [{day: "Tuesday", time: 9},{day: "Tuesday", time: 17}],
        subjects: 'CSC 171'

    }
]


const dataToSend = () => {
    var currentData = {}
    tutorDetails.map(eachTutor => {
        if(checkDay(eachTutor)){
            currentData.push(eachTutor);
        }
    })
    console.log(currentData);
    return currentData;
}

const checkDay = (specificTutor) => {
    const currentDate = new Date();
    var toSend = false;
    specificTutor.schedule.map(scheduleDetail => {
        if(currentDate.getDay() ===  convertDay(scheduleDetail.day) && currentDate.getHours() < scheduleDetail.time + 1){
            toSend = true;
        }
    })
    
    return toSend;
}

const convertDay = (dateofInterest) => {
    if(dateofInterest === "Sunday") return 0;
    else if (dateofInterest === "Monday") return 1;
    else if (dateofInterest === "Tuesday") return 2;
    else if (dateofInterest === "Wednesday") return 3;
    else if (dateofInterest === "Thursday") return 4;
    else if (dateofInterest === "Friday") return 5;
    else if (dateofInterest === "Saturday") return 6;
}

export default tutorDetails;
export {dataToSend};