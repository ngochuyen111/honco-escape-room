const CLOUDINARY = {
  // THAY TOÀN BỘ CÁC LINK DƯỚI ĐÂY BẰNG LINK CLOUDINARY THẬT CỦA BẠN
  logo: "https://res.cloudinary.com/dcplldrsy/image/upload/v1774710490/H%E1%BB%93n_C%E1%BB%95_tr%E1%BB%91ng_%C4%91%E1%BB%93ng_vcwecc.png",

  heroBanner: "https://res.cloudinary.com/dcplldrsy/image/upload/v1773592535/banner_jer5vo.jpg",

  gallery: [
    "https://res.cloudinary.com/dcplldrsy/image/upload/v1773593589/gallery1_g5cwbx.jpg",
    "https://res.cloudinary.com/dcplldrsy/image/upload/v1773593590/gallery2_rjvljc.jpg"
  ],

  rooms: {
    phuongHoang: "https://res.cloudinary.com/dcplldrsy/image/upload/v1774717111/tamcam_mbstwh.jpg",
    langGiauMat: "https://res.cloudinary.com/dcplldrsy/image/upload/v1774717111/thachsanh_wmzttd.jpg",
    cungDienThoiGian: "https://res.cloudinary.com/dcplldrsy/image/upload/v1774717111/khetravang_cs9zpj.jpg"
  }
};

const LINKS = {
  page: "https://www.facebook.com/people/H%E1%BB%93n-C%E1%BB%95/61580590208598/",
  zalo: "https://zalo.me/0335892317",
  messenger: "https://www.messenger.com/t/1003196046215612"
};

const roomsData = [
  {
    id: "phuong-hoang",
    key: "phuongHoang",
    title: "Tấm Cám - Tấm Hậu Ký",
    category: "Cổ tích huyền bí",
    difficulty: "⭐⭐⭐⭐⭐", // Updated to star rating
    duration: "60 phút",
    players: "Tối thiểu 2 người", // Updated player count
    vibe: "Tương Tác – Đa Kết – Huyền Ảo",
    image: () => CLOUDINARY.rooms.phuongHoang,
    story:
      "Bạn có dám đối mặt với một Tấm Cám chưa từng được kể, nơi mỗi định kiến đều là xiềng xích? Bước chân vào không gian vừa thân thuộc vừa ma mị của những làng nghề truyền thống, nơi những vật phẩm cổ xưa cất giấu bí mật ngàn đời. Qua lăng kính Thực tế tăng cường (AR), những ảo ảnh sẽ hiện hữu, biến mỗi chi tiết thành một lời thách thức, một cánh cửa mở ra sự thật hay vực sâu lãng quên. Bạn không chỉ là người chơi, mà là người định mệnh. Chỉ bạn mới có thể vén màn bí mật, khám phá những góc khuất chưa từng được hé lộ. Hãy dùng trí tuệ và lòng can đảm để cầm cân nảy mực, viết lại một cái kết hoàn toàn mới cho câu chuyện cổ tích này. Liệu bạn sẽ là người hùng khai mở sự thật, hay để quá khứ nghiệt ngã lặp lại? Số phận của Tấm Cám, và có thể cả của chính bạn, đang chờ đợi quyết định cuối cùng!",
    tags: ["Fantasy", "Linh vật cổ tích", "Kho báu huyền bí"]
  },
  {
    id: "lang-giau-mat",
    key: "langGiauMat",
    title: "Thạch Sanh - Huyền Thạch Tích",
    category: "Trinh thám cổ tích",
    difficulty: "⭐⭐⭐⭐☆", // Updated to star rating
    duration: "60 phút",
    players: "Tối thiểu 2 người", // Updated player count
    vibe: "Huyền Tích - Hiển Linh - Biến Hóa",
    image: () => CLOUDINARY.rooms.langGiauMat,
     story:
      "Khi cánh cửa khép lại, bạn sẽ thấy mình lạc bước vào một không gian cổ tích lung linh, nơi ranh giới giữa thực tại và huyền thoại dần tan biến. Dưới tán lá sum suê của gốc đa cổ thụ ngàn năm, câu chuyện về chàng tiều phu Thạch Sanh không chỉ là những chiến công lẫy lừng, mà còn ẩn chứa những bí mật diệu kỳ về sự im lặng của Công Chúa và những khúc mắc chưa được hé lộ về Lý Thông. Bằng công nghệ AR tiên tiến, bạn sẽ khám phá những gợi ý tinh xảo ẩn giấu trong từng đường nét thủ công, từ đó giải mã những thông điệp cổ xưa được gửi gắm trong mỗi vật phẩm thành một cánh cửa dẫn lối đến những điều kỳ diệu. Trong hành trình này, bạn không chỉ là người quan sát mà là một phần không thể thiếu của câu chuyện. Chiếc niêu cơm thần kỳ giờ đây không chỉ là vật ban phát sự no đủ, mà là một nguồn năng lượng sống động đòi hỏi sự thấu cảm và trí tuệ của người chơi để đánh thức. Mỗi bước chân, mỗi tương tác của bạn sẽ dần mở ra một câu chuyện mới mẻ, nơi những nhân vật quen thuộc được nhìn nhận dưới một lăng kính đa chiều, giàu cảm xúc. Đặc biệt, hành trình này sẽ đưa bạn đến một cái kết hoàn toàn do chính bạn kiến tạo: liệu bạn sẽ chọn con đường công lý nghiêm minh, hay mở lòng đón nhận sự bao dung để hóa giải mọi hiểu lầm? Hãy bước vào thế giới huyền ảo dưới gốc đa, lắng nghe tiếng đàn thần vang vọng và tự tay viết nên một chương sử thi đầy cảm hứng cho riêng mình.",
      tags: ["Trinh thám", "Ký ức mất tích", "Chiếc mặt nạ"]
  },
  {
    id: "cung-dien-thoi-gian",
    key: "cungDienThoiGian",
    title: "Ăn khế trả vàng - Khế Linh",
    category: "Fantasy cổ tích",
    difficulty: "⭐⭐⭐⭐☆", // Updated to star rating
    duration: "60 phút",
    players: "Tối thiểu 2 người", // Updated player count
    vibe: "Cổ Kính - Nhân Văn - Huyền Ảo",
    image: () => CLOUDINARY.rooms.cungDienThoiGian,
      story:
      "Ngoài những trái khế ngọt lịm thì từ ngàn xưa người Việt truyền tai nhau rằng cây khế có “linh”, liệu những cây khế cổ thụ đó còn cất giấu điều gì sâu thẳm hơn?  Không phải vàng bạc nào cũng lấp lánh như ta tưởng, và mỗi chuyến đi đều ẩn chứa những bài học chưa được khai mở. Bước vào không gian nơi những vật phẩm từ làng nghề truyền thống sẽ thì thầm những bí mật ngàn đời, và qua lăng kính Thực tế tăng cường (AR), bạn sẽ thấy những dấu vết chim thần để lại không chỉ là đường đến kho báu, mà còn là những lựa chọn định mệnh. Nhưng liệu có một con đường khác? Một con đường không chỉ dẫn đến sự giàu sang, mà còn đến sự hàn gắn, sẻ chia và tìm lại tình thân? Liệu bạn có đủ sáng suốt để nhìn thấu sự thật đằng sau ánh vàng chói lọi, để biến lòng tham thành lòng trắc ẩn, và khai mở một cái kết nhân văn hơn cho câu chuyện này? Số phận của cây khế, của người anh em, và cả của chính bạn, đang chờ được viết lại. Hãy sẵn sàng để khám phá một giai thoại hoàn toàn mới, nơi mỗi quyết định của bạn sẽ thay đổi cả một truyền thuyết, hướng về một tương lai tươi sáng hơn!",
      tags: ["Time travel", "Fantasy", "Đồng hồ cổ"]
  }
];

function setupAssets() {
  const logoImg = document.getElementById("logoImg");
  const footerLogoImg = document.getElementById("footerLogoImg");
  const heroBannerImg = document.getElementById("heroBannerImg");
  const introLogoImg = document.getElementById("introLogoImg");

  logoImg.src = CLOUDINARY.logo;
  footerLogoImg.src = CLOUDINARY.logo;
  heroBannerImg.src = CLOUDINARY.heroBanner;
  if (introLogoImg) introLogoImg.src = CLOUDINARY.logo;

  document.getElementById("facebookPageLink").href = LINKS.page;

  document.getElementById("bookFacebookBtn").href = LINKS.page;
  document.getElementById("bookMessengerBtn").href = LINKS.messenger;

  document.getElementById("floatZalo").href = LINKS.zalo;
  document.getElementById("floatZalo").setAttribute("target", "_blank");
  document.getElementById("floatPage").href = LINKS.page;
  document.getElementById("floatZaloBtn").href = LINKS.zalo;
document.getElementById("floatZaloBtn").setAttribute("target", "_blank");
}

function renderRooms() {
  const roomsGrid = document.getElementById("roomsGrid");

  roomsGrid.innerHTML = roomsData.map(room => {
    return `
      <article class="room-card">
                <div class="room-thumb">
          <img src="${room.image()}" alt="${room.title}">
          <div class="room-thumb-overlay">
            <span>Khai mở bí mật</span>
          </div>
        </div>

        <div class="room-content">
          <h3 class="room-title">${room.title}</h3>

          <div class="room-tags">
            <span class="tag">${room.category}</span>
            <span class="tag">Độ khó ${room.difficulty}</span>
          </div>

          <div class="room-meta">
            <div><strong>Thời lượng:</strong> ${room.duration}</div>
            <div><strong>Nhóm:</strong> ${room.players}</div>
            <div><strong>Thể loại:</strong> ${room.vibe}</div>
            <div><strong>Concept:</strong> Hồn Cổ</div>
          </div>


          <div class="room-actions">
            <button class="btn btn-ghost" data-open-room="${room.id}">Chi tiết</button>
            <a class="btn btn-primary" href="${LINKS.page}" target="_blank" rel="noopener">Đặt phòng</a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  roomsGrid.querySelectorAll("[data-open-room]").forEach(button => {
    button.addEventListener("click", () => {
      openRoomModal(button.getAttribute("data-open-room"));
    });
  });
}

function renderGallery() {
  const galleryGrid = document.getElementById("galleryGrid");

  galleryGrid.innerHTML = CLOUDINARY.gallery.map((src, index) => `
    <div class="gallery-item">
      <img src="${src}" alt="Hình đội chơi ${index + 1}">
    </div>
  `).join("");
}

function roomDetailHTML(room) {
  return `
    <div class="modal-layout">
      <div class="modal-image">
        <img src="${room.image()}" alt="${room.title}">
      </div>

      <div class="modal-panel">
        <h2 class="modal-title">${room.title}</h2>
        <p class="modal-sub">${room.category}</p>

        <div class="modal-tags">
          ${room.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>

        <div class="story-wrap">
          <div class="story-block">
            <h4>Cốt truyện</h4>
            <p>${room.story}</p>
          </div>

        </div>


        <div class="details-grid">
          <div class="detail-box">
            <strong>Độ khó</strong>
            <span>${room.difficulty}</span>
          </div>

          <div class="detail-box">
            <strong>Thời lượng</strong>
            <span>${room.duration}</span>
          </div>

          <div class="detail-box">
            <strong>Số người</strong>
            <span>${room.players}</span>
          </div>

          <div class="detail-box">
            <strong>Thể loại</strong>
            <span>${room.vibe}</span>
          </div>
        </div>

        <div class="modal-actions">
          <a class="btn btn-primary" href="${LINKS.page}" target="_blank" rel="noopener">Đặt phòng</a>
          <a class="btn btn-outline" href="${LINKS.page}" target="_blank" rel="noopener">Fanpage</a>
        </div>

        <div class="seal-mark">HỒN CỔ</div>
      </div>
    </div>
  `;
}

function openRoomModal(roomId) {
  const room = roomsData.find(item => item.id === roomId);
  if (!room) return;

  const modal = document.getElementById("roomModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = roomDetailHTML(room);
  modal.classList.add("active");
  modal.classList.add("opening");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    modal.classList.remove("opening");
  }, 450);
}

function closeRoomModal() {
  const modal = document.getElementById("roomModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupModal() {
  document.getElementById("modalClose").addEventListener("click", closeRoomModal);
  document.getElementById("modalBackdrop").addEventListener("click", closeRoomModal);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeRoomModal();
  });
}

function setupMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
    });
  });
}

function setupReveal() {
  const elements = document.querySelectorAll(
    ".hero-banner, .room-card, .how-card, .price-card, .stat-card, .gallery-item, .contact-wrap"
  );

  elements.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

function setupParallax() {
  const hero = document.querySelector(".hero-banner");
  if (!hero) return;

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 8;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    hero.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
  });
}


function setupOpeningIntro() {
  const intro = document.getElementById("openingIntro");
  if (!intro) return;

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    intro.classList.add("hide");
    document.body.style.overflow = "";
  }, 2400);
}
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("pageshow", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
  setupAssets();
  renderRooms();
  renderGallery();
  setupModal();
  setupParallax();
  setupMobileNav();
  setupReveal();
  setupOpeningIntro();
});
