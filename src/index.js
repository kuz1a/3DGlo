import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal"
import scrollSmoth from "./modules/scrollSmooth";
import validate from "./modules/validate"
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import calc from "./modules/calc";
import sendForm from './modules/sendForm'

timer('31 december 2021')
menu()
modal()
scrollSmoth()
validate()
tabs()
slider()
calc()
sendForm({
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
        

    ]
})
sendForm({
    formId: 'form2',
})


 