import "../../src/scss/contact.scss";

const formInput = document.querySelectorAll<HTMLInputElement>(".form-container form .form-group input");
const formLabel = document.querySelectorAll<HTMLInputElement>(".form-container form .form-group label");
const messageInput = document.querySelector<HTMLTextAreaElement>(".message-input");
const messageLabel = document.querySelector<HTMLLabelElement>(".message-input~label");


formInput?.forEach((element, idx: number) => {
    element.addEventListener("input", function(){
        if(element.value){
            formLabel[idx].classList.add("shrink");
        }else{
            formLabel[idx].classList.remove("shrink");
        } 
    });
});

messageInput?.addEventListener("input", () =>{
    if(messageInput.value){
        messageLabel?.classList.add("shrink");
    }else{
        messageLabel?.classList.remove("shrink");
    }
});
