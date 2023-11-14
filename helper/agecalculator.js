function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const now = new Date();

    const yearsDiff = now.getFullYear() - dob.getFullYear();
    const monthsDiff = now.getMonth() - dob.getMonth();
    const daysDiff = now.getDate() - dob.getDate();

    // If the birth date for the current year hasn't occurred yet, decrement age by 1
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
        return yearsDiff - 1;
    } else {
        return yearsDiff;
    }
}

export default calculateAge;
