
export const getAllDoctors = () => {
    return async(dispatch: any) => {

        const AllDoctorsApi = await fetch("http://localhost:3001/admin/doctors");
        const allDoctorResp = await AllDoctorsApi.json();

        console.log('allDoctorResp',allDoctorResp)
    }
}