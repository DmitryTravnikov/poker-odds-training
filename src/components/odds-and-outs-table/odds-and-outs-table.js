const RED = '#AD4118';
const GREEN = '#4E8A3A';
const BLUE = '#1E347F';

let getInputs = document.querySelectorAll('.get-input');

let oneOutInputs = document.querySelectorAll('.one-out-input');
let oneOutArray1 = ['2.13', '2.17', '4.26', '46', '45', '22.5'];
let oneOutArray2 = ['2,13', '2,17', '4,26', '46', '45', '22,5'];

let twoOutsInputs = document.querySelectorAll('.two-outs-input');
let twoOutsArray1 = ['4.26', '4.35', '8.42', '22.5', '22', '10.88'];
let twoOutsArray2 = ['4,26', '4,35', '8,42', '22,5', '22', '10,88'];

let threeOutsInputs = document.querySelectorAll('.three-outs-input');
let threeOutsArray1 = ['6.38', '6.52', '12.49', '14.67', '14.33', '7.01'];
let threeOutsArray2 = ['6,38', '6,52', '12,49', '14,67', '14,33', '7,01'];

let fourOutsInputs = document.querySelectorAll('.four-outs-input');
let fourOutsArray1 = ['8.51', '8.7', '16.47', '10.75', '10.5', '5.07'];
let fourOutsArray2 = ['8,51', '8,7', '16,47', '10,75', '10,5', '5,07'];

let fiveOutsInputs = document.querySelectorAll('.five-outs-input');
let fiveOutsArray1 = ['10.64', '10.87', '20.35', '8.4', '8.2', '3.91'];
let fiveOutsArray2 = ['10,64', '10,87', '20,35', '8,4', '8,2', '3,91'];

let sixOutsInputs = document.querySelectorAll('.six-outs-input');
let sixOutsArray1 = ['12.77', '13.04', '24.14', '6.83', '6.67', '3.14'];
let sixOutsArray2 = ['12,77', '13,04', '24,14', '6,83', '6,67', '3,14'];

let sevenOutsInputs = document.querySelectorAll('.seven-outs-input');
let sevenOutsArray1 = ['14.89', '15.22', '27.84', '5.71', '5.57', '2.59'];
let sevenOutsArray2 = ['14,89', '15,22', '27,84', '5,71', '5,57', '2,59'];

let eightOutsInputs = document.querySelectorAll('.eight-outs-input');
let eightOutsArray1 = ['17.02', '17.39', '31.45', '4.88', '4.75', '2.18'];
let eightOutsArray2 = ['17,02', '17,39', '31,45', '4,88', '4,75', '2,18'];

let nineOutsInputs = document.querySelectorAll('.nine-outs-input');
let nineOutsArray1 = ['19.15', '19.57', '34.97', '4.22', '4.11', '1.86'];
let nineOutsArray2 = ['19,15', '19,57', '34,97', '4,22', '4,11', '1,86'];

let tenOutsInputs = document.querySelectorAll('.ten-outs-input');
let tenOutsArray1 = ['21.28', '21.74', '38.39', '3.7', '3.6', '1.6'];
let tenOutsArray2 = ['21,28', '21,74', '38,39', '3,7', '3,6', '1,6'];

let elevenOutsInputs = document.querySelectorAll('.eleven-outs-input');
let elevenOutsArray1 = ['23.4', '23.91', '41.72', '3.27', '3.18', '1.4'];
let elevenOutsArray2 = ['23,4', '23,91', '41,72', '3,27', '3,18', '1,4'];

let twelveOutsInputs = document.querySelectorAll('.twelve-outs-input');
let twelveOutsArray1 = ['25.53', '26.09', '44.96', '2.92', '2.83', '1.22'];
let twelveOutsArray2 = ['25,53', '26,09', '44,96', '2,92', '2,83', '1,22'];

let thirteenOutsInputs = document.querySelectorAll('.thirteen-outs-input');
let thirteenOutsArray1 = ['27.66', '28.26', '48.1', '2.62', '2.54', '1.08'];
let thirteenOutsArray2 = ['27,66', '28,26', '48,1', '2,62', '2,54', '1,08'];

let fourteenOutsInputs = document.querySelectorAll('.fourteen-outs-input');
let fourteenOutsArray1 = ['29.79', '30.43', '51.16', '2.36', '2.29', '0.95'];
let fourteenOutsArray2 = ['29,79', '30,43', '51,16', '2,36', '2,29', '0,95'];

let fifteenOutsInputs = document.querySelectorAll('.fifteen-outs-input');
let fifteenOutsArray1 = ['31.91', '32.61', '54.12', '2.13', '2.07', '0.85'];
let fifteenOutsArray2 = ['31,91', '32,61', '54,12', '2,13', '2,07', '0,85'];

let sixteenOutsInputs = document.querySelectorAll('.sixteen-outs-input');
let sixteenOutsArray1 = ['34.04', '34.78', '56.98', '1.94', '1.88', '0.75'];
let sixteenOutsArray2 = ['34,04', '34,78', '56,98', '1,94', '1,88', '0,75'];

let seventeenOutsInputs = document.querySelectorAll('.seventeen-outs-input');
let seventeenOutsArray1 = ['36.17', '36.96', '59.76', '1.76', '1.71', '0.67'];
let seventeenOutsArray2 = ['36,17', '36,96', '59,76', '1,76', '1,71', '0,67'];

let eighteenOutsInputs = document.querySelectorAll('.eighteen-outs-input');
let eighteenOutsArray1 = ['38.3', '39.13', '62.44', '1.61', '1.56', '0.6'];
let eighteenOutsArray2 = ['38,3', '39,13', '62,44', '1,61', '1,56', '0,6'];

let nineteenOutsInputs = document.querySelectorAll('.nineteen-outs-input');
let nineteenOutsArray1 = ['40.43', '41.3', '65.03', '1.47', '1.42', '0.54'];
let nineteenOutsArray2 = ['40,43', '41,3', '65,03', '1,47', '1,42', '0,54'];

let twentyOutsInputs = document.querySelectorAll('.twenty-outs-input');
let twentyOutsArray1 = ['42.55', '43.48', '67.53', '1.35', '1.3', '0.48'];
let twentyOutsArray2 = ['42,55', '43,48', '67,53', '1,35', '1,3', '0,48'];

let twentyOneOutsInputs = document.querySelectorAll('.twenty-one-outs-input');
let twentyOneOutsArray1 = ['44.68', '45.65', '69.94', '1.24', '1.19', '0.43'];
let twentyOneOutsArray2 = ['44,68', '45,65', '69,94', '1,24', '1,19', '0,43'];

let checkButton = document.querySelector('.odds-and-outs__check-button');
let showAnswersButton = document.querySelector(
  '.odds-and-outs__show-answers-button'
);
let resetButton = document.querySelector('.odds-and-outs__reset-button');

let answersTable = document.querySelector('.odds-and-outs__answers-table');

checkButton.addEventListener('click', valueCheck);
resetButton.addEventListener('click', resetValues);
showAnswersButton.addEventListener('click', showAnswers);

function valueCheck() {
  // One out
  for (let i = 0; i < oneOutInputs.length; i++) {
    if (
      oneOutInputs[i].value === oneOutArray1[i] ||
      oneOutInputs[i].value === oneOutArray2[i]
    ) {
      oneOutInputs[i].parentNode.style.background = GREEN;
    } else {
      oneOutInputs[i].parentNode.style.background = RED;
    }
  }

  // Two outs
  for (let i = 0; i < twoOutsInputs.length; i++) {
    if (
      twoOutsInputs[i].value === twoOutsArray1[i] ||
      twoOutsInputs[i].value === twoOutsArray2[i]
    ) {
      twoOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      twoOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Three outs
  for (let i = 0; i < threeOutsInputs.length; i++) {
    if (
      threeOutsInputs[i].value === threeOutsArray1[i] ||
      threeOutsInputs[i].value === threeOutsArray2[i]
    ) {
      threeOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      threeOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Four outs
  for (let i = 0; i < fourOutsInputs.length; i++) {
    if (
      fourOutsInputs[i].value === fourOutsArray1[i] ||
      fourOutsInputs[i].value === fourOutsArray2[i]
    ) {
      fourOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      fourOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Five outs
  for (let i = 0; i < fiveOutsInputs.length; i++) {
    if (
      fiveOutsInputs[i].value === fiveOutsArray1[i] ||
      fiveOutsInputs[i].value === fiveOutsArray2[i]
    ) {
      fiveOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      fiveOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Six outs
  for (let i = 0; i < sixOutsInputs.length; i++) {
    if (
      sixOutsInputs[i].value === sixOutsArray1[i] ||
      sixOutsInputs[i].value === sixOutsArray2[i]
    ) {
      sixOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      sixOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Seven outs
  for (let i = 0; i < sevenOutsInputs.length; i++) {
    if (
      sevenOutsInputs[i].value === sevenOutsArray1[i] ||
      sevenOutsInputs[i].value === sevenOutsArray2[i]
    ) {
      sevenOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      sevenOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Eight outs
  for (let i = 0; i < eightOutsInputs.length; i++) {
    if (
      eightOutsInputs[i].value === eightOutsArray1[i] ||
      eightOutsInputs[i].value === eightOutsArray2[i]
    ) {
      eightOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      eightOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Nine outs
  for (let i = 0; i < nineOutsInputs.length; i++) {
    if (
      nineOutsInputs[i].value === nineOutsArray1[i] ||
      nineOutsInputs[i].value === nineOutsArray2[i]
    ) {
      nineOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      nineOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Ten outs
  for (let i = 0; i < tenOutsInputs.length; i++) {
    if (
      tenOutsInputs[i].value === tenOutsArray1[i] ||
      tenOutsInputs[i].value === tenOutsArray2[i]
    ) {
      tenOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      tenOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Eleven outs
  for (let i = 0; i < elevenOutsInputs.length; i++) {
    if (
      elevenOutsInputs[i].value === elevenOutsArray1[i] ||
      elevenOutsInputs[i].value === elevenOutsArray2[i]
    ) {
      elevenOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      elevenOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Twelve outs
  for (let i = 0; i < twelveOutsInputs.length; i++) {
    if (
      twelveOutsInputs[i].value === twelveOutsArray1[i] ||
      twelveOutsInputs[i].value === twelveOutsArray2[i]
    ) {
      twelveOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      twelveOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Thirteen outs
  for (let i = 0; i < thirteenOutsInputs.length; i++) {
    if (
      thirteenOutsInputs[i].value === thirteenOutsArray1[i] ||
      thirteenOutsInputs[i].value === thirteenOutsArray2[i]
    ) {
      thirteenOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      thirteenOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Fourteen outs
  for (let i = 0; i < fourteenOutsInputs.length; i++) {
    if (
      fourteenOutsInputs[i].value === fourteenOutsArray1[i] ||
      fourteenOutsInputs[i].value === fourteenOutsArray2[i]
    ) {
      fourteenOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      fourteenOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Fifteen outs
  for (let i = 0; i < fifteenOutsInputs.length; i++) {
    if (
      fifteenOutsInputs[i].value === fifteenOutsArray1[i] ||
      fifteenOutsInputs[i].value === fifteenOutsArray2[i]
    ) {
      fifteenOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      fifteenOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Sixteen outs
  for (let i = 0; i < sixteenOutsInputs.length; i++) {
    if (
      sixteenOutsInputs[i].value === sixteenOutsArray1[i] ||
      sixteenOutsInputs[i].value === sixteenOutsArray2[i]
    ) {
      sixteenOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      sixteenOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Seventeen outs
  for (let i = 0; i < seventeenOutsInputs.length; i++) {
    if (
      seventeenOutsInputs[i].value === seventeenOutsArray1[i] ||
      seventeenOutsInputs[i].value === seventeenOutsArray2[i]
    ) {
      seventeenOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      seventeenOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Eighteen outs
  for (let i = 0; i < eighteenOutsInputs.length; i++) {
    if (
      eighteenOutsInputs[i].value === eighteenOutsArray1[i] ||
      eighteenOutsInputs[i].value === eighteenOutsArray2[i]
    ) {
      eighteenOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      eighteenOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Nineteen outs
  for (let i = 0; i < nineteenOutsInputs.length; i++) {
    if (
      nineteenOutsInputs[i].value === nineteenOutsArray1[i] ||
      nineteenOutsInputs[i].value === nineteenOutsArray2[i]
    ) {
      nineteenOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      nineteenOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Twenty outs
  for (let i = 0; i < twentyOutsInputs.length; i++) {
    if (
      twentyOutsInputs[i].value === twentyOutsArray1[i] ||
      twentyOutsInputs[i].value === twentyOutsArray2[i]
    ) {
      twentyOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      twentyOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Twenty one outs
  for (let i = 0; i < twentyOneOutsInputs.length; i++) {
    if (
      twentyOneOutsInputs[i].value === twentyOneOutsArray1[i] ||
      twentyOneOutsInputs[i].value === twentyOneOutsArray2[i]
    ) {
      twentyOneOutsInputs[i].parentNode.style.background = GREEN;
    } else {
      twentyOneOutsInputs[i].parentNode.style.background = RED;
    }
  }

  // Make the empty inputs blue
  for (let i = 0; i < getInputs.length; i++) {
    if (getInputs[i].value === '') {
      getInputs[i].parentNode.style.background = BLUE;
    }
  }
}

function resetValues() {
  for (let i = 0; i < getInputs.length; i++) {
    getInputs[i].value = '';
    getInputs[i].parentNode.style.background = 'none';
  }
}

let answersInputs = document.querySelectorAll('.odds-and-outs__answers-input');
let answersArray = [
  '2.13',
  '2.17',
  '4.26',
  '4.26',
  '4.35',
  '8.42',
  '6.38',
  '6.52',
  '12.49',
  '8.51',
  '8.7',
  '16.47',
  '10.64',
  '10.87',
  '20.35',
  '12.77',
  '13.04',
  '24.14',
  '14.89',
  '15.22',
  '27.84',
  '17.02',
  '17.39',
  '31.45',
  '19.15',
  '19.57',
  '34.97',
  '21.28',
  '21.74',
  '38.39',
  '23.4',
  '23.91',
  '41.72',
  '25.53',
  '26.09',
  '44.96',
  '27.66',
  '28.26',
  '48.1',
  '29.79',
  '30.43',
  '51.16',
  '31.91',
  '32.61',
  '54.12',
  '34.04',
  '34.78',
  '56.98',
  '36.17',
  '36.96',
  '59.76',
  '38.3',
  '39.13',
  '62.44',
  '40.43',
  '41.3',
  '65.03',
  '42.55',
  '43.48',
  '67.53',
  '44.68',
  '45.65',
  '69.94',
  '46',
  '45',
  '22.5',
  '22.5',
  '22',
  '10.88',
  '14.67',
  '14.33',
  '7.01',
  '10.75',
  '10.5',
  '5.07',
  '8.4',
  '8.2',
  '3.91',
  '6.83',
  '6.67',
  '3.14',
  '5.71',
  '5.57',
  '2.59',
  '4.88',
  '4.75',
  '2.18',
  '4.22',
  '4.11',
  '1.86',
  '3.7',
  '3.6',
  '1.6',
  '3.27',
  '3.18',
  '1.4',
  '2.92',
  '2.83',
  '1.22',
  '2.62',
  '2.54',
  '1.08',
  '2.36',
  '2.29',
  '0.95',
  '2.13',
  '2.07',
  '0.85',
  '1.94',
  '1.88',
  '0.75',
  '1.76',
  '1.71',
  '0.67',
  '1.61',
  '1.56',
  '0.6',
  '1.47',
  '1.42',
  '0.54',
  '1.35',
  '1.3',
  '0.48',
  '1.24',
  '1.19',
  '0.43',
];

for (let i = 0; i < answersInputs.length; i++) {
  answersInputs[i].value = answersArray[i];
}

function showAnswers() {
  answersTable.classList.toggle('active');
  this.classList.toggle('active');
  if (this.classList.contains('active')) {
    this.innerHTML = 'Hide the answers';
  } else {
    this.innerHTML = 'Show the answers';
  }
}

// Calculating odds formulas
let outs = 21;
let a = 47;
let b = 46;

(function () {
  let result1 = (a - outs) / outs;
  console.log(result1.toFixed(2));

  let result2 = (b - outs) / outs;
  console.log(result2.toFixed(2));

  let c = (outs / a + (outs / b) * (1 - outs / a)) * 100;
  let d = 100 / c;
  let result3 = d - percentage(d, c);
  console.log(result3.toFixed(2));

  let result4 = 100 / ((a - outs) / outs + 1);
  console.log(result4.toFixed(2));

  let result5 = 100 / ((b - outs) / outs + 1);
  console.log(result5.toFixed(2));

  let result6 = 100 / (d - percentage(d, c) + 1);
  console.log(result6.toFixed(2));
})();

function percentage(num, per) {
  return (num / 100) * per;
}
