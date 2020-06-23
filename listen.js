var customerBirthMonth = document.querySelector('#customerBirthMonthId');
var birthdayCheckBtn = document.querySelector('#checkBirthdayVipOrNotId');
var thisMonth = document.querySelector('#nowMonthId');
var vipLevelResponse = document.querySelector('#responseBirthdayVipId');

// 用 Date 找出現在時間
var today = new Date();
var nowMonth = today.getMonth() + 1;
thisMonth.textContent = nowMonth;

customerBirthMonth.addEventListener('change', checkBirthday, false);
// birthdayCheckBtn.addEventListener('click', checkBirthday, false);
function checkBirthday(e){
    var str = ``;
    if (nowMonth === parseInt(e.target.value)){
        str = `你可以打 8 折`;
        orderNum.discount = 0.8;
    } else {
        str = `你可以打 95 折`;
        orderNum.discount = 0.95;
    }
    vipLevelResponse.textContent = str;
};


var baoNum = document.querySelector('#baoNumId');
var teaNum = document.querySelector('#teaNumId');
var count = document.querySelector('#countId');
var total = document.querySelector('#totalId');
var orderNum = {
    煎包數量: 0,
    紅茶數量: 0,
    discount: 1,
};

baoNum.addEventListener('change', changeNum, false);
teaNum.addEventListener('change', changeNum, false);

// 當停止輸入文字到 input 後，檢查是否有填寫文字
baoNum.addEventListener('blur', checkBlank, false);
teaNum.addEventListener('blur', checkBlank, false);

// 按下計算按鈕後，計算總金額
// count.addEventListener('click', countTotal(orderNum['煎包數量'], orderNum['紅茶數量'], orderNum['discount']), false);
count.addEventListener('click', countTotal, false);
// baoNum.addEventListener('click', justConsole(), false);

function changeNum(e) {
    orderNum[e.target.name] = e.target.value;
    console.log(orderNum)
};

function checkBlank(e) {
    if(e.target.value == ''){
        alert(`需要填寫 ${e.target.name}`);
        console.log(e);
    };
};

function countTotal() {
    var totalCost = (orderNum['煎包數量'] * 50 + orderNum['紅茶數量'] * 30) * orderNum['discount'];
    total.textContent = totalCost;
};

function justConsole(e){
    console.log(e.target)
};