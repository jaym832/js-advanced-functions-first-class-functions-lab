// Code your solution in this file!

const returnFirstTwoDrivers= function (arr){
    let newArr=arr.slice(0,2);
    return newArr;
    
}

const returnLastTwoDrivers=function(arr){
    let newArr= arr.slice(2,4);
    return newArr;
}

let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplyBy){
    let multiplier= function(fare){
        return multiplyBy*fare;
    }
    return multiplier;
}

const fareDoubler= createFareMultiplier(2);

const fareTripler= createFareMultiplier(3);

function selectDifferentDrivers(arr,aFunction){
    return aFunction(arr);

}
