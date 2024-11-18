let lessons = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];

const allLessons = [
    "NULL",//0
    "現代の国語",//1
    "言語文化",//2
    "数学Ⅰ",//3
    "数学A",//4
    "生物基礎",//5
    "化学基礎",//6
    "英語コミュニケーションⅠ",//7
    "論理・表現Ⅰ",//8
    "音楽Ⅰ",//9
    "情報Ⅰ",//10
    "体育Ⅰ",//11
    "保健Ⅰ",//12
    "公共",//13
    "探求Ⅰ",//14
    "産業社会と人間"//15
]

function onload(){
    
    lessons[0] = localStorage.getItem("monday").split(",")
    lessons[1] = localStorage.getItem("tuesday").split(",")
    lessons[2] = localStorage.getItem("wednesday").split(",")
    lessons[3] = localStorage.getItem("thursday").split(",")
    lessons[4] = localStorage.getItem("friday").split(",")
    lessons[5] = localStorage.getItem("saturday").split(",")
    
    mapTables()
}

function mapTables(){

    const monday = document.getElementsByClassName("monday")
    const tuesday = document.getElementsByClassName("tuesday")
    const wednesday = document.getElementsByClassName("wednesday")
    const thursday = document.getElementsByClassName("thursday")
    const friday = document.getElementsByClassName("friday")
    const saturday = document.getElementsByClassName("saturday")

    const moLessons = Array.from(monday)
    const tuLessons = Array.from(tuesday)
    const weLessons = Array.from(wednesday)
    const thLessons = Array.from(thursday)
    const frLessons = Array.from(friday)
    const saLessons = Array.from(saturday)

    for(let i = 0; i < 6;i++){
        moLessons[i].textContent = allLessons[getLessons(0,i)]
        tuLessons[i].textContent = allLessons[getLessons(1,i)]
        weLessons[i].textContent = allLessons[getLessons(2,i)]
        thLessons[i].textContent = allLessons[getLessons(3,i)]
        frLessons[i].textContent = allLessons[getLessons(4,i)]
        saLessons[i].textContent = allLessons[getLessons(5,i)]
    }
}

function getLessons(day,time){
    return lessons[day][time]
}

function setLessons(day,time,lesson){
    lessons[day][time] = lesson

    localStorage.setItem("monday",lessons[0])
    localStorage.setItem("tuesday",lessons[1])
    localStorage.setItem("wednesday",lessons[2])
    localStorage.setItem("thursday",lessons[3])
    localStorage.setItem("friday",lessons[4])
    localStorage.setItem("saturday",lessons[5])

    mapTables()
}

function registerSchedule(){
    const day = parseInt(document.getElementById("selectionDay").value)
    const time = parseInt(document.getElementById("selectionTime").value)
    const lesson = parseInt(document.getElementById("selectionLesson").value)

    setLessons(day,time,lesson)

    if(document.getElementById("selectionTime").value == "5"){
        document.getElementById("selectionTime").value = "0"
        document.getElementById("selectionDay").value = String(parseInt(document.getElementById("selectionDay").value) + 1);
    }else{
        document.getElementById("selectionTime").value = String(parseInt(document.getElementById("selectionTime").value) + 1);
    }

    //5の次は6じゃない
}