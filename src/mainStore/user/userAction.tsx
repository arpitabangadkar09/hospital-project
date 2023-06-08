import { bookedAppointment, events, saveUser } from "./userStore";



export const loginUser = (userDetails: any, navigate:any) => {


    return async(dispatch:any) => {
        const userPayload = JSON.stringify(userDetails)
        const userRes:any = await fetch('http://localhost:3001/login',{
         method: 'POST',
         headers: {
           "Content-Type": "application/json",
         },
         body: userPayload
        }).catch((err) => {
                console.log('server err',err)
        });
        
        if(userRes){
            
        const {userData, status, msg} = await userRes.json();
     
        if(status === 200){
               
             console.log('userData',userData)
            dispatch(saveUser({userData}))
            if(userData.type === "user"){
                navigate('/user')
            }else if(userData.type === 'doctor') {
                navigate('/doctor')
            }else if(userData.type === 'admin') {
                navigate('/admin')
            }else {
                navigate('/')
            }
            
        }else {
            console.log('res err', msg)
        }
        }
    }
}


export const allEvents = () => {
    return async (dispatch:any) => {

        const allEvents = await fetch('http://localhost:3001/allevents');
        const allEventsRes = await allEvents.json()

        console.log('allEventsRes',allEventsRes);

        dispatch(events({events: allEventsRes.events }))
    }
}

export const bookAppointment = (event:any, userId:any) => {

    return async (dispatch:any) => {

        const bookAppointmentPayload = JSON.stringify({
            ...event,
            bookingId: userId
        })
        const bookAppointmentApi:any = await fetch('http://localhost:3001/bookAppointment',{
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: bookAppointmentPayload
           }).catch((err) => {
                   console.log('server err',err)
           });

        const bookAppointmentRes = await bookAppointmentApi.json()
        console.log('bookAppointmentRes',bookAppointmentRes)
    }
}

export const getAllBookedAppointment = (userId: any) => {
    return async(dispatch: any) => {

        const bodyJson = JSON.stringify({userId});
        const getAllBookAppointmentApi:any = await fetch('http://localhost:3001/users/bookedAppointment',{
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: bodyJson
           }).catch((err) => {
                   console.log('server err',err)
           });

           const {events} = await getAllBookAppointmentApi.json()

           console.log('getAllBookAppointmentRes',events)

           dispatch(bookedAppointment({bookedAppointment: events }))
         
    }
}