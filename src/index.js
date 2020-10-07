module.exports = function toReadable (number) {

    let arrWord1 = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrWord2 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrWord3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
    let arrNum = number.toString().split('');

    let result = '';

    if (arrNum.length === 1) {
        if (Number(arrNum[0]) === 0) {
            return 'zero'
        }
        arrWord2.forEach((item, index) => {
            if (index + 1 === Number(arrNum[0])) {
                result += item;
        }})
    }

    if (arrNum.length === 2) {
        if (Number(arrNum[0]) === 1) {
            arrWord1.forEach((item, index) => {
                if (Number(arrNum[1]) === index) {
                    result += item;
                }
            })
        } else {
            arrWord3.forEach((item, index) => {
                if (Number(arrNum[0]) === index + 2) {
                    result += item;
                }
            })
            arrWord2.forEach((item, index) => {
                if (index + 1 === Number(arrNum[1])) {
                    result += ` ${item}`;
                }
            })
        }
    }

    if (arrNum.length === 3) {
        arrWord2.forEach((item, index) => {
            if (index + 1 === Number(arrNum[0])) {
                result += item;
            }
        })
        result += ' hundred';
        if (Number(arrNum[1]) === 0 && Number(arrNum[2]) === 0) {
            return result;
        } else if (Number(arrNum[1]) === 0) {
            arrWord2.forEach((item, index) => {
                if (index + 1 === Number(arrNum[2])) {
                    result += ` ${item}`;
                }
            })
        } else if (Number(arrNum[1]) === 1) {
            arrWord1.forEach((item, index) => {
                if (Number(arrNum[2]) === index) {
                    result += ` ${item}`;
                }
            })
        } else {
            arrWord3.forEach((item, index) => {
                if (Number(arrNum[1]) === index + 2) {
                    result += ` ${item}`;
                }
            })
            arrWord2.forEach((item, index) => {
                if (index + 1 === Number(arrNum[2])) {
                    result += ` ${item}`;
                }
            })
        }
    }

    return result
}
