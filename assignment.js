




// Problem-1: kilometerToMeter
function kilometerToMeter(meter) {
  if (meter >= 0) {
    var kilometer = 1000 * meter;

    return kilometer;
  }
  else {
    return "distance cannot be negative";
  }
}

var myMeter = kilometerToMeter(0);
console.log(myMeter);



// Problem-2: budgetCalculator
function budgetCalculator(watch, phone, laptop) {
  var watchCost = watch * 50;
  var PhoneCost = phone * 100;
  var laptopCost = laptop * 500;
  var totalCost = watchCost + PhoneCost + laptopCost;
  return totalCost;
}

var MybudgetCalculator = budgetCalculator(2, 1, 1);
console.log(MybudgetCalculator);




// Problem-3: hotelCost
function hotelCost(totalDays) {
  totalCost = 0;
  if (totalDays <= 10) {
    var totalCost = totalDays * 100;
    return totalCost;
  }

  else if (totalDays <= 20) {
    var firstTenDays = 10 * 100;
    var remainingDays = totalDays - 10;
    var secondTenDays = remainingDays * 80;
    var totalCost = firstTenDays + secondTenDays;
    return totalCost;

  }
  else {
    var firstTenDays = 10 * 100;
    var secondTenDays = 10 * 80;
    var remainingDays = totalDays - 20;
    var finalDays = remainingDays * 50;
    var totalCost = firstTenDays + secondTenDays + finalDays;
    return totalCost;
  }
}

var myHotelCost = hotelCost(21);
console.log(myHotelCost);






// Problem-4:megaFriend
function megaFriend(friendsName) {
  var friendsNameLength = 0;
  var longestFriendName;

  for (var i = 0; i < friendsName.length; i++) {
    if (friendsName[i].length > friendsNameLength) {
      var friendsNameLength = friendsName[i].length;
      longestFriendName = friendsName[i];

    }
  }
  return longestFriendName;
}

var friendsName = ['Minhaz', 'Sadman', 'Anik', 'Rahat'];
var myMegaFriend = megaFriend(friendsName);
console.log(myMegaFriend);





