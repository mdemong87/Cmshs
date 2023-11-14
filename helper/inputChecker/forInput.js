

export default function forInput(name, value, setFunction) {
    // state update indivigule
    switch (name) {
        case "Frist Name (English)":
            setFunction(value);
            break;
        case "Last Name":
            setFunction(value)
            break;
        case "Name (Bangla)":
            setFunction(value)
            break;
        case "Want to Admite":
            setFunction(value)
            break;
        case "Father's Name":
            setFunction(value)
            break;
        case "Mother's Name":
            setFunction(value)
            break;
        case "Student Contact Number":
            setFunction(value)
            break;
        case "Brith Reg Number":
            setFunction(value)
            break;
        case "Date of Brith":
            setFunction(value)
            break;
        case "Father Monthly Income":
            setFunction(value)
            break;
        case "Mother Monthly Income":
            setFunction(value)
            break;
        case "Father Phone Number":
            setFunction(value)
            break;
        case "Mother Phone Number":
            setFunction(value)
            break;
        case "Father Email":
            setFunction(value)
            break;
        case "Mother Email":
            setFunction(value)
            break;
        case "District":
            setFunction(value)
            break;
        case "Upazila":
            setFunction(value)
            break;
        case "Union Council":
            setFunction(value)
            break;
        case "Post Office":
            setFunction(value)
            break;
        case "Village":
            setFunction(value)
            break;
        case "District-c":
            setFunction(value)
            break;
        case "Upazila-c":
            setFunction(value)
            break;
        case "Union Council-c":
            setFunction(value)
            break;
        case "Post Office-c":
            setFunction(value)
            break;
        case "Village-c":
            setFunction(value)
            break;
        case "Emergency Contact Number":
            setFunction(value)
            break;
        default: console.log('Not allow')
            break;
    }
}
