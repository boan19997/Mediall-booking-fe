import actionTypes from './actionTypes';
import {
    createNewUserService, getAllCodeService, getAllUser,
    deleteUserService, editUserService, getToDoctorHomeService,
    getAllDoctorService, saveDetailDoctorService, getAllSpecialty,
    getAllClinic
} from '../../services/userService';
import { toast } from 'react-toastify';



//postion
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllCodeService("POSITION")
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed())
            }
        } catch (e) {
            dispatch(fetchPositionFailed())
            console.log('fetchPositionStart error', e)
        }
    }
}

//role
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_ROLE_START })

            let res = await getAllCodeService("ROLE")
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed())
            }
        } catch (e) {
            dispatch(fetchRoleFailed())
            console.log('fetchRoleFailed error', e)
        }
    }
}

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllCodeService("GENDER")
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed())
            }
        } catch (e) {
            dispatch(fetchGenderFailed())
            console.log('fetchGenderStart error', e)
        }
    }
}

//gender
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

//position
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

//role
export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

//create
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_ROLE_START })

            let res = await createNewUserService(data)
            console.log('check create UserRedux: ', res)
            if (res && res.errCode === 0) {
                toast.success("Create a new user succeed!")
                dispatch(createUserSuccess())
                dispatch(fecthAllUserStart()) //khi bấm nút tạo thành công sẽ hiển thị trên bảng liền 
            } else {
                toast.error("Create user error!")
                dispatch(createUserFailed())
            }
        } catch (e) {
            toast.error("Create user error!")
            dispatch(createUserFailed())
            console.log('createUserFailed error', e)
        }
    }
}

export const createUserSuccess = () => (
    {
        type: actionTypes.CREATE_USER_SUCCESS
    }
)

export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FALIED
})

//all user
export const fecthAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_ROLE_START })

            let res = await getAllUser("ALL")
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()))
            } else {
                toast.error("Fetch user error!")
                dispatch(fetchAllUserFailed())
            }
        } catch (e) {
            toast.error("Fetch user error!")
            dispatch(fetchAllUserFailed())
            console.log('fetchAllUserFailed error', e)
        }
    }
}

export const fetchAllUserSuccess = (data) => (
    {
        type: actionTypes.FETCH_ALL_USER_SUCCESS,
        users: data
    }
)

export const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED
})

//Delete
export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_ROLE_START })

            let res = await deleteUserService(userId)
            if (res && res.errCode === 0) {
                toast.success("Delete user succeed!")
                dispatch(deleteUserSuccess())
                dispatch(fecthAllUserStart()) //khi bấm nút xoá thành công sẽ hiển thị trên bảng liền 
            } else {
                toast.error("Delete user error!")
                dispatch(deleteUserFailed())
            }
        } catch (e) {
            toast.error("Delete user error!")
            dispatch(deleteUserFailed())
            console.log('deleteUserFailed error', e)
        }
    }
}

export const deleteUserSuccess = () => (
    {
        type: actionTypes.DELETE_USER_SUCCESS
    }
)

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FALIED
})

//edit user
export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            // dispatch({ type: actionTypes.FETCH_ROLE_START })

            let res = await editUserService(data)
            if (res && res.errCode === 0) {
                toast.success("Update user succeed!")
                dispatch(editUserSuccess())
                dispatch(fecthAllUserStart()) //khi bấm nút xoá thành công sẽ hiển thị trên bảng liền 
            } else {
                toast.error("Update user error!")
                dispatch(editUserFailed())
            }
        } catch (e) {
            toast.error("Update user error!")
            dispatch(editUserFailed())
            console.log('editUserFailed error', e)
        }
    }
}

export const editUserSuccess = () => (
    {
        type: actionTypes.EDIT_USER_SUCCESS
    }
)

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FALIED
})

//top doctor home
export const fecthTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getToDoctorHomeService('')
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTOR_FAILED
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTOR_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTOR_FAILED
            })
        }
    }
}

//all doctor 
export const fecthAllDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctorService()
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_SUCCESS,
                    dataAllDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTOR_FAILED
                })
            }
        } catch (e) {
            console.log('FETCH_ALL_DOCTOR_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTOR_FAILED
            })
        }
    }
}
//save detail doctor 
export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data)
            if (res && res.errCode === 0) {
                toast.success("Save detail doctor succeed!")
                dispatch({
                    type: actionTypes.FETCH_SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                console.log('check res: ', res)
                toast.error("Save detail doctor error!")
                dispatch({
                    type: actionTypes.FETCH_SAVE_DETAIL_DOCTOR_FAILED
                })
            }
        } catch (e) {
            toast.error("Save detail doctor error!")
            console.log('FETCH_SAVE_DETAIL_DOCTOR_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_SAVE_DETAIL_DOCTOR_FAILED
            })
        }
    }
}
//get hour schedule 
export const fecthAllScheduleTime = (type) => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME")
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIMES_SUCCESS,
                    dataTime: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIMES_FAILED
                })
            }
        } catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIMES_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIMES_FAILED
            })
        }
    }
}

//get tất cả những thông tin mà doctor yêu cầu
export const getRequiedDoctorInfor = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START })

            let resPrice = await getAllCodeService("PRICE")
            let resPayment = await getAllCodeService("PAYMENT")
            let resProvince = await getAllCodeService("PROVINCE")
            let resSpecialty = await getAllSpecialty()
            let resClinic = await getAllClinic()
            if (resPrice && resPrice.errCode === 0 &&
                resPayment && resPayment.errCode === 0 &&
                resProvince && resProvince.errCode === 0 &&
                resSpecialty && resSpecialty.errCode === 0 &&
                resClinic && resClinic.errCode === 0
            ) {
                let data = {
                    resPrice: resPrice.data,
                    resPayment: resPayment.data,
                    resProvince: resProvince.data,
                    resSpecialty: resSpecialty.data,
                    resClinic: resClinic.data,
                }

                dispatch(fetchRequiredDoctorInforSuccess(data))
            } else {
                dispatch(fetchRequiredDoctorInforFailed())
            }
        } catch (e) {
            dispatch(fetchRequiredDoctorInforFailed())
            console.log('fetchRequiredDoctorInfor error', e)
        }
    }
}

export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data: allRequiredData
})
export const fetchRequiredDoctorInforFailed = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAILED
})