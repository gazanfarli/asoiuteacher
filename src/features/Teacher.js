import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from '../api/apiUrl';
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

export const getTeacherAsync = () => async (dispatch) => {
    try {
        const response = await axios.get(`${apiUrl}`);
        dispatch(getTeacher(response.data));
    } catch (err) {
        throw new Error(err);
    }
};

export const addDataAsync = (data, endpoint) => async (dispatch) => {
    try {
        fetch(`http://localhost:3000/teacher`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data.data)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    } catch (err) {
        throw new Error(err);
    }
};

export const { getTeacher, updateTeacherData } = teacherSlice.actions;
export default teacherSlice.reducer;