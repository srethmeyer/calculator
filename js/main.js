//required abilities of a calculaor
// accept user input number operator number
// should accept decimal numbers
// store inputs
//recognize user inputs and perform calcualiosn
// return result

// optional features
// clear screen and memory
// accept longer operations
// display input as its entered
// last total becomes new start of operation
// should prevent invalid inputs

const keys = document.querySelector('.calc-btns');
    keys.addEventListener('click', event=>{
        const {target} = event;
        const {value} = target;
        if(!target.matches('button')){
            return;
        }else{
            // console.log(event)
            calculator.parseInput(value)
        }
    })

    const calculator = {
        displayText: '0',
        previousTotal: null,

        parseInput(value){
            // have any special btns been clicked
            switch(value){
                case '=' :
                    //calculate answer
                    this.calcAnswer(this.displayText)
                    break;
                case 'AC' :
                    //clear screen
                    this.clearAll()
                    break;
                case '.' :
                    if(this.displayText == 0){
                        this.addText('0.')
                    }else{
                        //add value to text string
                        this.addText(value)
                    }
                    break;
                default:
                    //add value to text string
                    this.addText(value)
                    break;
            }
        },

        addText(value){
            if(this.displayText === '0'){
                this.displayText = ''
            }else if(this.previousTotal !== null){
                this.displayText = this.previousTotal
                this.previousTotal = null
            }
            if(/*user had entered invalid sequence dotn proceed*/isNaN(+(value))&&isNaN(+(this.displayText))){
                if(isNaN(this.displayText.slice(-1))){
                    return;
                }
            }
            this.displayText += value
            this.outputText(this.displayText)
        },

        outputText(text){
            document.querySelector('.calc-screen').value = text
        },

        calcAnswer(equation){
            let result = Function('return ' + equation)()
            this.outputText(result)
        },

        clearAll(){
            this.displayText = '0'
            this.previousTotal = null
            this.outputText(this.displayText)
        }

    }