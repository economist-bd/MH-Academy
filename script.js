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
        content: `<p>CSS দিয়ে আমরা ওয়েবসাইটকে সুন্দর করি। রং, ফন্ট এবং ডিজাইন পরিবর্তন করা হয়।</p>`
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
for (let i = 3; i <= 50; i++) {
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
