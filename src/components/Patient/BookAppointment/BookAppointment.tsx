import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allEvents, bookAppointment } from "../../../mainStore/user/userAction";
import { ButtonMedium } from "../../../common/Button";
import  moment from 'moment';

import styless from './BookAppointment.module.scss';
const BookAppointment = () => {
  const dispatch: any = useDispatch();
  const { events, userData } = useSelector((state: any) => state.user);
  console.log("userData", userData);

  useEffect(() => {
    dispatch(allEvents());
  }, []);

  const bookAppointmentFun = (event:any) => {
    dispatch(bookAppointment(event, userData.id))
  }
  const createEventButton = events.map((event: any) => {
    const eventLabelDate = moment(event.start).format("MM-DD-YYYY HH:MM");
    const eventLabelendDate = moment(event.end).format("HH:MM");
    if(eventLabelDate !== 'Invalid date'){
        return (
           <div className={styless['event-wrapper']}>
              <ButtonMedium
              label={`${eventLabelDate} - ${eventLabelendDate}`}
              bgColor="bg-green-500"
              btFun={() => {
                bookAppointmentFun(event)
              }}
            ></ButtonMedium>
           </div>
          );
    }
 
  });

  return <div>
    {createEventButton}
  </div>;
};

export default BookAppointment;
