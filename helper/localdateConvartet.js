
const lcldate = (item) => {

    const utcDate = new Date(item.createdAt);
    const timeString = utcDate.toLocaleTimeString();
    const datestring = utcDate.toLocaleDateString();
    const localDate = datestring;
    return localDate;

}

export default lcldate;