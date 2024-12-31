var posts=["2024/12/31/hello-world/","2024/12/31/Cursor/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };