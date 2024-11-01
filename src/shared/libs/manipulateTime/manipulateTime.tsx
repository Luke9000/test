const getCurrentTime = (format: "HH:MM" | "HH:MM:SS" | "HH:MM:SS AM/PM" = "HH:MM"): string => {
    const now = new Date();

    const hours24 = now.getHours();
    const hours12 = hours24 % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const amPm = hours24 >= 12 ? "PM" : "AM";

    switch (format) {
        case "HH:MM":
            return `${hours24.toString().padStart(2, "0")}:${minutes}`;
        case "HH:MM:SS":
            return `${hours24.toString().padStart(2, "0")}:${minutes}:${seconds}`;
        case "HH:MM:SS AM/PM":
            return `${hours12.toString().padStart(2, "0")}:${minutes}:${seconds} ${amPm}`;
        default:
            return `${hours24.toString().padStart(2, "0")}:${minutes}`;
    }
};

const addMinutes = (baseTime: string, minutesToAdd: number, format: "HH:MM" | "HH:MM:SS" | "HH:MM:SS AM/PM" | "MM:SS" = "HH:MM"): string => {
    const timeParts = baseTime.split(":");
    let hours = parseInt(timeParts[0], 10);
    let minutes = parseInt(timeParts[1], 10);
    let seconds = timeParts.length > 2 ? parseInt(timeParts[2], 10) : 0; 

    minutes += minutesToAdd;

    if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes = minutes % 60;
    }

    hours = (hours + 24) % 24;

 
    const hoursFormatted = hours.toString().padStart(2, "0");
    const minutesFormatted = minutes.toString().padStart(2, "0");
    const secondsFormatted = seconds.toString().padStart(2, "0");

  
    switch (format) {
        case "HH:MM":
            return `${hoursFormatted}:${minutesFormatted}`;
        case "HH:MM:SS":
            return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
        case "MM:SS":
            return `${minutesFormatted}:${secondsFormatted}`;
        default:
            const amPm = hours >= 12 ? "PM" : "AM";
            const hours12 = hours % 12 || 12; 
            return `${hours12.toString().padStart(2, "0")}:${minutesFormatted}:${secondsFormatted} ${amPm}`;
    }
};

const subtractTime = (baseTime: string, timeToSubtract: string, format: "HH:MM" | "HH:MM:SS" | "HH:MM:SS AM/PM" | "MM:SS" = "HH:MM"): string => {
    const [hours1, minutes1, seconds1] = baseTime.split(":").map(Number);
    const [hours2, minutes2, seconds2] = timeToSubtract.split(":").map(Number);

 
    const totalSeconds1 = hours1 * 3600 + minutes1 * 60 + seconds1;
    const totalSeconds2 = hours2 * 3600 + minutes2 * 60 + seconds2;

   
    const resultSeconds = totalSeconds1 - totalSeconds2;

    
    const hours = Math.floor(resultSeconds / 3600) % 24; 
    const minutes = Math.floor((resultSeconds % 3600) / 60);
    const seconds = resultSeconds % 60;

   
    const hoursFormatted = hours.toString().padStart(2, "0");
    const minutesFormatted = minutes.toString().padStart(2, "0");
    const secondsFormatted = seconds.toString().padStart(2, "0");

    
    switch (format) {
        case "HH:MM":
            return `${hoursFormatted}:${minutesFormatted}`;
        case "HH:MM:SS":
            return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
        case "MM:SS":
            return `${minutesFormatted}:${secondsFormatted}`;
        default:
            const amPm = hours >= 12 ? "PM" : "AM";
            const hours12 = hours % 12 || 12; 
            return `${hours12.toString().padStart(2, "0")}:${minutesFormatted}:${secondsFormatted} ${amPm}`;
    }
};


export { getCurrentTime, addMinutes, subtractTime };


