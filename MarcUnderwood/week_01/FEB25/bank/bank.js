//Bank
// this is almost completely procedural.

var Bank = [{}];

var openNewAc = function(ACnum, Name, balance) {
    var newAC = {ACnum, Name, balance};
    Bank.push(newAC);
};

var getBal = function(ac,name) {
  for (var i = 0; i < Bank.length; i++) {
    if ((Bank[i].ACnum === ac) && (Bank[i].Name === name)) {
        console.log("Account: " + Bank[i].ACnum + ", Name: " + Bank[i].Name
               + " Balance: " + Bank[i].balance);
         return Bank[i].balance;
    }
  }
};

var deposit = function(ac,name,amount) {
  if (amount <= 0) {
    console.log("cannot deposit zero or a negative amount");
    return
  }
  for (var i = 0; i < Bank.length; i++) {
    if ((Bank[i].ACnum === ac) && (Bank[i].Name === name)) {
      Bank[i].balance += amount;
      console.log("deposit successful. Present balance: ");
      console.log("Account: " + Bank[i].ACnum + ", Name: " + Bank[i].Name
             + " Balance: " + Bank[i].balance);
    }
  }
};

var withD = function(ac,name,amount) {
  funds = getBal(ac,name);
  if ((funds - amount) <= 0) {
    console.log("insufficient funds: balance is " + funds +
                " .Withdrawl amount requested = " + amount);
    return;
  }
  for (var i = 0; i < Bank.length; i++) {
    if ((Bank[i].ACnum === ac) && (Bank[i].Name === name)) {
      Bank[i].balance -= amount;
      console.log("withdrawl successful. Present balance: ");
      console.log("Account: " + Bank[i].ACnum + ", Name: " + Bank[i].Name
             + " Balance: " + Bank[i].balance);
    }
  }
};

var Transfer = function(acDb,nameDb,acCr,nameCr,amount){
  funds = getBal(acDb,nameDb);
  if ((funds - amount) <= 0) {
    console.log("insufficient funds in acct#: " + acDb
              + " .Balance is " + funds +
                " .Withdrawl amount requested = " + amount);
    return;
  }
  deposit(acCr,nameCr,amount);
  withD(acDb,nameDb,amount);
}


Bank.pop();
openNewAc(1,"jack",1000);
openNewAc(2,"jill",10000);
openNewAc(666,"marc",1000000000);
console.log(Bank);
console.log(getBal(666,"marc"));
console.log(deposit(1,"jack",500));
console.log(getBal(1,"jack"));
console.log(withD(2,"jill",250));
console.log(withD(1,"jack",20000));
console.log(Transfer(666,"marc",2,"jill",50000));
