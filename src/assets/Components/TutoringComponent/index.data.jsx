const tutorDetails = [
    // MONDAY
    {
        name: "Jassem Toumi",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "11:00-12:00 (A)" }],
        subjects: 'CSC 171, CSC 172'
    },
    {
        name: "Xi Chen",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "12:00-13:00 (D), 13:00-14:00 (A)" }],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, CSC 171, CSC 172, CSC 173, CSC 252'
    },
    {
        name: "Aaron Shneydman",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "15:00-17:00 (D)" }],
        subjects: 'MATH 141/161, CSC 161, CSC 170, CSC 171, CSC 172, CSC 173'
    },
    {
        name: "Ciarrah Wang",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "16:00-17:00 (D)" }],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, CSC 171, CSC 172'
    },
    

    // TUESDAY
    {
        name: "Aryan Raj Dhawan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Tuesday", time: "13:00-14:00 (D)" }],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 164, MATH 165, MATH 201, CSC 171, CSC 172, CSC 173, CSC 214, CSC 242, CSC 252'
    },
    {
        name: "Zachary Tan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "14:00-15:00 (D)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, CSC 171, CSC 172, CSC 173, CSC 242, CSC 252, CSC 254'
    },
    {
        name: "Junjie Zhao",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "18:15-19:15 (D), 19:15-20:15 (A)"}],
        subjects: 'CSC 172, CSC 173'
    },
    {
        name: "Ji Woong, Hong",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "17:00-18:00 (D)"}],
        subjects: 'MATH 150, CSC 171, CSC 172'
    },
    {
        name: "Sylvia Liu",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "11:30-13:30 (A)"}],
        subjects: 'CSC 170, CSC 171, CSC 172'
    },
    {
        name: "Artan Kadriju",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "15:30-18:00 (A)"}],
        subjects: 'CSC 171'
    },
    {
        name: "Naod Zewede",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "12:00-13:00 (D)"}],
        subjects: 'CSC 161, CSC 170, CSC 171, CSC 172'
    },
    {
        name: "Ryan Yan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "19:40-21:00 (A)"}],
        subjects: 'CSC 171, CSC 172'
    },
    {
        name: "Emily Lin",
        location: "Wegmans 2007",
        password: "",
        schedule:[{day:"Tuesday", time: "17:00-18:00 (D)"}],
        subjects: 'CSC171, CSC 172'
    },
    {
        name: "Aaron Shneydman",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "20:00-21:00 (A)" }],
        subjects: 'MATH 141/161, CSC 161, CSC 170, CSC 171, CSC 172, CSC 173'
    },

    
    // Wednesday
    {
        name: "Ciarrah Wang",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "12:00-13:00 (A)" }],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, CSC 171, CSC 172'
    },
    {
        name: "Ji Woong, Hong",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Wednesday", time: "17:00-18:00 (A)"}],
        subjects: 'MATH 150, CSC 171, CSC 172'
    },
    {
        name: "Aidan Lieberman",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "10:00-11:00 (A)"}],
        subjects: 'MATH 150, CSC 171, CSC 172'
    },
    

    // Thursday
    {
        name: "Zachary Tan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "14:00-16:00 (A)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, CSC 171, CSC 172, CSC 173, CSC 242, CSC 252, CSC 254'
    },
    {
        name: "Artan Kadriju",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Thursday", time: "15:30-16:30 (D)"}],
        subjects: 'CSC 171'
    },
    {
        name: "Naod Zewede",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Thursday", time: "12:00-13:00 (A)"}],
        subjects: 'CSC 161, CSC 170, CSC 171, CSC 172'
    },
    {
        name: "Ryan Yan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "14:00-15:00 (D)"}],
        subjects: 'CSC 171, CSC 172'
    },
    {
        name: "Ashaz Rahman",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Thursday", time: "15:30-16:30 (D), 11:00-13:00 (A)"}],
        subjects: 'CSC 161, CSC 171, CSC 172'
    },

    //Friday
    {
        name: "Owen Tian",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Friday", time: "11:00-12:00 (D)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, CSC 171, CSC 172, CSC 173, CSC 280, CSC 282'
    },
    {
        name: "Alexander Yu",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Friday", time: "12:00-13:00 (D), 13:00-14:00 (A)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Aidan Lieberman",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "15:30-16:45 (D)"}],
        subjects: 'MATH 150, CSC 171, CSC 172'
    },
    {
        name: "Raghav Choudhary",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "10:00-11:00 (A)" }],
        subjects: 'MATH 141/161, MATH 142/162, MATH 165, CSC 161, CSC 171, CSC 172, CSC 240, CSC 261, CSC 282'
    }, // Tristan Nygaard
    {
        name: "Tristan Nygaard",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "13:30-16:30 (D)" }],
        subjects: 'MATH 141/161, CSC 161, CSC 171'
    },

    // SATURDAY 
    {
        name: "Jassem Toumi",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Saturday", time: "14:00-15:00 (D)" }],
        subjects: 'CSC 171, CSC 172'
    },
    {
        name: "Tristan Nygaard",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Saturday", time: "12:00-16:00 (A)" }],
        subjects: 'MATH 141/161, CSC 161, CSC 171'
    },
    {
        name: "Emily Lin",
        location: "Wegmans 2007",
        password: "",
        schedule:[{day:"Saturday", time: "15:00-18:00 (A)"}],
        subjects: 'CSC171, CSC 172'
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



// This function checks the tutoring schedule for a particular day AND time, taking in a 'mode' - either 'day' or 'time'
// 'day' returns all matches for that particular day, and 'time' returns all matches within the current hour 
const dataToSend = (mode = 'day') => {
    const dateRightNow = new Date();
    var currentData = []
    tutorDetails.map(eachTutor => {
        if (checkSchedule(eachTutor,mode)) {
            
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


const checkSchedule = (specificTutor, mode = 'day') => {
    const currentDate = new Date();  
    const currentDay = currentDate.getDay();  
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentTimeinMinutes = currentHour * 60 + currentMinute;

    return specificTutor.schedule.some(scheduleDetail => {
        if (currentDay === convertDay(scheduleDetail.day)) { 
            if (mode === 'day') {
                return true;
            } else if (mode === 'time') {
                
                const timesArray = scheduleDetail.time.split(", ");
                return timesArray.some(timeString => {
                    // Extract the time portion and ignore (A) or (D)
                    const time = timeString.split(" ")[0]; 

                    // Split start and end times
                    const [startTime, endTime] = time.split("-");

                    // Convert start and end times into minutes
                    const [startHour, startMinute] = startTime.split(":").map(Number);
                    const [endHour, endMinute] = endTime.split(":").map(Number);

                    const startTimeinMinutes = startHour * 60 + startMinute;
                    const endTimeinMinutes = endHour * 60 + endMinute;

                    // Check if the current time falls within the session window
                    return currentTimeinMinutes >= startTimeinMinutes && currentTimeinMinutes <= endTimeinMinutes;
                });
            }
        }
        return false;
    });
};



// THIS IS THE OLD FUNCTION USED TO checkDay, now replaced by checkSchedule

// const checkDay = (specificTutor) => {
// const currentDate = new Date();
//  var toSend = false;
//    const currentDate = new Date();

//     specificTutor.schedule.map(scheduleDetail => {
//         var scheduleHour = parseInt(scheduleDetail.time.split(":")[0]);
//         var scheduleMinute = parseInt(scheduleDetail.time.split(":")[1]);
//         var scheduleTime = scheduleHour * 60 + scheduleMinute;
//         var currentHour = currentDate.getHours();
//         var currentMinute = currentDate.getMinutes();
//         var currentTimeinMinutes = currentHour * 60 + currentMinute;
//         if (currentDate.getDay() === convertDay(scheduleDetail.day)) {
//             if (currentTimeinMinutes < scheduleTime + 60) {
//                 toSend = true;
//             }
//             toSend = true;
//         }
//     })
//     return toSend;
// }



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
