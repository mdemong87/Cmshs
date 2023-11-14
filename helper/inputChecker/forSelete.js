

export default function forSelete(name, value, setFunction) {

    // state update indivigule
    switch (name) {
        case "Blood Group":
            setFunction(value);
            break;
        case "Religion":
            setFunction(value)
            break;
        case "Gander":
            setFunction(value)
            break;
        case "Want to Admite":
            setFunction(value)
            break;
        case "Residence":
            setFunction(value)
            break;
        case "Quata":
            setFunction(value)
            break;
        case "Father Occupation":
            setFunction(value)
            break;
        case "Mother Occupation":
            setFunction(value)
            break;
        case "Country":
            setFunction(value)
            break;
        case "Division":
            setFunction(value)
            break;
        case "Division-c":
            setFunction(value)
            break;
        case "Country-c":
            setFunction(value)
            break;
        default: console.log('not allow')
            break;

    }
}
