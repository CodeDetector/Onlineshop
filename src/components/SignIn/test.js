import firebase from 'firebase'
import 'firebase/firestore'
import {auth} from 'firebase/auth'

const 

const myAsyncFunction=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const users=await response.json();
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        const posts=await fetch('https://jsonplaceholder.typicode.com/posts?userId='+user.id);
        const post=await posts.json();
        console.log(post);
    }
    
}