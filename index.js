// code your solution here
const saturdayFun = function (a = 'roller-skate') {
    return `This Saturday, I want to ${a}!`
}

const mondayWork = function (a = 'go to the office') {
    return `This Monday, I will ${a}.`
}

const wrapAdjective = function (a='*') {
        return function (c='special') {
            return `You are ${a}${c}${a}!`
        } 
    
}
