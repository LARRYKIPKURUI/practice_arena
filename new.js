const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];
  
  const newEngineers = map(oldAccounts, function (account) {
    return Object.assign({}, account, { accessLevel: "admin" });
  });
  
  oldAccounts;
  // => [
  //      { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
  //      { userID: 44, title: "Developer Apprentice", accessLevel: "user" }
  //    ]
  
  newEngineers;
  // => [
  //      { userID: 15, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 63, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 97, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 12, title: "Developer Apprentice", accessLevel: "admin" },
  //      { userID: 44, title: "Developer Apprentice", accessLevel: "admin" }
  //    ]