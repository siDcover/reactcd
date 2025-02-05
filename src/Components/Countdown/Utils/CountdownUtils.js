import dayjs from "dayjs";
var utc = require('dayjs/plugin/utc')
var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
dayjs.extend(utc);

const tz = "America/New_York"

export function getRemainingTime(timestampMs){
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();

    if(timestampDayjs.isBefore(nowDayjs)){
        return {
            seconds : "00",
            minutes : "00",
            hours : "00",
            days : "00"
        }
    }
    return{
        seconds : getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes : getRemainingMinutes(nowDayjs, timestampDayjs),
        hours : getRemainingHours(nowDayjs, timestampDayjs),
        days : getRemainingDays(nowDayjs, timestampDayjs)
    };
}

function getRemainingSeconds(nowDayjs, timestampDayjs){
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}
function getRemainingMinutes(nowDayjs, timestampDayjs){
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}
function getRemainingHours(nowDayjs, timestampDayjs){
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}
function getRemainingDays(nowDayjs, timestampDayjs){
    const days = timestampDayjs.diff(nowDayjs, 'days') % 400;
    return padWithZeros(days, 2);
}

function padWithZeros(number, minLength){
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString
    return "0".repeat(minLength - numberString.length) + numberString
}