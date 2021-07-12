
// expected output: Day, Mounth date, Year
export function getDateString(date) {
      
    var date = new Date(date*1000);
    var dayOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        monthName = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"],
        utc = date.getTime() + date.getTimezoneOffset() * 60000,
        US_time = utc + (3600000 * -4),
        US_date = new Date(US_time);

    return dayOfWeek[(US_date.getDay()-1 < 0) ? 6 : US_date.getDay()-1] + ", " + monthName[US_date.getMonth()] +
        " " + US_date.getDate() + ", " + US_date.getFullYear();

}