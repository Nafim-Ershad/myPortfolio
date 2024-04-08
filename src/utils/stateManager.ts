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
    setState: function(newState: AppState): void{
        this.state = {...this.state, ...newState };
    }
}

export default appStore;