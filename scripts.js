const CLOUDINARY = {
  // THAY TOÀN BỘ CÁC LINK DƯỚI ĐÂY BẰNG LINK CLOUDINARY THẬT CỦA BẠN
  logo: "https://res.cloudinary.com/dcplldrsy/image/upload/v1773592535/logo_f9hxhy.jpg",
  heroBanner: "https://res.cloudinary.com/dcplldrsy/image/upload/v1773592535/banner_jer5vo.jpg",

  gallery: [
    "https://res.cloudinary.com/dcplldrsy/image/upload/v1773593589/gallery1_g5cwbx.jpg",
    "https://res.cloudinary.com/dcplldrsy/image/upload/v1773593590/gallery2_rjvljc.jpg"
  ],

  rooms: {
    phuongHoang: "https://res.cloudinary.com/dcplldrsy/image/upload/v1773593080/honphuonghoang_akdaxd.png",
    langGiauMat: "https://res.cloudinary.com/dcplldrsy/image/upload/v1773593080/ngoilanggiaumat_rrxrnx.png",
    cungDienThoiGian: "https://res.cloudinary.com/dcplldrsy/image/upload/v1773593081/bianthoigian_oxhnn5.png"
  }
};

const LINKS = {
  page: "https://www.facebook.com/ngoc.anh.430535",
  messenger: "https://www.messenger.com/e2ee/t/8728540453905822",
  tiktok: "https://www.tiktok.com/@ngochuyen210505",
  zalo: "https://zalo.me/0335892317",
  hanoiPage: "https://www.facebook.com/ngoc.anh.430535"
};

const roomsData = [
  {
    id: "phuong-hoang",
    key: "phuongHoang",
    title: "Hồn Phượng Hoàng",
    category: "Cổ tích huyền bí",
    difficulty: "4.5/5",
    duration: "60 phút",
    players: "2 - 8 người",
    vibe: "Huyền bí - linh vật - kho báu cổ tích",
    image: () => CLOUDINARY.rooms.phuongHoang,
    excerpt:
      "Một mê cung thử thách được Phượng Hoàng để lại trước khi bị phong ấn. Chỉ người đủ trí tuệ và lòng trong sáng mới có thể chạm đến kho báu của Hồn Cổ.",
    story:
      "Ngày xưa tại vùng đất Hồn Cổ, có một con chim Phượng Hoàng bảo vệ kho báu trí tuệ của nhân loại. Nhưng khi con người trở nên tham lam, họ đã tìm cách bắt giữ nó. Trước khi bị phong ấn, Phượng Hoàng đã để lại một mê cung thử thách. Chỉ những ai giải được bí mật của cổ tích mới xứng đáng mở kho báu. Nhưng có một lời nguyền: nếu thất bại, bạn sẽ mãi mãi mắc kẹt trong câu chuyện cổ tích.",
    mission:
      "Nhóm người chơi vào vai những kẻ được chọn đi tìm kho báu cuối cùng của Hồn Cổ. Bạn phải giải mã những biểu tượng cổ, đánh thức các linh vật canh giữ, ghép lại những mảnh truyền thuyết thất lạc và mở khóa trái tim của mê cung trước khi ngọn lửa Phượng Hoàng tàn lụi.",
    challenge:
      "Phòng thiên về giải mã logic, quan sát chi tiết, tương tác với cơ chế ẩn và khám phá lớp truyện nhiều tầng. Càng đi sâu, người chơi càng nhận ra rằng kho báu thật sự có thể không phải là vàng bạc, mà là lời đáp về lý do Phượng Hoàng chấp nhận tự phong ấn chính mình.",
    tags: ["Fantasy", "Linh vật cổ tích", "Kho báu huyền bí"]
  },
  {
    id: "lang-giau-mat",
    key: "langGiauMat",
    title: "Ngôi Làng Giấu Mặt",
    category: "Trinh thám cổ tích",
    difficulty: "5/5",
    duration: "60 phút",
    players: "2 - 7 người",
    vibe: "Bí ẩn - mất ký ức - chiếc mặt nạ",
    image: () => CLOUDINARY.rooms.langGiauMat,
    excerpt:
      "Một ngôi làng cổ đã bị xóa khỏi bản đồ, nơi bất kỳ ai bước vào cũng đánh rơi ký ức. Sự thật nằm sau chiếc mặt nạ của cổ tích.",
    story:
      "Có một ngôi làng cổ bị xóa khỏi bản đồ. Người ta gọi nó là Ngôi Làng Giấu Mặt. Bất kỳ ai bước vào làng đều mất đi ký ức của mình. Một học giả đã để lại manh mối cuối cùng trước khi biến mất: “Sự thật được giấu sau chiếc mặt nạ của cổ tích.” Bạn và nhóm thám hiểm bước vào làng. Nhưng sau khi cánh cổng đóng lại, bạn nhận ra mọi con đường đều quay về điểm bắt đầu.",
    mission:
      "Người chơi phải lần theo dấu vết của vị học giả, tìm lại những ký ức bị tước mất, đối chiếu các câu chuyện dân gian sai lệch và tháo gỡ bí ẩn đằng sau chiếc mặt nạ đã cai trị cả ngôi làng. Mỗi quyết định đều làm thay đổi cách bạn nhìn nhận sự thật.",
    challenge:
      "Đây là phòng có nhịp kể chuyện mạnh, nhiều cú twist và yêu cầu phối hợp nhóm tốt. Cảm giác bị lạc hướng, lặp vòng và nghi ngờ chính những gì mình nhìn thấy là tinh thần chủ đạo của trải nghiệm này.",
    tags: ["Trinh thám", "Ký ức mất tích", "Chiếc mặt nạ"]
  },
  {
    id: "cung-dien-thoi-gian",
    key: "cungDienThoiGian",
    title: "Cung Điện Thời Gian",
    category: "Fantasy cổ tích",
    difficulty: "4/5",
    duration: "60 phút",
    players: "2 - 8 người",
    vibe: "Đồng hồ cổ - cánh cổng thời gian - cung điện sụp đổ",
    image: () => CLOUDINARY.rooms.cungDienThoiGian,
    excerpt:
      "Một chiếc đồng hồ cổ mở ra cánh cổng thời gian, khiến quá khứ, hiện tại và tương lai hòa vào nhau. Bạn chỉ có 60 phút để không bị xóa khỏi lịch sử.",
    story:
      "Một chiếc đồng hồ cổ được phát hiện trong cung điện Hồn Cổ. Truyền thuyết nói rằng nó có thể mở cánh cổng thời gian. Nhưng khi chiếc đồng hồ được kích hoạt, cung điện bắt đầu sụp đổ từng phần của thời gian. Quá khứ, hiện tại và tương lai hòa vào nhau. Bạn có 60 phút để khôi phục dòng thời gian. Nếu không, bạn sẽ biến mất khỏi lịch sử.",
    mission:
      "Người chơi phải khôi phục cơ chế vận hành của đồng hồ, lắp ghép các mốc thời gian bị xáo trộn, truy tìm nguồn gốc của vết nứt thời không và quyết định đâu là khoảnh khắc cần được cứu. Không phải mọi cánh cửa mở ra đều dẫn đến hiện tại.",
    challenge:
      "Phòng phù hợp cho nhóm thích cảm giác phiêu lưu, cơ chế biến đổi không gian và những câu đố có liên kết theo trình tự thời gian. Càng gần phút cuối, cung điện càng hỗn loạn và mọi lựa chọn đều trở nên cấp bách.",
    tags: ["Time travel", "Fantasy", "Đồng hồ cổ"]
  }
];

function setupAssets() {
  const logoImg = document.getElementById("logoImg");
  const footerLogoImg = document.getElementById("footerLogoImg");
  const heroBannerImg = document.getElementById("heroBannerImg");

  logoImg.src = CLOUDINARY.logo;
  footerLogoImg.src = CLOUDINARY.logo;
  heroBannerImg.src = CLOUDINARY.heroBanner;

  document.getElementById("facebookPageLink").href = LINKS.page;
  document.getElementById("messengerLink").href = LINKS.messenger;
  document.getElementById("tiktokLink").href = LINKS.tiktok;

  document.getElementById("bookFacebookBtn").href = LINKS.page;
  document.getElementById("bookMessengerBtn").href = LINKS.messenger;

  document.getElementById("floatZalo").href = LINKS.zalo;
  document.getElementById("floatZalo").setAttribute("target", "_blank");
  document.getElementById("floatHN").href = LINKS.hanoiPage;
  document.getElementById("floatPage").href = LINKS.page;
  document.getElementById("floatMessenger").href = LINKS.messenger;
}

function renderRooms() {
  const roomsGrid = document.getElementById("roomsGrid");

  roomsGrid.innerHTML = roomsData.map(room => {
    return `
      <article class="room-card">
        <div class="room-thumb">
          <img src="${room.image()}" alt="${room.title}">
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
            <div><strong>Không khí:</strong> ${room.vibe}</div>
            <div><strong>Concept:</strong> Hồn Cổ</div>
          </div>

          <p class="room-excerpt">${room.excerpt}</p>

          <div class="room-actions">
            <button class="btn btn-ghost" data-open-room="${room.id}">Chi tiết</button>
            <a class="btn btn-primary" href="${LINKS.messenger}" target="_blank" rel="noopener">Đặt phòng</a>
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

          <div class="story-block">
            <h4>Nhiệm vụ</h4>
            <p>${room.mission}</p>
          </div>
        </div>

        <div class="story-block">
          <h4>Điểm nổi bật</h4>
          <p>${room.challenge}</p>
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
            <strong>Không khí</strong>
            <span>${room.vibe}</span>
          </div>
        </div>

        <div class="modal-actions">
          <a class="btn btn-primary" href="${LINKS.messenger}" target="_blank" rel="noopener">Đặt phòng</a>
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

document.addEventListener("DOMContentLoaded", () => {
  setupAssets();
  renderRooms();
  renderGallery();
  setupModal();
  setupParallax();
  setupMobileNav();
  setupReveal();
});