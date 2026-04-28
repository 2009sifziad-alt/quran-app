const surahMeta = [
  { number: 1, revelation: "Meccan", meaning: "The Opening" },
  { number: 2, revelation: "Medinan", meaning: "The Cow" },
  { number: 3, revelation: "Medinan", meaning: "Family of Imran" },
  { number: 4, revelation: "Medinan", meaning: "The Women" },
  { number: 5, revelation: "Medinan", meaning: "The Table Spread" },
  { number: 6, revelation: "Meccan", meaning: "The Cattle" },
  { number: 7, revelation: "Meccan", meaning: "The Heights" },
  { number: 8, revelation: "Medinan", meaning: "The Spoils of War" },
  { number: 9, revelation: "Medinan", meaning: "The Repentance" },
  { number: 10, revelation: "Meccan", meaning: "Jonah" },
  { number: 11, revelation: "Meccan", meaning: "Hud" },
  { number: 12, revelation: "Meccan", meaning: "Joseph" },
  { number: 13, revelation: "Medinan", meaning: "The Thunder" },
  { number: 14, revelation: "Meccan", meaning: "Abraham" },
  { number: 15, revelation: "Meccan", meaning: "The Rocky Tract" },
  { number: 16, revelation: "Meccan", meaning: "The Bee" },
  { number: 17, revelation: "Meccan", meaning: "The Night Journey" },
  { number: 18, revelation: "Meccan", meaning: "The Cave" },
  { number: 19, revelation: "Meccan", meaning: "Mary" },
  { number: 20, revelation: "Meccan", meaning: "Ta-Ha" },
  { number: 21, revelation: "Meccan", meaning: "The Prophets" },
  { number: 22, revelation: "Medinan", meaning: "The Pilgrimage" },
  { number: 23, revelation: "Meccan", meaning: "The Believers" },
  { number: 24, revelation: "Medinan", meaning: "The Light" },
  { number: 25, revelation: "Meccan", meaning: "The Criterion" },
  { number: 26, revelation: "Meccan", meaning: "The Poets" },
  { number: 27, revelation: "Meccan", meaning: "The Ant" },
  { number: 28, revelation: "Meccan", meaning: "The Stories" },
  { number: 29, revelation: "Meccan", meaning: "The Spider" },
  { number: 30, revelation: "Meccan", meaning: "The Romans" },
  { number: 31, revelation: "Meccan", meaning: "Luqman" },
  { number: 32, revelation: "Meccan", meaning: "The Prostration" },
  { number: 33, revelation: "Medinan", meaning: "The Combined Forces" },
  { number: 34, revelation: "Meccan", meaning: "Sheba" },
  { number: 35, revelation: "Meccan", meaning: "Originator" },
  { number: 36, revelation: "Meccan", meaning: "Ya-Sin" },
  { number: 37, revelation: "Meccan", meaning: "Those Drawn Up in Ranks" },
  { number: 38, revelation: "Meccan", meaning: "Sad" },
  { number: 39, revelation: "Meccan", meaning: "The Troops" },
  { number: 40, revelation: "Meccan", meaning: "The Forgiver" },
  { number: 41, revelation: "Meccan", meaning: "Explained in Detail" },
  { number: 42, revelation: "Meccan", meaning: "Consultation" },
  { number: 43, revelation: "Meccan", meaning: "Gold Adornments" },
  { number: 44, revelation: "Meccan", meaning: "The Smoke" },
  { number: 45, revelation: "Meccan", meaning: "The Kneeling" },
  { number: 46, revelation: "Meccan", meaning: "The Wind-Curved Sandhills" },
  { number: 47, revelation: "Medinan", meaning: "Muhammad" },
  { number: 48, revelation: "Medinan", meaning: "The Victory" },
  { number: 49, revelation: "Medinan", meaning: "The Rooms" },
  { number: 50, revelation: "Meccan", meaning: "Qaf" },
  { number: 51, revelation: "Meccan", meaning: "The Winnowing Winds" },
  { number: 52, revelation: "Meccan", meaning: "The Mount" },
  { number: 53, revelation: "Meccan", meaning: "The Star" },
  { number: 54, revelation: "Meccan", meaning: "The Moon" },
  { number: 55, revelation: "Medinan", meaning: "The Most Compassionate" },
  { number: 56, revelation: "Meccan", meaning: "The Inevitable" },
  { number: 57, revelation: "Medinan", meaning: "The Iron" },
  { number: 58, revelation: "Medinan", meaning: "The Pleading Woman" },
  { number: 59, revelation: "Medinan", meaning: "The Exile" },
  { number: 60, revelation: "Medinan", meaning: "She That Is To Be Examined" },
  { number: 61, revelation: "Medinan", meaning: "The Ranks" },
  { number: 62, revelation: "Medinan", meaning: "Friday" },
  { number: 63, revelation: "Medinan", meaning: "The Hypocrites" },
  { number: 64, revelation: "Medinan", meaning: "Mutual Disillusion" },
  { number: 65, revelation: "Medinan", meaning: "Divorce" },
  { number: 66, revelation: "Medinan", meaning: "The Prohibition" },
  { number: 67, revelation: "Meccan", meaning: "The Sovereignty" },
  { number: 68, revelation: "Meccan", meaning: "The Pen" },
  { number: 69, revelation: "Meccan", meaning: "The Reality" },
  { number: 70, revelation: "Meccan", meaning: "The Ascending Stairways" },
  { number: 71, revelation: "Meccan", meaning: "Noah" },
  { number: 72, revelation: "Meccan", meaning: "The Jinn" },
  { number: 73, revelation: "Meccan", meaning: "The Enshrouded One" },
  { number: 74, revelation: "Meccan", meaning: "The Cloaked One" },
  { number: 75, revelation: "Meccan", meaning: "The Resurrection" },
  { number: 76, revelation: "Medinan", meaning: "The Human" },
  { number: 77, revelation: "Meccan", meaning: "Those Sent Forth" },
  { number: 78, revelation: "Meccan", meaning: "The Tidings" },
  { number: 79, revelation: "Meccan", meaning: "Those Who Drag Forth" },
  { number: 80, revelation: "Meccan", meaning: "He Frowned" },
  { number: 81, revelation: "Meccan", meaning: "The Overthrowing" },
  { number: 82, revelation: "Meccan", meaning: "The Cleaving" },
  { number: 83, revelation: "Meccan", meaning: "Defrauding" },
  { number: 84, revelation: "Meccan", meaning: "The Splitting Open" },
  { number: 85, revelation: "Meccan", meaning: "The Mansions of the Stars" },
  { number: 86, revelation: "Meccan", meaning: "The Nightcomer" },
  { number: 87, revelation: "Meccan", meaning: "The Most High" },
  { number: 88, revelation: "Meccan", meaning: "The Overwhelming" },
  { number: 89, revelation: "Meccan", meaning: "The Dawn" },
  { number: 90, revelation: "Meccan", meaning: "The City" },
  { number: 91, revelation: "Meccan", meaning: "The Sun" },
  { number: 92, revelation: "Meccan", meaning: "The Night" },
  { number: 93, revelation: "Meccan", meaning: "The Morning Brightness" },
  { number: 94, revelation: "Meccan", meaning: "The Relief" },
  { number: 95, revelation: "Meccan", meaning: "The Fig" },
  { number: 96, revelation: "Meccan", meaning: "The Clinging Clot" },
  { number: 97, revelation: "Meccan", meaning: "The Power" },
  { number: 98, revelation: "Medinan", meaning: "The Clear Proof" },
  { number: 99, revelation: "Medinan", meaning: "The Earthquake" },
  { number: 100, revelation: "Meccan", meaning: "The Courser" },
  { number: 101, revelation: "Meccan", meaning: "The Calamity" },
  { number: 102, revelation: "Meccan", meaning: "The Rivalry in World Increase" },
  { number: 103, revelation: "Meccan", meaning: "The Declining Day" },
  { number: 104, revelation: "Meccan", meaning: "The Traducer" },
  { number: 105, revelation: "Meccan", meaning: "The Elephant" },
  { number: 106, revelation: "Meccan", meaning: "Quraysh" },
  { number: 107, revelation: "Meccan", meaning: "Small Kindnesses" },
  { number: 108, revelation: "Meccan", meaning: "Abundance" },
  { number: 109, revelation: "Meccan", meaning: "The Disbelievers" },
  { number: 110, revelation: "Medinan", meaning: "The Divine Support" },
  { number: 111, revelation: "Meccan", meaning: "The Palm Fiber" },
  { number: 112, revelation: "Meccan", meaning: "Sincerity" },
  { number: 113, revelation: "Meccan", meaning: "The Daybreak" },
  { number: 114, revelation: "Meccan", meaning: "Mankind" }
];

const metaByNumber = new Map(surahMeta.map((entry) => [entry.number, entry]));

const searchInput = document.querySelector("#search-input");
const surahList = document.querySelector("#surah-list");
const detailView = document.querySelector("#detail-view");
const resultCount = document.querySelector("#result-count");
const filterButtons = [...document.querySelectorAll(".filter-chip")];

const state = {
  selectedFilter: "all",
  selectedSurahNumber: 1,
  surahs: [],
  versesBySurah: new Map()
};

function buildDataModel() {
  const raw = window.QURAN_DATA;

  if (!raw || !Array.isArray(raw.chapters) || !Array.isArray(raw.verses)) {
    throw new Error("Quran data is missing or invalid.");
  }

  raw.verses.forEach((verse) => {
    const bucket = state.versesBySurah.get(verse.surah) || [];
    bucket.push(verse);
    state.versesBySurah.set(verse.surah, bucket);
  });

  state.surahs = raw.chapters.map((chapter) => {
    const meta = metaByNumber.get(chapter.surah_number) || {};

    return {
      number: chapter.surah_number,
      name: chapter.name_en,
      arabic: chapter.name_ar,
      ayahs: chapter.verses_count,
      revelation: meta.revelation || "Unknown",
      meaning: meta.meaning || ""
    };
  });
}

function getSurah(number) {
  return state.surahs.find((surah) => surah.number === number) || null;
}

function getSelectedSurah() {
  return getSurah(state.selectedSurahNumber) || state.surahs[0] || null;
}

function getFilteredSurahs() {
  const query = searchInput.value.trim().toLowerCase();

  return state.surahs.filter((surah) => {
    const matchesFilter =
      state.selectedFilter === "all" || surah.revelation === state.selectedFilter;
    const matchesQuery =
      query === "" ||
      surah.number.toString().includes(query) ||
      surah.name.toLowerCase().includes(query) ||
      surah.arabic.includes(query) ||
      surah.meaning.toLowerCase().includes(query);

    return matchesFilter && matchesQuery;
  });
}

function syncSelection(filteredSurahs) {
  if (!filteredSurahs.some((surah) => surah.number === state.selectedSurahNumber)) {
    state.selectedSurahNumber = filteredSurahs[0]?.number || 1;
  }
}

function renderList(surahs) {
  surahList.innerHTML = "";

  if (!surahs.length) {
    surahList.innerHTML = `
      <div class="empty-state">
        <h3>No surahs found</h3>
        <p>Try another search or switch the revelation filter.</p>
      </div>
    `;
    return;
  }

  const fragment = document.createDocumentFragment();

  surahs.forEach((surah) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `surah-card${state.selectedSurahNumber === surah.number ? " is-selected" : ""}`;
    button.setAttribute("role", "listitem");
    button.innerHTML = `
      <div class="surah-row">
        <div>
          <div class="surah-number">Surah ${surah.number}</div>
          <div class="surah-name">${surah.name}</div>
        </div>
        <div class="surah-arabic" lang="ar" dir="rtl">${surah.arabic}</div>
      </div>
      <div class="surah-meta">
        <span class="meta-pill">${surah.ayahs} ayahs</span>
        <span class="meta-pill">${surah.revelation}</span>
      </div>
    `;

    button.addEventListener("click", () => {
      state.selectedSurahNumber = surah.number;
      render();
    });

    fragment.appendChild(button);
  });

  surahList.appendChild(fragment);
}

function renderDetail(surah) {
  const verses = state.versesBySurah.get(surah.number) || [];
  const prevDisabled = surah.number === 1 ? "disabled" : "";
  const nextDisabled = surah.number === 114 ? "disabled" : "";

  detailView.innerHTML = `
    <div class="detail-head">
      <div>
        <p class="detail-meta">Surah ${surah.number}</p>
        <h2 id="detail-title">${surah.name}</h2>
        <p class="detail-subtitle">${surah.meaning}</p>
      </div>
      <div class="big-number">${surah.number}</div>
    </div>

    <div class="reader-toolbar">
      <div class="detail-arabic" lang="ar" dir="rtl">${surah.arabic}</div>
      <div class="reader-actions">
        <button id="prev-surah" class="reader-button" type="button" ${prevDisabled}>Previous</button>
        <button id="next-surah" class="reader-button" type="button" ${nextDisabled}>Next</button>
      </div>
    </div>

    <div class="detail-grid">
      <div class="detail-card">
        <span class="mini-label">Ayahs</span>
        <span class="detail-value">${surah.ayahs}</span>
      </div>
      <div class="detail-card">
        <span class="mini-label">Revelation</span>
        <span class="detail-value">${surah.revelation}</span>
      </div>
      <div class="detail-card">
        <span class="mini-label">Reading</span>
        <span class="detail-value">Arabic text</span>
      </div>
    </div>

    <div class="ayah-list" aria-label="Ayahs" lang="ar" dir="rtl">
      ${verses
        .map(
          (verse) => `
            <article class="ayah-row">
              <div class="ayah-index">${verse.ayah}</div>
              <p class="ayah-text">${verse.text_ar}</p>
            </article>
          `
        )
        .join("")}
    </div>

    <p class="detail-note">
      Local reading view with all 114 surahs.
    </p>
  `;

  const prevButton = document.querySelector("#prev-surah");
  const nextButton = document.querySelector("#next-surah");

  prevButton?.addEventListener("click", () => {
    if (state.selectedSurahNumber > 1) {
      state.selectedSurahNumber -= 1;
      render();
    }
  });

  nextButton?.addEventListener("click", () => {
    if (state.selectedSurahNumber < 114) {
      state.selectedSurahNumber += 1;
      render();
    }
  });
}

function renderError(message) {
  detailView.innerHTML = `
    <div class="empty-state">
      <h3>Reader unavailable</h3>
      <p>${message}</p>
    </div>
  `;
}

function render() {
  const filteredSurahs = getFilteredSurahs();
  syncSelection(filteredSurahs);
  renderList(filteredSurahs);
  resultCount.textContent = `${filteredSurahs.length} surah${filteredSurahs.length === 1 ? "" : "s"}`;

  const selectedSurah = getSelectedSurah();
  if (selectedSurah) {
    renderDetail(selectedSurah);
  } else {
    renderError("Choose a surah from the list to start reading.");
  }
}

function init() {
  try {
    buildDataModel();
    render();
  } catch (error) {
    console.error(error);
    renderError("The Quran text could not be loaded.");
  }
}

searchInput.addEventListener("input", render);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.selectedFilter = button.dataset.filter;
    filterButtons.forEach((chip) => {
      chip.classList.toggle("is-active", chip === button);
    });
    render();
  });
});

init();
