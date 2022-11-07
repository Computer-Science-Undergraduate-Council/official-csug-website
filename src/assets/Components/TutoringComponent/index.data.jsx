const tutorDetails = [
    // MONDAY
    {
        name: "Justin",
        location: "Hylan 301 & Discord",
        password: "",
        schedule: [{day: "Monday", time: "11:40"}],
        subjects: 'CSC 171, CSC 172'
    },
    {
        name: "Henry",
        location: "Hylan 301 & Discord",
        password: "",
        schedule: [{day: "Monday", time: "13:30"}],
        subjects: 'CSC 172, MTH 150, MTH 141/161, MTH 142/162'
    },
    {
        name: "Godbless",
        location: "Hylan 301 & Discord",
        password: "",
        schedule: [{day: "Monday", time: "18:00"}],
        subjects: 'CSC 161, CSC 171, CSC 172, Leetcode '
    },
    {
        name: "Ezra Tock",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Monday", time: "17:30"}],
        subjects: 'CSC 161, CSC 171, CSC 172, MTH 150, MTH 141/161, MTH 142/162, MTH 165, Leetcode'
    },

    // TUESDAY
    {
        name: "Andy",
        location: "Hylan 301 & Discord",
        password: "",
        schedule: [{day: "Tuesday", time: "13:30"}],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 248, CSC 252, MTH 150, MTH 141/161, MTH 142/162, MTH 165, MTH/STT 201'
    },
    {
        name: "Justin",
        location: "Hylan 301 & Discord",
        password: "",
        schedule: [{day: "Tuesday", time: "15:30"}],
        subjects: 'CSC 171, CSC 172'
    },
    {
        name: "Amii",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Tuesday", time: "17:00"}],
        subjects: 'CSC 161, MTH 141/161, MTH 142/162'
    },
    {
        name: "Grant",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Tuesday", time: "17:00"}],
        subjects: 'CSC 161, CSC 171, CSC 172, MTH 141/161, MTH 142/162, Leetcode'
    },
    {
        name: "Jesse",
        location: "Discord & Zoom (791 250 6161)",
        password: "",
        schedule: [{day: "Tuesday", time: "20:00"}],
        subjects: 'CSC 161, CSC 171, CSC 172, Leetcode'
    },

    // WEDNESDAY
    {
        name: "Winnie",
        location: "Hylan 301 & Discord",
        password: "",
        schedule: [{day: "Wednesday", time: "13:10"}],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 240, CSC 244, CSC 282, MTH/STT 201, Leetcode'
    },
    {
        name: "Ezra Tock",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Wednesday", time: "17:30"}],
        subjects: 'CSC 161, CSC 171, CSC 172, MTH 150, MTH 141/161, MTH 142/162, MTH 165, Leetcode'
    },
    {
        name: "Godbless",
        location: "Hylan 301 & Discord",
        password: "",
        schedule: [{day: "Wednesday", time: "18:00"}],
        subjects: 'CSC 161, CSC 171, CSC 172, Leetcode'
    },

    // THURSDAY
    {
        name: "Jesse",
        location: "Hylan 301 & Discord",
        password: "",
        schedule: [{day: "Thursday", time: "9:30"}],
        subjects: 'CSC 161, CSC 171, CSC 172, Leetcode'
    },
    {
        name: "Andy",
        location: "Hylan 301 & Discord",
        password: "",
        schedule: [{day: "Thursday", time: "12:30"}],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 248, CSC 252, MTH 150, MTH 141/161, MTH 142/162, MTH 165, MTH/STT 201'
    },
    {
        name: "Dingcheng",
        location: "Zoom by appointment (685 753 0080)",
        password: "N1Yich",
        schedule: [{day: "Thursday", time: "13:00"}],
        subjects: 'CSC 171, CSC 261, MTH 150, MTH 141/161, MTH 165'
    },
    {
        name: "Ezra Tock",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Thursday", time: "17:30"}],
        subjects: 'CSC 161, CSC 171, CSC 172, MTH 150, MTH 141/161, MTH 142/162, MTH 165, Leetcode'
    },
    {
        name: "Jerry",
        location: "Discord & Zoom (917 2461 6644)",
        password: "",
        schedule: [{day: "Thursday", time: "19:00"}],
        subjects: 'CSC 161, CSC 171, CSC 172, MATH 161, MATH 162'
    },

    // FRIDAY
    {
        name: "Grant",
        location: "Discord",
        password: "",
        schedule: [{day: "Friday", time: "10:30"}],
        subjects: 'CSC 161, CSC 171, CSC 172, MTH 141/161, MTH 142/162, Leetcode'
    },
    {
        name: "Kestor",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Friday", time: "13:00"}],
        subjects: 'CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Jordan",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Friday", time: "11:00"}],
        subjects: 'CSC 171, CSC 172'
    },
    {
        name: "Winnie",
        location: "Hylan 301 & Discord",
        password: "",
        schedule: [{day: "Friday", time: "13:10"}],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 240, CSC 244, CSC 282, MTH/STT 201, Leetcode'
    },
    {
        name: "Amii",
        location: "Discord",
        password: "",
        schedule: [{day: "Friday", time: "15:00"}],
        subjects: 'CSC 161, MTH 141/161, MTH 142/162'
    },
    {
        name: "Andy",
        location: "Hylan 301 & Discord",
        password: "",
        schedule: [{day: "Friday", time: "16:30"}],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 248, CSC 252, MTH 150, MTH 141/161, MTH 142/162, MTH 165, MTH/STT 201'
    },
    {
        name: "Raghav",
        location: "Hylan 301 by appointment",
        password: "",
        schedule: [{day: "Friday", time: "20:30"}],
        subjects: 'CSC 171, CSC 172, MTH 150, MTH 141/161'
    },

    // SATURDAY
    {
        name: "Amii",
        location: "Hylan 301 & Discord (by appointment)",
        password: "",
        schedule: [{day: "Saturday", time: "12:00"}],
        subjects: 'CSC 161, MTH 141/161, MTH 142/162'
    },
    {
        name: "Kestor",
        location: "Discord",
        password: "",
        schedule: [{day: "Saturday", time: "13:00"}],
        subjects: 'CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Henry",
        location: "Discord",
        password: "",
        schedule: [{day: "Saturday", time: "20:30"}],
        subjects: 'CSC 172, MTH 150, MTH 141/161, MTH 142/162'
    },
    {
        name: "Jerry",
        location: "Discord & Zoom (917 2461 6644)",
        password: "",
        schedule: [{day: "Saturday", time: "19:00"}],
        subjects: 'CSC 161, CSC 171, CSC 172, MATH 161, MATH 162'
    },
]
// This function checks the tutoring schedule for the week
const weeklySchedule = () =>{
    var weekMap = {
        Sunday:[],
        Monday:[],
        Tuesday:[],
        Wednesday:[],
        Thursday:[],
        Friday:[],
        Saturday:[],
    };
    tutorDetails.map(eachTutor => {
        eachTutor.schedule.map(eachDay=>{
            var dayForTutor = eachDay.day;
            weekMap[dayForTutor].push(eachTutor);
        })
    })
    return weekMap;
}

// This function checks the tutoring schedule for a particular day
const dataToSend = () => {
    const dateRightNow = new Date();
    var currentData = []
    tutorDetails.map(eachTutor => {
        if(checkDay(eachTutor)){
            //Makes a copy of the object so that only today's times are shown
            var toAppend = {};
            toAppend.name = eachTutor.name;
            toAppend.location = eachTutor.location;
            toAppend.password = eachTutor.password;
            toAppend.subjects = eachTutor.subjects;
            toAppend.schedule = [];
            eachTutor.schedule.map(eachDay => {
                if(dateRightNow.getDay() === convertDay(eachDay.day)){
                    toAppend.schedule.push({"day": eachDay.day, "time":eachDay.time})
                }
            })
            currentData.push(toAppend);
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
export {weeklySchedule};
