let arr = [];
// functions

function getVal(id) {
    const cnt = parseInt(document.getElementById(id).innerText);
    return cnt;
}
function setVal(id, val) {
    document.getElementById(id).innerText = val;

}

function call(e) {

    //doing even delegation thanks to jhankar and sumit bhai!!
    if (e.target.matches("button") || e.target.matches("i")) {

        // console.log(e.target.parentElement.innerText);
        // console.log(e.target)
        if (e.target.innerText === "Call" || e.target.matches(".fa-phone")) {
            let serviceType, serviceNum;
            if (e.target.innerText === "Call") {
                serviceType = e.target.parentElement.parentElement.children[2].innerText;
                serviceNum = e.target.parentElement.parentElement.children[3].innerText;

                //   console.log(serviceType,serviceNum)
            }
            else {
                serviceType = e.target.parentElement.parentElement.parentElement.children[2].innerText;
                serviceNum = e.target.parentElement.parentElement.parentElement.children[3].innerText;
            }
            let coin_cnt = getVal("coin_cnt");

            coin_cnt -= 20;
            if (coin_cnt < 0) {
                alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
            }
            else {
                alert("📞 Calling " + serviceType + " " + serviceNum);
                setVal("coin_cnt", coin_cnt);
                let obj = {
                    service: serviceType,
                    num: serviceNum,
                    time: new Date().toLocaleTimeString()
                }
                arr.push(obj);
                addHistory = document.getElementById('historyContainer');

                addHistory.innerText = "";
                for (let el of arr) {
                    let div = document.createElement("div");
                    div.innerHTML = `
    <div class="flex justify-between mt-5 drop-shadow-xxl bg-[#FAFAFA]  rounded-2xl p-3 ">
    <div>
        <p>${el.service}</p>
    <p class="text-[#5C5C5C]">${el.num}</p>
    </div>
    <p>${el.time}</p>
  </div> 
    `
                    addHistory.appendChild(div);
                }
                coin_cnt = 0;

            }

        }
        else if (e.target.innerText === "Copy" || e.target.matches(".fa-copy")) {
            //copy button
            let serviceNum;
            if (e.target.innerText === "Copy") serviceNum = e.target.parentElement.parentElement.children[3].innerText;
            else serviceNum = e.target.parentElement.parentElement.parentElement.children[3].innerText;
            navigator.clipboard.writeText(serviceNum);
            alert("নম্বর কপি হয়েছে "+serviceNum);
            let cpy_cnt = getVal("copy_cnt");
            cpy_cnt += 1;
            setVal("copy_cnt", cpy_cnt);
            cpy_cnt = 0;

        }
    }
}


function fun(card) {
    document.getElementById(card).addEventListener('click',
        function (e) {
            call(e);
        }
    )
}



let buttons = document.getElementsByClassName('love-btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let x = getVal("love_cnt");
        x += 1;
        setVal('love_cnt', x);

    });
}

//call button
fun("national");
fun("police");
fun("fire");
fun("ambulance");
fun("women");
fun("corruption");
fun("electricity");
fun("brac");
fun("railway");

document.getElementById('clear').addEventListener('click',
    function () {
        document.getElementById('historyContainer').innerText = "";
        arr = [];
    }
)



