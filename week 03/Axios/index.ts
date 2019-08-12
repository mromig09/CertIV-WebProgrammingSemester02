import axios from "axios";

interface PostInterface {
    userId: number;
    id: number;
    title: string;
    body: string;
}
var url = "https://jsonplaceholder.typicode.com/posts";

//------long version
axios({
    method: 'get',
    url: url,
    responseType: 'json'
})
.then(function(response){
    var data = response.data;
    for(var i = 0; i < data.length; i++){
        //console.log(data[i]);
        console.log(data[i].title);
        console.log(data[i].id);
        let user: User = new User(data[i].id, data[i].title);
        }
    })

    //-------short version
/*axios.get(url).then(function(response){
    console.log(response);
})*/

class User {
    private id: number;
    private title: string;

    constructor(id: number, title: string){
        this.id = id;
        this.title = title;
    }
}



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






