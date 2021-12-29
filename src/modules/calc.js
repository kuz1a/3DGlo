const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type') 
    const calcSquare = document.querySelector('.calc-square') 
    const calcCount = document.querySelector('.calc-count') 
    const calcDay = document.querySelector('.calc-day') 
    let total = document.querySelector('#total')

    const countCalc = () => {
        const calcTypeSelect = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = +calcSquare.value
        let calcCountValue = 1;
        let totalValue = 0;
        let calcDayValue = 1;

        
        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10 
        }
         
        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }



        if (calcType.value && calcSquare.value) {
            
            totalValue = price * calcTypeSelect * calcSquareValue * calcCountValue * calcDayValue
        } else {
            totalValue = 0;
        }


        total.textContent = totalValue;
    }
    calcBlock.addEventListener('input', (e) => {
        // countCalc();
        if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    })
}

export default calc