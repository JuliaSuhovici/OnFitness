function calc() {
    let A = document.getElementById("age").value;
    let W = document.getElementById("weight").value;
    let H = document.getElementById("height").value;
    let S
    let R

    if (document.getElementById("age").value.length == 0) {
        document.getElementById("ATT").style = "color: red;"
        return
    }

    if (document.getElementById("weight").value.length == 0) {
        document.getElementById("WTT").style = "color: red;"
        return
    }

    if (document.getElementById("height").value.length == 0) {
        document.getElementById("HTT").style = "color: red;"
        return
    }

    if (document.getElementById("male").checked) {
        S =  Math.round((9.99*W)+(6.25*H)-(4.92*A)+5)
    } else if (document.getElementById("female").checked) {
        S =  Math.round((9.99*W)+(6.25*H)-(4.92*A)-161)
    }

    if (document.getElementById("0").selected) {
        R = S*1.2
    }

    if (document.getElementById("1").selected) {
        R = S*1.375
    }
    
    if (document.getElementById("2").selected) {
        R = S*1.46
    }

    if (document.getElementById("3").selected) {
        R = S*1.55
    }
    
    if (document.getElementById("4").selected) {
        R = S*1.64
    }

    if (document.getElementById("5").selected) {
        R = S*1.72
    }

    document.getElementById("ATT").style = "display: none;"
    document.getElementById("HTT").style = "display: none;"
    document.getElementById("WTT").style = "display: none;"

    document.getElementById("a").innerHTML = Math.round(R)

    document.getElementById("b").innerHTML = Math.round(R*0.80)

    document.getElementById("c").innerHTML = Math.round(R*1.20)
    
    document.getElementById("Final").style ="max-width: 400px; margin: auto; margin-bottom:25px;  background-color: #ffffff; box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1); border-radius:3px"
}