const tutorDetails = [
    // MONDAY
    {
        name: "Peter",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "13:30" }],
        subjects: 'MATH 150, CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Natalie",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "15:30" }],
        subjects: 'CSC 171, CSC 172, CSC 173, MTH 141/161, MTH 142/162'
    },
    {
        name: "Michael",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "17:00" }],
        subjects: 'CSC 171, MTH 150'
    },
    {
        name: "Woody",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "17:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 214, CSC 252, CSC 254, CSC 261, CSC 294, MTH 141/161, MTH 142/162, MTH 165'
    },
    {
        name: "Emma Buller",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "17:00" }],
        subjects: 'CSC 172, MTH 150'
    },
    {
        name: "Michael",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "18:00" }],
        subjects: 'CSC 171, MTH 150'
    },

    // TUESDAY

    {
        name: "Dylan",
        location: "iZone",
        password: "",
        schedule: [{ day: "Tuesday", time: "12:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 173, MTH 150, MTH 165, MTH/STT 201'
    },
    {
        name: "Gigi",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Tuesday", time: "14:15" }],
        subjects: 'CSC 171'
    },
    {
        name: "Dominic",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Tuesday", time: "15:30" }],
        subjects: 'CSC 161, CSC 171, CSC 172, MTH 150, MTH 141/161, MTH 142/162, MTH 165, MTH/STT 201'
    },
    {
        name: "Lucy",
        location: "iZone",
        password: "",
        schedule: [{ day: "Tuesday", time: "22:00" }],
        subjects: 'CSC 171, MTH 165'
    },

    // WEDNESDAY
    {
        name: "Colby",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "13:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Kestor Brown",
        location: "Hylan 301",
        password: "",
        schedule: [{ day: "Wednesday", time: "13:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 242'
    },
    {
        name: "Colby",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "14:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Ahmed",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "15:30" }],
        subjects: 'CSC 171, CSC 186, MTH 150'
    },
    {
        name: "Dominic",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "16:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172, MTH 150, MTH 141/161, MTH 142/162, MTH 165, MTH/STT 201'
    },
    {
        name: "Ester",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "16:00" }],
        subjects: 'CSC 171, MTH 150, MTH 141/161, MTH 142/162, MTH 165'
    },
    {
        name: "Woody",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "17:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 214, CSC 252, CSC 254, CSC 261, CSC 294, MTH 141/161, MTH 142/162, MTH 165'
    },
    {
        name: "Emma Buller",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "17:00" }],
        subjects: 'CSC 172, MTH 150'
    },
    {
        name: "Lucy",
        location: "iZone",
        password: "",
        schedule: [{ day: "Wednesday", time: "22:00" }],
        subjects: 'CSC 171, MTH 165'
    },

    // THURSDAY

    {
        name: "Gigi",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Thursday", time: "14:15" }],
        subjects: 'CSC 171'
    },
    {
        name: "Lam",
        location: "iZone",
        password: "",
        schedule: [{ day: "Thursday", time: "16:00" }],
        subjects: 'CSC 171, CSC 172, MTH 150, MTH 141/161'
    },
    {
        name: "Bohan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Thursday", time: "16:30" }],
        subjects: 'CSC 171, CSC 172, CSC 242, CSC 261, MTH 150'
    },
    {
        name: "Raghav",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Thursday", time: "20:00" }],
        subjects: 'CSC 171, CSC 172, CSC 173, MTH 141/161, MTH 142/162'
    },

    // FRIDAY
    {
        name: "Ahmed",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "10:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 262, MTH 141/161'
    },
    {
        name: "Ester",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "10:30" }],
        subjects: 'CSC 171, MTH 150, MTH 141/161, MTH 142/162, MTH 165'
    },
    {
        name: "Ahmed",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "11:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 262, MTH 141/161'
    },
    {
        name: "Ahmed",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "12:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 262, MTH 141/161'
    },
    {
        name: "Chris",
        location: "iZone",
        password: "",
        schedule: [{ day: "Friday", time: "13:00" }],
        subjects: 'CSC 171, CSC 214'
    },
    {
        name: "Kestor Brown",
        location: "Hylan 301",
        password: "",
        schedule: [{ day: "Friday", time: "13:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 242'
    },
    {
        name: "Welle Zheng",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "13:30" }],
        subjects: 'CSC 161, CSC 171, MTH 150, MTH 141/161, MTH 165'
    },
    {
        name: "Todd",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "14:00" }],
        subjects: 'CSC 161, CIS 191, MTH 150, MTH 141/161, MTH 165'
    },
    {
        name: "Dylan",
        location: "Hylan 9 Lounge (Math Lounge)",
        password: "",
        schedule: [{ day: "Friday", time: "14:00" }],
        subjects: 'CSC 161, CSC 171, CSC 172, CSC 173, MTH 150, MTH 165, MTH/STT 201'
    },
    {
        name: "Welle Zheng",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "14:30" }],
        subjects: 'CSC 161, CSC 171, MTH 150, MTH 141/161, MTH 165'
    },
    {
        name: "Natalie",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "14:30" }],
        subjects: 'CSC 171, CSC 172, CSC 173, MTH 141/161, MTH 142/162'
    },
    {
        name: "Natalie",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "15:30" }],
        subjects: 'CSC 171, CSC 172, CSC 173, MTH 141/161, MTH 142/162'
    }
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
