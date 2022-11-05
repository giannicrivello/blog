/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Slaying Dragons",
  description: "A journey of conquering complexity.",
  

  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "./static/profile_header.png",
  avatarClass: "rounded-full",
  author: "An author",
  //support for mathJax
  header:
  <header class="w-full h-90 lt-sm:h-80 bg-cover bg-center bg-no-repeat">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

    <div class = "max-w-screen-sm h-full px-6 mx-auto flex flex-col items-center justify-center">
    <a href="/" class="bg-cover bg-center bg-no-repeat w-25 h-25 border-4 border-white rounded-full" style="background-image: url(./static/profile_header.png);"></a>
    <h1 class="mt-3 text-4xl text-gray-900 dark:text-gray-100 font-bold">Slaying Dragons</h1>
    <p class="text-lg text-gray-600 dark:text-gray-400">A journey of conquering complexity.</p>
    </div>
</header>,
  
  showHeaderOnPostPage: true,

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
