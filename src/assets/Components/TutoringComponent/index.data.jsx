
const tutorDetails = [
    {
        name: "Besmelh Alshaalan",
        zoomLink: "2927451682",
        password: "",
        schedule: [{day: "Monday", time: "7:00"},{day: "Tuesday", time: "7:00"}],
        subjects: 'CSC171, 172'
    },
    {
        name: "Alexander Martin",
        zoomLink: "928 1592 5433",
        password: "",
        schedule: [{day: "Monday", time: "10:30"},{day: "Wednesday", time: "10:30"}],
        subjects: 'CSC 171, MTH 150'
    },
    {
        name: "Roka Hosono",
        zoomLink: "345 493 5738",
        password: "YkCL0e",
        schedule: [{day: "Monday", time: "13:00"},{day: "Saturday", time: "11:00"}],
        subjects: 'CSC171, 172, 173, 262, 282,MTH 150'
    },
    {
        name: "Samuel Frank",
        zoomLink: "3556034787",
        password: "",
        schedule: [{day: "Monday", time: "14:00"},{day: "Friday", time: "14:00"}],
        subjects: 'CSC171, MTH150'
    },
    {
        name: "Tommy Geiger",
        zoomLink: "457 304 4220",
        password: "",
        schedule: [{day: "Monday", time: "17:00"},{day: "Tuesday", time: "15:00"},{day: "Wednesday", time: "17:00"},{day: "Thursday", time: "15:00"}],
        subjects: 'CSC171, 172, 210, 252, 257, 261, 262'
    },
    {
        name: "Simon Schiller",
        zoomLink: "5783019505",
        password: "",
        schedule: [{day: "Tuesday", time: "11:15"},{day: "Thursday", time: "11:15"}],
        subjects: 'MTH 150, CSC171, 172, 252, 257'
    },
    {
        name: "Yufei Zhao",
        zoomLink: "9535560058",
        password: "",
        schedule: [{day: "Tuesday", time: "12:30"},{day: "Thursday", time: "8:30"}],
        subjects: 'MTH 150, CSC171, 172, 173'
    },
    {
        name: "Gal Cherki",
        zoomLink: "9501591844",
        password: "",
        schedule: [{day: "Thursday", time: "10:00"}],
        subjects: 'CSC161,171,172, 173, 282, MTH150, 165'
    },
    {
        name: "Mila Paymukhina",
        zoomLink: "6176880620",
        password: "cs",
        schedule: [{day: "Thursday", time: "17:00"}],
        subjects: 'CSC171'
    },
    {
        name: "Zhiyu Lei",
        zoomLink: "7012802808",
        password: "",
        schedule: [{day: "Friday", time: "10:30"}],
        subjects: 'CSC 171, 172, 242, 261, 262,MTH 150, 201'
    },
    {
        name: "Joseph Cloud",
        zoomLink: "923 917 3891",
        password: "cbDsp0",
        schedule: [{day: "Friday", time: "16:00"},{day: "Saturday", time: "16:00"}],
        subjects: 'CSC171, 172, 173'
    },
    {
        name: "Rachel He",
        zoomLink: "95313635146",
        password: "",
        schedule: [{day: "Friday", time: "16:00"}],
        subjects: 'CSC 172, 173, 242, 280, MTH 150, 165'
    },
]

// This function checks the tutoring schedule for a particular day
const dataToSend = () => {
    var currentData = []
    tutorDetails.map(eachTutor => {
        if(checkDay(eachTutor)){
            currentData.push(eachTutor);
        }
    })
    return currentData;
}

const checkDay = (specificTutor) => {
    const currentDate = new Date();
    var toSend = false;
    specificTutor.schedule.map(scheduleDetail => {
        var scheduleHour = parseInt(scheduleDetail.time.split(":")[0]);
        var scheduleMinute = parseInt(scheduleDetail.time.split(":")[1]);
        var scheduleTime = scheduleHour * 60 + scheduleMinute;
        var currentHour = currentDate.getHours();
        var currentMinute = currentDate.getMinutes();
        var currentTimeinMinutes = currentHour * 60 + currentMinute;
        if(currentDate.getDay() ===  convertDay(scheduleDetail.day)){
            if(currentTimeinMinutes < scheduleTime + 60){
                toSend = true;
            }  
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