// =========================
// PAGE MOVIES / SERIES DATA
// Update per page: movies, series, or mylist
const movies = [
  { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg", desc: "Action-packed urban adventure." },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525", desc: "A neon-soaked cyberpunk tale." },
  { title: "Crimson Tide", img: "https://images.cdn-files-a.com/uploads/2058276/2000_5ca271aada963.jpg", desc: "High-stakes submarine drama." },
  { title: "Last Frontier", img: "https://m.media-amazon.com/images/I/61+AveYL+YL._AC_UF894,1000_QL80_.jpg", desc: "Epic space exploration." },
  { title: "Skyfalling", img: "https://i.pinimg.com/736x/4d/b4/10/4db4109f3d0576e328a948855027a025.jpg", desc: "Thrilling disaster story." },
  { title: "Ghost Line", img: "https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg", desc: "Paranormal suspense." },
  { title: "Infinity Run", img: "https://i.pinimg.com/736x/9d/0f/70/9d0f7042c01b22b1fe03b9b7d8639235.jpg", desc: "Sci-fi racing adventure." },
  { title: "Nova Rising", img: "https://creativereview.imgix.net/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&crop=faces,entropy,edges&fit=crop&q=60&w=1728&h=2560", desc: "Epic alien war saga." }, { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg", desc: "Action-packed urban adventure." },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525", desc: "A neon-soaked cyberpunk tale." }, { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg", desc: "Action-packed urban adventure." },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525", desc: "A neon-soaked cyberpunk tale." },
  { title: "Crimson Tide", img: "https://images.cdn-files-a.com/uploads/2058276/2000_5ca271aada963.jpg", desc: "High-stakes submarine drama." },
  { title: "Last Frontier", img: "https://m.media-amazon.com/images/I/61+AveYL+YL._AC_UF894,1000_QL80_.jpg", desc: "Epic space exploration." },
  { title: "Skyfalling", img: "https://i.pinimg.com/736x/4d/b4/10/4db4109f3d0576e328a948855027a025.jpg", desc: "Thrilling disaster story." },
  { title: "Ghost Line", img: "https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg", desc: "Paranormal suspense." },
  { title: "Infinity Run", img: "https://i.pinimg.com/736x/9d/0f/70/9d0f7042c01b22b1fe03b9b7d8639235.jpg", desc: "Sci-fi racing adventure." },
  { title: "Nova Rising", img: "https://creativereview.imgix.net/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&crop=faces,entropy,edges&fit=crop&q=60&w=1728&h=2560", desc: "Epic alien war saga." }, { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg", desc: "Action-packed urban adventure." },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525", desc: "A neon-soaked cyberpunk tale." }, { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg", desc: "Action-packed urban adventure." },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525", desc: "A neon-soaked cyberpunk tale." },
  { title: "Crimson Tide", img: "https://images.cdn-files-a.com/uploads/2058276/2000_5ca271aada963.jpg", desc: "High-stakes submarine drama." },
  { title: "Last Frontier", img: "https://m.media-amazon.com/images/I/61+AveYL+YL._AC_UF894,1000_QL80_.jpg", desc: "Epic space exploration." },
  { title: "Skyfalling", img: "https://i.pinimg.com/736x/4d/b4/10/4db4109f3d0576e328a948855027a025.jpg", desc: "Thrilling disaster story." },
  { title: "Ghost Line", img: "https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg", desc: "Paranormal suspense." },
  { title: "Infinity Run", img: "https://i.pinimg.com/736x/9d/0f/70/9d0f7042c01b22b1fe03b9b7d8639235.jpg", desc: "Sci-fi racing adventure." },
  { title: "Nova Rising", img: "https://creativereview.imgix.net/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&crop=faces,entropy,edges&fit=crop&q=60&w=1728&h=2560", desc: "Epic alien war saga." }, { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg", desc: "Action-packed urban adventure." },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525", desc: "A neon-soaked cyberpunk tale." }, { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg", desc: "Action-packed urban adventure." },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525", desc: "A neon-soaked cyberpunk tale." },
  { title: "Crimson Tide", img: "https://images.cdn-files-a.com/uploads/2058276/2000_5ca271aada963.jpg", desc: "High-stakes submarine drama." },
  { title: "Last Frontier", img: "https://m.media-amazon.com/images/I/61+AveYL+YL._AC_UF894,1000_QL80_.jpg", desc: "Epic space exploration." },
  { title: "Skyfalling", img: "https://i.pinimg.com/736x/4d/b4/10/4db4109f3d0576e328a948855027a025.jpg", desc: "Thrilling disaster story." },
  { title: "Ghost Line", img: "https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg", desc: "Paranormal suspense." },
  { title: "Infinity Run", img: "https://i.pinimg.com/736x/9d/0f/70/9d0f7042c01b22b1fe03b9b7d8639235.jpg", desc: "Sci-fi racing adventure." },
  { title: "Nova Rising", img: "https://creativereview.imgix.net/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&crop=faces,entropy,edges&fit=crop&q=60&w=1728&h=2560", desc: "Epic alien war saga." }, { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg", desc: "Action-packed urban adventure." },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525", desc: "A neon-soaked cyberpunk tale." }, { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg", desc: "Action-packed urban adventure." },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525", desc: "A neon-soaked cyberpunk tale." },
  { title: "Crimson Tide", img: "https://images.cdn-files-a.com/uploads/2058276/2000_5ca271aada963.jpg", desc: "High-stakes submarine drama." },
  { title: "Last Frontier", img: "https://m.media-amazon.com/images/I/61+AveYL+YL._AC_UF894,1000_QL80_.jpg", desc: "Epic space exploration." },
  { title: "Skyfalling", img: "https://i.pinimg.com/736x/4d/b4/10/4db4109f3d0576e328a948855027a025.jpg", desc: "Thrilling disaster story." },
  { title: "Ghost Line", img: "https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_570xN.4087791906_jcbj.jpg", desc: "Paranormal suspense." },
  { title: "Infinity Run", img: "https://i.pinimg.com/736x/9d/0f/70/9d0f7042c01b22b1fe03b9b7d8639235.jpg", desc: "Sci-fi racing adventure." },
  { title: "Nova Rising", img: "https://creativereview.imgix.net/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&crop=faces,entropy,edges&fit=crop&q=60&w=1728&h=2560", desc: "Epic alien war saga." }, { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg", desc: "Action-packed urban adventure." },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525", desc: "A neon-soaked cyberpunk tale." }, { title: "Shadow City", img: "https://i.ebayimg.com/images/g/l88AAOSwsFVax5qg/s-l1200.jpg", desc: "Action-packed urban adventure." },
  { title: "Neon Dreams", img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/epic-fantasy-movie-poster-design-template-fc2d5f7708a1a49889ac1b54a1eb2143_screen.jpg?ts=1692349525", desc: "A neon-soaked cyberpunk tale." },
];
// =========================
// LOAD POSTERS
const slider = document.getElementById('slider');
if (slider) {
  slider.innerHTML = "";
  movies.forEach(movie => {
    const div = document.createElement('div');
    div.classList.add('poster');
    div.style.backgroundImage = `url(${movie.img})`;
    div.title = movie.title;

    // Click opens popup
    div.addEventListener('click', () => {
      document.getElementById('popupImg').src = movie.img;
      document.getElementById('popupTitle').innerText = movie.title;
      document.getElementById('popupDesc').innerText = movie.desc;
      document.getElementById('popup').classList.remove('hidden');
    });

    slider.appendChild(div);
  });
}

// =========================
// CLOSE POPUP
const closeBtn = document.getElementById('closePopup');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
  });
}

// =========================
// MOBILE MENU TOGGLE
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
  });
}

