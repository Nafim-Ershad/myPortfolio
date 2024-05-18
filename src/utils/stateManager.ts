// import { useState } from "react";


// const AppStore = () => {
//     const [initialState, setInitialState] = useState({
//         skillTab: "tech",
//         themeMode: "light"
//     });

//     return{
//         state: {...initialState},
//         getState: () => {
//             return {...initialState}
//         },
//         setState: (newState: any) => {
//             setInitialState({...initialState, ...newState})
//         }
//     }
// }

interface AppState {
    skillTab: string,
    themeMode: string
}


const initialState: AppState = {
    skillTab: "tech",
    themeMode: "light"
}

const appStore = {
    state: {...initialState},
    getState: function(): AppState{
        return this.state;
    },
    setState: function(newState: any): void{
        this.state = {...this.state, ...newState };
    }
}


export default appStore;