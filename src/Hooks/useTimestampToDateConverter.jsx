export const useTimestampToDateConverter = (timestamp) => {

    // Conver To Milliseconds
    const milliseconds = timestamp * 1000
    const dateObject = new Date(milliseconds)

    let month = dateObject.toLocaleString("en-US", {month: "long"})
    let day = dateObject.toLocaleString("en-US", {day: "numeric"})
    let year = dateObject.toLocaleString("en-US", {year: "numeric"})
    let hour = dateObject.toLocaleString("en-US", {hour: "numeric"})
    let timezone = dateObject.toLocaleString("en-US", {timeZoneName: "short"})

    return {
        month, day, year, hour, timezone
    }
}