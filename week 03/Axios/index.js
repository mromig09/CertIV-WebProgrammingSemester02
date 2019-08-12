"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/posts";
//------long version
axios_1["default"]({
    method: 'get',
    url: url,
    responseType: 'json'
})
    .then(function (response) {
    var data = response.data;
    for (var i = 0; i < data.length; i++) {
        //console.log(data[i]);
        console.log(data[i].title);
        console.log(data[i].id);
        var user = new User(data[i].id, data[i].title);
    }
});
//-------short version
/*axios.get(url).then(function(response){
    console.log(response);
})*/
var User = /** @class */ (function () {
    function User(id, title) {
        this.id = id;
        this.title = title;
    }
    return User;
}());
// axios.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users')
// .then((res) => {
//     var data = res.data;
//     var userArr: UserInterface[] = [];
//     for(var i = 0; i < data.length; i++) {
//        let _id = data[i].id;
//        let _username = data[i].username;
//        userArr.push({id: id, username: username});
//     }
//     for(var i = 0; i < userArr.length; i++) {
//         console.log(userArr[i].id);
//     }
// })
// interface UserInterface {
//     let user1: User = new User(100, "yeet");
// }
//let user1: User = new User(100,"yeet");
