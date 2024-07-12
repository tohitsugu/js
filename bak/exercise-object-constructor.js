// Blog post object 
// title 
// body 
// author
// views 
// Comments (author, body)
// isLive (boolean)

const blogPost = {
   title: 'My Blogpost',
   author: 'Ian Spanky',
   body: `This is my first blogpost. it was written by Ian Spanky.
   I hope you enjoy reading!`, 
   views: Math.random(), 
   comments: {
      author: 'Janky Person', 
      body: 'Ur blog sux dick lol!',
   },
   isLive: true
};

const blogPost2 = {
   title: 'My Other Blogpost',
   author: 'Ian Spanky',
   body: `This is my second blogpost. it was written by Ian Spanky.
   I hope you die, Janky!`, 
   views: Math.random(), 
   comments: [
      { author: 'Janky Doo', body: 'lol suc these nuts' },
      { author: 'Janky Doo', body: 'lol ur gay' },
   ],
   isLive: true
};

// function Blogpost(title, author, body, views, [comments], isLive ) {
//    this.title = title;  
//    this.author = author;
//    this.body = body;
//    this.views = views; 
//    this.comments = [
//    {
//       comments,
//       author
//    }];
//    this.isLive = isLive;
// }


function Blogpost(title, author, body) {
   this.title = title;  
   this.author = author;
   this.body = body;
   this.views = 0; 
   this.comments = [];
   this.isLive = false; 
}

let post = new Blogpost('a', 'b', 'c');
console.log(post);

let message1 = { title: 'loser', body: 'tits' };
let message2 = { title: 'loser', body: 'tittysex' };

post.comments.push(message1, message2);


// const third = new Blogpost('Constructor Post', 'Ian Spanky', 'whoo! another post!', Math.random(), [ { author: 'Janky Doo', comment: 'loser' },{ author: 'Ja2nky Doo', comment: 'loser2' }], true );

console.log(blogPost, blogPost2, post);