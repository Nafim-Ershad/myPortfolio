import "./scss/contact.scss";

// const nameInput = document.querySelector<HTMLInputElement>(".name");
// const nameLabel = document.querySelector<HTMLLabelElement>(".name~label");
// const emailInput = document.querySelector<HTMLInputElement>(".email");
// const emailLabel = document.querySelector<HTMLLabelElement>(".email~label");
const formInput = document.querySelectorAll<HTMLInputElement>(".form-container form .form-group input");
const formLabel = document.querySelectorAll<HTMLInputElement>(".form-container form .form-group label");
const messageInput = document.querySelector<HTMLTextAreaElement>(".message-input");
const messageLabel = document.querySelector<HTMLLabelElement>(".message-input~label");

// nameInput?.addEventListener("input", (e: Event) =>{
//     if(nameInput.value){
//         nameLabel?.classList.add("shrink");
//     }else{
//         nameLabel?.classList.remove("shrink");
//     }
// });

// emailInput?.addEventListener("input", (e: Event) =>{
//     if(emailInput.value){
//         emailLabel?.classList.add("shrink");
//     }else{
//         emailLabel?.classList.remove("shrink");
//     }
// });

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
    console.log(messageInput.value);
    if(messageInput.value){
        messageLabel?.classList.add("shrink");
    }else{
        messageLabel?.classList.remove("shrink");
    }
});