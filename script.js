// ৫০টি চ্যাপ্টারের ডাটাবেজ (স্যাম্পল)
const chaptersDB = [
    {
        id: 1,
        title: "অধ্যায় ১: ওয়েব দুনিয়ায় স্বাগতম (HTML পরিচিতি)",
        content: `
            <p>ওয়েব ডিজাইনের প্রথম ধাপ হলো HTML (HyperText Markup Language)। এটি ওয়েবসাইটের কঙ্কাল।</p>
            <h4>আপনার প্রথম কোড:</h4>
            <div class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
    &lt;h1&gt;হ্যালো, পৃথিবী!&lt;/h1&gt;
    &lt;p&gt;এটি আমার প্রথম ওয়েবসাইট।&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
            </div>
            <h4>আউটপুট (Output):</h4>
            <div class="output-box">
                <h1>হ্যালো, পৃথিবী!</h1>
                <p>এটি আমার প্রথম ওয়েবসাইট।</p>
            </div>
            <div class="prompt-box">
                <strong>🤖 AI Prompt #1:</strong><br>
                "Write a complete HTML5 boilerplate code for a portfolio website containing a header, about me section, and a footer."
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
