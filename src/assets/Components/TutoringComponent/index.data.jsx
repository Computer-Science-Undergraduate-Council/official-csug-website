
const tutorDetails = [
    //Monday - checked
    {
        name: "Alex Martin",
        location: "Hylan 301 & Zoom (https://rochester.zoom.us/j/2759015070)",
        password: "",
        schedule: [{day: "Monday", time: "9:00"}],
        subjects: 'MTH 150, CSC 171, CSC 172'
    },
    {
        name: "Qianqian(Laura) Li",
        location: "https://rochester.zoom.us/j/5637002724",
        password: "",
        schedule: [{day: "Monday", time: "10:00"}],
        subjects: 'MTH150, CSC171, CSC172, CSC214, CSC252'
    },
    {
        name: "Jiayi(Louise) He",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Monday", time: "10:30"}],
        subjects: 'CSC171, CSC172, CSC173'
    },
    {
        name: "Samuel(Sam) Frank",
        location: "https://zoom.us/j/3556034787?pwd=VU9TSStwdGI3R2ZEYVltUUVzNDBSUT09",
        password: "",
        schedule: [{day: "Monday", time: "15:00"}],
        subjects: 'MTH 150, STT 211/212/213, CSC 171, CSC 172'
    },
    {
        name: "Samuel(Sam) Frank",
        location: "https://zoom.us/j/3556034787?pwd=VU9TSStwdGI3R2ZEYVltUUVzNDBSUT09",
        password: "",
        schedule: [{day: "Monday", time: "16:00"}],
        subjects: 'MTH 150, STT 211/212/213, CSC 171, CSC 172'
    },
    {
        name: "Owen Ariza Villareal",
        location: "https://zoom.us/j/5100757043?pwd=ckFWVTd6Z2FuNUVSVmRHVG1uYXAwQT09",
        password: "",
        schedule: [{day: "Monday", time: "19:00"}],
        subjects: 'MTH 150, MTH 165, CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Karenrose(Ro) Kamala",
        location: "https://rochester.zoom.us/j/3386791569",
        password: "",
        schedule: [{day: "Monday", time: "19:00"}],
        subjects: 'STT 211/212/213, CSC 161, CSC 171'
    },
    {
        name: "Karenrose(Ro) Kamala",
        location: "https://rochester.zoom.us/j/3386791569",
        password: "",
        schedule: [{day: "Monday", time: "20:00"}],
        subjects: 'STT 211/212/213, CSC 161, CSC 171'
    },
    
    //Tuesday - checked
    {
        name: "Ethan Shahan",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Tuesday", time: "16:00"}],
        subjects: 'CSC 171, CSC 172, CSC 173'
    },
    {
        name: "Yuka Shimazaki",
        location: "https://rochester.zoom.us/j/8047345807",
        password: "",
        schedule: [{day: "Tuesday", time: "19:00"}],
        subjects: 'MTH 150, CSC 171'
    },
    //Wednesday - checked
    {
        name: "Alex Martin",
        location: "Hylan 301 & Zoom (https://rochester.zoom.us/j/2759015070)",
        password: "",
        schedule: [{day: "Wednesday", time: "9:00"}],
        subjects: 'MTH 150, CSC 171, CSC 172'
    },
    {
        name: "Abdoul Rasmane Maiga",
        location: "Hylan 301 & Zoom(https://us04web.zoom.us/j/73592661226?pwd=quT4hjjxDzzqidoc46V6TDC_wVxkxR.1)",
        password: "",
        schedule: [{day: "Wednesday", time: "10:00"}],
        subjects: 'CSC 171'
    },
    {
        name: "Owen Ariza Villareal",
        location: "https://zoom.us/j/5100757043?pwd=ckFWVTd6Z2FuNUVSVmRHVG1uYXAwQT09",
        password: "",
        schedule: [{day: "Wednesday", time: "15:00"}],
        subjects: 'MTH 150, MTH 165, CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Harry Liuson",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Wednesday", time: "15:00"}],
        subjects: 'MTH 150, CSC 161, CSC 171, CSC 172'
    },
    {
        name: "Harry Liuson",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Wednesday", time: "16:00"}],
        subjects: 'MTH 150, CSC 161, CSC 171, CSC 172'
    },
    //Thursday
    {
        name: "Rachel He",
        location: "https://rochester.zoom.us/j/93424742313",
        password: "",
        schedule: [{day: "Thursday", time: "17:00"}],
        subjects: 'MTH 150, MTH 165, CSC 171, CSC 172, CSC 173, CSC 242, CSC280'
    },
    {
        name: "Dingcheng(Desmond) Wang",
        location: "685 753 0080",
        password: "N1Yich",
        schedule: [{day: "Thursday", time: "19:00"}],
        subjects: 'MTH 150, MTH 165, MATH 201, MATH 208, CSC 171, CSC 261'
    },

    //Friday

    {
        name: "Duong H.(Zach) Nguyen",
        location: "Hylan 301 & (https://zoom.us/j/3803541736?pwd=MkxPUTIwVlAxUGFCcTdxclFycGUwZz09)",
        password: "",
        schedule: [{day: "Friday", time: "10:00"}],
        subjects: 'MTH 150, CSC 171'
    },
    {
        name: "Doruk Degerli",
        location: "https://zoom.us/j/2510069617?pwd=ZXg4VC8reGlNbGlvMjV3VTgwaExtQT09",
        password: "",
        schedule: [{day: "Friday", time: "10:00"}],
        subjects: 'MTH 150, CSC 171'
    },
    {
        name: "Joshua(Josh) O'Brien",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Friday", time: "10:00"}],
        subjects: 'MTH 150, CSC 161'
    },
    {
        name: "Joshua(Josh) O'Brien",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Friday", time: "11:00"}],
        subjects: 'MTH 150, CSC 161'
    },
    {
        name: "Duong H.(Zach) Nguyen",
        location: "https://zoom.us/j/3803541736?pwd=MkxPUTIwVlAxUGFCcTdxclFycGUwZz09",
        password: "",
        schedule: [{day: "Friday", time: "15:00"}],
        subjects: 'MTH 150, CSC 171'
    },
    {
        name: "Raghav Choudhary",
        location: "Hylan 301",
        password: "",
        schedule: [{day: "Friday", time: "19:00"}],
        subjects: 'MTH 150, CSC 171'
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