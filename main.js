let lessons = [[1,2,3,4,5,6],[11,12,13,14,15,16],[21,22,23,24,25,26],[31,32,33,34,35,36],[41,42,43,44,45,46],[51,52,53,54,55,56]];

const allLessons = [
    "現代の国語",//0
    "言語文化",//1
    "数学Ⅰ",//2
    "数学A",//3
    "生物基礎",//4
    "化学基礎",//5
    "英語コミュニケーションⅠ",//6
    "論理・表現Ⅰ",//7
    "音楽Ⅰ",//8
    "情報Ⅰ",//9
    "体育Ⅰ",//10
    "保健Ⅰ",//11
    "公共",//12
    "探求Ⅰ",//13
    "産業社会と人間"//14
]

function onload(){
    mapTables()
}

function mapTables(){
    
    localStorage.setItem("aaa","ssss")

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
    mapTables()
}
