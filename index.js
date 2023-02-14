var Login_Btn = document.getElementById("login_btn");
var Balance_Page = document.getElementById("Balance-page");
Balance_Page.style.display = "none";
Login_Btn.addEventListener("click", function(){
    var Login_page = document.getElementById("loginPage");
    var Account_No = document.getElementById("AccountNo").value;
    var Password = document.getElementById("Password").value;

    
    if(Account_No==""){
        alert("Account Number is Required");
    }
    else if(Password==""){
        alert("Password is must  be required");
    }
    else{
        Login_page.style.display = "none";
        Balance_Page.style.display = "block";
    }
})


// var Add_Money = document.getElementById("add_money");
// Add_Money.addEventListener("click", function(){
//     // var Deposit_Input = document.getElementById("Deposit_input").value;
//     // var New_Deposit_input = parseFloat(Deposit_Input);
//     var Deposit_Value_Input = document.getElementById("Deposit_input").value;
//     var New_Deposit_Value_Input = parseFloat(Deposit_Value_Input);

//     var Total_Deposit = document.getElementById("total-Deposit").innerHTML;
//     var New_Total_Deposit = parseFloat(Total_Deposit);

//     var Total_deposit_balance = New_Deposit_Value_Input + New_Total_Deposit;
//     document.getElementById("total-Deposit").innerHTML = Total_deposit_balance;

// })

var Add_Money_Btn = document.getElementById("add_money_btn");
Add_Money_Btn.addEventListener("click", function(){

    var Deposit_InputValue = document.getElementById("Deposit_input").value;
    var New_deposit_inputValue = parseFloat(Deposit_InputValue);

    var Total_depositAmount = document.getElementById("total-Deposit").innerHTML;
    var New_Total_depositAmount = parseFloat(Total_depositAmount);

    var Total_Deposit = New_deposit_inputValue + New_Total_depositAmount;
    document.getElementById("total-Deposit").innerHTML = Total_Deposit.toFixed(2);



    var Main_total_balance = document.getElementById("total-Balance").innerHTML;
    var New_main_total_balance = parseFloat(Main_total_balance);

    var Current_total_balance = New_deposit_inputValue + New_main_total_balance;
    document.getElementById("total-Balance").innerHTML = Current_total_balance.toFixed(2);


    var Withdraw_BTN =document.getElementById("withdraw-Btn");
    Withdraw_BTN.addEventListener("click", function(){
        var Withdraw_Amount_input = document.getElementById("withdraw_input").value;
        var New_Withdraw_Amount = parseFloat(Withdraw_Amount_input);

        var Total_Withdraw_Amount = document.getElementById("total_withdraw").innerHTML;
        var New_Total_Withdraw_Amount = parseFloat(Total_Withdraw_Amount);

        var Total_withdraw = New_Withdraw_Amount + New_Total_Withdraw_Amount;
        document.getElementById("total_withdraw").innerHTML = Total_withdraw.toFixed(2);


        var Main_total_balance = document.getElementById("total-Balance").innerHTML;
        var New_main_total_balance = parseFloat(Main_total_balance);

        var Current_Total_Amount = New_main_total_balance - New_Withdraw_Amount;
        document.getElementById("total-Balance").innerHTML = Current_Total_Amount.toFixed(2);


    })


})
