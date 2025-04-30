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
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
            // [...state, action.payload];
        },
        deleteTask: (state, action) => {
            // console.log(state, action);
            return state.filter((task) => task.id !== action.payload);
            // const taskFound = state.find((task) => task.id === action.payload);
            // if(taskFound) {
            //     state.splice(state.indexOf(taskFound), 1);
            // }
        },
        editTask: (state, action) => {
            // console.log(state, action);
            const taskFound = state.find((task) => task.id === action.payload.id);
            if(taskFound) {
                // state.splice(state.indexOf(taskFound), 1, action.payload);
                taskFound.title = action.payload.title;
                taskFound.description = action.payload.description;
            }
        },
        completeTask: (state, action) => {
            const taskFound = state.find((task) => task.id === action.payload);
            if(taskFound) {
                taskFound.completed = !taskFound.completed;
            }
        },
    },
});

export const { addTask, deleteTask, editTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;