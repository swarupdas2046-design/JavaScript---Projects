let board = document.querySelector("#board");
let startButton = document.querySelector(".btn-start");
let modal = document.querySelector(".modal");
let startgameModal = document.querySelector(".start-game");
let RestartModal = document.querySelector(".game-over");
let restartButton = document.querySelector(".btn-restart");
let HighScoreElement = document.querySelector("#high-score");
let ScoreElement = document.querySelector("#Score");
let TimeElement = document.querySelector("#time");

let blockHeight = 50;
let blockWidth = 50;

let high_score = localStorage.getItem("high_score") || 0;
let score = 0;
let time = `00-00`;

HighScoreElement.innerHTML = high_score;

let cols = Math.floor(board.clientWidth / blockWidth);
let rows = Math.floor(board.clientHeight / blockHeight);
let intervalid = null;
let timerIntervalid = null;

let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

let Blocks = [];
let snack = [
  {
    x: 1,
    y: 3,
  },
];
let direction = "down";

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    let block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    Blocks[`${row}-${col}`] = block;
  }
}

function render() {
  let head = null;

  Blocks[`${food.x}-${food.y}`].classList.add("food");

  if (direction === "left") {
    head = { x: snack[0].x, y: snack[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snack[0].x, y: snack[0].y + 1 };
  } else if (direction === "down") {
    head = { x: snack[0].x + 1, y: snack[0].y };
  } else if (direction === "up") {
    head = { x: snack[0].x - 1, y: snack[0].y };
  }
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    // alert("Game Over");
    clearInterval(intervalid);
    modal.style.display = "flex";
    startgameModal.style.display = "none";
    RestartModal.style.display = "flex";
    return;
  }

  // FOOD CONSUME LOGIC ---->>>>
  if (head.x == food.x && head.y == food.y) {
    Blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    Blocks[`${food.x}-${food.y}`].classList.add("food");
    snack.unshift(head);
    score += 10;
    ScoreElement.innerHTML = score;

    if (score > high_score) {
      high_score = score;
      localStorage.setItem("high_score", high_score.toString());
    }
  }

  snack.forEach((elem) => {
    Blocks[`${elem.x}-${elem.y}`].classList.remove("fill");
  });
  snack.unshift(head);
  snack.pop();

  snack.forEach((elem) => {
    Blocks[`${elem.x}-${elem.y}`].classList.add("fill");
  });
}

startButton.addEventListener("click", function () {
  modal.style.display = "none";
  intervalid = setInterval(() => {
    render();
  }, 500);
  timerIntervalid = setInterval(() => {
    let [min, sec] = time.split("-").map(Number);
    if (sec == 59) {
      min += 1;
      sec = 0;
    } else {
      sec += 1;
    }
    time = `${min}-${sec}`;
    TimeElement.innerHTML = time;
  }, 1000);
});

restartButton.addEventListener("click", restartGame);
function restartGame() {
  Blocks[`${food.x}-${food.y}`].classList.remove("food");
  snack.forEach((elem) => {
    Blocks[`${elem.x}-${elem.y}`].classList.remove("fill");
    score = 0;
    time = "00-00";

    ScoreElement.innerHTML = score;
    TimeElement.innerHTML = time;
    HighScoreElement.innerHTML = high_score;
  });

  modal.style.display = "none";
  direction = "down";
  snack = [
    {
      x: 1,
      y: 3,
    },
  ];
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };
  intervalid = setInterval(() => {
    render();
  }, 300);
}

window.addEventListener("keydown", function (dets) {
  if (dets.key === "ArrowUp") {
    direction = "up";
  } else if (dets.key === "ArrowDown") {
    direction = "down";
  } else if (dets.key === "ArrowLeft") {
    direction = "left";
  } else if (dets.key === "ArrowRight") {
    direction = "right";
  }
});

// block.innerHTML =`${row}-${col}`
