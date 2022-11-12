
function logOut() {
    localStorage.setItem("count", "0")
    window.location.href = `../../index.html`
}

var quiz_obj = [
   
    // Islamic Sociology Quiz Object
    [
        {
            question: "The basic Muslim belief in the oneness of God",
            opt1: "Masjid",
            opt2: "jihad",
            opt3: "Risalah",
            opt4: "Tawhid",
            answer: "Tawhid",
        },
        {
            question: " Meaning to 'strive', _______ is the daily and physical struggle to live as a Muslim and defend the faith",
            opt1: "Masjid",
            opt2: "jihad",
            opt3: "Risalah",
            opt4: "Tawhid",
            answer: "jihad",
        },
        {
            question: "Muslims believe that Islam started with the Prophet ______",
            opt1: "Ibrahim (Abraham)",
            opt2: "Muse (Moses)",
            opt3: "Adam",
            opt4: "Mohammad",
            answer: "Adam",
        },
        {
            question: "The word Islam means...",
            opt1: "Passivism",
            opt2: "Respect",
            opt3: "Rebellion",
            opt4: "Submission",
            answer: "Submission",
        },
        {
            question: "______________ is also known as the Seal of the Prophets",
            opt1: "Isa",
            opt2: "Musa",
            opt3: "Muhammad",
            opt4: "Ibrahim",
            answer: "Muhammad",
        },
        {
            question: "Which Prophet is believed to have led the Israelites out of Egypt (originally celebrated on the festival of Ashura)",
            opt1: "Isa",
            opt2: "Musa",
            opt3: "Muhammad",
            opt4: "Ibrahim",
            answer: "Musa",
        },
        {
            question: "How was Allah revealed to the humanity?",
            opt1: "Muhammad was told everything and he told everyone",
            opt2: "Gradually, through various prophets",
            opt3: "People woke up one day and knew",
            opt4: "Adam knew everything, and passed it on",
            answer: "Gradually, through various prophets",
        },
        {
            question: "The Six Articles of Faith in Islam are...",
            opt1: "Angels, Authority of the Holy Books, Tawhid, The Prophets, Supremacy of God's will and Day of Judgement",
            opt2: "Love, Peace, Patience, Kindness, Goodness and Faithfulness",
            opt3: "Dukkha, Tanha, Anicca, Anatta, Metta and Karma",
            opt4: "Tawhid, Prophethood, The Justice of God, The Imamate, Resurrection and Angels",
            answer: "Angels, Authority of the Holy Books, Tawhid, The Prophets, Supremacy of God's will and Day of Judgement",
        },
        {
            question: "Muhammad is a...",
            opt1: "God, and should be worshipped",
            opt2: "God, but shouldn't be worshipped",
            opt3: "Prophet, and shouldn't be worshipped",
            opt4: "Prophet, and should be worshipped",
            answer: "Prophet, and should be worshipped",
        },
        {
            question: "What are the Sunnah?",
            opt1: "A group of Muslims, who believe in the Imamate",
            opt2: "The actions of all Muslims",
            opt3: "The teachings of Allah",
            opt4: "The teachings and deeds of Muhammad",
            answer: "The teachings and deeds of Muhammad",
        },
    ],
]

var scoreList = [JSON.parse(localStorage.getItem("score"))[0],]
var count = 1;
score = 0;
score_match = "";
var selected_input_value = "";
var index_number = 0;
function input_selected() {
    selected_input_value = document.getElementsByName("options");
    for (i = 0; i < 4; i++) {
        if (selected_input_value[i].checked) {
            score_match = i;
            document.getElementsByClassName("next_btn")[0].removeAttribute("disabled")
        }
    }
}

function adding_score() {
    if (selected_input_value[score_match].value === quiz_obj[index_number][count - 1].answer) {
        score = score + 1;
    }
}

function next_btn() {
    if (quiz_obj[index_number][count].question === quiz_obj[index_number].slice(-1)[0].question) {
        if (selected_input_value[score_match].value === quiz_obj[index_number][count - 1].answer) {
            score = score + 1;
        }
        document.getElementsByClassName("next_btn")[0].innerHTML = "Submit";
        document.getElementsByClassName("next_btn")[0].setAttribute("onclick", "result()")
    }
    document.getElementsByClassName("question_count")[0].innerHTML = `Question ${count + 1} of ${quiz_obj[index_number].length} :`;
    document.getElementsByClassName("question")[0].innerHTML = quiz_obj[index_number][count].question;
    document.getElementsByClassName("opt_div")[0].innerHTML = quiz_obj[index_number][count].opt1;
    document.getElementsByClassName("opt_div")[1].innerHTML = quiz_obj[index_number][count].opt2;
    document.getElementsByClassName("opt_div")[2].innerHTML = quiz_obj[index_number][count].opt3;
    document.getElementsByClassName("opt_div")[3].innerHTML = quiz_obj[index_number][count].opt4;
    document.getElementsByClassName("next_btn")[0].setAttribute("disabled", "")
    document.getElementById(`opt1`).value = quiz_obj[index_number][count].opt1;
    document.getElementById(`opt2`).value = quiz_obj[index_number][count].opt2;
    document.getElementById(`opt3`).value = quiz_obj[index_number][count].opt3;
    document.getElementById(`opt4`).value = quiz_obj[index_number][count].opt4;
    selected_input_value[4].setAttribute("checked", "")
    selected_input_value[4].removeAttribute("checked")
    selected_input_value = "";
    count = count + 1;
}

var screen_size = document.getElementsByClassName("hidden_box")[0];

function screen_change() {
    screen_size.requestFullscreen();
   
}
function result() {
    
    scoreList.splice(index_number, 1, score);
    localStorage.setItem("score", JSON.stringify(scoreList));
    localStorage.setItem("index", index_number);
    window.location.href = "result/result.html";
}

var original_screen_size = screen.availHeight;

function continueBtn(quiz_name, index) {

    document.getElementsByClassName("hidden_box")[0].style.display = "grid";
    screen_change();
    window.onblur = function () {
        window.location.href = "../exam_sub.html";
    }

    index_number = index;
    var timer_min = 10;
    var timer_sec = 30;

    setInterval(function () {
        if (localStorage.getItem("screen_size") === screen.availHeight) {
            window.location.href = "../exam_sub.html";
        }
        ""
        if (timer_min === 0 && timer_sec === 0) {
            localStorage.setItem("score", score);
            window.location.href = "result/result.html";
            timer_sec = timer_sec + 1;
        } else if (timer_sec === 0) {
            timer_sec = 60;
            timer_min = timer_min - 1;
        }
        timer_sec = timer_sec - 1;
        document.getElementsByClassName("timer")[0].innerHTML = timer_min + ":" + timer_sec;
    }, 1000)
  
    document.getElementsByClassName("quiz_start_box")[0].innerHTML = `
    <div class="quiz_header">
    <span class="header_span">
        <h1 class="quiz_heading">${quiz_name} Quiz</h1>
        <h4 class="question_count">Question ${count} of ${quiz_obj[index_number].length} :</h4>
        <h5 class="question">${quiz_obj[index_number][0].question}</h5>
    </span>
    <span class="timer"></span>
</div>
<div onchange="input_selected()" class="options_input">
    <label class="label_for_inputs" for="opt1">
        <input value="${quiz_obj[index_number][0].opt1}" type="radio" name="options" id="opt1">
        <p class="opt_div">${quiz_obj[index_number][0].opt1}</p>
    </label>
    <label class="label_for_inputs" for="opt2">
        <input value="${quiz_obj[index_number][0].opt2}" type="radio" name="options" id="opt2">
        <p class="opt_div">${quiz_obj[index_number][0].opt2}</p>
    </label>
    <label class="label_for_inputs" for="opt3">
        <input value="${quiz_obj[index_number][0].opt3}" type="radio" name="options" id="opt3">
        <p class="opt_div">${quiz_obj[index_number][0].opt3}</p>
    </label>
    <label class="label_for_inputs" for="opt4">
        <input value="${quiz_obj[index_number][0].opt4}" type="radio" name="options" id="opt4">
        <p class="opt_div">${quiz_obj[index_number][0].opt4}</p>
    </label>
</div>
<button disabled onclick="adding_score();next_btn()" class="next_btn">Next</button>
<input value="script" type="radio" class="hidden" name="options" id="opt5">
    `
}

