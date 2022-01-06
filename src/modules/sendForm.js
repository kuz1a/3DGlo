const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId)

    const statusBlock = document.createElement('div')
    const loadText = 'Loading...'
    const errorText = 'Oops, error'
    const successText = 'Thank you!'

    const validate = (list) => {
        let success = true;

        // list.forEach(input => {
        //     if (!input.classList.contains('success')) {
        //         success = false
        //     }
        // })

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')

        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)
        
        formData.forEach((value, key) => {
            formBody[key] = value
        })

        someElem.forEach(elem => {
            
            const element = document.getElementById(elem.id)
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent

            } else if (elem.type === 'input'){
                formBody[elem.id] = element.value
            }
        })

        if(validate(formElements)) {
            sendData(formBody)
            .then(data => {
                formElements.forEach(input => {
                    statusBlock.textContent = successText
                    input.value = ''
                })
            })
            .catch(error => {
                statusBlock.textContent = errorText
            })
        } else {
            alert('Data is not valid')
        }

    }
    try {
        if (!form) {
            throw new Error('что-то сломалось')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            submitForm()
            
        })
    } catch(error){
        console.log(error.message);
    }
    
   
}

export default sendForm