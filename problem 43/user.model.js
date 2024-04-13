// export const users = [
//   {
//     name: "coding ninjas",
//     email: "ninja@gmail.com",
//     image: "https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg",
//   },
// ];

// export const updateUsers = (user) => {
//   users.push(user);
// };

export default class UserModel {
  constructor(id, name, email, image) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.image = image;
  }

  static getAll() {
    return users;
  }

  static updateUsers(userObj) {
    const index = users.findIndex(
      (p) => p.id == userObj.id
    );
    users[index] = userObj;
  }

  static add(userObj) {
    let newUser = new UserModel(
      users.length + 1,
      userObj.name,
      userObj.email,
      userObj.image
    );
    users.push(newUser);
  }

  static getById(id) {
    return users.find((p) => p.id == id);
  }
}

var users = [
  new UserModel(
    'coding ninjas',
    'ninja@gmail.com',
    'https://entrackr.com/storage/2022/10/Coding-Ninjas.jpg'
  ),
];

