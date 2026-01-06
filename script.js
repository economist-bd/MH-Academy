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
        id: 7,
        title: "অধ্যায় ৭: জাভাস্ক্রিপ্ট ও HTML এর বন্ধুত্ব (DOM)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আমরা জানি HTML হলো ওয়েবসাইটের শরীর, আর JavaScript হলো মস্তিষ্ক। কিন্তু এই মস্তিষ্ক শরীরের হাত-পা (এলিমেন্ট) নাড়াবে কিভাবে? এদের মধ্যে যোগাযোগ করিয়ে দেয় যে মাধ্যম, তার নাম <strong>DOM (Document Object Model)</strong>।</p>

                

                <p>যখন একটি ওয়েব পেজ লোড হয়, ব্রাউজার পুরো পেজটিকে একটি গাছের মতো (Tree Structure) সাজিয়ে ফেলে। জাভাস্ক্রিপ্ট এই গাছ থেকে যেকোনো ডালপালা (Tag) ধরে পরিবর্তন করতে পারে।</p>

                <h3 style="color: var(--primary); margin-top: 20px;">DOM এর জাদুকরী মেথড</h3>
                <p>কোনো কিছু পরিবর্তন করার আগে তাকে ধরতে (Select) হয়। এর জন্য জনপ্রিয় কিছু মেথড:</p>
                <ul style="margin-left: 20px; list-style-type: disc; margin-top: 10px;">
                    <li><code>document.getElementById('id')</code> - আইডি দিয়ে ধরে।</li>
                    <li><code>document.querySelector('.class')</code> - ক্লাস বা ট্যাগ দিয়ে ধরে।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">রিয়েল-টাইম প্রজেক্ট: বাল্ব অন/অফ</h3>
                <p>নিচের কোডটি দেখুন। আমরা জাভাস্ক্রিপ্ট দিয়ে একটি কাল্পনিক লাইট বাল্ব জ্বালাবো এবং নেভাবো।</p>

                <div class="code-block">
// HTML এ একটি বাটন এবং একটি বক্স আছে

function toggleLight() {
    let bulb = document.getElementById('myBulb');
    let btn = document.getElementById('btnText');

    if (bulb.style.backgroundColor === 'yellow') {
        // লাইট বন্ধ করো
        bulb.style.backgroundColor = '#333';
        bulb.style.boxShadow = 'none';
        btn.innerText = 'সুইচ অন করুন';
    } else {
        // লাইট জ্বালাও
        bulb.style.backgroundColor = 'yellow';
        bulb.style.boxShadow = '0 0 50px yellow';
        btn.innerText = 'সুইচ অফ করুন';
    }
}
                </div>

                <h4>আউটপুট (ক্লিক করে দেখুন):</h4>
                <div class="output-box" style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
                    <div id="myBulb" style="width: 80px; height: 80px; background-color: #333; border-radius: 50%; border: 2px solid #555; transition: 0.3s;"></div>
                    
                    <button id="btnText" onclick="
                        let b = document.getElementById('myBulb');
                        let t = document.getElementById('btnText');
                        if(b.style.backgroundColor === 'yellow'){
                            b.style.backgroundColor = '#333';
                            b.style.boxShadow = 'none';
                            t.innerText = 'সুইচ অন করুন';
                            t.style.background = '#2979ff';
                        } else {
                            b.style.backgroundColor = 'yellow';
                            b.style.boxShadow = '0 0 50px yellow';
                            t.innerText = 'সুইচ অফ করুন';
                            t.style.background = '#ff5722';
                        }
                    " style="padding: 10px 20px; background: #2979ff; color: white; border: none; border-radius: 5px; cursor: pointer;">সুইচ অন করুন</button>
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">কিভাবে কন্টেন্ট বদলাবেন?</h3>
                <p><code>innerText</code> বা <code>innerHTML</code> ব্যবহার করে আপনি ওয়েবসাইটের যেকোনো লেখা নিমিষেই বদলে ফেলতে পারেন ইউজারকে রিফ্রেশ করতে না দিয়েই।</p>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #7 (অনুশীলন):</strong><br>
                    "Write a JavaScript code snippet that selects an HTML button with ID 'submit-btn'. When the button is clicked, change its text to 'Loading...' and disable it using DOM manipulation."
                </div>
            </div>
        `
    },
    {
        id: 8,
        title: "অধ্যায় ৮: ঘটনা ও প্রতিক্রিয়া (JavaScript Events)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                একটি ওয়েবসাইট তখনই জীবন্ত মনে হয় যখন এটি আপনার কাজের উত্তর দেয়। যেমন: মাউস নিলে রং বদলানো, বাটনে ক্লিক করলে মেনু আসা, বা টাইপ করার সময় সাথে সাথে ভুল ধরা। জাভাস্ক্রিপ্টের ভাষায় এগুলোকে বলা হয় <strong>Events</strong>।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">জনপ্রিয় কিছু ইভেন্ট</h3>
                <ul style="margin-left: 20px; list-style-type: disc; margin-top: 10px;">
                    <li><code>click</code>: যখন ইউজার ক্লিক করে।</li>
                    <li><code>mouseover</code>: যখন মাউস কোনো কিছুর উপর নেওয়া হয়।</li>
                    <li><code>keyup</code>: যখন কিবোর্ডে টাইপ করে আঙুল উঠানো হয়।</li>
                    <li><code>submit</code>: যখন ফর্ম জমা দেওয়া হয়।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">আধুনিক পদ্ধতি (addEventListener)</h3>
                <p>HTML এর ভেতরে <code>onclick="..."</code> লেখা পুরনো পদ্ধতি। প্রফেশনালরা <code>addEventListener</code> ব্যবহার করেন। এতে কোড পরিষ্কার থাকে।</p>

                <div class="code-block">
let box = document.getElementById('inputBox');
let counter = document.getElementById('charCount');

// রিয়েল-টাইম ক্যারেক্টার কাউন্টার
box.addEventListener('keyup', function() {
    let textLength = box.value.length;
    counter.innerText = textLength;
    
    // ১০ এর বেশি হলে লাল হবে
    if (textLength > 10) {
        counter.style.color = 'red';
    } else {
        counter.style.color = '#00e5ff'; // মূল কালার
    }
});
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ ডেমো: ক্যারেক্টার কাউন্টার</h3>
                <p>নিচের বক্সে কিছু টাইপ করুন। দেখুন কিভাবে জাভাস্ক্রিপ্ট প্রতিটা অক্ষর গুনছে। (১০ অক্ষরের বেশি লিখলে সতর্ক করবে)</p>

                <div class="output-box">
                    <input type="text" id="demoInput" placeholder="এখানে কিছু লিখুন..." 
                        onkeyup="
                            let len = this.value.length;
                            document.getElementById('demoCount').innerText = len;
                            if(len > 10) {
                                document.getElementById('demoCount').style.color = '#ff5722';
                                document.getElementById('warnMsg').style.display = 'block';
                            } else {
                                document.getElementById('demoCount').style.color = '#2979ff';
                                document.getElementById('warnMsg').style.display = 'none';
                            }
                        "
                        style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc; background: #fff; color: #333; margin-bottom: 10px;"
                    >
                    <p>অক্ষর সংখ্যা: <strong id="demoCount" style="color: #2979ff; font-size: 20px;">0</strong></p>
                    <p id="warnMsg" style="color: #ff5722; font-size: 12px; display: none; font-weight: bold;">সতর্কতা: ১০ অক্ষরের বেশি হয়ে গেছে!</p>
                </div>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #8 (অনুশীলন):</strong><br>
                    "Create a JavaScript 'Dark Mode' toggle button using addEventListener. When clicked, it should toggle a 'dark-theme' class on the website body and change the button text from 'Dark' to 'Light'."
                </div>
            </div>
        `
    },
    {
        id: 9,
        title: "অধ্যায় ৯: নির্ভুল তথ্য (Form Validation)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আপনি যখন ফেসবুকে সাইন-আপ করেন, তখন ইমেইল না দিলে বা পাসওয়ার্ড খুব ছোট হলে এটি আপনাকে লাল রঙের ওয়ার্নিং দেখায়। এটিই ফর্ম ভ্যালিডেশন। সার্ভারে ভুল বা ফালতু ডাটা পাঠানো আটকানোর জন্য এটি ব্যবহার করা হয়।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">কিভাবে চেক করবেন?</h3>
                <p>আমরা সাধারণত ফর্ম সাবমিট করার আগে বা টাইপ করার সময় জাভাস্ক্রিপ্ট দিয়ে চেক করি:</p>
                <ul style="margin-left: 20px; list-style-type: disc; margin-top: 10px;">
                    <li>ঘরটি খালি কিনা? (Required)</li>
                    <li>পাসওয়ার্ড যথেষ্ট শক্তিশালী কিনা? (Length check)</li>
                    <li>ইমেইলে '@' আছে কিনা? (Pattern check)</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ প্রজেক্ট: পাসওয়ার্ড চেকার</h3>
                <p>নিচের কোডটি দেখুন। এখানে ইউজার পাসওয়ার্ড টাইপ করার সাথে সাথে আমরা তাকে জানাবো পাসওয়ার্ডটি 'দুর্বল' নাকি 'শক্তিশালী'।</p>

                <div class="code-block">
function checkPassword() {
    let pass = document.getElementById('myPass').value;
    let msg = document.getElementById('msg');

    if (pass.length < 6) {
        msg.innerText = "খুব ছোট! (কমপক্ষে ৬ অক্ষর দিন)";
        msg.style.color = "red";
    } else {
        msg.innerText = "চমৎকার! শক্তিশালী পাসওয়ার্ড।";
        msg.style.color = "#00e5ff"; // সবুজ/নীল
    }
}
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ ডেমো (টাইপ করে দেখুন)</h3>
                <div class="output-box">
                    <label style="display: block; margin-bottom: 5px;">পাসওয়ার্ড দিন:</label>
                    <input type="password" id="demoPass" placeholder="******" 
                        onkeyup="
                            let p = this.value;
                            let m = document.getElementById('demoMsg');
                            let b = this; // input box
                            
                            if(p.length === 0) {
                                m.innerText = '';
                                b.style.borderColor = '#ccc';
                            } else if (p.length < 6) {
                                m.innerText = '❌ খুব দুর্বল (আরও বড় করুন)';
                                m.style.color = '#ff5722';
                                b.style.borderColor = '#ff5722';
                            } else {
                                m.innerText = '✅ শক্তিশালী পাসওয়ার্ড';
                                m.style.color = '#00e5ff';
                                b.style.borderColor = '#00e5ff';
                            }
                        "
                        style="width: 100%; padding: 10px; border-radius: 5px; border: 2px solid #ccc; background: #fff; color: #333; outline: none; transition: 0.3s;"
                    >
                    <p id="demoMsg" style="font-size: 14px; margin-top: 5px; font-weight: bold; min-height: 20px;"></p>
                </div>

                <p style="font-size: 14px; color: #ccc; margin-top: 10px;"><em>টিপস: সাধারণত পাসওয়ার্ড ফিল্ডের নিচে লাল কালিতে ভুলগুলো দেখানো হয়, যাতে ইউজার সহজেই বুঝতে পারে।</em></p>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #9 (অনুশীলন):</strong><br>
                    "Write a JavaScript form validation script. It should check if the 'Email' field contains an '@' symbol and if the 'Confirm Password' field matches the 'Password' field. If not, display an error message below the form."
                </div>
            </div>
        `
    },
    {
        id: 10,
        title: "অধ্যায় ১০: ব্রাউজারের মেমোরি (Local Storage)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আপনি খেয়াল করেছেন কি? ইউটিউবে ডার্ক মোড অন করলে পরে ব্রাউজার ওপেন করলেও সেটা ডার্কই থাকে। অথবা ই-কমার্স সাইটে কার্টে পণ্য যোগ করে পরে এলেও সেটা থাকে। এই জাদুর পেছনে কাজ করে <strong>Local Storage</strong>। এটি ইউজারের ব্রাউজারে ৫-১০ মেগাবাইট পর্যন্ত টেক্সট ডাটা সেভ রাখতে পারে।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">কিভাবে ডাটা সেভ ও লোড করবেন?</h3>
                <p>এটি ব্যবহার করা খুব সহজ। মাত্র দুটি প্রধান কমান্ড জানলেই কেল্লাফতে!</p>
                <ul style="margin-left: 20px; list-style-type: disc; margin-top: 10px;">
                    <li><code>localStorage.setItem('key', 'value')</code> - ডাটা রাখার জন্য।</li>
                    <li><code>localStorage.getItem('key')</code> - ডাটা বের করার জন্য।</li>
                </ul>

                <div class="code-block">
// নাম সেভ করা
localStorage.setItem('username', 'Monjurul');

// নাম পুনরুদ্ধার করা
let user = localStorage.getItem('username');
alert(user); // আউটপুট: Monjurul

// ডাটা মুছে ফেলা
localStorage.removeItem('username');
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ প্রজেক্ট: ম্যাজিক নোটপ্যাড</h3>
                <p>নিচের বক্সে কিছু লিখুন এবং <strong>"সেভ করুন"</strong> বাটনে চাপুন। এরপর পেজটি রিফ্রেশ দিন (বা অন্য চ্যাপ্টারে গিয়ে ফিরে আসুন)। দেখবেন আপনার লেখাটি হারিয়ে যায়নি!</p>

                <div class="output-box">
                    <textarea id="myNote" placeholder="আজকের বাজার ফর্দ..." style="width: 100%; height: 80px; padding: 10px; border-radius: 5px; background: #fff; color: #333; margin-bottom: 10px;"></textarea>
                    
                    <div style="display: flex; gap: 10px;">
                        <button onclick="
                            let note = document.getElementById('myNote').value;
                            localStorage.setItem('savedNote', note);
                            alert('নোট সেভ করা হয়েছে! পেজ রিফ্রেশ দিলেও এটি থাকবে।');
                        " style="padding: 8px 15px; background: #00e5ff; color: #000; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">💾 সেভ করুন</button>

                        <button onclick="
                            let saved = localStorage.getItem('savedNote');
                            if(saved) {
                                document.getElementById('myNote').value = saved;
                            } else {
                                alert('কোনো নোট সেভ করা নেই!');
                            }
                        " style="padding: 8px 15px; background: #2979ff; color: white; border: none; border-radius: 4px; cursor: pointer;">📂 লোড করুন</button>
                        
                        <button onclick="
                            localStorage.removeItem('savedNote');
                            document.getElementById('myNote').value = '';
                            alert('মেমোরি পরিষ্কার করা হয়েছে।');
                        " style="padding: 8px 15px; background: #ff5722; color: white; border: none; border-radius: 4px; cursor: pointer;">🗑️ মুছুন</button>
                    </div>
                </div>
                
                <p style="font-size: 12px; color: #999; margin-top: 10px;">(নোট: আপনি যদি এই পেজটি রিলোড দেন, তাও "লোড করুন" বাটনে চাপলে আপনার আগের লেখা চলে আসবে।)</p>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #10 (অনুশীলন):</strong><br>
                    "Create a simple To-Do List application using HTML, CSS, and JavaScript. Use LocalStorage to save the tasks so that they remain on the list even after the browser is closed and reopened."
                </div>
            </div>
        `
    },
    {
        id: 11,
        title: "অধ্যায় ১১: বাইরের দুনিয়ার সাথে সংযোগ (API & Fetch)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আপনার ওয়েবসাইটের আবহাওয়া আপডেট বা খেলার স্কোর কি আপনি নিজে টাইপ করেন? অবশ্যই না! এগুলো আসে অন্য কোনো বড় সার্ভার থেকে। এই আদান-প্রদান করার মাধ্যম হলো <strong>API (Application Programming Interface)</strong>।</p>
                
                

                <p>সহজ কথায়: আপনি রেস্টুরেন্টে (Client) ওয়েটারকে (API) অর্ডার দিলেন, ওয়েটার কিচেন (Server) থেকে খাবার (Data) এনে দিল।</p>

                <h3 style="color: var(--primary); margin-top: 20px;">Fetch: ডাটা আনার জাদুকর</h3>
                <p>জাভাস্ক্রিপ্টে সার্ভার থেকে ডাটা ডাকার জন্য আমরা <code>fetch()</code> ব্যবহার করি। এটি একটি প্রমিস (Promise) বা ওয়াদা—সে বলে, "দাঁড়াও, আমি ডাটা নিয়ে আসছি।"</p>

                <div class="code-block">
fetch('https://api.example.com/data')
  .then(response => response.json()) // ১. ডাটাকে পড়ার যোগ্য করা (JSON)
  .then(data => {
      console.log(data); // ২. ডাটা ব্যবহার করা
  })
  .catch(error => console.log('ভুল হয়েছে!', error)); // ৩. সমস্যা হলে জানানো
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">JSON কি?</h3>
                <p>সার্ভার আমাদের সাথে যে ভাষায় কথা বলে তার নাম <strong>JSON</strong>। এটি দেখতে হুবহু জাভাস্ক্রিপ্ট অবজেক্টের মতো।</p>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ প্রজেক্ট: ফেক ইউজার জেনারেটর</h3>
                <p>নিচের বাটনে ক্লিক করুন। আমরা সত্যিকারের একটি সার্ভার (RandomUser API) থেকে একজন মানুষের ছবি, নাম এবং ইমেইল নিয়ে আসব।</p>

                <div class="output-box" style="text-align: center;">
                    <div id="userCard" style="background: #1e293b; padding: 20px; border-radius: 10px; display: inline-block; min-width: 250px; border: 1px solid #334155;">
                        <img id="userImg" src="https://via.placeholder.com/100" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid var(--primary); margin-bottom: 10px;">
                        <h3 id="userName" style="color: white; margin: 5px 0;">অপেক্ষা করছি...</h3>
                        <p id="userEmail" style="color: #94a3b8; font-size: 13px;">নিচের বাটনে ক্লিক করুন</p>
                    </div>
                    <br><br>
                    
                    <button onclick="
                        let btn = this;
                        btn.innerText = 'লোড হচ্ছে...';
                        fetch('https://randomuser.me/api/')
                          .then(res => res.json())
                          .then(data => {
                              let person = data.results[0];
                              document.getElementById('userImg').src = person.picture.large;
                              document.getElementById('userName').innerText = person.name.first + ' ' + person.name.last;
                              document.getElementById('userEmail').innerText = person.email;
                              btn.innerText = 'নতুন মানুষ খুঁজুন';
                          })
                          .catch(err => {
                              alert('ডাটা লোড করতে সমস্যা হয়েছে। ইন্টারনেট কানেকশন চেক করুন।');
                              btn.innerText = 'আবার চেষ্টা করুন';
                          });
                    " style="padding: 10px 20px; background: linear-gradient(45deg, #ff5722, #f44336); color: white; border: none; border-radius: 50px; cursor: pointer; font-weight: bold; box-shadow: 0 5px 15px rgba(244, 67, 54, 0.4);">
                        <i class="fas fa-user"></i> নতুন মানুষ খুঁজুন
                    </button>
                </div>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #11 (অনুশীলন):</strong><br>
                    "Write a JavaScript code using the 'fetch' API to get the current Bitcoin price from 'https://api.coindesk.com/v1/bpi/currentprice.json' and display it in an HTML div with ID 'btc-price'."
                </div>
            </div>
        `
    },
    {
        id: 12,
        title: "অধ্যায় ১২: কোড যখন স্মার্ট (ES6+ Features)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আগে জাভাস্ক্রিপ্ট কোড লিখতে অনেক কাঠখড় পোড়াতে হতো। ২০১৫ সালে <strong>ES6</strong> আসার পর কোড লেখার স্টাইল বদলে গেছে। এখন কোড অনেক বেশি পরিষ্কার (Clean) এবং পড়া সহজ (Readable)।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">১. অ্যারো ফাংশন (Arrow Function)</h3>
                <p>বড় <code>function</code> কিওয়ার্ড না লিখে এখন আমরা তীরের মতো <code>=></code> চিহ্ন ব্যবহার করি।</p>
                <div class="code-block">
// পুরাতন পদ্ধতি
function hello() {
    return "Hello World!";
}

// নতুন (ES6) পদ্ধতি - এক লাইনেই শেষ!
const hello = () => "Hello World!";
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">২. টেমপ্লেট লিটারেল (Template Literals)</h3>
                <p>আগে স্ট্রিং জোড়া লাগাতে <code>+</code> চিহ্ন ব্যবহার করতে হতো যা খুব বিরক্তিকর ছিল। এখন আমরা ব্যাকটিক ( <code>\`</code> ) এবং <code>\${ }</code> ব্যবহার করি।</p>
                <div class="code-block">
let name = "মঞ্জুরুল";
let age = 25;

// পুরাতন: "আমার নাম " + name + " এবং বয়স " + age
// নতুন:
let msg = \`আমার নাম \${name} এবং বয়স \${age}\`; 
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">৩. ডিস্ট্রাকচারিং (Destructuring)</h3>
                <p>অবজেক্ট বা অ্যারে থেকে ডাটা বের করে আনার জাদুকরী উপায়।</p>
                <div class="code-block">
const user = { id: 1, title: 'Developer' };

// আগে: const title = user.title;
// এখন:
const { title, id } = user; // সরাসরি ভেরিয়েবল হয়ে গেল!
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ ল্যাব: স্মার্ট বায়ো জেনারেটর</h3>
                <p>নিচের বক্সে আপনার তথ্য দিন। ES6 এর টেমপ্লেট লিটারেল ব্যবহার করে রিয়েল-টাইমে বায়ো তৈরি হবে।</p>

                <div class="output-box">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                        <input type="text" id="esName" placeholder="আপনার নাম" style="padding: 8px; border-radius: 4px; border: 1px solid #ccc;">
                        <input type="text" id="esJob" placeholder="পেশা (যেমন: ডেভেলপার)" style="padding: 8px; border-radius: 4px; border: 1px solid #ccc;">
                        <input type="text" id="esHobby" placeholder="শখ (যেমন: কোডিং)" style="padding: 8px; border-radius: 4px; border: 1px solid #ccc;">
                        <input type="text" id="esLoc" placeholder="শহর" style="padding: 8px; border-radius: 4px; border: 1px solid #ccc;">
                    </div>

                    <div id="esOutput" style="margin-top: 15px; padding: 15px; background: rgba(0, 229, 255, 0.1); border-left: 4px solid var(--primary); color: #e2e8f0; min-height: 50px;">
                        <em>এখানে আপনার স্মার্ট বায়ো দেখা যাবে...</em>
                    </div>
                </div>

                <script>
                    // এই অংশটি ডেমোর জন্য ব্যবহার হচ্ছে
                    function updateBio() {
                        const name = document.getElementById('esName').value || '...';
                        const job = document.getElementById('esJob').value || '...';
                        const hobby = document.getElementById('esHobby').value || '...';
                        const loc = document.getElementById('esLoc').value || '...';

                        // ES6 Template Literal Magic
                        const bio = \`হাই! আমি <strong>\${name}</strong>। 
                        আমি একজন <strong>\${job}</strong> হিসেবে কাজ করছি। 
                        আমার শখ হলো <strong>\${hobby}</strong> এবং আমি <strong>\${loc}</strong> এ থাকি।\`;

                        document.getElementById('esOutput').innerHTML = bio;
                    }
                    
                    // ইভেন্ট লিসেনার যোগ করা (সিমুলেটেড)
                    ['esName', 'esJob', 'esHobby', 'esLoc'].forEach(id => {
                        document.getElementById(id).addEventListener('input', updateBio);
                    });
                </script>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #12 (অনুশীলন):</strong><br>
                    "Refactor the following JavaScript code to use ES6 Arrow Functions and Template Literals:
                    <br><code>function greet(name) { return 'Hello ' + name + ', welcome!'; }</code>"
                </div>
            </div>
        `
    },
    {
        id: 13,
        title: "অধ্যায় ১৩: নড়াচড়ার জাদুকরি (CSS Animation)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                ওয়েবসাইটকে জীবন্ত করে তোলার জন্য অ্যানিমেশন খুব জরুরি। হঠাৎ করে কোনো রং বদলে যাওয়া দেখতে ভালো লাগে না, কিন্তু ধীরে ধীরে বদলালে (Transition) সেটা চোখের জন্য আরামদায়ক হয়।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">১. ট্রানজিশন (Transition)</h3>
                <p>এটি হলো এক অবস্থা থেকে অন্য অবস্থায় যাওয়ার "স্মুথ" রাস্তা।</p>
                <div class="code-block">
.button {
    background: blue;
    transition: 0.5s; /* ০.৫ সেকেন্ড সময় নেবে */
}
.button:hover {
    background: red; /* মাউস নিলে লাল হবে */
}
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">২. কি-ফ্রেম অ্যানিমেশন (Keyframes)</h3>
                <p>আপনি যদি কোনো বস্তুকে নাচাতে চান বা ঘোরাতে চান, তবে ব্যবহার করতে হবে <code>@keyframes</code>। এটি কার্টুন তৈরির মতো ফ্রেম-বাই-ফ্রেম কাজ করে।</p>

                <div class="code-block">
@keyframes mySpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.box {
    animation: mySpin 2s infinite linear; /* অনন্তকাল ঘুরবে */
}
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ অ্যানিমেশন স্টুডিও</h3>
                <p>নিচের শেপটি নিয়ে খেলুন! বিভিন্ন বাটনে ক্লিক করে দেখুন CSS কি করতে পারে।</p>

                <div class="output-box" style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                    <style>
                        .anim-shape {
                            width: 100px;
                            height: 100px;
                            background: linear-gradient(135deg, #00e5ff, #2979ff);
                            border-radius: 10px;
                            transition: all 0.5s ease; /* ট্রানজিশন */
                            display: flex; align-items: center; justify-content: center;
                            font-weight: bold; color: white;
                            box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
                        }
                        
                        /* অ্যানিমেশন ক্লাসসমূহ */
                        .circle-mode { border-radius: 50%; background: #ff5722; }
                        .spin-mode { animation: spin 1s infinite linear; }
                        .bounce-mode { animation: bounce 0.6s infinite alternate; }
                        
                        @keyframes spin { 100% { transform: rotate(360deg); } }
                        @keyframes bounce { 
                            from { transform: translateY(0); } 
                            to { transform: translateY(-30px); } 
                        }
                    </style>

                    <div id="magicBox" class="anim-shape">আমি নড়ি!</div>

                    <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
                        <button onclick="document.getElementById('magicBox').className = 'anim-shape circle-mode'" 
                            style="padding: 8px 15px; background: #333; border: 1px solid #555; color: white; cursor: pointer; border-radius: 5px;">
                            গোল করো
                        </button>
                        <button onclick="document.getElementById('magicBox').className = 'anim-shape spin-mode'" 
                            style="padding: 8px 15px; background: #333; border: 1px solid #555; color: white; cursor: pointer; border-radius: 5px;">
                            ঘোরাও
                        </button>
                        <button onclick="document.getElementById('magicBox').className = 'anim-shape bounce-mode'" 
                            style="padding: 8px 15px; background: #333; border: 1px solid #555; color: white; cursor: pointer; border-radius: 5px;">
                            লাফাও
                        </button>
                        <button onclick="document.getElementById('magicBox').className = 'anim-shape'" 
                            style="padding: 8px 15px; background: #ff5722; border: none; color: white; cursor: pointer; border-radius: 5px;">
                            রিসেট
                        </button>
                    </div>
                </div>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #13 (অনুশীলন):</strong><br>
                    "Create a CSS code for a 'Loading Spinner'. It should be a circle with a transparent border and a blue top border, spinning infinitely using @keyframes."
                </div>
            </div>
        `
    },
    {
        id: 14,
        title: "অধ্যায় ১৪: কম সময়ে বেশি কাজ (Bootstrap Framework)",
        content: `
            <div class="chapter-content">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

                <p><strong>ভূমিকা:</strong><br>
                পিজ্জা খাওয়ার জন্য কি আপনি আটা মাখা থেকে শুরু করেন, নাকি ফ্রোজেন পিজ্জা কিনে জাস্ট ওভেনে গরম দেন? <strong>Bootstrap</strong> হলো সেই ফ্রোজেন পিজ্জার মতো। এখানে আগে থেকেই হাজার হাজার স্টাইল (Button, Navbar, Card) তৈরি করা আছে। আপনাকে শুধু সঠিক <code>class</code> নাম ব্যবহার করতে হবে।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">কেন বুটস্ট্র্যাপ ব্যবহার করবেন?</h3>
                <ul style="margin-left: 20px; list-style-type: disc; margin-top: 10px;">
                    <li><strong>দ্রুত ডিজাইন:</strong> কালার বা সাইজ নিয়ে ভাবতে হয় না।</li>
                    <li><strong>রেস্পন্সিভ:</strong> মোবাইল বা কম্পিউটারে অটোমেটিক ফিট হয়ে যায়।</li>
                    <li><strong>জনপ্রিয়তা:</strong> বিশ্বের ৩০% ওয়েবসাইট এটি দিয়ে তৈরি।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">ক্লাস (Class) এর খেলা</h3>
                <p>বুটস্ট্র্যাপে কোড লিখতে হয় না, শুধু ক্লাসের নাম মনে রাখতে হয়। যেমন:</p>
                <style>
/* সাধারণ বাটন স্টাইল */
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}

/* ক্লিক বাটন */
.btn-click {
  background-color: #4CAF50; /* সবুজ */
  color: white;
}
.btn-click:hover {
  background-color: #45a049;
}

/* ডিলিট বাটন */
.btn-delete {
  background-color: #e74c3c; /* লাল */
  color: white;
}
.btn-delete:hover {
  background-color: #c0392b;
}
</style>

<!-- বাটন -->
<button class="btn btn-click">ক্লিক</button>
<button class="btn btn-delete">ডিলিট</button>


                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ ডেমো: বুটস্ট্র্যাপ কার্ড</h3>
                <p>নিচে দেখুন কত বড় কোড আমরা মাত্র কয়েক লাইনে লিখেছি এবং দেখতে কত প্রফেশনাল লাগছে।</p>

                <div class="output-box" style="background: white; color: black; padding: 20px; border-radius: 10px;">
                    <div class="card" style="width: 18rem; margin: 0 auto;">
                        <img src="https://via.placeholder.com/300x150" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">প্রফেশনাল কার্ড</h5>
                            <p class="card-text">আমি কোনো CSS কোড লিখিনি। শুধু বুটস্ট্র্যাপের ক্লাস ব্যবহার করেছি।</p>
                            <a href="#" class="btn btn-primary">বিস্তারিত দেখুন</a>
                        </div>
                    </div>
                </div>
                <p style="font-size: 12px; color: #999; margin-top: 5px;">(নোট: এই ডিজাইনটি কাজ করার জন্য ইন্টারনেটের প্রয়োজন, কারণ এটি CDN থেকে স্টাইল লোড করছে।)</p>

                <h3 style="color: var(--primary); margin-top: 20px;">গ্রিড সিস্টেম (Grid System)</h3>
                <p>বুটস্ট্র্যাপ পেজকে ১২টি কলামে ভাগ করে। আপনি বলতে পারেন <code>col-6</code> (অর্ধেক জায়গা) বা <code>col-4</code> (তিন ভাগের এক ভাগ)।</p>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #14 (অনুশীলন):</strong><br>
                    "Write HTML code using Bootstrap 5 classes to create a responsive 'Pricing Table'. It should have 3 cards side-by-side (Basic, Standard, Premium) using the grid system."
                </div>
            </div>
        `
    },
    
    {
        id: 15,
        title: "অধ্যায় ১৫: কোড সুরক্ষার কবচ (Git & GitHub)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা (Introduction):</strong><br>
                কল্পনা করুন, আপনি ৩ দিন ধরে একটি ওয়েবসাইটে কাজ করছেন। হঠাৎ একটি ভুল কোড লিখলেন এবং পুরো সাইট ভেঙে গেল! এখন কি করবেন? <code>Ctrl+Z</code> দিয়ে হয়তো কয়েক ধাপ পেছনে যাওয়া যায়, কিন্তু ৩ দিনের কাজ ফিরে পাওয়া অসম্ভব।</p>
                <p>ঠিক এই জায়গাতেই আসে <strong>Git</strong>। এটি ডেভেলপারদের জন্য একটি "টাইম মেশিন"। আপনি চাইলেই ১ ঘন্টা, ১ দিন বা ১ মাস আগের কোডে ফিরে যেতে পারেন।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">Git বনাম GitHub: পার্থক্য কী?</h3>
                <p>নতুনরা প্রায়ই এই দুটোকে গুলিয়ে ফেলে। সহজ ভাষায়:</p>
                <ul style="margin-left: 20px; list-style-type: none; margin-top: 10px;">
                    <li style="margin-bottom: 10px;">💻 <strong>Git:</strong> এটি আপনার কম্পিউটারে ইন্সটল থাকে। এটি অফলাইনে কাজ করে এবং আপনার ফাইলগুলোর ভার্সন কন্ট্রোল করে।</li>
                    <li style="margin-bottom: 10px;">☁️ <strong>GitHub:</strong> এটি একটি ওয়েবসাইট (Cloud)। আপনার কম্পিউটারের কোডগুলো ব্যাকআপ রাখার জন্য এবং অন্যদের সাথে শেয়ার করার জন্য এটি ব্যবহৃত হয়। একে বলা হয় "কোডারদের ফেসবুক"।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">গিট এর জীবনচক্র (The Workflow)</h3>
                <p>Git এ কাজ করার সময় ফাইলগুলো ৩টি স্টেজের মধ্য দিয়ে যায়। এটি বোঝা খুব জরুরি:</p>
                <ol style="margin-left: 20px; margin-top: 10px;">
                    <li><strong>Working Directory:</strong> যেখানে আপনি কোড লিখছেন বা এডিট করছেন।</li>
                    <li><strong>Staging Area:</strong> এটি একটি "ওয়েটিং রুম"। কোন ফাইলগুলো সেভ করবেন তা এখানে জড়ো করা হয় (কমান্ড: <code>git add</code>)।</li>
                    <li><strong>Repository (Commit):</strong> এটি হলো ফাইনাল সেভ বা স্ন্যাপশট। এখান থেকেই টাইম মেশিনে যাওয়া যায় (কমান্ড: <code>git commit</code>)।</li>
                </ol>

                <h3 style="color: var(--primary); margin-top: 20px;">মৌলিক কমান্ড সমূহ (Cheat Sheet)</h3>
                <div class="code-block" style="font-size: 14px;">
# ১. গিট শুরু করা (প্রজেক্টে একবারই করতে হয়)
git init

# ২. কে কাজ করছে তা সেট করা
git config --global user.name "আপনার নাম"
git config --global user.email "আপনার ইমেইল"

# ৩. ফাইল স্টেজিং বা ওয়েটিং রুমে পাঠানো
git add .  (ডট মানে সব ফাইল)

# ৪. ফাইল সেভ করা (মেসেজ সহ)
git commit -m "প্রথম সেভ করলাম"

# ৫. স্ট্যাটাস দেখা (কোন ফাইল বাকি আছে কিনা)
git status

# ৬. গিটহাবে পাঠানো (আপলোড)
git push origin main
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">ইন্টারঅ্যাকটিভ টার্মিনাল (Practice Zone)</h3>
                <p>নিচে একটি নকল টার্মিনাল দেওয়া হলো। এখানে <code>git init</code> লিখে <strong>Enter</strong> চাপুন এবং দেখুন কি হয়।</p>

                <div class="output-box" style="background: #000; color: #0f0; font-family: 'Courier New', monospace; padding: 15px; border-radius: 5px; border: 2px solid #333;">
                    <div id="terminalOutput" style="margin-bottom: 10px;">
                        Microsoft Windows [Version 10.0.19045]<br>
                        (c) Microsoft Corporation. All rights reserved.<br><br>
                        C:\\Users\\Monjurul\\Project> <span class="blink">_</span>
                    </div>
                    <input type="text" id="terminalInput" placeholder="এখানে কমান্ড লিখুন..." autocomplete="off"
                        onkeydown="handleTerminal(event)"
                        style="width: 100%; background: transparent; border: none; color: white; outline: none; font-family: 'Courier New', monospace;"
                    >
                </div>

                <script>
                    // টার্মিনাল লজিক (সিমুলেশন)
                    function handleTerminal(e) {
                        if(e.key === 'Enter') {
                            let val = e.target.value.trim().toLowerCase();
                            let output = document.getElementById('terminalOutput');
                            
                            // ইউজারের কমান্ড দেখানো
                            output.innerHTML += '<br>C:\\\\Users\\\\Monjurul\\\\Project> ' + val;

                            // রেসপন্স লজিক
                            if(val === 'git init') {
                                output.innerHTML += '<br><span style="color: yellow;">Initialized empty Git repository in C:/Users/Monjurul/Project/.git/</span><br>';
                            } 
                            else if(val === 'git status') {
                                output.innerHTML += '<br><span style="color: cyan;">On branch main<br>No commits yet<br>nothing to commit</span><br>';
                            }
                            else if(val.startsWith('git add')) {
                                output.innerHTML += '<br>Files added to staging area.<br>';
                            }
                            else if(val.startsWith('git commit')) {
                                output.innerHTML += '<br>[main (root-commit) 1a2b3c] ' + val + '<br> 2 files changed, 10 insertions(+)<br>';
                            }
                            else {
                                output.innerHTML += '<br><span style="color: red;">\' ' + val + ' \' is not recognized as an internal or external command.</span><br>';
                            }
                            
                            // ইনপুট ক্লিয়ার এবং স্ক্রল নিচে নামানো
                            e.target.value = '';
                            let box = document.querySelector('.output-box');
                            box.scrollTop = box.scrollHeight;
                        }
                    }
                </script>

                <h3 style="color: var(--primary); margin-top: 20px;">কেন এটি ক্যারিয়ারের জন্য জরুরি?</h3>
                <p>আপনি যখন কোনো কোম্পানিতে চাকরি করবেন, তখন আপনি একা কাজ করবেন না। টিমের ১০ জন মিলে একই প্রজেক্টে কাজ করবেন। তখন Git ছাড়া কাজ করা অসম্ভব। তাছাড়া আপনার GitHub প্রোফাইলই হলো আপনার <strong>পোর্টফোলিও বা সিভি</strong>। ভালো কোম্পানিরা আপনার সার্টিফিকেটের চেয়ে আপনার GitHub প্রোফাইল দেখতে বেশি পছন্দ করে।</p>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #15 (অনুশীলন):</strong><br>
                    "Write a clear step-by-step guide on how to push a local folder to a new GitHub repository for the first time. Include commands for 'remote add' and explaining what 'origin' means."
                </div>
            </div>
        `
    },
    {
        id: 16,
        title: "অধ্যায় ১৬: আপনার ওয়েবসাইট লাইভ করুন (Hosting & Deployment)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আপনার কম্পিউটারের হার্ডড্রাইভে পড়ে থাকা ওয়েবসাইটটি আপনি ছাড়া আর কেউ দেখতে পাচ্ছে না। বন্ধুদের বা ক্লায়েন্টকে দেখাতে হলে এটিকে ইন্টারনেটে তুলতে হবে। এই প্রক্রিয়াকেই বলা হয় <strong>Hosting বা Deployment</strong>।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">ডোমেইন ও হোস্টিং কী?</h3>
                <ul style="margin-left: 20px; list-style-type: none; margin-top: 10px;">
                    <li style="margin-bottom: 10px;">🏠 <strong>হোস্টিং (Hosting):</strong> ইন্টারনেটে আপনার ওয়েবসাইটের ফাইলগুলো রাখার জায়গা (জমি)।</li>
                    <li style="margin-bottom: 10px;">🏷️ <strong>ডোমেইন (Domain):</strong> আপনার ওয়েবসাইটের নাম বা ঠিকানা (যেমন: google.com)।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">ফ্রিতে ওয়েবসাইট লাইভ করার উপায়</h3>
                <p>নতুন ডেভেলপার হিসেবে হোস্টিং কেনার দরকার নেই। সেরা তিনটি ফ্রি মাধ্যম হলো:</p>
                <ol style="margin-left: 20px; margin-top: 10px;">
                    <li><strong>GitHub Pages:</strong> গিটহাব রিপোজিটরি থেকে সরাসরি লাইভ করা যায়।</li>
                    <li><strong>Netlify:</strong> ফোল্ডার ড্র্যাগ-এন্ড-ড্রপ করেই সাইট লাইভ করা যায়।</li>
                    <li><strong>Vercel:</strong> আধুনিক ফ্রেমওয়ার্ক (React, Next.js) এর জন্য সেরা।</li>
                </ol>

                <h3 style="color: var(--primary); margin-top: 20px;">ডিপ্লয়মেন্ট সিমুলেটর (Live Demo)</h3>
                <p>নিচে একটি সিমুলেশন দেওয়া হলো। দেখুন কিভাবে ফাইল আপলোড হয়ে একটি লাইভ লিংক তৈরি হয়। <strong>"Deploy Now"</strong> বাটনে ক্লিক করুন।</p>

                <div class="output-box" style="text-align: center; padding: 30px;">
                    <div id="uploadArea" style="border: 2px dashed #555; padding: 20px; border-radius: 10px; margin-bottom: 20px; transition: 0.3s;">
                        <i class="fas fa-cloud-upload-alt" style="font-size: 40px; color: #888;"></i>
                        <p style="color: #aaa;">আপনার প্রজেক্ট ফোল্ডার আপলোড হচ্ছে...</p>
                    </div>

                    <div id="progressBarContainer" style="width: 100%; background: #333; height: 10px; border-radius: 5px; display: none; margin-bottom: 20px; overflow: hidden;">
                        <div id="progressBar" style="width: 0%; height: 100%; background: linear-gradient(90deg, #00e5ff, #2979ff); transition: width 0.1s;"></div>
                    </div>

                    <div id="successMsg" style="display: none;">
                        <h3 style="color: #00e5ff;">🎉 অভিনন্দন! আপনার সাইট লাইভ হয়েছে।</h3>
                        <p>আপনার লাইভ লিংক:</p>
                        <a href="#" style="color: #ff5722; font-weight: bold; text-decoration: underline;">https://mh-academy-student.netlify.app</a>
                    </div>

                    <button id="deployBtn" onclick="simulateDeploy()" style="padding: 12px 30px; background: #28a745; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; font-size: 16px;">
                        🚀 Deploy Now
                    </button>
                </div>

                <script>
                    function simulateDeploy() {
                        const btn = document.getElementById('deployBtn');
                        const area = document.getElementById('uploadArea');
                        const progressContainer = document.getElementById('progressBarContainer');
                        const bar = document.getElementById('progressBar');
                        const success = document.getElementById('successMsg');

                        btn.style.display = 'none'; // বাটন লুকাও
                        area.style.borderColor = '#00e5ff';
                        area.innerHTML = '<i class="fas fa-cog fa-spin" style="font-size: 40px; color: #00e5ff;"></i><p style="color: #fff;">বিল্ডিং হচ্ছে...</p>';
                        
                        progressContainer.style.display = 'block';

                        let width = 0;
                        let interval = setInterval(() => {
                            if (width >= 100) {
                                clearInterval(interval);
                                area.style.display = 'none';
                                progressContainer.style.display = 'none';
                                success.style.display = 'block';
                            } else {
                                width++;
                                bar.style.width = width + '%';
                            }
                        }, 30); // স্পিড কন্ট্রোল
                    }
                </script>

                <h3 style="color: var(--primary); margin-top: 20px;">GitHub Pages গাইড</h3>
                <p>১. আপনার গিটহাব রিপোজিটরিতে যান।<br>
                ২. <strong>Settings</strong> > <strong>Pages</strong> এ ক্লিক করুন।<br>
                ৩. Branch হিসেবে <code>main</code> সিলেক্ট করে Save দিন।<br>
                ৪. ১-২ মিনিট পর আপনি একটি লিংক পাবেন।</p>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #16 (অনুশীলন):</strong><br>
                    "I have a static HTML/CSS website. Explain step-by-step how to host it for free using Netlify Drop simply by dragging the folder."
                </div>
            </div>
        `
    },
    {
        id: 17,
        title: "অধ্যায় ১৭: সার্জারির সরঞ্জাম (Chrome DevTools)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                আপনি অনেক সুন্দর কোড লিখলেন, কিন্তু আউটপুট আসছে না। কোথায় ভুল হলো? এটি খুঁজে বের করার জন্য ব্রাউজারের নিজস্ব একটি ল্যাবরেটরি আছে। একে বলা হয় <strong>Developer Tools</strong> বা সংক্ষেপে DevTools। কিবোর্ডের <code>F12</code> বা <code>Ctrl+Shift+I</code> চাপলেই এটি জিনের মতো বেরিয়ে আসে।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">DevTools এর প্রধান ৪টি অস্ত্র</h3>
                <ul style="margin-left: 20px; list-style-type: none; margin-top: 10px;">
                    <li style="margin-bottom: 10px;">🔍 <strong>Elements:</strong> এখান থেকে আপনি HTML/CSS লাইভ এডিট করতে পারেন। কোনো কোড না লিখেই ওয়েবসাইটে রং বা সাইজ পরিবর্তন করে পরীক্ষা করা যায়।</li>
                    <li style="margin-bottom: 10px;">🐞 <strong>Console:</strong> জাভাস্ক্রিপ্টের কোনো ভুল (Error) থাকলে এখানে লাল কালিতে দেখায়। এছাড়া <code>console.log()</code> এর আউটপুট এখানে দেখা যায়।</li>
                    <li style="margin-bottom: 10px;">📱 <strong>Device Mode:</strong> আপনার সাইটটি মোবাইল বা ট্যাবে কেমন দেখাবে তা চেক করা যায়।</li>
                    <li style="margin-bottom: 10px;">🌐 <strong>Network:</strong> ওয়েবসাইট লোড হতে কত সময় নিচ্ছে এবং কোনো ছবি মিসিং আছে কিনা তা দেখা যায়।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">ডিবাগিং ল্যাব (Console Simulator)</h3>
                <p>ধরুন নিচের কোডটিতে একটি ভুল আছে। সাধারণ চোখে ধরা কঠিন, কিন্তু কনসোল ট্যাবে এটি ধরা পড়বে। <strong>"কোড রান করুন"</strong> বাটনে চাপ দিন।</p>

                <div class="code-block">
let x = 10;
let y = 20;
// ভুল: 'z' ডিফাইন করা হয়নি
console.log(x + y + z); 
                </div>

                <div class="output-box" style="background: #2b2b2b; color: #ccc; font-family: monospace; padding: 10px; border-radius: 5px;">
                    <div id="consoleDisplay" style="min-height: 40px; margin-bottom: 10px;">
                        <span style="color: #666;">> কনসোল রেডি...</span>
                    </div>
                    <button onclick="runBadCode()" style="padding: 5px 15px; background: #ff5722; color: white; border: none; cursor: pointer; font-size: 12px;">▶ কোড রান করুন</button>
                    <button onclick="fixCode()" style="padding: 5px 15px; background: #28a745; color: white; border: none; cursor: pointer; font-size: 12px; margin-left: 5px;">🛠️ ফিক্স করুন</button>
                </div>

                <script>
                    function runBadCode() {
                        const display = document.getElementById('consoleDisplay');
                        display.innerHTML += '<br><span style="color: #ff4d4d;">❌ Uncaught ReferenceError: z is not defined at line 3</span>';
                    }
                    function fixCode() {
                         const display = document.getElementById('consoleDisplay');
                         display.innerHTML += '<br><span style="color: #00e5ff;">program.js:3</span> <span style="color: #fff;">35</span> (z = 5 ধরে ফিক্স করা হয়েছে)';
                    }
                </script>

                <h3 style="color: var(--primary); margin-top: 20px;">টিপস: কিভাবে দ্রুত বাগ ধরবেন?</h3>
                <p>সবসময় কোডের মাঝে মাঝে <code>console.log('Test')</code> ব্যবহার করবেন। তাহলে বুঝতে পারবেন কোডটি আসলে কতদূর পর্যন্ত কাজ করছে।</p>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #17 (অনুশীলন):</strong><br>
                    "Explain how to use Chrome DevTools 'Inspect Element' feature to modify CSS temporarily. Also, explain what 'margin', 'border', and 'padding' look like in the 'Computed' tab."
                </div>
            </div>
        `
    },
    {
        id: 18,
        title: "অধ্যায় ১৮: CSS এর সুপারপাওয়ার (SASS/SCSS)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                সাধারণ CSS এ একই কালার কোড বা ফন্ট বারবার লিখতে হয়। কোড অনেক বড় হয়ে গেলে খুঁজে পাওয়া কঠিন হয়। <strong>SASS (Syntactically Awesome Style Sheets)</strong> এই সমস্যার সমাধান। এটি একটি প্রি-প্রসেসর, অর্থাৎ আপনি SASS এ কোড লিখবেন, আর একটি সফটওয়্যার সেটাকে সাধারণ CSS এ কনভার্ট করে ব্রাউজারকে দেবে।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">SASS এর ৩টি জাদুকরী ফিচার</h3>

                <h4>১. ভেরিয়েবল (Variables)</h4>
                <p>বারবার <code>#ff5722</code> না লিখে আপনি একটি ভেরিয়েবল বানিয়ে পুরো প্রজেক্টে ব্যবহার করতে পারেন।</p>
                <div class="code-block">
/* SCSS কোড */
$main-color: #00e5ff;
$bg-dark: #333;

body {
    background: $bg-dark;
    color: $main-color;
}
                </div>

                <h4>২. নেস্টিং (Nesting)</h4>
                <p>HTML এর মতো CSS কেও একটার ভেতরে আরেকটা লেখা যায়। এতে কোড দেখতে খুব পরিষ্কার লাগে।</p>
                <div class="code-block">
/* সাধারণ CSS */
.navbar { background: black; }
.navbar ul { margin: 0; }
.navbar li { display: inline; }

/* SCSS (Nesting) - অনেক স্মার্ট! */
.navbar {
    background: black;
    ul {
        margin: 0;
        li {
            display: inline;
        }
    }
}
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ কম্পাইলার ডেমো</h3>
                <p>নিচে দেখুন SCSS লিখলে সেটা কিভাবে সাধারণ CSS এ রূপান্তরিত হয়।</p>

                <div class="output-box" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <div>
                        <strong style="color: #ff57dd;">SCSS ইনপুট:</strong>
                        <div style="background: #1e1e1e; padding: 10px; font-size: 12px; color: #d4d4d4; border-radius: 5px; height: 120px; font-family: monospace;">
                            $theme: tomato;<br>
                            <br>
                            button {<br>
                            &nbsp;&nbsp;background: $theme;<br>
                            &nbsp;&nbsp;&:hover {<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;opacity: 0.8;<br>
                            &nbsp;&nbsp;}<br>
                            }
                        </div>
                    </div>
                    <div>
                        <strong style="color: #00e5ff;">CSS আউটপুট (ব্রাউজার যা দেখে):</strong>
                        <div style="background: #1e1e1e; padding: 10px; font-size: 12px; color: #fff; border-radius: 5px; height: 120px; font-family: monospace; border: 1px dashed #555;">
                            <br>
                            button {<br>
                            &nbsp;&nbsp;background: tomato;<br>
                            }<br>
                            button:hover {<br>
                            &nbsp;&nbsp;opacity: 0.8;<br>
                            }
                        </div>
                    </div>
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">মিক্সিন (Mixins) - কোড রিইউজ</h3>
                <p>আপনি ফাংশনের মতো স্টাইল বানিয়ে রাখতে পারেন এবং দরকার মতো কল করতে পারেন।</p>
                <div class="code-block">
@mixin flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.box {
    @include flexCenter; /* এক লাইনেই ৩ লাইনের কাজ শেষ! */
    width: 100px;
}
                </div>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #18 (অনুশীলন):</strong><br>
                    "Convert the following CSS to SCSS using Nesting and Variables: <br>
                    <code>.card { width: 300px; } .card .header { background: red; } .card .body { padding: 20px; }</code>"
                </div>
            </div>
        `
    },
    {
        id: 19,
        title: "অধ্যায় ১৯: আধুনিক ডেভেলপমেন্টের ইঞ্জিন (Node.js & NPM)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                গাড়ি চালাতে যেমন ইঞ্জিন লাগে, তেমনি আধুনিক জাভাস্ক্রিপ্ট টুলস (যেমন: React, Tailwind) চালাতে **Node.js** লাগে। আর **NPM (Node Package Manager)** হলো একটি বিশাল সুপারমার্কেট, যেখানে লক্ষ লক্ষ ফ্রি কোড প্যাকেজ পাওয়া যায়। অন্যের লেখা কোড ডাউনলোড করে নিজের প্রজেক্টে ব্যবহার করাই এর কাজ।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">package.json: প্রজেক্টের আইডি কার্ড</h3>
                <p>যেকোনো মডার্ন প্রজেক্টে একটি <code>package.json</code> ফাইল থাকে। এটি হলো আপনার প্রজেক্টের শপিং লিস্ট। আপনি কি কি প্যাকেজ ইনস্টল করেছেন, তার তালিকা এখানে থাকে।</p>

                <div class="code-block">
{
  "name": "my-awesome-project",
  "version": "1.0.0",
  "dependencies": {
    "bootstrap": "^5.3.0",
    "react": "^18.2.0"
  }
}
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">টার্মিনাল সিমুলেটর: প্যাকেজ ইনস্টলেশন</h3>
                <p>নিচে একটি লাইভ টার্মিনাল দেওয়া হলো। আমরা এখানে জনপ্রিয় অ্যানিমেশন লাইব্রেরি <strong>'animate.css'</strong> ইনস্টল করব। কমান্ডটি টাইপ করে এন্টার দিন।</p>
                <p style="color: #aaa; font-size: 14px;">কমান্ড: <code>npm install animate.css</code></p>

                <div class="output-box" style="background: #1e1e1e; border: 1px solid #333; font-family: 'Courier New', monospace; padding: 15px; border-radius: 6px;">
                    <div id="npmOutput" style="color: #ccc; margin-bottom: 10px; min-height: 40px;">
                        C:\\Users\\Dev\\Project> <span class="blink">_</span>
                    </div>
                    
                    <input type="text" id="npmInput" placeholder="এখানে কমান্ড লিখুন..." autocomplete="off"
                        onkeydown="handleNpmCommand(event)"
                        style="width: 100%; background: transparent; border: none; color: #00e5ff; outline: none; font-weight: bold;"
                    >
                </div>

                <div id="npmDemoBox" style="margin-top: 20px; display: none; text-align: center; border: 1px dashed var(--primary); padding: 20px; border-radius: 10px;">
                    <h3 class="animate__animated animate__bounce infinite" style="color: #ff5722;">🎉 অভিনন্দন!</h3>
                    <p>প্যাকেজ ইনস্টল সফল হয়েছে। উপরের লেখাটি এখন লাফাচ্ছে (Bouncing) কারণ আমরা 'animate.css' ব্যবহার করছি।</p>
                </div>

                <script>
                    function handleNpmCommand(e) {
                        if(e.key === 'Enter') {
                            const val = e.target.value.trim();
                            const output = document.getElementById('npmOutput');
                            
                            output.innerHTML = 'C:\\\\Users\\\\Dev\\\\Project> ' + val;

                            if(val === 'npm install animate.css' || val === 'npm i animate.css') {
                                output.innerHTML += '<br><span style="color: yellow;">Running...</span><br>';
                                
                                // ফেইক লোডিং ইফেক্ট
                                setTimeout(() => {
                                    output.innerHTML += '<span style="color: #aaa;">[..................] 10%</span><br>';
                                }, 500);
                                setTimeout(() => {
                                    output.innerHTML += '<span style="color: #aaa;">[##########........] 50%</span><br>';
                                }, 1000);
                                setTimeout(() => {
                                    output.innerHTML += '<span style="color: #0f0;">+ animate.css@4.1.1</span><br><span style="color: #0f0;">added 1 package in 2s</span><br><br>C:\\\\Users\\\\Dev\\\\Project> ';
                                    document.getElementById('npmDemoBox').style.display = 'block';
                                }, 2000);
                            } else {
                                output.innerHTML += '<br><span style="color: red;">Error: Command not found or try "npm install animate.css"</span><br><br>C:\\\\Users\\\\Dev\\\\Project> ';
                            }
                            e.target.value = '';
                        }
                    }
                </script>

                <h3 style="color: var(--primary); margin-top: 20px;">কেন এটি শিখব?</h3>
                <ul style="margin-left: 20px; list-style-type: disc; margin-top: 10px;">
                    <li>React, Vue, Angular শিখতে এটি ১০০০% জরুরি।</li>
                    <li>প্রজেক্ট সেটআপ করতে <code>npm init</code> কমান্ড লাগে।</li>
                    <li>সার্ভার রান করতে <code>npm start</code> কমান্ড লাগে।</li>
                </ul>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #19 (অনুশীলন):</strong><br>
                    "Explain the difference between 'dependencies' and 'devDependencies' in a package.json file with real-world examples (like React vs Jest)."
                </div>
            </div>
        `
    },
    {
        id: 20,
        title: "অধ্যায় ২০: আধুনিক ফ্রন্টএন্ডের রাজা (React.js পরিচিতি)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                সাধারণ এইচটিএমএল দিয়ে বড় ওয়েবসাইট বানাতে গেলে কোড জগাখিচুড়ি হয়ে যায়। <strong>React.js</strong> আমাদের শেখায় কিভাবে ওয়েবসাইটকে ছোট ছোট টুকরো বা <strong>Component</strong> এ ভাগ করে বানাতে হয়। এটি অনেকটা LEGO গেমের মতো। ছোট ছোট ব্লক জোড়া দিয়ে পুরো ওয়েবসাইট তৈরি হয়।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">কেন React সেরা?</h3>
                <ul style="margin-left: 20px; list-style-type: disc; margin-top: 10px;">
                    <li><strong>Component Based:</strong> একবার বাটন বানিয়ে হাজারবার ব্যবহার করা যায়।</li>
                    <li><strong>Virtual DOM:</strong> এটি পুরো পেজ রিলোড না দিয়ে শুধু যেটুকু পরিবর্তন দরকার, সেটুকুই আপডেট করে। তাই এটি রকেটের মতো ফাস্ট।</li>
                    <li><strong>চাহিদা:</strong> বর্তমানে ফ্রন্টএন্ড চাকরির বাজারে React এর দাপট সবচেয়ে বেশি।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">JSX: জাভাস্ক্রিপ্টের পেটে HTML</h3>
                <p>React এ আমরা জাভাস্ক্রিপ্টের ভেতরেই HTML লিখি। একে বলা হয় <strong>JSX</strong>। দেখতে অদ্ভুত হলেও এটি খুব শক্তিশালী।</p>

                <div class="code-block">
// React Component এর উদাহরণ
function LikeButton() {
    const [likes, setLikes] = useState(0); // ডাটা (State)

    return (
        &lt;button onClick={() => setLikes(likes + 1)}&gt;
            👍 লাইক দিয়েছেন {likes} জন
        &lt;/button&gt;
    );
}
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ ডেমো: React এর ক্ষমতা (Simulated)</h3>
                <p>নিচের উদাহরণটি দেখুন। সাধারণ জাভাস্ক্রিপ্টে আমাদের ম্যানুয়ালি খুঁজে বের করে আপডেট করতে হয়। কিন্তু React এ শুধু ভেরিয়েবল (State) পরিবর্তন করলেই স্ক্রিন অটোমেটিক আপডেট হয়ে যায়।</p>

                <div class="output-box" style="text-align: center; padding: 30px;">
                    <h2 id="reactCountDisplay" style="font-size: 40px; margin: 0; color: #00e5ff;">0</h2>
                    <p style="color: #aaa;">টি লাইক</p>
                    
                    <div style="margin-top: 20px;">
                        <button onclick="updateReactState(1)" style="padding: 10px 20px; font-size: 18px; border: none; background: #2979ff; color: white; border-radius: 50px; cursor: pointer; margin: 5px; transition: 0.2s;">
                            👍 লাইক দিন
                        </button>
                        <button onclick="updateReactState(-1)" style="padding: 10px 20px; font-size: 18px; border: none; background: #ff5722; color: white; border-radius: 50px; cursor: pointer; margin: 5px; transition: 0.2s;">
                            👎 আনলাইক
                        </button>
                    </div>
                </div>

                <script>
                    // React State সিমুলেশন
                    let count = 0;
                    function updateReactState(val) {
                        count += val;
                        if(count < 0) count = 0;
                        
                        // React ঠিক এই কাজটিই অটোমেটিক করে দেয়
                        document.getElementById('reactCountDisplay').innerText = count;
                        
                        // একটু এনিমেশন ইফেক্ট
                        const display = document.getElementById('reactCountDisplay');
                        display.style.transform = "scale(1.2)";
                        setTimeout(() => {
                            display.style.transform = "scale(1)";
                        }, 100);
                    }
                </script>

                <h3 style="color: var(--primary); margin-top: 20px;">React শিখতে কি কি লাগবে?</h3>
                <p>React শুরু করার আগে আপনাকে অবশ্যই জানতে হবে:</p>
                <ol style="margin-left: 20px;">
                    <li>HTML & CSS (মোটামুটি)</li>
                    <li>JavaScript (ES6 Features - যা আমরা অধ্যায় ১২ তে শিখেছি)</li>
                </ol>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #20 (অনুশীলন):</strong><br>
                    "Write a functional React component named 'ProfileCard'. It should accept 'name' and 'job' as props and display them inside a styled div card."
                </div>
            </div>
        `
    },
    {
        id: 21,
        title: "অধ্যায় ২১: রিঅ্যাক্ট হুকস (Hooks) এর জাদু",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                ফাংশনাল কম্পোনেন্ট আগে ছিল সাধারণ বোকা ফাংশন। কিন্তু <strong>Hooks</strong> আসার পর এরা সুপারপাওয়ার পেয়েছে। হুকস হলো বিশেষ ফাংশন যা আপনাকে রিঅ্যাক্টের ফিচারগুলো (state, lifecycle) ব্যবহার করতে দেয়।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">১. useState (কম্পোনেন্টের মেমোরি)</h3>
                <p>সাধারণ ভেরিয়েবল ডাটা মনে রাখতে পারে না, রিফ্রেশ হলেই সব ভুলে যায়। কিন্তু <code>useState</code> ডাটা ধরে রাখে এবং ডাটা বদলালে স্ক্রিন আপডেট করে।</p>
                <div class="code-block">
const [count, setCount] = useState(0);

// ব্যবহার:
// count = বর্তমান মান (0)
// setCount = মান বদলানোর সুইচ
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">২. useEffect (পার্শ্বপ্রতিক্রিয়া)</h3>
                <p>স্ক্রিন লোড হওয়ার পর বা কোনো ডাটা বদলানোর পর যদি আপনি কিছু করতে চান (যেমন: সার্ভার থেকে ডাটা আনা, টাইটেল বদলানো), তবে <code>useEffect</code> ব্যবহার করতে হবে।</p>

                <div class="code-block">
useEffect(() => {
    console.log("প্রতিবার রেন্ডারের পর আমি রান হবো!");
}, [count]); // শুধু 'count' বদলালেই রান হবে
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ ল্যাব: হুকস সিমুলেশন</h3>
                <p>নিচে একটি ডিজিটাল ঘড়ি এবং একটি কাউন্টার আছে। ঘড়িটি <code>useEffect</code> এর টাইমার দিয়ে চলছে, আর কাউন্টারটি <code>useState</code> দিয়ে ডাটা মনে রাখছে।</p>

                <div class="output-box" style="text-align: center; border: 1px solid #334155; padding: 20px; border-radius: 10px;">
                    <div style="margin-bottom: 20px; border-bottom: 1px dashed #555; padding-bottom: 20px;">
                        <span style="color: #aaa; font-size: 12px;">useEffect Demo (Timer)</span>
                        <h2 id="hookClock" style="font-family: monospace; color: #00e5ff; font-size: 30px;">00:00:00</h2>
                    </div>

                    <div>
                        <span style="color: #aaa; font-size: 12px;">useState Demo (Counter)</span>
                        <h1 id="hookCount" style="font-size: 40px; margin: 5px 0;">0</h1>
                        <button onclick="hookIncrement()" style="padding: 8px 20px; background: var(--secondary); color: white; border: none; border-radius: 5px; cursor: pointer;">
                            ➕ বাড়ান (Update State)
                        </button>
                    </div>
                </div>

                <script>
                    // useEffect Simulation (Clock)
                    function startClock() {
                        const clockEl = document.getElementById('hookClock');
                        if(clockEl) {
                            const now = new Date();
                            clockEl.innerText = now.toLocaleTimeString();
                        }
                    }
                    setInterval(startClock, 1000); // প্রতি ১ সেকেন্ডে কল হবে
                    startClock(); // প্রথমবার কল

                    // useState Simulation (Counter)
                    let stateCount = 0;
                    function hookIncrement() {
                        stateCount++; // setState(count + 1)
                        document.getElementById('hookCount').innerText = stateCount;
                        
                        // Visual Effect
                        document.getElementById('hookCount').style.color = '#ff5722';
                        setTimeout(() => {
                            document.getElementById('hookCount').style.color = '#fff';
                        }, 200);
                    }
                </script>

                <h3 style="color: var(--primary); margin-top: 20px;">Hooks এর নিয়ম (Rules of Hooks)</h3>
                <ul style="margin-left: 20px; list-style-type: square; margin-top: 10px;">
                    <li>Hooks সবসময় কম্পোনেন্টের <strong>একদম উপরে</strong> কল করতে হবে।</li>
                    <li>কোনো লুপ বা শর্তের (if-else) ভেতরে Hooks লেখা যাবে না।</li>
                </ul>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #21 (অনুশীলন):</strong><br>
                    "Write a React functional component that uses 'useEffect' to fetch data from an API when the component mounts, and 'useState' to store and display that data."
                </div>
            </div>
        `
    },
    {
        id: 22,
        title: "অধ্যায় ২২: এক পেজেই সব দুনিয়া (React Router)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                সাধারণ ওয়েবসাইটে এক পেজ থেকে আরেক পেজে গেলে পুরো ওয়েবসাইট নতুন করে লোড হয়, সাদা স্ক্রিন দেখা যায়। কিন্তু ফেসবুকে নোটিফিকেশন বা মেসেজে ক্লিক করলে কি পেজ রিফ্রেশ হয়? না! শুধু মাঝখানের অংশটুকু বদলে যায়। একে বলা হয় <strong>SPA (Single Page Application)</strong>। আর React এ এটি করার জন্য <code>react-router-dom</code> প্যাকেজটি ব্যবহার করা হয়।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">Link vs Anchor Tag</h3>
                <p>React এ আমরা পেজ বদলানোর জন্য <code>&lt;a href="..."&gt;</code> ব্যবহার করি না, কারণ এটি পেজ রিফ্রেশ করে দেয়। এর বদলে আমরা ব্যবহার করি <strong>Link</strong> কম্পোনেন্ট।</p>
                
                <div class="code-block">
import { Link } from 'react-router-dom';

// ভুল পদ্ধতি (পেজ রিফ্রেশ হবে)
<a href="/about">About Us</a>

// সঠিক পদ্ধতি (ম্যাজিকের মতো কাজ করবে)
<Link to="/about">About Us</Link>
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">রাউটিং সেটআপ (Code Structure)</h3>
                <p>পুরো অ্যাপকে রাউটারের ভেতরে মুড়িয়ে দিতে হয়।</p>
                <div class="code-block">
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ ডেমো: SPA সিমুলেশন</h3>
                <p>নিচের মেনুগুলোতে ক্লিক করুন। লক্ষ্য করুন, পেজ রিফ্রেশ হচ্ছে না, কিন্তু কন্টেন্ট এবং URL (কাল্পনিক) বদলে যাচ্ছে।</p>

                <div class="output-box" style="padding: 0; overflow: hidden; border: 1px solid #333;">
                    <div style="background: #111; padding: 10px; border-bottom: 1px solid #333; display: flex; align-items: center; gap: 10px;">
                        <div style="display: flex; gap: 5px;">
                            <div style="width: 10px; height: 10px; border-radius: 50%; background: #ff5f56;"></div>
                            <div style="width: 10px; height: 10px; border-radius: 50%; background: #ffbd2e;"></div>
                            <div style="width: 10px; height: 10px; border-radius: 50%; background: #27c93f;"></div>
                        </div>
                        <div style="background: #000; color: #aaa; padding: 2px 10px; border-radius: 3px; font-size: 10px; width: 100%; text-align: center;">
                            localhost:3000<span id="routerUrl" style="color: white;">/home</span>
                        </div>
                    </div>

                    <nav style="background: #1e293b; padding: 10px; display: flex; justify-content: center; gap: 20px;">
                        <button onclick="routerNav('home')" class="router-link active-link">Home</button>
                        <button onclick="routerNav('about')" class="router-link">About</button>
                        <button onclick="routerNav('contact')" class="router-link">Contact</button>
                    </nav>

                    <div id="routerView" style="padding: 30px; text-align: center; height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center; transition: 0.3s;">
                        <h2 style="color: #00e5ff;">🏠 হোম পেজ</h2>
                        <p>স্বাগতম! এটি আমাদের মূল পাতা।</p>
                    </div>
                </div>

                <style>
                    .router-link { background: none; border: none; color: #aaa; cursor: pointer; font-weight: bold; font-size: 14px; }
                    .router-link:hover { color: white; }
                    .active-link { color: #00e5ff; border-bottom: 2px solid #00e5ff; }
                </style>

                <script>
                    function routerNav(page) {
                        const view = document.getElementById('routerView');
                        const url = document.getElementById('routerUrl');
                        const links = document.querySelectorAll('.router-link');
                        
                        // লিংক হাইলাইট লজিক
                        links.forEach(l => l.classList.remove('active-link'));
                        event.target.classList.add('active-link');

                        // পেজ চেঞ্জ লজিক (Simulated)
                        view.style.opacity = 0;
                        setTimeout(() => {
                            if(page === 'home') {
                                view.innerHTML = '<h2 style="color: #00e5ff;">🏠 হোম পেজ</h2><p>স্বাগতম! এটি আমাদের মূল পাতা।</p>';
                                url.innerText = '/home';
                            } else if(page === 'about') {
                                view.innerHTML = '<h2 style="color: #ffbd2e;">ℹ️ আমাদের সম্পর্কে</h2><p>আমরা ওয়েব ডেভেলপমেন্ট শেখাই।</p>';
                                url.innerText = '/about';
                            } else if(page === 'contact') {
                                view.innerHTML = '<h2 style="color: #27c93f;">📞 যোগাযোগ</h2><p>ইমেইল করুন: demo@example.com</p>';
                                url.innerText = '/contact';
                            }
                            view.style.opacity = 1;
                        }, 200);
                    }
                </script>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #22 (অনুশীলন):</strong><br>
                    "Create a React Router setup with 3 pages: Dashboard, Profile, and Settings. Create a navigation bar where clicking 'Profile' changes the URL to '/profile' and shows the Profile component without reloading the page."
                </div>
            </div>
        `
    },
    {
        id: 23,
        title: "অধ্যায় ২৩: ডাটা যখন সবার (React Context API)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                ধরুন, দাদাজান (Grandparent) তার নাতিকে (Child) ১০০ টাকা দিতে চান। তিনি প্রথমে টাকাটা বাবাকে দিলেন, বাবা সেটা নাতিকে দিলেন। এটা ঝামেলার কাজ। <strong>Context API</strong> হলো ডিজিটাল ব্যাংকিংয়ের মতো—দাদাজান সরাসরি নাতির একাউন্টে টাকা পাঠিয়ে দেবেন, বাবাকে ডাকার দরকার নেই।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">Prop Drilling সমস্যা</h3>
                <p>বড় প্রজেক্টে যখন ৫-৬ লেভেল নিচে ডাটা পাঠাতে হয়, তখন কোড নোংরা হয়ে যায়। Context API এই সমস্যার সমাধান করে গ্লোবাল ডাটা স্টোর তৈরি করে।</p>

                <h3 style="color: var(--primary); margin-top: 20px;">কিভাবে ব্যবহার করবেন? (৩টি ধাপ)</h3>
                <ul style="margin-left: 20px; list-style-type: none; margin-top: 10px;">
                    <li>1️⃣ <strong>Create Context:</strong> একটি ডাটার গুদাম তৈরি করা।</li>
                    <li>2️⃣ <strong>Provider:</strong> অ্যাপের সবাইকে জানিয়ে দেওয়া যে গুদাম খোলা আছে।</li>
                    <li>3️⃣ <strong>useContext:</strong> যার যার দরকার সে সরাসরি ডাটা নিয়ে নেবে।</li>
                </ul>

                <div class="code-block">
import { useContext, createContext } from 'react';

// ১. গুদাম তৈরি
const UserContext = createContext();

function App() {
  return (
    // ২. সবাইকে অ্যাক্সেস দেওয়া (Provider)
    &lt;UserContext.Provider value="মঞ্জুরুল"&gt;
      &lt;Navbar /&gt;
    &lt;/UserContext.Provider&gt;
  );
}

function Navbar() {
  // ৩. সরাসরি ডাটা ব্যবহার (useContext)
  const user = useContext(UserContext);
  return &lt;h1&gt;স্বাগতম, {user}&lt;/h1&gt;;
}
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ ভিজ্যুয়ালাইজেশন</h3>
                <p>নিচের ডায়াগ্রামে দেখুন। <strong>"Grandparent"</strong> এর কাছে একটি কালার আছে। মাঝখানের <strong>"Parent"</strong> কে না জানিয়েই একদম ভেতরের <strong>"Child"</strong> সেই কালারটি ব্যবহার করছে।</p>

                <div class="output-box" style="padding: 20px; text-align: center;">
                    <div id="gpBox" style="border: 2px dashed #555; padding: 20px; border-radius: 10px;">
                        <span style="background: #333; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Grandparent (Provider)</span>
                        <p>Global Color: <strong id="globalColor" style="color: #00e5ff;">Blue (#00e5ff)</strong></p>
                        
                        <div style="border: 2px solid #444; margin: 20px; padding: 20px; border-radius: 8px;">
                            <span style="background: #333; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Parent (No Props Passed)</span>
                            <p style="font-size: 12px; color: #aaa;">আমি শুধু মাঝখানে বসে আছি, ডাটা ধরছি না।</p>

                            <div style="border: 2px solid var(--primary); margin: 10px; padding: 20px; border-radius: 8px; transition: 0.3s;" id="childBox">
                                <span style="background: var(--primary); color: black; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">Child (Consumer)</span>
                                <br><br>
                                <button onclick="toggleContextColor()" style="cursor: pointer; padding: 8px 15px; border: none; border-radius: 5px; background: white; color: black; font-weight: bold;">
                                    Change Global Context
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <script>
                    let isBlue = true;
                    function toggleContextColor() {
                        isBlue = !isBlue;
                        const color = isBlue ? '#00e5ff' : '#ff5722'; // Blue or Orange
                        const name = isBlue ? 'Blue (#00e5ff)' : 'Orange (#ff5722)';
                        
                        // Updating UI
                        document.getElementById('globalColor').innerText = name;
                        document.getElementById('globalColor').style.color = color;
                        document.getElementById('childBox').style.borderColor = color;
                        document.querySelector('#childBox span').style.background = color;
                    }
                </script>

                <h3 style="color: var(--primary); margin-top: 20px;">কখন ব্যবহার করবেন?</h3>
                <p>সব ডাটার জন্য Context ব্যবহার করবেন না। শুধুমাত্র গ্লোবাল ডাটা যেমন: <strong>User Auth (লগইন তথ্য)</strong>, <strong>Theme (Dark/Light mode)</strong>, বা <strong>Language</strong> সেটিংয়ের জন্য এটি সেরা।</p>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #23 (অনুশীলন):</strong><br>
                    "Create a React Context named 'ThemeContext' to manage Dark Mode and Light Mode. Wrap the entire app with a Provider and create a toggle button in the Navbar to switch themes using useContext."
                </div>
            </div>
        `
    },
    {
        id: 24,
        title: "অধ্যায় ২৪: রিয়েল টাইমে ডাটা লোডিং (Fetching in React)",
        content: `
            <div class="chapter-content">
                <p><strong>ভূমিকা:</strong><br>
                React এ সার্ভার থেকে ডাটা আনার জন্য আমরা সাধারণত <code>useEffect</code> এবং <code>fetch</code> (বা Axios) একসাথে ব্যবহার করি। একটি আদর্শ ডাটা ফেচিং সিস্টেমে ৩টি অবস্থা (State) থাকে:</p>
                
                

                <ul style="margin-left: 20px; list-style-type: none; margin-top: 10px;">
                    <li>⏳ <strong>Loading:</strong> যখন ডাটা ইন্টারনেট থেকে নামছে।</li>
                    <li>✅ <strong>Success:</strong> যখন ডাটা চলে এসেছে এবং আমরা দেখাচ্ছি।</li>
                    <li>❌ <strong>Error:</strong> যদি সার্ভার বা ইন্টারনেটে সমস্যা থাকে।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">কোড প্যাটার্ন (Standard Pattern)</h3>
                <p>নিচের কোডটি খুব ভালো করে লক্ষ্য করুন। এটি React ডেভেলপারদের প্রতিদিন ব্যবহার করতে হয়।</p>

                <div class="code-block">
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(data => {
          setUsers(data);    // ডাটা সেভ করলাম
          setLoading(false); // লোডিং বন্ধ করলাম
      });
}, []); // ⚠️ খালি অ্যারে [] খুব জরুরি, নাহলে লুপে পড়ে যাবে!
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">কন্ডিশনাল রেন্ডারিং (Magic)</h3>
                <p>লোডিং অবস্থায় এক রকম ডিজাইন, আর ডাটা আসলে অন্য রকম ডিজাইন দেখানোকে বলে <strong>Conditional Rendering</strong>।</p>
                <div class="code-block">
if (loading) {
    return &lt;h1&gt;অপেক্ষা করুন...&lt;/h1&gt;;
}
return &lt;div&gt;{users.map(...)}&lt;/div&gt;;
                </div>

                <h3 style="color: var(--primary); margin-top: 20px;">লাইভ সিমুলেটর: ইউজার লোডার</h3>
                <p>নিচের <strong>"Load Data"</strong> বাটনে ক্লিক করুন। ২ সেকেন্ড লোডিং হওয়ার পর ডাটা আসবে। এটি রিয়েল এপিআই কলের মতো আচরণ করবে।</p>

                <div class="output-box" style="text-align: center; min-height: 200px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    
                    <div id="loaderSpinner" style="display: none; margin-bottom: 20px;">
                        <div style="width: 40px; height: 40px; border: 4px solid #333; border-top: 4px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>
                        <p style="color: #aaa; margin-top: 10px;">সার্ভার থেকে ডাটা আসছে...</p>
                    </div>

                    <div id="dataContainer" style="width: 100%;">
                        <div style="padding: 20px; border: 2px dashed #444; border-radius: 10px; color: #666;">
                            কোনো ডাটা লোড করা হয়নি
                        </div>
                    </div>

                    <button onclick="fetchReactDemo()" style="margin-top: 20px; padding: 10px 25px; background: linear-gradient(45deg, #00e5ff, #2979ff); border: none; color: white; border-radius: 50px; cursor: pointer; font-weight: bold; box-shadow: 0 5px 15px rgba(0, 229, 255, 0.3);">
                        🔄 Load Data
                    </button>
                </div>

                <style>
                    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                    .user-card-demo {
                        background: #1e293b; padding: 10px; margin: 5px 0; border-radius: 5px; 
                        display: flex; align-items: center; gap: 10px; text-align: left;
                        animation: fadeIn 0.5s ease; border-left: 3px solid var(--primary);
                    }
                </style>

                <script>
                    function fetchReactDemo() {
                        const loader = document.getElementById('loaderSpinner');
                        const container = document.getElementById('dataContainer');
                        
                        // ১. লোডিং শুরু
                        container.innerHTML = ''; // আগের ডাটা ক্লিয়ার
                        container.style.display = 'none';
                        loader.style.display = 'flex';
                        loader.style.flexDirection = 'column';
                        loader.style.alignItems = 'center';

                        // ২. ফেক এপিআই কল (২ সেকেন্ড দেরি)
                        setTimeout(() => {
                            // ৩. লোডিং শেষ এবং ডাটা প্রদর্শন
                            loader.style.display = 'none';
                            container.style.display = 'block';
                            
                            container.innerHTML = \`
                                <div class="user-card-demo">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" style="width: 40px; height: 40px; border-radius: 50%;">
                                    <div>
                                        <h4 style="color:white; margin:0;">করিম রহমান</h4>
                                        <small style="color:#aaa;">karim@example.com</small>
                                    </div>
                                </div>
                                <div class="user-card-demo">
                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" style="width: 40px; height: 40px; border-radius: 50%;">
                                    <div>
                                        <h4 style="color:white; margin:0;">রহিমা খাতুন</h4>
                                        <small style="color:#aaa;">rahima@example.com</small>
                                    </div>
                                </div>
                            \`;
                        }, 2000);
                    }
                </script>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #24 (অনুশীলন):</strong><br>
                    "Write a React component that fetches weather data from an API. It should show a 'Loading...' text initially, the temperature if successful, and an 'Error: Failed to fetch' message if something goes wrong."
                </div>
            </div>
        `
    },
    {
        id: 25,
        title: "অধ্যায় ২৫: স্পেশাল প্রজেক্ট - আপনার পোর্টফোলিও (Milestone)",
        content: `
            <div class="chapter-content">
                <div style="background: linear-gradient(135deg, #1e293b, #0f172a); padding: 20px; border-radius: 10px; border: 1px solid var(--primary); text-align: center; margin-bottom: 20px;">
                    <h2 style="color: var(--primary); margin: 0;">🎉 অভিনন্দন! হাফ সেঞ্চুরি (২৫) 🎉</h2>
                    <p style="color: #ccc;">আপনি ওয়েব ডেভেলপমেন্ট কোর্সের অর্ধেক পথ সফলভাবে শেষ করেছেন। আজকের অধ্যায়টি কোনো পড়ালেখা নয়, আজ আমরা হাতে-কলমে একটি প্রজেক্ট বানাবো।</p>
                </div>

                <p><strong>প্রজেক্টের নাম:</strong> ডেভ-পোর্টফোলিও (DevPortfolio)<br>
                <strong>কি কি থাকবে?</strong> হিরো সেকশন, টাইপিং ইফেক্ট, স্কিল বার এবং কন্টাক্ট বাটন।</p>

                

                <h3 style="color: var(--primary); margin-top: 20px;">১. ব্লুপ্রিন্ট (স্ট্রাকচার)</h3>
                <p>আমরা পুরো সাইটটিকে ৩টি প্রধান ভাগে ভাগ করব:</p>
                <ul style="margin-left: 20px; list-style-type: none;">
                    <li>🔹 <strong>Header:</strong> নাম এবং মেনু।</li>
                    <li>🔹 <strong>Hero:</strong> নিজের ছবি এবং একটি ডায়নামিক টাইপিং টেক্সট।</li>
                    <li>🔹 <strong>Footer:</strong> সোশ্যাল মিডিয়া লিংক।</li>
                </ul>

                <h3 style="color: var(--primary); margin-top: 20px;">২. লাইভ কোডিং (Preview)</h3>
                <p>নিচের উইন্ডোটি আপনার তৈরি করা পোর্টফোলিও। এটি সম্পূর্ণ HTML, CSS এবং JS দিয়ে তৈরি। বাটনগুলোতে মাউস নিয়ে দেখুন!</p>

                <div class="output-box" style="padding: 0; overflow: hidden; border: 2px solid #333; height: 450px; position: relative;">
                    
                    <div style="background: #ddd; padding: 5px 10px; display: flex; gap: 5px; align-items: center;">
                        <div style="width: 10px; height: 10px; background: #ff5f56; border-radius: 50%;"></div>
                        <div style="width: 10px; height: 10px; background: #ffbd2e; border-radius: 50%;"></div>
                        <div style="width: 10px; height: 10px; background: #27c93f; border-radius: 50%;"></div>
                        <div style="background: white; flex: 1; margin-left: 10px; border-radius: 3px; font-size: 10px; padding: 2px 5px; color: #555;">
                            www.my-portfolio.com
                        </div>
                    </div>

                    <div style="background: #111; height: 100%; color: white; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; font-family: 'Segoe UI', sans-serif;">
                        
                        <div style="position: relative;">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200" 
                                 style="width: 120px; height: 120px; border-radius: 50%; border: 4px solid var(--primary); object-fit: cover; box-shadow: 0 0 20px rgba(0,229,255,0.4);">
                            <div style="position: absolute; bottom: 5px; right: 5px; background: #27c93f; width: 20px; height: 20px; border-radius: 50%; border: 2px solid #111;"></div>
                        </div>

                        <h2 style="margin: 15px 0 5px 0; font-size: 24px;">জন ডো (John Doe)</h2>
                        
                        <p style="font-size: 16px; color: #aaa; margin-bottom: 20px; height: 20px;">
                            I am a <span id="type-text" style="color: var(--primary); font-weight: bold;"></span><span class="cursor">|</span>
                        </p>

                        <div style="display: flex; gap: 15px; margin-bottom: 25px;">
                            <i class="fab fa-github" style="font-size: 20px; cursor: pointer; transition: 0.3s; color: #fff;"></i>
                            <i class="fab fa-linkedin" style="font-size: 20px; cursor: pointer; transition: 0.3s; color: #0077b5;"></i>
                            <i class="fab fa-twitter" style="font-size: 20px; cursor: pointer; transition: 0.3s; color: #1da1f2;"></i>
                        </div>

                        <div style="display: flex; gap: 10px;">
                            <button style="padding: 10px 20px; background: var(--primary); border: none; border-radius: 5px; color: black; font-weight: bold; cursor: pointer; box-shadow: 0 5px 15px rgba(0,229,255,0.2);">
                                Hire Me
                            </button>
                            <button style="padding: 10px 20px; background: transparent; border: 1px solid white; border-radius: 5px; color: white; font-weight: bold; cursor: pointer;">
                                Download CV
                            </button>
                        </div>
                    </div>
                </div>

                <style>
                    .cursor { animation: blink 1s infinite; color: var(--primary); }
                    @keyframes blink { 50% { opacity: 0; } }
                </style>

                <script>
                    // টাইপিং ইফেক্ট লজিক (শুধুমাত্র এই স্লাইডের জন্য)
                    (function() {
                        const textElement = document.getElementById('type-text');
                        if(!textElement) return;

                        const words = ["Web Developer", "React Lover", "UI/UX Designer"];
                        let wordIndex = 0;
                        let charIndex = 0;
                        let isDeleting = false;

                        function type() {
                            const currentWord = words[wordIndex];
                            
                            if (isDeleting) {
                                textElement.innerText = currentWord.substring(0, charIndex - 1);
                                charIndex--;
                            } else {
                                textElement.innerText = currentWord.substring(0, charIndex + 1);
                                charIndex++;
                            }

                            if (!isDeleting && charIndex === currentWord.length) {
                                isDeleting = true;
                                setTimeout(type, 2000); // শব্দ শেষ হলে ২ সেকেন্ড অপেক্ষা
                            } else if (isDeleting && charIndex === 0) {
                                isDeleting = false;
                                wordIndex = (wordIndex + 1) % words.length;
                                setTimeout(type, 500);
                            } else {
                                setTimeout(type, isDeleting ? 100 : 200);
                            }
                        }
                        type();
                    })();
                </script>

                <h3 style="color: var(--primary); margin-top: 20px;">৩. চ্যালেঞ্জ (Homework)</h3>
                <div class="code-block" style="background: #1e1e1e; border-left: 4px solid #ffbd2e;">
                    <p style="margin: 0;">আপনার কাজ হলো উপরের ডিজাইনের সাথে একটি <strong>"Contact Me"</strong> ফর্ম যুক্ত করা যেখানে ইউজার নাম এবং ইমেইল দিয়ে মেসেজ পাঠাতে পারবে।</p>
                </div>

                <div class="prompt-box">
                    <strong>🤖 AI Prompt #25 (Portfolio Help):</strong><br>
                    "Generate a responsive HTML/CSS code for a personal portfolio 'About Me' section. It should have a profile picture on the left and a short bio with a 'Read More' button on the right."
                </div>
            </div>
        `
    }
];



// বাকি অধ্যায়গুলো (২৩-৫০) লুপ দিয়ে তৈরি করা
for (let i = 26; i <= 50; i++) {
    if (i === 25) continue; // ২৫ অলরেডি আছে (যদি ম্যানুয়ালি থাকে)
    chaptersDB.push({
        id: i,
        title: `অধ্যায় ${i}: ওয়েব ডেভেলপমেন্ট টপিক ${i}`,
        content: `
            <div class="chapter-content">
                <h3>এই অধ্যায়ে আমরা শিখবো অ্যাডভান্সড টপিক ${i}</h3>
                <p>বিস্তারিত টিউটোরিয়াল শীঘ্রই আসছে...</p>
                <div class="prompt-box">
                    <strong>🤖 AI Prompt #${i}:</strong><br> 
                    "Generate a code snippet to demonstrate topic ${i} in web development."
                </div>
            </div>`
    });
}

// ২৫ নম্বর অধ্যায় স্পেশাল হলে ম্যানুয়ালি অ্যাড করুন (যদি লুপে স্কিপ করে থাকেন)
chaptersDB.push({
    id: 25,
    title: "অধ্যায় ২৫: প্রফেশনাল ল্যান্ডিং পেজ (প্রজেক্ট)",
    content: `<div class="chapter-content"><h3>সম্পূর্ণ প্রজেক্ট তৈরি</h3><p>আজ আমরা একটি ল্যান্ডিং পেজ বানাবো।</p></div>`
});

// ডাটা সর্টিং (যাতে ১, ২, ৩... সিরিয়ালে থাকে)
chaptersDB.sort((a, b) => a.id - b.id);


// ==========================================
// ২. ফাংশনালিটি সেকশন (বইয়ের কভার ও নেভিগেশন)
// ==========================================

// বইয়ের কভার লোড করার ফাংশন
function loadBookCover() {
    const contentDiv = document.getElementById('chapter-content');
    
    // মেনু থেকে একটিভ ক্লাস সরিয়ে ফেলা
    document.querySelectorAll('#chapter-list li').forEach(l => l.classList.remove('active'));

    // কভার ডিজাইন HTML
    contentDiv.innerHTML = `
        <div class="book-cover-container animate__animated animate__fadeIn">
            <h1 class="book-title">MH WEB ACADEMY</h1>
            <p class="book-slogan">ঘরে বসে নিজের ভবিষ্যৎ তৈরি কর সমগ্র পৃথিবীর সাথে</p>
            
            <div class="book-author-box">
                <img src="https://i.ibb.co.com/LDMM7qTn/d.png" class="book-author-img" alt="Author">
                <h3 style="color: var(--primary); margin-bottom: 5px;">মঞ্জুরুল হক</h3>
                <p style="color: #ccc; font-size: 14px;">প্রভাষক, অর্থনীতি ও</p>
                <p style="color: #ccc; font-size: 14px;">মেন্টর, MH WEB ACADEMY</p>
                <hr style="border-color: rgba(255,255,255,0.1); margin: 10px 0;">
                <div style="font-size: 13px; color: #94a3b8; text-align: left; padding-left: 10px;">
                    <p><i class="fas fa-phone-alt"></i> ০১৭১৫২৪৭৫৮৮</p>
                    <p><i class="fab fa-whatsapp"></i> 01715247588</p>
                    <p><i class="fas fa-envelope"></i> monjurul.jusc@gmail.com</p>
                </div>
            </div>

            <div class="start-indicator">
                <i class="fas fa-arrow-left"></i> উপরে বাম পাশের মেনু থেকে চ্যাপ্টার সিলেক্ট করুন
            </div>
        </div>
    `;

    // মোবাইলে হলে 'মেনু' বাটনটি দেখাবে
    if(window.innerWidth <= 768) {
        const mobileBtn = document.querySelector('.mobile-course-btn');
        if(mobileBtn) mobileBtn.style.display = 'flex';
    }
}

// অ্যাপ শুরু করার মেইন ফাংশন
function startLearning() {
    document.getElementById('course-container').style.display = 'flex';
    document.getElementById('hero-section').style.display = 'none';
    document.querySelector('.navbar').style.display = 'none';
    
    // লিস্ট তৈরি করা
    renderChapterList();
    
    // শুরুতে সরাসরি বইয়ের কভার লোড হবে
    loadBookCover();

    // মোবাইলে সাইডবার শুরুতে বন্ধ থাকবে
    if(window.innerWidth <= 768) {
        document.getElementById('course-sidebar').classList.remove('active');
        document.querySelector('.sidebar-overlay').classList.remove('active');
    }
}

// সাইডবার মেনু রেন্ডার করা (আপনার সমস্যার সমাধান এখানে)
function renderChapterList() {
    const list = document.getElementById('chapter-list');
    list.innerHTML = '';
    
    // ১. কভার পেজে ফেরার লিংক
    const homeLi = document.createElement('li');
    homeLi.innerHTML = '<strong><i class="fas fa-book"></i> কভার পেজ</strong>';
    homeLi.onclick = () => {
        loadBookCover();
        if(window.innerWidth <= 768) toggleSidebar();
    };
    homeLi.style.borderBottom = "2px solid var(--primary)";
    list.appendChild(homeLi);

    // ২. লুপ চালিয়ে বাকি চ্যাপ্টারগুলো লিস্টে আনা
    chaptersDB.forEach(chap => {
        const li = document.createElement('li');
        li.textContent = chap.title;
        // ক্লিক ইভেন্ট
        li.onclick = () => {
            loadChapter(chap.id);
            // মোবাইলে চ্যাপ্টার সিলেক্ট করলে সাইডবার বন্ধ হবে
            if(window.innerWidth <= 768) {
                toggleSidebar();
            }
        };
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
    const activeLi = document.getElementById(`chap-${id}`);
    if(activeLi) activeLi.classList.add('active');

    // কন্টেন্ট লোড
    contentDiv.innerHTML = `
        <h2 class="chapter-title">${chapter.title}</h2>
        <div class="chapter-body animate__animated animate__fadeIn">${chapter.content}</div>
        <br><br>
        <div class="author-card">
            <div class="author-img-wrapper">
                 <img src="https://i.ibb.co.com/LDMM7qTn/d.png" class="author-img">
            </div>
            <div class="author-info">
                <h3>মঞ্জুরুল হক</h3>
                <p class="designation">প্রভাষক, অর্থনীতি ও মেন্টর MH WEB ACADEMY</p>
                <div class="contact-links">
                    <a href="tel:01715247588">📞 01715247588</a>
                    <a href="mailto:monjurul.jusc@gmail.com">📧 Email</a>
                </div>
            </div>
        </div>
    `;
    
    // স্ক্রল উপরে নিয়ে যাওয়া
    document.querySelector('.content-area').scrollTop = 0;
}

// সাইডবার টগল (মোবাইলের জন্য)
function toggleSidebar() {
    const sidebar = document.getElementById('course-sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    if(sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// মোবাইল ন্যাভবার টগল
function toggleMobileNav() {
    const navList = document.getElementById('main-nav');
    if(navList) navList.classList.toggle('active');
}

// ড্রপডাউন টগল (মোবাইল)
function toggleDropdown(element) {
    if (window.innerWidth <= 768) {
        element.classList.toggle('active');
    }
}

// PWA Service Worker (যদি থাকে)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(err => console.log(err));
}
