/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Slaying Dragons",
  description: "A journey of conquering complexity.",
  
  //support for mathJax
  header: <header><script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script><script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script></header>,
  showHeaderOnPostPage: true,

  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  author: "An author",

  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
