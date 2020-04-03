
let questions = [
    {
      id: 1,
      question: "commonly used data type do not include : ",
      answer: "2. booleans",
      options: [
        "1. strrings",
        "2. booleans",
        "3. alearts",
        "4. numbers"
      ]
    },
    {
      id: 2,
      question: "The condition in an if / else statement is enclosed within ____ .",
      answer: "2. curly brackets",
      options: [
        "1. quotes",
        "2. curly brackets",
        "3. parentheses",
        "4. squrare brackets"
      ]
    },
    {
      id: 3,
      question: "Arrays in JavaScript can be used to store ____ .",
      answer: "1. numbers and strings",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the abouve"
      ]
    },
    {
      id: 4,
      question: "String values must be enclosed within ____ when being assigned to variables.",
      answer: "3. quotes",
      options: [
        "1. commas",
        "2. curly brackets",
        "3. quotes",
        "4. None of these"
      ]
    },
    {
      id: 5,
      question: "What is the full form of E-mail",
      answer: "1. Electronic Mail",
      options: [
        "1. Electronic Mail",
        "2. Electric Mail",
        "3. Engine Mail",
        "4. None of these"
      ]
    }
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  