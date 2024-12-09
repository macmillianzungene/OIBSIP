// JavaScript for Temperature Conversion

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

// Event Listener
document.getElementById("convert-btn").addEventListener("click", () => {
  const tempInput = document.getElementById("temp-input");
  const unitSelect = document.getElementById("unit-select");
  const resultDiv = document.getElementById("result");
  const errorMessage = document.getElementById("error-message");

  const temp = parseFloat(tempInput.value);
  const fromUnit = unitSelect.value;

  if (isNaN(temp)) {
    errorMessage.textContent = "Please enter a valid number!";
    resultDiv.textContent = "";
    return;
  }

  errorMessage.textContent = ""; // Clear error message
  const converted = convertTemperature(temp, fromUnit);

  resultDiv.innerHTML = `
    <strong>${temp}°${
    fromUnit === "celsius" ? "C" : fromUnit === "fahrenheit" ? "F" : "K"
  }</strong> is:
    <ul>
      <li>${converted.celsius}°C</li>
      <li>${converted.fahrenheit}°F</li>
      <li>${converted.kelvin}K</li>
    </ul>
  `;
});
