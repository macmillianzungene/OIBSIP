/// JavaScript for Temperature Conversion

// Conversion Logic
function convertTemperature(temp, fromUnit) {
  let celsius, fahrenheit, kelvin;

  if (fromUnit === "celsius") {
    celsius = temp;
    fahrenheit = (temp * 9) / 5 + 32;
    kelvin = parseFloat(temp) + 273.15;
  } else if (fromUnit === "fahrenheit") {
    celsius = ((temp - 32) * 5) / 9;
    fahrenheit = temp;
    kelvin = celsius + 273.15;
  } else if (fromUnit === "kelvin") {
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9) / 5 + 32;
    kelvin = temp;
  }

  return {
    celsius: celsius.toFixed(2),
    fahrenheit: fahrenheit.toFixed(2),
    kelvin: kelvin.toFixed(2),
  };
}

// Event Listener for Convert Button
document.getElementById("convert-btn").addEventListener("click", () => {
  const tempInput = document.getElementById("temp-input").value.trim();
  const unitSelect = document.getElementById("unit-select").value;
  const resultDiv = document.getElementById("result");
  const errorMessage = document.getElementById("error-message");

  // Validate input
  const temp = parseFloat(tempInput);
  if (isNaN(temp)) {
    errorMessage.textContent = "❌ Please enter a valid number!";
    resultDiv.textContent = ""; // Clear the result area
    return;
  }

  errorMessage.textContent = ""; // Clear any previous error
  const converted = convertTemperature(temp, unitSelect);

  // Display converted temperatures
  resultDiv.innerHTML = `
    <strong>${temp}°${
    unitSelect === "celsius" ? "C" : unitSelect === "fahrenheit" ? "F" : "K"
  }</strong> is:
    <ul>
      <li><b>${converted.celsius}°C</b></li>
      <li><b>${converted.fahrenheit}°F</b></li>
      <li><b>${converted.kelvin}K</b></li>
    </ul>
  `;
});
