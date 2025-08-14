const tempF = 45;
    const speedMph = 5;

    // One-line windchill calculation formula for imperial units
    function calculateWindChill(t, s) {
      return Math.round(
        35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16))
      );
    }

    // Check viability before calculating
    const windchillElement = document.getElementById('windchill');
    if (tempF <= 50 && speedMph > 3) {
      windchillElement.textContent = `${calculateWindChill(tempF, speedMph)} °F`;
    } else {
      windchillElement.textContent = 'N/A';
    }
    
    
const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear} - Juan Pablo Cuiza Arce - Bolivia`;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;
