import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Description for Task 1", 
        completed: false,
    },
    {
        id: "2",
        title: "Task 2",
        description: "Description for Task 2", 
        completed: false,
    },
];

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
});

export default taskSlice.reducer;