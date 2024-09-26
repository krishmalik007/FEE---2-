//  Question 3 solution:
// const menu = [
//     "Kadai Paneer",
//     "Dal Makhni",
//     "Masala Dosa",
//     "Chicken Soup",
//     "Chicken Butter Masala",
//     "Veg Chowmein",
//     "Egg Curry",
//     "Egg Maggie",
//     "Chicken Fry",
//     "Chicken Biryani",
//     "Khichdi",
//     "Handi Paneer",
//     "Onion Paratha",
//     "Garlic Naan",
//     "Onion Pizza",
//     "Garlic Bread",
//     "Onion Rings",
//     "Chilli Paneer",
//   ];
  
//   function isVeg(food) {
//     if (
//       food.toLowerCase().includes("chicken") ||
//       food.toLowerCase().includes("egg")
//     ) {
//       return false;
//     }
//     return true;
//   }
//   const vegMenu = menu.filter(isVeg);
//   console.log(vegMenu);
  
  //  Question 2:
  
  // const users = ["Amit", "Ajay", "Mukesh"];
  
  // function getUserWithRandomRewards(users) {
  //   return users.map(function (user, idx) {
  //     return {
  //       id: idx + 1,
  //       name: user,
  //       rewards: Math.floor(Math.random() * 10 + 1),
  //     };
  //   });
  // }
  
  // const userList = getUserWithRandomRewards(users);
  // console.log(users);
  // console.log(userList);
  
  // Question 1:
  // var cart = [
  //   { id: 1, name: "iphone 16", price: 164000, qty: 1 },
  //   { id: 2, name: "iphone 15", price: 84000, qty: 2 },
  // ];
  
  // const totalPrice = cart.reduce(function (sum, item) {
  //   return sum + item.price * item.qty;
  // }, 0);
  // console.log(totalPrice);