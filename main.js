const lessons = [[1,2,3,4,5,6],[11,12,13,14,15,16],[21,22,23,24,25,26],[31,32,33,34,35,36],[41,42,43,44,45,46],[51,52,53,54,55,56]];

function onload(){
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
        moLessons[i].textContent = getLessons(0,i)
        tuLessons[i].textContent = getLessons(1,i)
        weLessons[i].textContent = getLessons(2,i)
        thLessons[i].textContent = getLessons(3,i)
        frLessons[i].textContent = getLessons(4,i)
        saLessons[i].textContent = getLessons(5,i)
    }
}

function getLessons(day,time){
    return lessons[day][time]
}

function setLessons(day,time,lesson){
    lessons[day][time] = lesson
    mapTables()
    window.localStorage.setItem("aaa","ssss")
}