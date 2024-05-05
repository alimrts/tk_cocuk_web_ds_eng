let correct;
let amtCorrect = 0;
let amtIncorrect = 0;
let questionNumber = 0;
let seconds = 50; // Assuming 5 seconds per question
let totalQuestions = 10;
let scoreIndex = 0;

function updateLevel() {
  const levelSelect = document.getElementById("level");
  const level = levelSelect.value;

  // Update totalQuestions and scoreIndex based on the selected level
  switch (level) {
    case "easy":
      totalQuestions = 10;
      scoreIndex = 10;
      get("soruPuan").innerHTML = scoreIndex;

      break;
    case "medium":
      totalQuestions = 20;
      scoreIndex = 5;
      get("soruPuan").innerHTML = scoreIndex;
      break;
    case "hard":
      totalQuestions = 25;
      scoreIndex = 4;
      get("soruPuan").innerHTML = scoreIndex;
      break;
    default:
      totalQuestions = 10;
      scoreIndex = 10;
      get("soruPuan").innerHTML = scoreIndex;
      break;
  }
}

updateLevel();

// Initialize visibility on first load

document.getElementById("container").style.display = "none";

document.getElementById("selection").style.display = "block";
document.querySelector(".infobar").style.display = "none"; // Initially hide the infobar

function startGame() {
  // Show the infobar and hide the level selector container

  document.getElementById("container").style.display = "flex";

  document.getElementById("selection").style.display = "none";
  document.querySelector(".infobar").style.display = "flex";

  // ... (your existing code)
}

function main() {
  if (questionNumber >= totalQuestions) {
    // If 10 questions are answered, finish the game
    finish();
    return;
  }

  questionNumber++;

  let options = [];
  const maxOptions = 4;

  while (options.length < maxOptions) {
    let country = getRandomCountry();
    if (options.indexOf(country) === -1) {
      options.push(country);
    }
  }
  correct = options[Math.round(Math.random() * (options.length - 1))];
  for (let i = 0; i < options.length; i++) {
    get(`option${i + 1}label`).innerHTML = options[i].name;
    get(`option${i + 1}input`).value = options[i].name;
    get(`option${i + 1}input`).checked = false;
  }

  for (let i = 0; i < options.length; i++) {
    const optionLabel = get(`option${i + 1}label`);
    optionLabel.innerHTML = options[i].name;
    optionLabel.classList.remove("wrong", "correct"); // Remove existing classes
    get(`option${i + 1}input`).value = options[i].name;
    get(`option${i + 1}input`).checked = false;

    if (options[i].name === correct.name) {
      optionLabel.classList.add("correct"); // Add 'correct' class to the correct option
    } else {
      optionLabel.classList.add("wrong"); // Add 'wrong' class to wrong options
    }
  }

  get("flag").src = correct.flag;
}

function getRandomCountry() {
  return countries[Math.round(Math.random() * (countries.length - 1))];
}

function get(id) {
  return document.getElementById(id);
}

function check() {
  get("questionNumber").innerHTML = questionNumber;
  get("totalQuestions").innerHTML = totalQuestions;

  let input;
  try {
    input = document.querySelector('input[name="option"]:checked');
  } catch {
    return;
  }

  let selectedOption = input.value;
  let correctOption;
  disableOptions();

  for (let i = 1; i <= 4; i++) {
    let option = get(`option${i}input`).value;
    if (option === correct.name) {
      correctOption = i;
      break;
    }
  }

  if (selectedOption === correct.name) {
    amtCorrect++;
    get("score").innerHTML = amtCorrect * scoreIndex;
    get("cevap").innerHTML =
      "<span style='color: green; font-size:2.5rem;'>Correct answer!</span>";
    get(`option${correctOption}label`).style.backgroundColor = "#2ecc71";
    resetOptionsBackground();
    enableOptions();
  } else {
    amtIncorrect++;
    get("cevap").innerHTML =
      "<span style='color: red; font-size:2.5rem;'>Wrong!</span><br/>Correct answer: " +
      correct.name;
    get(`option${correctOption}label`).style.backgroundColor = "#2ecc71";
    get(
      `option${selectedOption.charAt(selectedOption.length - 1)}label`
    ).style.backgroundColor = "red";
    return;
  }
  // Disable all radio buttons

  setTimeout(() => {
    resetOptionsBackground();
    get("cevap").innerHTML = "";
  }, 2000);

  main();
}

function resetOptionsBackground() {
  for (let i = 1; i <= 4; i++) {
    get(`option${i}label`).style.backgroundColor = ""; // Reset background color
  }
}

function disableOptions() {
  for (let i = 1; i <= 4; i++) {
    get(`option${i}input`).disabled = true;
  }
}

function enableOptions() {
  for (let i = 1; i <= 4; i++) {
    get(`option${i}input`).disabled = false;
  }
}

function nextQuestion() {
  resetOptionsBackground();
  get("cevap").innerHTML = "";
  enableOptions();
  main();
}

function finish() {
  clearInterval(checkInterval);
  get("alertGameOver").style.display = "block";
  get("alert").style.display = "block";
  get("container").style.display = "none";
  get("alertscore").innerHTML = amtCorrect;
  get("alertscoreLast").innerHTML = amtCorrect * scoreIndex;
  get("wrongscore").innerHTML = amtIncorrect;
  get("totalQuestions").innerHTML = totalQuestions;

  get("cevap").innerHTML = "";
  let percentage = Math.round((amtCorrect / (amtCorrect + amtIncorrect)) * 100);
  if (isNaN(percentage)) percentage = 10;
  get("alertaccuracy").innerHTML = `${percentage}%`;
}

function refresh() {
  location = location;
}

let checkInterval = setInterval(check, 50);
main();
