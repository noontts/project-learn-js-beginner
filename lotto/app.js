document.getElementById("name").innerHTML = prompt("กรุณากรอกชื่อของท่าน :")
//เลขที่ซื้อ
let lotto_user = prompt("กรอกเลขที่ต้องการซื้อ :")
document.getElementById("lotto").innerHTML = lotto_user
//สุ่มเลข
let lotto_number = (Math.floor(Math.random () * 100));
document.getElementById("random").innerHTML = lotto_number

//เงื่อนไข
if(lotto_number == lotto_user){
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกรางวัล!!!"
    alert("ยินดีด้วยคุณถูกรางวัล")
}
else{
    document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล"
    alert("เสียใจด้วยคุณไม่ถูกรางวัล")
}