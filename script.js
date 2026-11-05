// ================= CẤU HÌNH THÔNG TIN NGƯỜI NHẬN =================
const CONFIG = {
    recipientName: "Bông ✨",                  // Tên hiển thị ở Màn 2
    recipientTag: "🎂 BIRTHDAY GIRL",          // Huy hiệu dưới Avatar
    birthDate: "2008-10-25T00:00:00",          // Ngày tháng năm sinh của người nhận (YYYY-MM-DD)
    wishMessage: "Chúc mừng sinh nhật bạn nhé! Chúc bạn tuổi mới luôn tràn ngập niềm vui, giữ mãi nụ cười rạng rỡ trên môi và gặt hái được thật nhiều thành công. Mong mọi điều dịu dàng nhất sẽ luôn đồng hành cùng bạn! 🌷✨",
    senderSign: "— From Vanh with luv 🤍",

    // Danh sách ảnh chạy trên dây chuyền Buffet ở Màn 3
    // Nếu bạn thêm ảnh mới vào thư mục, chỉ cần đổi tên file ở đây
    memories: [
        { src: "./assets/images.jpg", caption: "Nụ cười tỏa nắng ✨" },
        { src: "./assets/images1.jpg", caption: "Tuổi mới rực rỡ 🎂" },
        { src: "./assets/images2.jpg", caption: "Luôn hạnh phúc nhé 💖" },
        { src: "./assets/images3.jpg", caption: "So cuteee 🌷" },
        { src: "./assets/avatar.jpg", caption: "Happy Birthday 🎉" }
    ]
};

// Gán dữ liệu từ CONFIG vào giao diện
document.getElementById('recipientName').textContent = CONFIG.recipientName;
document.getElementById('recipientTag').textContent = CONFIG.recipientTag;
document.getElementById('senderSign').textContent = CONFIG.senderSign;

// ================= 1. KHỞI TẠO DÂY CHUYỀN ẢNH VÔ TẬN & LIGHTBOX =================
const photoTrack = document.getElementById('photoTrack');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCap = document.getElementById('lightboxCap');

if (photoTrack && CONFIG.memories.length > 0) {
    // Nhân đôi mảng ảnh để chạy vòng lặp 50% mượt mà không bị giật
    const loopList = [...CONFIG.memories, ...CONFIG.memories];

    photoTrack.innerHTML = loopList.map(item => `
    <div class="polaroid" data-src="${item.src}" data-cap="${item.caption}">
      <img class="polaroid__img" src="${item.src}" alt="${item.caption}">
      <div class="polaroid__cap">${item.caption}</div>
    </div>
  `).join('');

    // Bấm vào ảnh trên băng chuyền -> Bắn pháo hoa nhẹ & Phóng to ảnh
    photoTrack.querySelectorAll('.polaroid').forEach(card => {
        card.addEventListener('click', () => {
            launchConfetti(40);
            lightboxImg.src = card.dataset.src;
            lightboxCap.textContent = card.dataset.cap;
            lightbox.classList.add('open');
        });
    });
}

// Đóng hộp phóng to ảnh khi chạm ra ngoài
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('open');
});

// ================= 2. XỬ LÝ ÂM THANH NHẠC NỀN =================
const bgMusic = document.getElementById('bgMusic');
const musicToggleBtn = document.getElementById('musicToggleBtn');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        bgMusic.pause();
        musicToggleBtn.classList.remove('playing');
        musicToggleBtn.querySelector('.musicText').textContent = 'Bật nhạc';
        isPlaying = false;
    } else {
        bgMusic.play().then(() => {
            musicToggleBtn.classList.add('playing');
            musicToggleBtn.querySelector('.musicText').textContent = 'Tắt nhạc';
            isPlaying = true;
        }).catch(e => console.log("Trình duyệt chờ tương tác để phát nhạc:", e));
    }
}

musicToggleBtn.addEventListener('click', toggleMusic);

// ================= 3. CHUYỂN MÀN HÌNH FADE IN - OUT =================
const screens = document.querySelectorAll('.screen');
const dots = document.querySelectorAll('.dotBtn');
const flame = document.getElementById('flame');
const smoke = document.getElementById('smoke');
let typingTimer = null;

function goToScreen(stepNumber) {
    const step = Number(stepNumber);
    screens.forEach((sc, idx) => sc.classList.toggle('active', idx + 1 === step));
    dots.forEach((dot, idx) => dot.classList.toggle('active', idx + 1 === step));

    if (step === 1) {
        flame.classList.remove('off');
        smoke.classList.remove('rise');
    }

    if (step === 3) {
        startTypewriter(CONFIG.wishMessage);
    }
}

document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', () => goToScreen(btn.dataset.target));
});

// ================= 4. THỔI NẾN & TỰ ĐỘNG BẬT NHẠC =================
function blowCandle() {
    if (flame.classList.contains('off')) return;
    flame.classList.add('off');
    smoke.classList.add('rise');
    launchConfetti(95);

    if (!isPlaying) {
        toggleMusic();
    }

    setTimeout(() => {
        goToScreen(2);
    }, 950);
}

document.getElementById('blowBtn').addEventListener('click', blowCandle);
document.getElementById('actionBlow').addEventListener('click', blowCandle);
document.getElementById('fireworkBtn').addEventListener('click', () => launchConfetti(120));

// ================= 5. HIỆU ỨNG GÕ CHỮ TÂM THƯ =================
function startTypewriter(text) {
    const el = document.getElementById('typewriterText');
    el.textContent = "";
    clearInterval(typingTimer);
    let i = 0;
    typingTimer = setInterval(() => {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingTimer);
        }
    }, 28);
}

// ================= 6. ĐẾM THỜI GIAN CÓ MẶT TRÊN ĐỜI =================
const birthTimestamp = new Date(CONFIG.birthDate).getTime();

function updateAliveTimer() {
    const now = Date.now();
    const diff = Math.max(0, now - birthTimestamp);

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById('alive-days').textContent = String(d);
    document.getElementById('alive-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('alive-mins').textContent = String(m).padStart(2, '0');
    document.getElementById('alive-secs').textContent = String(s).padStart(2, '0');
}
setInterval(updateAliveTimer, 1000);
updateAliveTimer();

// ================= 7. PHÁO GIẤY CANVAS =================
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function launchConfetti(count = 80) {
    const colors = ['#00fff2', '#ff2a85', '#ffcc00', '#ffffff', '#7b61ff'];
    for (let i = 0; i < count; i++) {
        particles.push({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            vx: (Math.random() - 0.5) * 16,
            vy: (Math.random() - 0.85) * 16,
            size: Math.random() * 7 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rot: Math.random() * 360,
            vRot: (Math.random() - 0.5) * 10,
            alpha: 1
        });
    }
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rot += p.vRot;
        p.alpha -= 0.012;

        if (p.alpha <= 0) {
            particles.splice(index, 1);
            return;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
    });
    requestAnimationFrame(animateConfetti);
}
animateConfetti();
