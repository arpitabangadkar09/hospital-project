import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDoctors } from "../../../mainStore/admin/adminAction";


const DoctorList = () => {

    const dispatch:any = useDispatch();

    useEffect(() => {

            dispatch(getAllDoctors());

    },[])
    return (
        <div>
            DoctorList
        </div>
    )
};

export default DoctorList;