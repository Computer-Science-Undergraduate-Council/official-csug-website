import tutorDetails from './index.data'
import{dataToSend} from './index.data'

import {TutoringNotice} from './index.view'
import {TutorDayView} from './index.view'
import {TutorWeekView} from './index.view'



//Timeline data has been exported as default without the view in case it can be used in something else
export default tutorDetails;
export {TutorDayView};
export {dataToSend};
export {TutorWeekView};
//Update the notice of tutoring pause
export {TutoringNotice};