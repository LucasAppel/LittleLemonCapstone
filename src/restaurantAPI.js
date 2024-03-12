// Funktion zur Erstellung des Datums in einem bestimmten Format (YYYY-MM-DD)

// Funktion zur Generierung der verfügbaren Zeiten für einen Tag (zufällig, jede Zeit darf nur einmal vorkommen)
function generateAvailableTimes() {
  const times = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00'];
  const shuffledTimes = [...times]; // Kopie des Arrays für das Mischen

  // Mischen der Zeiten
  for (let i = shuffledTimes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledTimes[i], shuffledTimes[j]] = [shuffledTimes[j], shuffledTimes[i]];
  }

  // Zufällige Anzahl von 1 bis 6 Zeiten auswählen
  const numTimes = Math.floor(Math.random() * 6) + 1;
  return shuffledTimes.slice(0, numTimes).sort();
}



// Funktion zur Erstellung der verfügbaren Zeiten für den nächsten Monat
function generateAvailableTimesForNextFourWeeks() {
  const today = new Date();
  const availableTimesByDate = {};

  for (let i = 0; i < 28; i++) { // 28 Tage = 4 Wochen
      const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      const availableTimes = generateAvailableTimes();
      availableTimesByDate[currentDate.toJSON().split('T')[0]] = availableTimes;
  }

  return availableTimesByDate;
}

// Testen der Funktion
const availableTimesByDate = generateAvailableTimesForNextFourWeeks();
console.log(availableTimesByDate);





const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]){
                resolve(availableTimesByDate[date])
            }
            else{
                reject(new Error('No available times for the selected date.'));
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export {fetchAPI,submitAPI}
