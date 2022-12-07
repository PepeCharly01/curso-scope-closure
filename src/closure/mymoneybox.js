function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(25);
moneyBoxAna(15);

function createPetList() {
    const petList = [];
    return function (newPet) {
      if (newPet) {
        petList.push(newPet)
      }
      return petList;
    };
  }
  const myPetList = createPetList();
  
  console.log(myPetList("michi"));
  console.log(myPetList("firulais"));
  console.log(myPetList());