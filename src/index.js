import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal"
import scrollSmoth from "./modules/scrollSmooth";
import validate from "./modules/validate"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from "./modules/calc";
import sendForm from './modules/sendForm'

timer('15 january 2022')
menu()
modal()
scrollSmoth()
validate()
tabs()
slider()
calc()
sendForm({
    formId: 'form1', 
})
sendForm({
    formId: 'form2',
})
sendForm({
    formId: 'form3',
})


 