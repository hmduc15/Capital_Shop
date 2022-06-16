const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
var inputForm = $$("input.form-control");
var placeHolder = $$(".place_holder");
var listOrder = $(".list");
var listMoney = $(".list_2");
var proOrderArr = sessionStorage.getItem("cartArr");
var proOrder = JSON.parse(proOrderArr);
inputForm.forEach((item, index) => {
    item.addEventListener("input", () => {
        if (item.value.length > 0) {
            placeHolder[index].style.display = "none";
        } else {
            placeHolder[index].style.display = "block";
        }
    });
});

function showProduct() {
    var htmlsOdrder = '<li>' +
        '<a href = "#" > Product <span> Total </span></a></li>';
    var htmlsMoney = "";
    var total_money = 0;
    for (let i = 0; i < proOrder.length; i++) {
        var money = parseInt(proOrder[i][2].replace(/\$/g, ''));
        total_money = total_money + money;
        htmlsOdrder +=
            '<li>' +
            '<a href = "#" >' + proOrder[i][1] +
            '<span class = "last" >' + proOrder[i][2] +
            '</span>' +
            ' </a >' + '</li>'

    }
    htmlsMoney += '<li>' +
        '<a href = "#" > SubTotal<span >' + '\44' +
        total_money + '</span> </a></li>' +
        '<li>' +
        '<a href = "#" > Shipping <span class = "last" >' + '\44' + '1 .00 </span> </a> </li>' +
        '<li>' +
        '<a href = "#" > Total<span class = "last" >' + '\44' + parseInt(total_money + 1.00) + ' </span> </a></li>'
    listOrder.innerHTML = htmlsOdrder;
    listMoney.innerHTML = htmlsMoney;
}
showProduct();