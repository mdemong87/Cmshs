function arrayToString(arr) {
    // Convert each object to a JSON string and join them with a separator
    var stringRepresentation = arr.map(obj => JSON.stringify(obj)).join(',');
    return stringRepresentation;
}

export default arrayToString;