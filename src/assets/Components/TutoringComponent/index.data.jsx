
const tutorDetails = [
    {
        name: "Yufei Zhao",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Wednesday", time: "9:50"}],
        subjects: 'CSC171, 172, 173'
    },
    {
        name: "Phuong (Andrea) Vu",
        location: "https://rochester.zoom.us/j/91560722600",
        password: "",
        schedule: [{day: "Monday", time: "14:30"}],
        subjects: 'CSC 172, 210, 242'
    },
    {
        name: "Samuel(Sam) DeLong",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Monday", time: "13:00"}],
        subjects: 'CSC 161, 171, 172, 173'
    },
    {
        name: "Samuel(Sam) DeLong",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Monday", time: "14:00"}],
        subjects: 'CSC 161, 171, 172, 173'
    },
    {
        name: "Samuel(Sam) DeLong",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Wednesday", time: "13:00"}],
        subjects: 'CSC 161, 171, 172, 173'
    },
    {
        name: "Samuel(Sam) DeLong",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Wednesday", time: "14:00"}],
        subjects: 'CSC 161, 171, 172, 173'
    },
    {
        name: "Phuong (Andrea) Vu",
        location: "https://rochester.zoom.us/j/91560722600",
        password: "",
        schedule: [{day: "Monday", time: "15:30"}],
        subjects: 'CSC 172, 210, 242'
    },
    {
        name: "Phuong (Andrea) Vu",
        location: "https://rochester.zoom.us/j/91560722600",
        password: "",
        schedule: [{day: "Wednesday", time: "14:20"}],
        subjects: 'CSC 172, 210, 242'
    },
    {
        name: "Jiayi He",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Monday", time: "15:30"}],
        subjects: 'MTH 150, 165; CSC 171, 172, 242'
    },
    {
        name: "Jiayi He",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Wednesday", time: "15:30"}],
        subjects: 'MTH 150, 165; CSC 171, 172, 242'
    },
    {
        name: "Rory Linerud",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Monday", time: "15:30"}],
        subjects: 'MTH150, 165; MTH/STT 201; STT211/212/213; CSC161, 171, 172, 214, 248, 173, 242, 252, 254'
    },
    {
        name: "Rory Linerud",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Tuesday", time: "12:00"}],
        subjects: 'MTH150, 165; MTH/STT 201; STT211/212/213; CSC161, 171, 172, 214, 248, 173, 242, 252, 254'
    },
    {
        name: "Rory Linerud",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Wednesday", time: "15:30"}],
        subjects: 'MTH150, 165; MTH/STT 201; STT211/212/213; CSC161, 171, 172, 214, 248, 173, 242, 252, 254'
    },
    {
        name: "Rory Linerud",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Thursday", time: "12:00"}],
        subjects: 'MTH150, 165; MTH/STT 201; STT211/212/213; CSC161, 171, 172, 214, 248, 173, 242, 252, 254'
    },
    {
        name: "Rory Linerud",
        location: "Wegmans Hall 3307",
        password: "",
        schedule: [{day: "Friday", time: "16:00"}],
        subjects: 'MTH150, 165; MTH/STT 201; STT211/212/213; CSC161, 171, 172, 214, 248, 173, 242, 252, 254'
    },
    {
        name: "Alex Martin",
        location: "https://rochester.zoom.us/j/2759015070",
        password: "",
        schedule: [{day: "Tuesday", time: "9:00"}],
        subjects: 'MTH150; CSC171, 172'
    },
    {
        name: "Alex Martin",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Tuesday", time: "20:00"}],
        subjects: 'MTH150; CSC171, 172'
    },
    {
        name: "Alex Martin",
        location: "https://rochester.zoom.us/j/2759015070",
        password: "",
        schedule: [{day: "Thursday", time: "14:00"}],
        subjects: 'MTH150; CSC171, 172'
    },
    {
        name: "Alex Martin",
        location: "Hybrid: Hylan 301 || https://rochester.zoom.us/j/2759015070",
        password: "",
        schedule: [{day: "Thursday", time: "20:00"}],
        subjects: 'MTH150; CSC171, 172'
    },
    {
        name: "Qianqian (Laura) Li",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Tuesday", time: "10:00"}],
        subjects: 'MTH 150, 165; CSC171, 172'
    },
    {
        name: "Qianqian (Laura) Li",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Thursday", time: "10:00"}],
        subjects: 'MTH 150, 165; CSC171, 172'
    },
    {
        name: "Rowland Zhang",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Tuesday", time: "11:00"}],
        subjects: 'MTH 150, 235; CSC171, 172, 173'
    },
    {
        name: "Yuka Shimazaki",
        location: "Wegmans Hall 3307",
        password: "",
        schedule: [{day: "Friday", time: "13:30"}],
        subjects: 'MTH 150; CSC 171'
    },
    {
        name: "Rachael He",
        location: "https://rochester.zoom.us/j/93424742313",
        password: "",
        schedule: [{day: "Tuesday", time: "17:00"}],
        subjects: 'MTH150, 165; CSC 171, 172, 173, 242, 252, 280'
    },
    {
        name: "Beakal Lemeneh",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Tuesday", time: "17:00"}],
        subjects: 'MTH 150; STT211/212/213; CSC 171, 172, 173, 242, 254'
    },
    {
        name: "Samuel (Sam) Frank",
        location: "https://zoom.us/j/3556034787?pwd=VU9TSStwdGI3R2ZEYVltUUVzNDBSUT09",
        password: "",
        schedule: [{day: "Tuesday", time: "14:00"}],
        subjects: 'MTH 150; STT211/212/213; CSC 171, 172'
    },
    {
        name: "Samuel (Sam) Frank",
        location: "https://zoom.us/j/3556034787?pwd=VU9TSStwdGI3R2ZEYVltUUVzNDBSUT09",
        password: "",
        schedule: [{day: "Thursday", time: "14:00"}],
        subjects: 'MTH 150; STT211/212/213; CSC 171, 172'
    },
    {
        name: "Sufian Mushtaq",
        location: "In Person(Wegmans Hall 3307)",
        password: "",
        schedule: [{day: "Friday", time: "15:00"}],
        subjects: 'CSC 172'
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