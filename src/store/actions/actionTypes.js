const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',

    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS', //này được gọi là actions type (tên gọi)
    USER_LOGIUT_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    //Gender
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',

    //position
    // FETCH_POSITION_START: 'FETCH_POSITION_START',
    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAILED: 'FETCH_POSITION_FAILED',

    //role
    // FETCH_ROLE_START: 'FETCH_ROLE_START',
    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',

    //save data
    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FALIED: 'CREATE_USER_FALIED',

    //delete data
    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FALIED: 'DELETE_USER_FALIED',

    //read data
    FETCH_ALL_USER_SUCCESS: 'FETCH_ALL_USER_SUCCESS',
    FETCH_ALL_USER_FAILED: 'FETCH_ALL_USER_FAILED',

    //edit data
    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FALIED: 'EDIT_USER_FALIED',

    //top doctor home
    FETCH_TOP_DOCTOR_SUCCESS: 'FETCH_TOP_DOCTOR_SUCCESS',
    FETCH_TOP_DOCTOR_FAILED: 'FETCH_TOP_DOCTOR_FAILED',

    //all doctor 
    FETCH_ALL_DOCTOR_SUCCESS: 'FETCH_ALL_DOCTOR_SUCCESS',
    FETCH_ALL_DOCTOR_FAILED: 'FETCH_ALL_DOCTOR_FAILED',

    //save detail doctor 
    FETCH_SAVE_DETAIL_DOCTOR_SUCCESS: 'FETCH_SAVE_DETAIL_DOCTOR_SUCCESS',
    FETCH_SAVE_DETAIL_DOCTOR_FAILED: 'FETCH_SAVE_DETAIL_DOCTOR_FAILED',

    //get hour schedule doctor 
    FETCH_ALLCODE_SCHEDULE_TIMES_SUCCESS: 'FETCH_ALLCODE_SCHEDULE_TIMES_SUCCESS',
    FETCH_ALLCODE_SCHEDULE_TIMES_FAILED: 'FETCH_ALLCODE_SCHEDULE_TIMES_FAILED',

    //doctor-infor
    FETCH_REQUIRED_DOCTOR_INFOR_START: 'FETCH_REQUIRED_DOCTOR_INFOR_START',
    FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS: 'FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS',
    FETCH_REQUIRED_DOCTOR_INFOR_FAILED: 'FETCH_REQUIRED_DOCTOR_INFOR_FAILED',
})

export default actionTypes;