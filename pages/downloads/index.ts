import "../../src/scss/downloads.scss";

import cv from '../../src/assets/files/Nafim_Ershad_Inan.pdf';
import certificate from '../../src/assets/files/Nafim_Ershad_Inan_B.Sc_Certificate.pdf';
import transcript from '../../src/assets/files/Nafim_Ershad_Inan_B.Sc_Transcript.pdf';

interface iState {
    activeTab: 'cv' | 'certificate' | 'transcript'
}

interface iStateManager {
    state: iState;
    setState(newState: iState): void;
    getState(): iState;
}


const iframe = document.querySelector('iframe') as HTMLIFrameElement;
const tabs = document.querySelectorAll('.file-type');

const initialState: iState = {
    activeTab: 'cv'
}

const stateManager: iStateManager = {
    state: { ...initialState },
    setState(newState) {
        this.state = {...this.state, ...newState}
    },
    getState() {
        return this.state;
    }
}


function removeActiveTab(): void {
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
}


// [cv = 0, certificate = 1, transcript = 2]
window.onload = () => {
    
    const activeTab = stateManager.getState().activeTab;
    removeActiveTab();

    switch(activeTab) {
        case 'cv':
            tabs[0].classList.add('active');
            iframe.src = cv;
            break;
        case 'certificate':
            tabs[1].classList.add('active');
            iframe.src = certificate;
            break;
        case 'transcript':
            tabs[2].classList.add('active');
            iframe.src = transcript;
            break;
        default:
            break;
    }
};

tabs.forEach((tab, idx) => {
    tab.addEventListener('click', function() {
        removeActiveTab();
        tab.classList.add('active');
        switch(idx) {
            case 0:
                stateManager.setState({...stateManager.getState(), activeTab: 'cv'});
                iframe.src = cv;
                break;
            case 1:
                stateManager.setState({...stateManager.getState(), activeTab: 'certificate'});
                iframe.src = certificate;
                break;
            case 2:
                stateManager.setState({...stateManager.getState(), activeTab: 'transcript'});
                iframe.src = transcript;
                break;
            default:
                break;
        }
    });
});