'use strict' 

const post = {
    author: "John", //вывести
    postId: 23,
    comments: [
        {
          userId: 10,
          userName: "Alex",
          text: "lorem ipsum",
          rating: {
            likes: 10,
            dislikes: 2 // вывести
          }
        },
        {
          userId: 5,
          userName: "Jane",
          text: "lorem ipsum 2", //вывести
          rating: {
            likes: 3,
            dislikes: 1
          }
        },
    ]
}

console.log(post.author + ' - author');
console.log(post.comments[0].rating.dislikes + ' - dislikes ');
console.log(post.comments[1].userId + ' - userId');
console.log(post.comments[1].text + ' - text of the comment ');