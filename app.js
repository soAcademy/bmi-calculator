const submitCalculateBMI = () => {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  calculateBMI(weight, height);
};

const calculateBMI = (weight, height) => {
  const bmi = weight / ((height / 100) ^ 2);
  const status = getBMIStatus(bmi);
  const statusColor = getBMIStatusColor(bmi);
  console.log(statusColor);
  console.log(bmi);
  document.getElementById("bmiDescription").innerHTML =
    " Your Body Mass Index is <strong>" +
    bmi.toFixed(2) +
    "</strong>" +
    '</span>. This is considered <span style="color: ' +
    statusColor +
    '"><strong>' +
    status +
    "</strong></span > ";
};

const getBMIStatus = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Healthy";
  } else if (bmi < 30) {
    return "Overweight";
  } else if (bmi < 35) {
    return "Obesity Class I";
  } else if (bmi < 40) {
    return "Obesity Class II";
  } else {
    return "Obesity Class III";
  }
};

const getBMIStatusColor = (bmi) => {
  if (bmi < 18.5) {
    return "red";
  } else if (bmi < 25) {
    return "green";
  } else {
    return "blue";
  }
};
