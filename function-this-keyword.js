// 'this' references the object that is executing 
// the current function

// method (part of object): this -> obj
// function: this -> global (window (browser), global (node))

const video = {
   title: 'a', 
   tags: ['a', 'b', 'c'],
   showTags() {
      this.tags.forEach(function(tag) {
         console.log(this.title, tag); // inside callback function, treated as global function unless add second variable to callback function after curlybraces
   }, this); // this is outside callback function
      console.log(this);
   }
};



video.stop = function() {
   console.log(this);
};

function playVideo() {
   console.log(this);
}

function Video(title) {
   this.title = title;
   console.log(this);
}

const v = new Video('b');

video.stop();
playVideo();

video.showTags();