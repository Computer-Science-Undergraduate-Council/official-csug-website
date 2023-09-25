const tutorDetails = [
    // MONDAY
    {
        name: "Rachel Chen",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "11:30-13:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, CSC 161, CSC 171'
    },
    {
        name: "Amanda Jen",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "12:30-13:40" }],
        subjects: 'MATH 161/141, MATH 162/142, CSC 171, CSC 172'
    },
    {
        name: "Rory Brennan-Jones",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "13:00-13:45" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, MATH 165, CSC 161, CSC 171'
    },
    {
        name: "Yuliang Liu",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "13:00-14:30" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, CSC 171, CSC 172'
    },
    {
        name: "Peter Nie",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "13:30-15:00" }],
        subjects: 'MATH 150, CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Boyi Zhang",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "13:30-15:00" }],
        subjects: 'MATH 150, MATH165, MATH/STAT 201 CSC 161, CSC 172, CSC 173, CSC242'
    },
    {
        name: "Aryan Raj Dhawan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "15:30-16:30" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Tora Ozawa",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "15:40-16:40" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, MATH 165, CSC 161, CSC 171, CSC 172, CSC 173, CSC 252, CSC 254'
    },
    {
        name: "Ester Luo",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "15:40-16:40" }],
        subjects: 'MATH 150, MATH162/142, MATH 165, CSC 171, CSC 172'
    },
    

    // TUESDAY
    {
        name: "Clifford An",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Tuesday", time: "13:00-15:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, MATH 165, CSC 161, CSC 171, CSC 172, CSC 173'
    },
    {
        name: "Kestor Brown",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Tuesday", time: "15:00-16:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 242'
    },
    {
        name: "William Nie",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Tuesday", time: "15:25-16:25" }],
        subjects: 'CSC 171, CSC 172'
    },
    {
        name: "Aryan Raj Dhawan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Tuesday", time: "17:00-18:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Zachary Tan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Tuesday", time: "17:00-18:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, CSC 161, CSC 171'
    },

    

    // WEDNESDAY
    {
        name: "Rachel Chen",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "11:30-13:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, CSC 161, CSC 171'
    },
    {
        name: "Aryan Raj Dhawan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "12:00-13:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Zachary Tan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "12:00-13:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, CSC 161, CSC 171'
    },
    {
        name: "Amanda Jen",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "12:30-13:40" }],
        subjects: 'MATH 161/141, MATH 162/142, CSC 171, CSC 172'
    },
    {
        name: "Rory Brennan-Jones",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "13:00-13:45" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, MATH 165, CSC 161, CSC 171'
    },
    {
        name: "Yuliang Liu",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "13:00-15:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, CSC 171, CSC 172'
    },
    {
        name: "Peter Nie",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "13:30-15:00" }],
        subjects: 'MATH 150, CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Boyi Zhang",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "13:30-15:00" }],
        subjects: 'MATH 150, MATH165, MATH/STAT 201 CSC 161, CSC 172, CSC 173, CSC242'
    },

    

    // THURSDAY
    {
        name: "Clifford An",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Thursday", time: "13:00-15:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, MATH 165, CSC 161, CSC 171, CSC 172, CSC 173'
    },
    {
        name: "Wentao Jiang",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Thursday", time: "14:00-15:00" }],
        subjects: 'MATH 150, MATH165, CSC161, CSC 170, CSC210, CSC240'
    },
    {
        name: "Tora Ozawa",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Thursday", time: "16:30-18:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, MATH 165, CSC 161, CSC 171, CSC 172, CSC 173, CSC 252, CSC 254'
    },
    {
        name: "Miles Frank",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Thursday", time: "15:00-17:00" }],
        subjects: 'MATH 150, MATH/STAT 201, CSC 171, CSC 172'
    },
    {
        name: "Ian Black",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Thursday", time: "17:00-18:00" }],
        subjects: 'CSC161, CSC 171, CSC 172, CSC173'
    },
    

    // FRIDAY
    {
        name: "Boyi Zhang",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "10:00-13:00" }],
        subjects: 'MATH 150, MATH165, MATH/STAT 201 CSC 161, CSC 172, CSC 173, CSC242'
    },
    {
        name: "Tora Ozawa",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "11:00-12:00" }],
        subjects: 'MATH 150, MATH 161/141, MATH 162/142, MATH 165, CSC 161, CSC 171, CSC 172, CSC 173, CSC 252, CSC 254'
    },
    {
        name: "Peter Nie",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "11:00-12:00" }],
        subjects: 'MATH 150, CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Jordan Johnson",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "13:00-14:00" }],
        subjects: 'CSC 161, CSC 171'
    },
    {
        name: "Ester Luo",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Firday", time: "13:30-14:30" }],
        subjects: 'MATH 150, MATH162/142, MATH 165, CSC 171, CSC 172'
    },
    {
        name: "Clifford An",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "14:00-15:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, MATH 165, CSC 161, CSC 171, CSC 172, CSC 173'
    },
    {
        name: "Zachary Tan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "15:00-16:00" }],
        subjects: 'MATH 150,  MATH 161/141, MATH 162/142, CSC 161, CSC 171'
    },
    {
        name: "Lucy Ming",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "17:00-19:00" }],
        subjects: 'CSC 172'
    },
    
]
// This function checks the tutoring schedule for the week
const weeklySchedule = () => {
    var weekMap = {
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
    };
    tutorDetails.map(eachTutor => {
        eachTutor.schedule.map(eachDay => {
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
        if (checkDay(eachTutor)) {
            //Makes a copy of the object so that only today's times are shown
            var toAppend = {};
            toAppend.name = eachTutor.name;
            toAppend.location = eachTutor.location;
            toAppend.password = eachTutor.password;
            toAppend.subjects = eachTutor.subjects;
            toAppend.schedule = [];
            eachTutor.schedule.map(eachDay => {
                if (dateRightNow.getDay() === convertDay(eachDay.day)) {
                    toAppend.schedule.push({ "day": eachDay.day, "time": eachDay.time })
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
        if (currentDate.getDay() === convertDay(scheduleDetail.day)) {
            if (currentTimeinMinutes < scheduleTime + 60) {
                toSend = true;
            }
        }
    })

    return toSend;
}

const convertDay = (dateofInterest) => {
    if (dateofInterest === "Sunday") return 0;
    else if (dateofInterest === "Monday") return 1;
    else if (dateofInterest === "Tuesday") return 2;
    else if (dateofInterest === "Wednesday") return 3;
    else if (dateofInterest === "Thursday") return 4;
    else if (dateofInterest === "Friday") return 5;
    else if (dateofInterest === "Saturday") return 6;
}



export default tutorDetails;
export { dataToSend };
export { weeklySchedule };
