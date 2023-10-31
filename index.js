// Code your solution in this file!


const hq = 42

function distanceFromHqInBlocks(pickupLocation) {
    let distanceInBlocks = 0
    distanceInBlocks = Math.abs(hq - pickupLocation)
    return (distanceInBlocks)
}

function distanceFromHqInFeet(pickupLocation) {
    let distanceInFeet = 0
    distanceInFeet = distanceFromHqInBlocks(pickupLocation) * 264
    return (distanceInFeet)
}
function distanceTravelledInFeet(start, end) {

    return Math.abs(start - end) * 264

}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);

    if (feet < 400) {
        return 0;
    } else if (feet > 400 && feet < 2000) {
        return (feet - 400) * 0.02;
    } else if (feet > 2000 && feet < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
