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
    


<link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/default.min.css"> </link>
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<script src="highlighter.js"></script>




    <div class = "max-w-screen-sm h-full px-6 mx-auto flex flex-col items-center justify-center">
    <a href="/" class="bg-cover bg-center bg-no-repeat w-25 h-25 border-4 border-white rounded-full" style="background-image: url(./static/profile_header.png);"></a>
    <h1 class="mt-3 text-4xl text-gray-900 dark:text-gray-100 font-bold">Slaying Dragons</h1>
    <p class="text-lg text-gray-600 dark:text-gray-400">A journey of conquering complexity.</p>
    <nav class="mt-3 flex gap-2">
      <a class="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-600/10 dark:bg-gray-400/10 text-gray-700 dark:text-gray-400 hover:bg-gray-600/15 dark:hover:bg-gray-400/15 hover:text-black dark:hover:text-white transition-colors group" href="mailto:gianni.crivello@pcc.edu" rel="" target="_self">
        <svg class="inline-block w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99963 18C8.9063 18 7.87297 17.7899 6.89963 17.3696C5.9263 16.9499 5.07643 16.3765 4.35003 15.6496C3.6231 14.9232 3.04977 14.0733 2.63003 13.1C2.20977 12.1267 1.99963 11.0933 1.99963 10C1.99963 8.89333 2.20977 7.8568 2.63003 6.8904C3.04977 5.92347 3.6231 5.0768 4.35003 4.3504C5.07643 3.62347 5.9263 3.04987 6.89963 2.6296C7.87297 2.20987 8.9063 2 9.99963 2C11.1063 2 12.1428 2.20987 13.1092 2.6296C14.0762 3.04987 14.9228 3.62347 15.6492 4.3504C16.3762 5.0768 16.9495 5.92347 17.3692 6.8904C17.7895 7.8568 17.9996 8.89333 17.9996 10V11.16C17.9996 11.9467 17.7298 12.6165 17.19 13.1696C16.6498 13.7232 15.9863 14 15.1996 14C14.7196 14 14.273 13.8933 13.8596 13.68C13.4463 13.4667 13.1063 13.1867 12.8396 12.84C12.4796 13.2 12.0564 13.4835 11.57 13.6904C11.0831 13.8968 10.5596 14 9.99963 14C8.89297 14 7.94977 13.6099 7.17003 12.8296C6.38977 12.0499 5.99963 11.1067 5.99963 10C5.99963 8.89333 6.38977 7.94987 7.17003 7.1696C7.94977 6.38987 8.89297 6 9.99963 6C11.1063 6 12.0498 6.38987 12.83 7.1696C13.6098 7.94987 13.9996 8.89333 13.9996 10V11.16C13.9996 11.5467 14.1196 11.8499 14.3596 12.0696C14.5996 12.2899 14.8796 12.4 15.1996 12.4C15.5196 12.4 15.7996 12.2899 16.0396 12.0696C16.2796 11.8499 16.3996 11.5467 16.3996 11.16V10C16.3996 8.25333 15.7695 6.74987 14.5092 5.4896C13.2495 4.22987 11.7463 3.6 9.99963 3.6C8.25297 3.6 6.7495 4.22987 5.48923 5.4896C4.2295 6.74987 3.59963 8.25333 3.59963 10C3.59963 11.7467 4.2295 13.2499 5.48923 14.5096C6.7495 15.7699 8.25297 16.4 9.99963 16.4H13.9996V18H9.99963ZM9.99963 12.4C10.6663 12.4 11.233 12.1667 11.6996 11.7C12.1663 11.2333 12.3996 10.6667 12.3996 10C12.3996 9.33333 12.1663 8.76667 11.6996 8.3C11.233 7.83333 10.6663 7.6 9.99963 7.6C9.33297 7.6 8.7663 7.83333 8.29963 8.3C7.83297 8.76667 7.59963 9.33333 7.59963 10C7.59963 10.6667 7.83297 11.2333 8.29963 11.7C8.7663 12.1667 9.33297 12.4 9.99963 12.4Z" fill="currentColor"></path>
        </svg>
        <div class="absolute top-10 px-3 h-8 !leading-8 bg-black/80 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"><span class="block absolute text-black/80" style="top: -4px; left: 50%; margin-left: -4.5px; width: 9px; height: 4px;">
          <svg class="absolute" width="9" height="4" viewBox="0 0 9 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.83564 0.590546C4.21452 0.253758 4.78548 0.253758 5.16436 0.590546L9 4H0L3.83564 0.590546Z" fill="currentColor"></path>
          </svg>
          </span>
          Email
          </div>
          </a>
          <a class="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-600/10 dark:bg-gray-400/10 text-gray-700 dark:text-gray-400 hover:bg-gray-600/15 dark:hover:bg-gray-400/15 hover:text-black dark:hover:text-white transition-colors group" href="https://github.com/giannicrivello" rel="" target="_self">
            <svg class="inline-block w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2C5.58161 2 2 5.67194 2 10.2029C2 13.8265 4.292 16.9015 7.4712 17.9857C7.8712 18.0611 8.01681 17.808 8.01681 17.5902C8.01681 17.3961 8.01042 16.8794 8.00641 16.1956C5.7808 16.6911 5.3112 15.0959 5.3112 15.0959C4.948 14.1476 4.4232 13.8954 4.4232 13.8954C3.69681 13.3876 4.47841 13.3975 4.47841 13.3975C5.28081 13.4548 5.70322 14.2426 5.70322 14.2426C6.41683 15.4955 7.57603 15.1335 8.03122 14.9239C8.10481 14.3941 8.31122 14.033 8.54002 13.8282C6.76402 13.621 4.896 12.9168 4.896 9.77384C4.896 8.87877 5.208 8.14588 5.7192 7.57263C5.6368 7.36544 5.36241 6.531 5.79759 5.40254C5.79759 5.40254 6.46959 5.18143 7.99759 6.24272C8.59777 6.06848 9.28719 5.96782 9.99941 5.96674C10.6794 5.97002 11.364 6.06092 12.0032 6.24272C13.5304 5.18143 14.2008 5.40171 14.2008 5.40171C14.6376 6.53097 14.3624 7.36543 14.2808 7.5726C14.7928 8.14583 15.1032 8.87874 15.1032 9.7738C15.1032 12.9249 13.232 13.6185 11.4504 13.8216C11.7376 14.0747 11.9928 14.575 11.9928 15.3407C11.9928 16.4364 11.9832 17.3216 11.9832 17.5902C11.9832 17.8097 12.1272 18.0652 12.5336 17.9849C15.7378 16.8608 18 13.8039 18 10.2062C18 10.2051 18 10.2039 18 10.2027C18 5.67175 14.4176 2 10 2Z" fill="currentColor"></path></svg><div class="absolute top-10 px-3 h-8 !leading-8 bg-black/80 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"><span class="block absolute text-black/80" style="top: -4px; left: 50%; margin-left: -4.5px; width: 9px; height: 4px;"><svg class="absolute" width="9" height="4" viewBox="0 0 9 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.83564 0.590546C4.21452 0.253758 4.78548 0.253758 5.16436 0.590546L9 4H0L3.83564 0.590546Z" fill="currentColor"></path></svg></span>GitHub</div></a><a class="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-600/10 dark:bg-gray-400/10 text-gray-700 dark:text-gray-400 hover:bg-gray-600/15 dark:hover:bg-gray-400/15 hover:text-black dark:hover:text-white transition-colors group" href="https://twitter.com/giannicrivello" rel="" target="_self"><svg class="inline-block w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0005 5.02869C17.4116 5.29638 16.7768 5.47229 16.119 5.55642C16.7921 5.15106 17.3122 4.50861 17.5569 3.73615C16.9221 4.11856 16.2185 4.38624 15.4766 4.53921C14.8724 3.88146 14.0234 3.49905 13.0598 3.49905C11.2624 3.49905 9.79399 4.96751 9.79399 6.78013C9.79399 7.04016 9.82458 7.29255 9.87812 7.52965C7.15536 7.39198 4.73089 6.08414 3.11712 4.10326C2.83414 4.5851 2.67353 5.15106 2.67353 5.74762C2.67353 6.8872 3.24714 7.89676 4.13433 8.47037C3.59131 8.47037 3.08653 8.31741 2.64294 8.08797V8.11091C2.64294 9.70173 3.77487 11.0325 5.27391 11.3308C4.79263 11.4625 4.28737 11.4808 3.79781 11.3843C4.00554 12.0363 4.41237 12.6068 4.96111 13.0156C5.50985 13.4244 6.17291 13.651 6.85709 13.6635C5.69734 14.5816 4.25976 15.0779 2.7806 15.0708C2.52056 15.0708 2.26053 15.0555 2.00049 15.0249C3.45364 15.9579 5.18213 16.501 7.03299 16.501C13.0598 16.501 16.3714 11.4991 16.3714 7.16253C16.3714 7.01722 16.3714 6.87955 16.3638 6.73424C17.0062 6.27534 17.5569 5.69408 18.0005 5.02869Z" fill="currentColor"></path></svg><div class="absolute top-10 px-3 h-8 !leading-8 bg-black/80 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"><span class="block absolute text-black/80" style="top: -4px; left: 50%; margin-left: -4.5px; width: 9px; height: 4px;"><svg class="absolute" width="9" height="4" viewBox="0 0 9 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.83564 0.590546C4.21452 0.253758 4.78548 0.253758 5.16436 0.590546L9 4H0L3.83564 0.590546Z" fill="currentColor"></path></svg></span>Twitter</div></a></nav>
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
