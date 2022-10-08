export function getTotalMilliseconds(loghours) {
    // Stores total millisecons of all log book entries in the database
    let totalMilliseconds = 0;
    loghours.forEach((entry) => {
      return (totalMilliseconds += entry.endTime - entry.startTime);
    });
    return totalMilliseconds;
  }
  export function calculateTotalHours(totalMilliseconds) {
    let seconds = Math.floor(totalMilliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    return `${Math.round(hours)} hour and ${Math.round(minutes)} minutes`;
  }