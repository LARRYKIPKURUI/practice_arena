
//Map as a method and map as a function that takes a  callback 

const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];
  
  const newEngineers = oldAccounts.map(function (account) {
    return Object.assign({}, account, { accessLevel: "admin" });
  });

 console.log(oldAccounts); 
 console.log(newEngineers);
