function SetUsername(username) {
    // Complex DB Calls
    this.username = username;
    console.log("called");
  }
  
  function createUser(username, email, password) {
    SetUsername.call(this, username); // <-- Important line
    this.email = email;
    this.password = password;
  }
  
  const one = new createUser("adarsh", "chat@ji.com", "123456789");
  console.log(one);


//   call() ek JavaScript method hai jo kisi function ko kisi aur this ke context mein manually call karta hai.
//for ex:-
// SetUsername.call(this, username)
// Yahan SetUsername function ko call kiya gaya hai, lekin this keyword ka reference diya gaya hai createUser function ka.
// Matlab, jab tu SetUsername function ko call karta hai, toh wo createUser ke object (this) ke context mein chale jaata hai.

// Matlab: SetUsername ke andar this.username = username ab createUser ke this pe apply hoga.


// Normally agar tu bas SetUsername(username) likhta toh wo SetUsername ke apne this pe kaam karta (global ya undefined depending on mode), par tu ne call(this) use kiya — jisse createUser ke object (this) mein hi username set ho gaya.
