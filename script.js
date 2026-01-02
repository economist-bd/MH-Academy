// ৫০টি চ্যাপ্টারের ডাটাবেজ (স্যাম্পল)
const chaptersDB = [
    {
        id: 1,
        title: "অধ্যায় ১: ওয়েব দুনিয়ায় স্বাগতম (HTML পরিচিতি)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                ওয়েব ডেভেলপমেন্ট শেখার এই রোমাঞ্চকর যাত্রায় আপনাকে স্বাগতম! একজন স্থপতি যেমন ইটের পর ইট গেঁথে একটি দালান তৈরি করেন, ঠিক তেমনি একজন ওয়েব ডেভেলপার কোড লিখে একটি ওয়েবসাইট তৈরি করেন। আর এই দালান তৈরির প্রথম ইট বা ভিত্তি হলো <strong>HTML</strong>।</p>
                
                <h3 style="color: var(--primary); margin-top: 20px;">HTML আসলে কী?</h3>
                <p>HTML-এর পূর্ণরূপ হলো <strong>HyperText Markup Language</strong>। এটি কোনো প্রোগ্রামিং ল্যাঙ্গুয়েজ নয়, এটি একটি মার্কআপ ল্যাঙ্গুয়েজ।</p>
                
                <ul style="margin-left: 20px; list-style-type: disc; margin-top: 10px;">
                    <li><strong>কঙ্কাল বা হাড়ের কাঠামো:</strong> এটি দেহকে দাঁড়িয়ে থাকতে সাহায্য করে (HTML)।</li>
                    <li><strong>চামড়া, রং ও সৌন্দর্য:</strong> মানুষটি দেখতে কেমন হবে তা নির্ধারণ করে (CSS)।</li>
                    <li><strong>বুদ্ধিমত্তা:</strong> মানুষটি হাঁটবে বা কথা বলবে কিনা তা ঠিক করে (JavaScript)।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">আপনার প্রথম কোড (Boilerplate)</h3>
                <p>নিচে একটি ওয়েবসাইটের মৌলিক কাঠামো দেওয়া হলো। একে বলা হয় বয়লারপ্লেট (Boilerplate)।</p>

                <div class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;আমার প্রথম পেজ&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;স্বাগতম ওয়েব দুনিয়ায়!&lt;/h1&gt;
    &lt;p&gt;আমি আজ থেকে একজন ওয়েব ডেভেলপার।&lt;/p&gt;
    &lt;button&gt;ক্লিক করুন&lt;/button&gt;
  &lt;/body&gt;
&lt;/html&gt;
                </div>

                <h4>আউটপুট (Output):</h4>
                <div class="output-box">
                    <h1>স্বাগতম ওয়েব দুনিয়ায়!</h1>
                    <p>আমি আজ থেকে একজন ওয়েব ডেভেলপার।</p>
                    <button style="padding: 5px 10px;">ক্লিক করুন</button>
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">কোড বিশ্লেষণ</h3>
                <p>
                    ১. <code>&lt;!DOCTYPE html&gt;</code>: ব্রাউজারকে জানায় এটি আধুনিক HTML5।<br>
                    ২. <code>&lt;head&gt;</code>: ওয়েবসাইটের মস্তিষ্ক (SEO, Title)।<br>
                    ৩. <code>&lt;body&gt;</code>: ওয়েবসাইটের দৃশ্যমান শরীর।
                </p>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #1 (অনুশীলন):</strong><br>
                    "Act as an expert web developer. Explain the difference between HTML Head and Body tags with a real-life analogy for a 10-year-old student."
                </div>
            </div>
        `
    },
    {
        id: 2,
        title: "অধ্যায় ২: স্টাইলিং এর জাদু (CSS পরিচিতি)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আগের অধ্যায়ে আমরা HTML দিয়ে ওয়েবসাইটের কঙ্কাল তৈরি করেছি। কিন্তু শুধু কঙ্কাল দেখতে কি ভালো লাগে? একদম না! একে সুন্দর করতে হলে আমাদের দরকার রং, স্টাইল এবং সাজসজ্জা। ওয়েব ডিজাইনের জগতে এই জাদুর কাঠিটি হলো <strong>CSS (Cascading Style Sheets)</strong>।</p>

                <h3 style="color: var(--primary); margin-top: 20px;">CSS কিভাবে কাজ করে?</h3>
                <p>CSS মূলত HTML কে বলে দেয় যে তাকে স্ক্রিনে কেমন দেখাতে হবে। এর গঠন বা সিনট্যাক্স (Syntax) খুব সহজ। এর তিনটি প্রধান অংশ থাকে:</p>
                
                

                <ul style="margin-left: 20px; margin-top: 10px;">
                    <li><strong>১. সিলেক্টর (Selector):</strong> কাকে ডিজাইন করবেন? (যেমন: h1, p, body)</li>
                    <li><strong>২. প্রপার্টি (Property):</strong> কি পরিবর্তন করবেন? (যেমন: color, font-size)</li>
                    <li><strong>৩. ভ্যালু (Value):</strong> কতটুকু বা কি রং হবে? (যেমন: red, 20px)</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">ম্যাজিক কোড ডেমো</h3>
                <p>নিচে দেখুন কিভাবে সাধারণ একটি লেখাকে CSS দিয়ে আকর্ষণীয় কার্ডে রূপান্তর করা যায়।</p>

                <div class="code-block">
&lt;style&gt;
  /* এই অংশটি CSS */
  .magic-card {
      background-color: #2c3e50; /* ব্যাকগ্রাউন্ড কালার */
      color: #ecf0f1;           /* লেখার কালার */
      padding: 20px;            /* ভেতরের জায়গা */
      border-radius: 15px;      /* কোণা গোল করা */
      text-align: center;       /* লেখা মাঝখানে আনা */
      border: 2px solid #00e5ff; /* বর্ডার */
      box-shadow: 0 5px 15px rgba(0,0,0,0.5); /* ছায়া */
  }
&lt;/style&gt;

&lt;!-- এই অংশটি HTML --&gt;
&lt;div class="magic-card"&gt;
  &lt;h2&gt;CSS এর জাদু!&lt;/h2&gt;
  &lt;p&gt;আমি এখন দেখতে অনেক আধুনিক এবং সুন্দর।&lt;/p&gt;
&lt;/div&gt;
                </div>

                <h4>আউটপুট (Output):</h4>
                <div class="output-box" style="background: transparent; border: none; padding: 0;">
                    <div style="background-color: #2c3e50; color: #ecf0f1; padding: 20px; border-radius: 15px; text-align: center; border: 2px solid #00e5ff; box-shadow: 0 5px 15px rgba(0,0,0,0.5); max-width: 300px; margin: 0 auto;">
                        <h2 style="margin: 0 0 10px 0;">CSS এর জাদু!</h2>
                        <p style="margin: 0;">আমি এখন দেখতে অনেক আধুনিক এবং সুন্দর।</p>
                    </div>
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">প্যাডিং বনাম মার্জিন (খুব গুরুত্বপূর্ণ)</h3>
                <p>নতুনরা প্রায়ই এই দুটির মধ্যে গুলিয়ে ফেলে:</p>
                <ul style="margin-left: 20px; list-style-type: square;">
                    <li><strong>প্যাডিং (Padding):</strong> বর্ডারের <em>ভেতরের</em> জায়গা। (নিজে মোটা হওয়া)।</li>
                    <li><strong>মার্জিন (Margin):</strong> বর্ডারের <em>বাইরের</em> জায়গা। (অন্যদের থেকে দূরে সরে যাওয়া)।</li>
                </ul>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #2 (অনুশীলন):</strong><br>
                    "Write CSS code to style a 'Subscribe' button. It should have a red background, white text, rounded corners, and change color when the mouse hovers over it."
                </div>
            </div>
        `
    },
    {
        id: 3,
        title: "অধ্যায় ৩: ওয়েব পেজের প্রাণ (JavaScript পরিচিতি)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আমরা কঙ্কাল (HTML) বানালাম, সাজসজ্জা (CSS) করলাম, কিন্তু আমাদের ওয়েবসাইটটি এখনো "মৃত"। এটি নড়াচড়া করতে পারে না, কথা বলতে পারে না। ওয়েবসাইটের শরীরে প্রাণ দেওয়ার কাজটি করে <strong>JavaScript (JS)</strong>। এটি ওয়েবসাইটের মস্তিষ্ক বা বুদ্ধিমত্তা।</p>

                <h3 style="color: var(--primary); margin-top: 20px;">জাভাস্ক্রিপ্ট কি করতে পারে?</h3>
                <ul style="margin-left: 20px; list-style-type: disc; margin-top: 10px;">
                    <li>বাটনে ক্লিক করলে কিছু ঘটাবে।</li>
                    <li>ঘড়ির সময় দেখাবে এবং আপডেট করবে।</li>
                    <li>ফর্ম ফিলাপ ভুল হলে সতর্ক করবে।</li>
                    <li>সার্ভার থেকে ডাটা এনে দেখাবে।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">আপনার প্রথম স্ক্রিপ্ট (ম্যাজিক দেখুন)</h3>
                <p>নিচে একটি সাধারণ উদাহরণ দেওয়া হলো। এখানে বাটনে ক্লিক করলে লেখার রং এবং টেক্সট বদলে যাবে।</p>

                <div class="code-block">
&lt;p id="myText"&gt;আমি এখন সাধারণ টেক্সট।&lt;/p&gt;

&lt;button onclick="doMagic()"&gt;জাদু দেখুন&lt;/button&gt;

&lt;script&gt;
  function doMagic() {
      // ১. এলিমেন্টটি খুঁজে বের করা
      var text = document.getElementById("myText");
      
      // ২. স্টাইল এবং লেখা পরিবর্তন করা
      text.style.color = "#00e5ff";
      text.style.fontSize = "20px";
      text.innerText = "ওহ! আমি জাভাস্ক্রিপ্ট দিয়ে বদলে গেলাম!";
  }
&lt;/script&gt;
                </div>

                <h4>আউটপুট (Output):</h4>
                <div class="output-box" style="text-align: center;">
                    <p id="demo-text" style="font-size: 16px; transition: 0.3s;">আমি এখন সাধারণ টেক্সট।</p>
                    <button onclick="document.getElementById('demo-text').innerText = 'ওহ! আমি জাভাস্ক্রিপ্ট দিয়ে বদলে গেলাম!'; document.getElementById('demo-text').style.color = 'red'; document.getElementById('demo-text').style.fontWeight = 'bold';" style="padding: 8px 15px; background: var(--secondary); color: white; border: none; border-radius: 4px; cursor: pointer;">জাদু দেখুন</button>
                    <p style="font-size: 12px; color: #666; margin-top: 5px;">(বাটনটিতে ক্লিক করে দেখুন)</p>
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">ভেরিয়েবল (Variable) - তথ্যের পাত্র</h3>
                <p>জাভাস্ক্রিপ্টে কোনো তথ্য মনে রাখার জন্য আমরা ভেরিয়েবল ব্যবহার করি। এটি একটি পাত্রের (Container) মতো।</p>
                <div class="code-block">
let name = "মঞ্জুরুল";  // নাম মনে রাখল
let age = 25;         // বয়স মনে রাখল
alert(name + " এর বয়স " + age); // পপআপ দেখাবে
                </div>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #3 (অনুশীলন):</strong><br>
                    "Write a JavaScript function called 'calculateAge' that takes a birth year as input and returns the current age. Explain it step-by-step for a beginner."
                </div>
            </div>
        `
    },
    {
        id: 4,
        title: "অধ্যায় ৪: সব ডিভাইসে সুন্দর (Responsive Design)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আপনি কি লক্ষ্য করেছেন? ফেসবুক বা ইউটিউব কম্পিউটার এবং মোবাইলে দেখতে একটু আলাদা হয়। কম্পিউটারে মেনুগুলো উপরে থাকে, কিন্তু মোবাইলে সেগুলো একটি ছোট আইকনের (হ্যামবার্গার মেনু) ভেতরে ঢুকে যায়। এই যে ডিভাইসের সাইজ অনুযায়ী ওয়েবসাইট নিজেকে খাপ খাইয়ে নিচ্ছে, একেই বলা হয় <strong>Responsive Web Design</strong>।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">পানির মতো ওয়েবসাইট</h3>
                <p>রেস্পন্সিভ ডিজাইন অনেকটা পানির মতো। পানিকে যেমন গ্লাসে রাখলে গ্লাসের আকার নেয়, আবার বোতলে রাখলে বোতলের আকার নেয়; ঠিক তেমনি আপনার ওয়েবসাইট ল্যাপটপ, ট্যাব বা মোবাইল—যেখানেই খোলা হোক না কেন, সে স্ক্রিনের সাইজ অনুযায়ী নিজেকে সাজিয়ে নেবে।</p>

                <h3 style="color: var(--primary); margin-top: 20px;">মিডিয়া কোয়েরি (The Magic Tool)</h3>
                <p>CSS এ <code>@media</code> রুল ব্যবহার করে আমরা শর্ত দিতে পারি। যেমন: "যদি স্ক্রিন সাইজ ৬০০ পিক্সেলের কম হয়, তবে ব্যাকগ্রাউন্ড লাল করো।"</p>

                <div class="code-block">
/* সাধারণ অবস্থায় (ডেস্কটপ) */
.box {
    background-color: lightblue;
    width: 50%;
    font-size: 20px;
}

/* যখন স্ক্রিন ছোট হবে (মোবাইল) */
@media screen and (max-width: 600px) {
    .box {
        background-color: lightcoral; /* রং বদলে যাবে */
        width: 100%; /* পুরো স্ক্রিন জুড়ে থাকবে */
        font-size: 14px; /* লেখা ছোট হবে */
    }
}
                </div>

                <h4>লাইভ ডেমো (আপনার ব্রাউজারের উইন্ডো ছোট-বড় করে দেখতে পারেন):</h4>
                <div class="output-box">
                    <style>
                        .responsive-demo {
                            background-color: #2979ff;
                            color: white;
                            padding: 20px;
                            text-align: center;
                            transition: 0.5s;
                            border-radius: 8px;
                        }
                        /* ডেমোর জন্য কন্টেইনার কুয়েরি ব্যবহার করা হচ্ছে */
                        @media (max-width: 500px) {
                            .responsive-demo {
                                background-color: #ff5722 !important;
                                content: "আমি এখন মোবাইলে আছি!";
                            }
                            .responsive-demo::after {
                                content: " (মোবাইল মোড)";
                                font-weight: bold;
                            }
                        }
                    </style>
                    <div class="responsive-demo">
                        আমাকে ছোট স্ক্রিনে বা মোবাইলে দেখলে আমি কমলা রংয়ের হয়ে যাবো! <br>
                        (কম্পিউটারে দেখলে নীল থাকবো)
                    </div>
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">ডেভেলপার টুলস (DevTools)</h3>
                <p>আপনি যেকোনো ওয়েবসাইটে গিয়ে কিবোর্ডের <strong>F12</strong> চাপলে 'Developer Tools' ওপেন হবে। সেখানে একটি মোবাইল আইকন আছে, ওটায় ক্লিক করে আপনি দেখতে পাবেন আপনার সাইটটি iPhone, Samsung বা iPad এ কেমন দেখাবে।</p>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #4 (অনুশীলন):</strong><br>
                    "Write CSS media queries for a 3-column grid layout. On desktop, show 3 columns; on tablets, show 2 columns; and on mobile, stack them into 1 column."
                </div>
            </div>
        `
    },
    {
        id: 5,
        title: "অধ্যায় ৫: লেআউটের জাদুকর (Flexbox)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আগের দিনে ওয়েবসাইট ডিজাইন করতে গিয়ে কোনো কিছুকে মাঝখানে আনা বা পাশাপাশি সাজানো ছিল দুঃস্বপ্নের মতো। কিন্তু <strong>Flexbox</strong> আসার পর এটি এখন পানির মতো সহজ। আপনি যদি একটি ন্যাভিগেশন বার বা ই-কমার্স সাইটের প্রোডাক্ট গ্যালারি বানাতে চান, তবে Flexbox আপনার সেরা বন্ধু।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">Flexbox এর মূলমন্ত্র</h3>
                <p>Flexbox ব্যবহার করতে হলে প্রথমে বাবার (Parent) উপর <code>display: flex;</code> দিতে হয়। তাহলেই তার ভেতরের সন্তানরা (Children) পাশাপাশি চলে আসে।</p>
                
                <ul style="margin-left: 20px; list-style-type: disc; margin-top: 10px;">
                    <li><strong>Justify Content:</strong> এটি আইটেমগুলোকে বামে-ডানে (X-অক্ষ) নিয়ন্ত্রণ করে। (যেমন: center, space-between)।</li>
                    <li><strong>Align Items:</strong> এটি আইটেমগুলোকে উপরে-নিচে (Y-অক্ষ) নিয়ন্ত্রণ করে।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">বিশ্বের সবচেয়ে কঠিন কাজ এখন সহজ!</h3>
                <p>একসময় কোনো ডিভকে (Div) স্ক্রিনের একদম মাঝখানে আনা খুব কঠিন ছিল। Flexbox দিয়ে এটি মাত্র ৩ লাইনে করা যায়:</p>

                <div class="code-block">
.container {
    display: flex;             /* ফ্লেক্সবক্স চালু */
    justify-content: center;   /* বামে-ডানে মাঝখানে */
    align-items: center;       /* উপরে-নিচে মাঝখানে */
    height: 200px;             /* উচ্চতা */
    background-color: #333;
}
                </div>

                <h4>লাইভ ডেমো (Flexbox Playground):</h4>
                <div class="output-box">
                    <style>
                        .flex-demo-container {
                            display: flex;
                            justify-content: flex-start; /* ডিফল্ট */
                            background: #1e293b;
                            padding: 10px;
                            border-radius: 8px;
                            height: 100px;
                            align-items: center;
                            gap: 10px;
                        }
                        .flex-item {
                            width: 50px; height: 50px;
                            background: linear-gradient(45deg, #00e5ff, #2979ff);
                            color: white; font-weight: bold;
                            display: flex; justify-content: center; align-items: center;
                            border-radius: 5px;
                        }
                    </style>
                    
                    <div style="margin-bottom: 10px; display: flex; gap: 5px; flex-wrap: wrap;">
                        <button onclick="document.getElementById('demoBox').style.justifyContent='flex-start'" style="cursor:pointer; padding: 5px;">Start</button>
                        <button onclick="document.getElementById('demoBox').style.justifyContent='center'" style="cursor:pointer; padding: 5px;">Center</button>
                        <button onclick="document.getElementById('demoBox').style.justifyContent='flex-end'" style="cursor:pointer; padding: 5px;">End</button>
                        <button onclick="document.getElementById('demoBox').style.justifyContent='space-between'" style="cursor:pointer; padding: 5px;">Space Between</button>
                    </div>

                    <div id="demoBox" class="flex-demo-container">
                        <div class="flex-item">1</div>
                        <div class="flex-item">2</div>
                        <div class="flex-item">3</div>
                    </div>
                    <p style="font-size: 12px; color: #666; margin-top: 5px;">(উপরের বাটনে ক্লিক করে পজিশন পরিবর্তন দেখুন)</p>
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">কেন এটি এত জরুরি?</h3>
                <p>আপনার ওয়েবসাইটের মেনুবার (Navbar), ফুটার, এবং কার্ড লেআউট—সব কিছুই এই Flexbox দিয়েই তৈরি।</p>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #5 (অনুশীলন):</strong><br>
                    "Create a navigation bar using HTML and CSS Flexbox. The logo should be on the far left, and the menu links (Home, About, Contact) should be on the far right. Use 'justify-content: space-between'."
                </div>
            </div>
        `
    },
    {
        id: 6,
        title: "অধ্যায় ৬: দ্বিমাত্রিক দুনিয়া (CSS Grid)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আমরা ফ্লেক্সবক্স শিখেছি, যা এক লাইনে সাজানোর জন্য সেরা। কিন্তু আপনি যদি খবরের কাগজের (Newspaper) মতো জটিল লেআউট বা ইমেজের গ্যালারি বানাতে চান, যেখানে সারি (Rows) এবং কলাম (Columns) একসাথে থাকবে, তখন আপনার দরকার <strong>CSS Grid</strong>।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">Grid এর জাদুকরী ইউনিট (fr)</h3>
                <p>গ্রিড সিস্টেমে আমরা পিক্সেলের বদলে <code>fr</code> (fraction) ইউনিট ব্যবহার করি। এটি জায়গাকে সমান ভাগে ভাগ করে নেয়।</p>

                <div class="code-block">
.container {
    display: grid;
    /* ৩টি সমান কলাম তৈরি হবে */
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 10px; /* মাঝখানের ফাঁকা জায়গা */
}
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ গ্রিড ল্যাব</h3>
                <p>নিচের বাটনগুলোতে ক্লিক করে দেখুন কিভাবে গ্রিড লেআউট চোখের পলকে বদলে যায়।</p>

                <div class="output-box">
                    <style>
                        .grid-demo {
                            display: grid;
                            grid-template-columns: 1fr 1fr 1fr; /* Default */
                            gap: 10px;
                            background: #1e293b;
                            padding: 10px;
                            border-radius: 8px;
                            transition: 0.3s;
                        }
                        .grid-item {
                            background: var(--secondary);
                            color: white;
                            padding: 20px;
                            text-align: center;
                            border-radius: 4px;
                            font-weight: bold;
                        }
                        .grid-item:nth-child(even) {
                            background: #009688;
                        }
                    </style>

                    <div style="margin-bottom: 15px; display: flex; gap: 5px; flex-wrap: wrap;">
                        <button onclick="document.getElementById('myGrid').style.gridTemplateColumns='1fr 1fr 1fr'" style="cursor:pointer; padding: 5px;">৩ কলাম (সমান)</button>
                        <button onclick="document.getElementById('myGrid').style.gridTemplateColumns='1fr 1fr'" style="cursor:pointer; padding: 5px;">২ কলাম</button>
                        <button onclick="document.getElementById('myGrid').style.gridTemplateColumns='2fr 1fr'" style="cursor:pointer; padding: 5px;">অসমান (2fr 1fr)</button>
                    </div>

                    <div id="myGrid" class="grid-demo">
                        <div class="grid-item">1</div>
                        <div class="grid-item">2</div>
                        <div class="grid-item">3</div>
                        <div class="grid-item">4</div>
                        <div class="grid-item">5</div>
                        <div class="grid-item">6</div>
                    </div>
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">Flexbox বনাম Grid: কোনটি কখন?</h3>
                <ul style="margin-left: 20px; list-style-type: square; margin-top: 10px;">
                    <li><strong>Flexbox:</strong> যখন ছোটখাটো অ্যালাইনমেন্ট দরকার (যেমন: মেনুবার, কার্ডের ভেতরের কন্টেন্ট)।</li>
                    <li><strong>Grid:</strong> যখন পুরো পেইজের লেআউট বা গ্যালারি বানাতে হবে।</li>
                </ul>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #6 (অনুশীলন):</strong><br>
                    "Write CSS Grid code to create a photo gallery layout. It should have 4 columns on desktop, 2 columns on tablets, and 1 column on mobile screens using media queries."
                </div>
            </div>
        `
    },
    {
        id: 25,
        title: "অধ্যায় ২৫: প্রফেশনাল ল্যান্ডিং পেজ তৈরি (প্রজেক্ট)",
        content: `
            <h3>আজ আমরা একটি সম্পূর্ণ ল্যান্ডিং পেজ বানাবো।</h3>
            <p>নিচের প্রম্পটি ব্যবহার করে ৫ মিনিটের মধ্যে একটি মডার্ন ল্যান্ডিং পেজ তৈরি করুন।</p>
            <div class="prompt-box">
                <strong>🤖 AI Prompt #25:</strong><br>
                "Create a responsive landing page for a coffee shop using HTML and CSS flexbox. Use a dark brown color theme. Include a hero section with a background image, a menu section with 3 items, and a contact form."
            </div>
        `
    }
];

// বাকি চ্যাপ্টারগুলো জেনারেট করা (ডেমো হিসেবে)
for (let i =7 ; i <= 50; i++) {
    if (i === 25) continue; // ২৫ অলরেডি আছে
    chaptersDB.push({
        id: i,
        title: `অধ্যায় ${i}: ওয়েব ডেভেলপমেন্ট টপিক ${i}`,
        content: `<p>এই অধ্যায়ে আমরা শিখবো কিভাবে অ্যাডভান্সড লেভেলের কাজ করা যায়। বিস্তারিত আসছে...</p>
        <div class="prompt-box"><strong>🤖 AI Prompt #${i}:</strong><br> "Generate a code snippet to demonstrate topic ${i} in web development."</div>`
    });
}
// সর্টিং
chaptersDB.sort((a, b) => a.id - b.id);

// কোর্স ইন্টারফেস ওপেন করা
function startLearning() {
    document.getElementById('course-container').style.display = 'flex';
    document.getElementById('hero-section').style.display = 'none';
    document.querySelector('.navbar').style.display = 'none';
    renderChapterList();
    // প্রথম চ্যাপ্টার অটো লোড
    loadChapter(1);
}

// কোর্স বন্ধ করা
function closeCourse() {
    document.getElementById('course-container').style.display = 'none';
    document.getElementById('hero-section').style.display = 'flex';
    document.querySelector('.navbar').style.display = 'flex';
}

// সাইডবারে চ্যাপ্টার রেন্ডার করা
function renderChapterList() {
    const list = document.getElementById('chapter-list');
    list.innerHTML = '';
    chaptersDB.forEach(chap => {
        const li = document.createElement('li');
        li.textContent = chap.title;
        li.onclick = () => loadChapter(chap.id);
        li.id = `chap-${chap.id}`;
        list.appendChild(li);
    });
}

// নির্দিষ্ট চ্যাপ্টার লোড করা
function loadChapter(id) {
    const chapter = chaptersDB.find(c => c.id === id);
    const contentDiv = document.getElementById('chapter-content');
    
    // Active class set
    document.querySelectorAll('#chapter-list li').forEach(l => l.classList.remove('active'));
    document.getElementById(`chap-${id}`).classList.add('active');

    // Content Injection with Footer
    contentDiv.innerHTML = `
        <h2 class="chapter-title">${chapter.title}</h2>
        <div class="chapter-body">${chapter.content}</div>
        <br><br>
        <hr style="border-color: #334155;">
        <div class="author-card">
            <div class="author-img-wrapper">
                <img src="https://i.ibb.co.com/Fq7xch1V/Gemini-Generated-Image-dwbjl5dwbjl5dwbj-Copy-Copy.png" alt="Monjurul Haque" class="author-img">
            </div>
            <div class="author-info">
                <h3>মঞ্জুরুল হক</h3>
                <p class="designation">প্রভাষক, অর্থনীতি</p>
                <div class="contact-links">
                    <a href="tel:01715247588"><i class="fas fa-phone"></i> ০১৮১৫২৪৭৫৮৮</a>
                    <a href="https://wa.me/8801715247588"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    <a href="mailto:monjurul.jusc@gmail.com"><i class="fas fa-envelope"></i> Email</a>
                </div>
                <div class="ad-banner">
                    <p>এমন একটি অ্যাপ আপনার স্কুলের জন্য বানাতে চান?</p>
                    <a href="#" class="order-btn">🛒 অর্ডার করতে ক্লিক করুন</a>
                </div>
            </div>
        </div>
    `;
}
