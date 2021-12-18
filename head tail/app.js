let score = 0
let round = prompt("คุณจะเล่นกี่รอบดีครับ ?")
for (var i = 1 ; i <= round ; i++){
    var answer = prompt("คุณจะเลือกหัวหรือก้อย !!!")
    var random_answer = ""
    if((Math.floor(Math.random ()* 10) <= 4)){
    random_answer = "หัว"
    }
    else{
    random_answer = "ก้อย"
    }
    if(answer == random_answer){
    alert("คุณตอบถูก!!")
    score = score + 1
    }
    else{
    alert("คุณตอบผิด!!!")
    }
    document.getElementById("game-list").innerHTML += "รอบที่ " + i +" : " + answer + " : " + random_answer +"<br>" 
}
document.getElementById("result_all").innerHTML = "รวมคะแนน " + score + " คะแนน"