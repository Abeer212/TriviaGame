var card = $("#quiz-area");

var questions = [
  {
    question: "Which baseball player holds the record for most saves?",
    answers: [
      "Craig Kimbrel",
      "Dennis Eckersley",
      "Mariano Rivera",
      "Goose Gossage"
    ],
    correctAnswer: "Mariano Rivera"
  },
  {
    question:
      "Which basketball player has the most 3 pointers in their career?",
    answers: ["Steph Curry", "Ray Allen", "Jason Terry", "Reggie Miller"],
    correctAnswer: "Ray Allen"
  },
  {
    question: "Which NBA team won the most titles in the 90s?",
    answers: [
      "New York Knicks",
      "Portland Trailblazers",
      "Los Angeles Lakers",
      "Chicago Bulls"
    ],
    correctAnswer: "Chicago Bulls"
  },
  {
    question:
      "Which football player has the most rushing yards in their career?",
    answers: ["Emmit Smith", "Frank Gore", "OJ Simpson", "LaDainian Tomlinson"],
    correctAnswer: "Emmit Smith"
  },
  {
    question: "What is the highest grossing film of all time?",
    answers: ["Avengers: End Game", "Titanic", "Ghost Busters", "Avatar"],
    correctAnswer: "Avatar"
  },
  {
    question:
      "Finish this line from Eminems Lose Yourself: 'His palms are sweaty, knees weak, arms are heavy, There's vomit on his sweater already,...'",
    answers: [
      "Mom's Spaghetti",
      "Mom's Rigatoni",
      "Mom's Meatloaf",
      "Mom's Spinning"
    ],
    correctAnswer: "Mom's Spaghetti"
  },
  {
    question: "What was Spongebob's best friend's name?",
    answers: ["Mr. Krabs", "Patrick", "Gary", "Squidward"],
    correctAnswer: "Patrick"
  },
  {
    question: "Who wears number 99 on the New York Yankees",
    answers: [
      "Giancarlo Stanton",
      "Derek Jeter",
      "Alex Rodriguez",
      "Aaron Judge"
    ],
    correctAnswer: "Aaron Judge"
  }
];

var timing;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timing = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            questions[i].answers[j] +
            "''>" +
            questions[i].answers[j]
        );
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timing);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
