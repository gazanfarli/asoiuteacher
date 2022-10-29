import { createSlice } from "@reduxjs/toolkit";
import data from '../api/db.json';
 
export const teacherSlice = createSlice({
    name: 'teacher',
    initialState: data,
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