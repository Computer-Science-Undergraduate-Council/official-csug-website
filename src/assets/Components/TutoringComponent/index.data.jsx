const tutorDetails = [
    // MONDAY
    {
        name: "Alexander Chaterjee",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "17:00-18:00 (D)" }],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, CSC 171'
    },
    {
        name: "Zachary Tan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Monday", time: "16:00-17:00 (D)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, CSC 171, CSC 172, CSC 173, CSC 242, CSC 252, CSC 254, CSC 282'
    },
    {
        name: "Junjie Zhao",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Monday", time: "15:30-16:30 (D), 16:30-17:30 (A)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 164, MATH 165, MATH 201, CSC 161, CSC 171, CSC 172, CSC 173, CSC 242'
    },
    {
        name: "Arash Khavaran",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "12:00-3:00 (D)" }],
        subjects: 'MATH 141/161, MATH 142/162, MATH 165, CSC 161, CSC 171, CSC 172, CSC 173, CSC 282'
    },
    {
        name: "Harrison Dow",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Monday", time: "16:00-17:00 (A)" }],
        subjects: 'MATH 141/161, CSC 161, CSC 171, CSC 172'
    },
    

    // TUESDAY
    {
        name: "Sylvia Liu",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Tuesday", time: "18:30-19:30 (A)" }],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 164, MATH 165, MATH 201, CSC 161, CSC 170, CSC 171, CSC 172, CSC 242'
    },
    {
        name: "Arden Doyle",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "11:30-13:00 (D)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, CSC 171, CSC 172'
    },
    {
        name: "Henry Yin",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "13:00-15:00 (D)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, MATH 201, CSC 161, CSC 171, CSC 172, CSC 240, CSC 242, CSC 249, CSC 252, CSC 280, CSC 282'
    },
    {
        name: "Siddharth Narsipur",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "19:00-20:00 (D)"}],
        subjects: 'MATH 150, CSC 171, CSC 172, CSC 242, CSC 252'
    },
    {
        name: "Zachary Tan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "16:00-18:00 (A)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, CSC 171, CSC 172, CSC 173, CSC 242, CSC 252, CSC 254, CSC 282'
    },
    {
        name: "Harrison Dow",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Tuesday", time: "13:00-14:00 (D)"}],
        subjects: 'MATH 141/161, CSC 161, CSC 171, CSC 172'
    },



    
    // Wednesday
    {
        name: "Zachary Tan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Wednesday", time: "16:00-17:00 (A)" }],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, CSC 171, CSC 172, CSC 173, CSC 242, CSC 252, CSC 254, CSC 282'
    },
    {
        name: "Suchith Hegde ",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Wednesday", time: "16:00-18:00 (D)"}],
        subjects: 'CSC 172, CSC 240, CSC 242'
    },
    {
        name: "Aaron Shneydman",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Wednesday", time: "12:00-1:00 (D)"}],
        subjects: 'MATH 150, CSC 171, CSC 172'
    },
    {   name: "Aryan Raj Dhawan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Wednesday", time: "17:00-18:00 (D)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 164, MATH 165, MATH 201, CSC 161, CSC 171, CSC 172, CSC 173, CSC 242, CSC 246'
        
    },
  

    // Thursday
    {
        name: "Sylvia Liu",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Thursday", time: "18:30-19:30 (A)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 164, MATH 165, MATH 201, CSC 161, CSC 170, CSC 171, CSC 172, CSC 242'
    },
    {
        name: "Vivien Shen",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Thursday", time: "11:30-12:30 (D), 12:30-1:30 (A) "}],
        subjects: 'MATH 150, CSC 171'
    },
    {
        name: "Aryan Raj Dhawan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Thursday", time: "12:30-1:30 (A)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 164, MATH 165, MATH 201, CSC 161, CSC 171, CSC 172, CSC 173, CSC 242, CSC 246'
        
        
    },

    //Friday
    {
        name: "Sylvia Liu",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Friday", time: "15:30-16:30 (D)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 164, MATH 165, MATH 201, CSC 161, CSC 170, CSC 171, CSC 172, CSC 242'
    },
    {
        name: "Aryan Raj Dhawan",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Friday", time: "11:30-12:30 (A)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 164, MATH 165, MATH 201, CSC 161, CSC 171, CSC 172, CSC 173, CSC 242, CSC 246'
    },    
    {
        name: "Arden Doyle",
        location: "Wegmans 2007",
        password: "",
        schedule: [{day: "Friday", time: "13:00-14:00 (A)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, CSC 171, CSC 172'
    },
    {
        name: "Alexander Yu",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "13:00-14:00 (D), 14:00-15:00 (A)"}],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, CSC 171, CSC 172, CSC 173, STAT 190'
    },
    {
        name: "Alexander Chaterjee",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "11:00-12:00 (A)" }],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, CSC 171'
    }, 
    {
        name: "Henry Yin",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "10:00-12:00 (A)" }],
        subjects: 'MATH 150, MATH 141/161, MATH 142/162, MATH 165, MATH 201, CSC 161, CSC 171, CSC 172, CSC 240, CSC 242, CSC 249, CSC 252, CSC 280, CSC 282'
    },
    {
        name: "Siddharth Narsipur",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "14:00-16:00 (A)" }],
        subjects: 'MATH 150, CSC 171, CSC 172, CSC 242, CSC 252'

    },
    {
        name: "Suchith Hegde",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Friday", time: "16:00-18:00 (A)" }],
        subjects: 'CSC 172, CSC 240, CSC 242'

    },

    // SATURDAY 
    {
        name: "Tristan Nygaard",
        location: "Wegmans 2007",
        password: "",
        schedule: [{ day: "Saturday", time: "14:00-16:00 (D), 10:00-20:00 (A)" }],
        subjects: 'MATH 141/161, CSC 161, CSC 171'
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
