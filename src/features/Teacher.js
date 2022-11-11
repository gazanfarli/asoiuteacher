import { createSlice } from "@reduxjs/toolkit";


 
export const teacherSlice = createSlice({
    name: 'teacher',
    initialState: {},
    reducers: {
        getTeacher: (state, action) => {
            state.teacher = action.payload;
        },
        updateTeacherData: (state, action) => {
            state.teacher[action.payload.type] = action.payload.data;
        }
    }
});

export const { getTeacher, updateTeacherData } = teacherSlice.actions;
export default teacherSlice.reducer