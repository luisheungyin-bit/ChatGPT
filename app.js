const STORAGE_KEY = "hk-trip-plan-v1";

const defaultDays = [
  "Day 1 01/17 (六) 抵港 / 油麻地・佐敦",
  "Day 2 01/18 (日) 彈性日",
  "Day 3 01/19 (一) 深水埗 / 西九 / 旺角",
  "Day 4 01/20 (二) 彩虹邨 / 黃大仙 / 牛池灣",
  "Day 5 01/21 (三) 蓮香飲茶 / 放鬆 / 閃燈夜遊",
  "Day 6 01/22 (四) 最後探索日 / 返程"
];

const defaultNotes = [
  "八達通建議：建議抵達後先購買或綁定手機八達通，交通與便利商店都能使用。",
  "交通時間：尖沙咀—中環搭地鐵約 10-15 分鐘，搭天星小輪約 8 分鐘。",
  "備用方案：若遇到下雨，可改安排室內行程：M+、K11 Musea、海港城。"
];

const defaultData = {
  days: defaultDays,
  notes: defaultNotes,
  items: [
    {
      id: "day1-1",
      day: defaultDays[0],
      time: "14:00",
      title: "抵達香港",
      location: "香港國際機場",
      notes: "入住／放行李"
    },
    {
      id: "day1-2",
      day: defaultDays[0],
      time: "18:00-22:00",
      title: "油麻地／佐敦夜生活",
      location: "油麻地, 佐敦",
      notes: "就近、不趕；港式晚餐＋甜品收尾"
    },
    {
      id: "day1-3",
      day: defaultDays[0],
      time: "",
      title: "尖沙咀海旁散步看夜景",
      location: "尖沙咀海濱長廊",
      notes: "加碼（視體力）"
    },
    {
      id: "day2-1",
      day: defaultDays[1],
      time: "上午",
      title: "澳洲牛奶公司",
      location: "澳洲牛奶公司",
      notes: ""
    },
    {
      id: "day2-2",
      day: defaultDays[1],
      time: "下午",
      title: "旺角逛街／吃飯",
      location: "旺角",
      notes: "巧佳小巴用膳"
    },
    {
      id: "day2-3",
      day: defaultDays[1],
      time: "晚上",
      title: "跟寶怡吃飯",
      location: "",
      notes: ""
    },
    {
      id: "day3-1",
      day: defaultDays[2],
      time: "上午",
      title: "深水埗在地街區",
      location: "深水埗",
      notes: "暫定"
    },
    {
      id: "day3-2",
      day: defaultDays[2],
      time: "",
      title: "鴨寮街／周邊小店與街景",
      location: "鴨寮街",
      notes: ""
    },
    {
      id: "day3-3",
      day: defaultDays[2],
      time: "下午",
      title: "西九文化區海旁散步",
      location: "西九文化區",
      notes: "暫定"
    },
    {
      id: "day3-4",
      day: defaultDays[2],
      time: "18:30-19:00",
      title: "旺角／油麻地集合",
      location: "旺角 / 油麻地",
      notes: ""
    },
    {
      id: "day3-5",
      day: defaultDays[2],
      time: "晚上",
      title: "旺角煲仔飯",
      location: "旺角",
      notes: "暫定；璇晚餐加入"
    },
    {
      id: "day3-6",
      day: defaultDays[2],
      time: "",
      title: "女人街／波鞋街散步或甜品作結",
      location: "女人街 / 波鞋街",
      notes: "暫定"
    },
    {
      id: "day4-1",
      day: defaultDays[3],
      time: "上午",
      title: "彩虹邨（彩虹村）",
      location: "彩虹邨",
      notes: "早餐：彩虹冰室；早上光線更好、拍照更乾淨"
    },
    {
      id: "day4-2",
      day: defaultDays[3],
      time: "中午～下午早段",
      title: "黃大仙祠",
      location: "黃大仙祠",
      notes: "餓的話去茶餐廳吃飯；建議預留 1.5-2 小時"
    },
    {
      id: "day4-3",
      day: defaultDays[3],
      time: "下午",
      title: "M+ 博物館",
      location: "M+ 博物館",
      notes: "開放時間：週二至週四及週末 10:00-18:00；週五 10:00-22:00；週一休館；建議入館時段：15:00-17:30"
    },
    {
      id: "day4-4",
      day: defaultDays[3],
      time: "晚上",
      title: "牛池灣大排檔",
      location: "牛池灣",
      notes: "建議 19:00-21:00 用餐"
    },
    {
      id: "day5-1",
      day: defaultDays[4],
      time: "早上",
      title: "蓮香樓飲茶",
      location: "蓮香樓",
      notes: "09:00 前後到店（較易入座）"
    },
    {
      id: "day5-2",
      day: defaultDays[4],
      time: "早上延伸",
      title: "中環手扶電梯 + 蘭芳園",
      location: "中環手扶電梯",
      notes: "飲茶後直接步行：拍照＋走一段精華即可"
    },
    {
      id: "day5-3",
      day: defaultDays[4],
      time: "下午",
      title: "堅尼地城籃球場",
      location: "堅尼地城籃球場",
      notes: "由中環搭港島線往西；地鐵站 C 出口出發最順；拍照建議 30-60 分鐘"
    },
    {
      id: "day5-4",
      day: defaultDays[4],
      time: "下午後段",
      title: "銅鑼灣・怡和街天橋",
      location: "怡和街天橋",
      notes: "由堅尼地城搭港島線到銅鑼灣；拍照＋街景走走（30-60 分鐘）"
    },
    {
      id: "day5-5",
      day: defaultDays[4],
      time: "晚上",
      title: "閃燈夜景觀光巴士",
      location: "尖沙咀",
      notes: "18:00 先晚餐／集合；19:00 上車夜遊；落車後甜品／宵夜作結"
    },
    {
      id: "day6-1",
      day: defaultDays[5],
      time: "上午-下午",
      title: "最後探索（暫定）",
      location: "",
      notes: "尖沙咀：最近、最穩；銅鑼灣：商場密集、效率高"
    },
    {
      id: "day6-2",
      day: defaultDays[5],
      time: "15:30-16:00",
      title: "回酒店取行李",
      location: "",
      notes: "出發前往機場（保留緩衝）"
    },
    {
      id: "day6-3",
      day: defaultDays[5],
      time: "",
      title: "返程",
      location: "香港國際機場",
      notes: "18:45 起飛"
    }
  ]
};

const itineraryWrap = document.getElementById("itinerary-wrap");
const addButtons = [document.getElementById("add-item"), document.getElementById("add-item-2")];
const addDayButtons = [document.getElementById("add-day"), document.getElementById("add-day-2")];
const resetButton = document.getElementById("reset-plan");
const exportButton = document.getElementById("export-plan");
const importButton = document.getElementById("import-plan");
const importFile = document.getElementById("import-file");
const dayCountEl = document.getElementById("day-count");
const itemCountEl = document.getElementById("item-count");
const dayOptions = document.getElementById("day-options");

const modal = document.getElementById("editor-modal");
const modalTitle = document.getElementById("modal-title");
const form = document.getElementById("item-form");
const inputDay = document.getElementById("item-day");
const inputTime = document.getElementById("item-time");
const inputTitle = document.getElementById("item-title");
const inputLocation = document.getElementById("item-location");
const inputNotes = document.getElementById("item-notes");

const dayModal = document.getElementById("day-modal");
const dayForm = document.getElementById("day-form");
const dayNameInput = document.getElementById("day-name");

const noteList = document.getElementById("note-list");
const noteForm = document.getElementById("note-form");
const noteInput = document.getElementById("note-input");
const noteAddButton = document.getElementById("add-note");
const noteCancelButton = document.getElementById("note-cancel");

const weatherStatus = document.getElementById("weather-status");
const weatherTemp = document.getElementById("weather-temp");
const weatherFeels = document.getElementById("weather-feels");
const weatherRain = document.getElementById("weather-rain");
const weatherWind = document.getElementById("weather-wind");
const weatherUpdated = document.getElementById("weather-updated");
const forecastWrap = document.getElementById("forecast");
const refreshWeather = document.getElementById("refresh-weather");

let plan = [];
let days = [];
let notes = [];
let editingId = null;

const data = loadData();
plan = data.items;
days = data.days;
notes = data.notes;
const weatherDescriptions = {
  0: "晴朗",
  1: "大致晴朗",
  2: "局部多雲",
  3: "陰天",
  45: "有霧",
  48: "霧凇",
  51: "細雨",
  53: "小雨",
  55: "中雨",
  61: "陣雨",
  63: "降雨",
  65: "大雨",
  71: "小雪",
  73: "降雪",
  75: "大雪",
  80: "短暫陣雨",
  81: "陣雨",
  82: "大陣雨",
  95: "雷雨",
  96: "雷雨伴冰雹",
  99: "強雷雨"
};

const weatherIcons = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  53: "🌦️",
  55: "🌧️",
  61: "🌧️",
  63: "🌧️",
  65: "🌧️",
  71: "🌨️",
  73: "🌨️",
  75: "❄️",
  80: "🌧️",
  81: "🌧️",
  82: "⛈️",
  95: "⛈️",
  96: "⛈️",
  99: "⛈️"
};

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return clone(defaultData);
  }
  try {
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      const items = parsed.map(normalizeItem).filter(Boolean);
      const notes = clone(defaultNotes);
      return {
        days: buildDayList(items, []),
        items,
        notes
      };
    }
    if (parsed && typeof parsed === "object") {
      const items = Array.isArray(parsed.items) ? parsed.items.map(normalizeItem).filter(Boolean) : [];
      const days = buildDayList(items, Array.isArray(parsed.days) ? parsed.days : []);
      const notes = Array.isArray(parsed.notes)
        ? parsed.notes.map(normalizeNote).filter(Boolean)
        : clone(defaultNotes);
      if (!items.length && !days.length && !notes.length) {
        return clone(defaultData);
      }
      return { days, items, notes };
    }
  } catch (error) {
    return clone(defaultData);
  }
  return clone(defaultData);
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ days, items: plan, notes }));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function cleanText(value) {
  if (value === undefined || value === null) {
    return "";
  }
  return String(value).trim();
}

function cleanDayLabel(value) {
  return cleanText(value);
}

function normalizeItem(item) {
  if (!item) {
    return null;
  }
  const day = cleanDayLabel(item.day) || "未分類";
  return {
    id: item.id || makeId(),
    day,
    time: cleanText(item.time),
    title: cleanText(item.title),
    location: cleanText(item.location),
    notes: cleanText(item.notes)
  };
}

function normalizeNote(note) {
  if (!note) {
    return null;
  }
  if (typeof note === "string") {
    const text = cleanText(note);
    return text ? { id: makeId(), text } : null;
  }
  const text = cleanText(note.text || note.content || note.note);
  if (!text) {
    return null;
  }
  return {
    id: note.id || makeId(),
    text
  };
}

function buildDayList(items, storedDays) {
  const list = [];
  const addDay = (label) => {
    const cleaned = cleanDayLabel(label);
    if (!cleaned) {
      return;
    }
    if (!list.includes(cleaned)) {
      list.push(cleaned);
    }
  };
  (storedDays || []).forEach(addDay);
  items.forEach((item) => addDay(item.day || "未分類"));
  if (!list.length) {
    list.push("未分類");
  }
  return list;
}

function ensureDay(label) {
  const cleaned = cleanDayLabel(label) || "未分類";
  if (!days.includes(cleaned)) {
    days.push(cleaned);
  }
  return cleaned;
}

function makeId() {
  if (window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `item-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function dayOrder(label) {
  const match = label.match(/(\d+)/);
  return match ? Number.parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
}

function timeToMinutes(value) {
  const raw = cleanText(value);
  if (!raw) {
    return Number.MAX_SAFE_INTEGER;
  }
  const match = raw.match(/(\d{1,2})[:：](\d{2})/);
  if (match) {
    return Number.parseInt(match[1], 10) * 60 + Number.parseInt(match[2], 10);
  }
  if (/上午.*下午/.test(raw)) {
    return 780;
  }
  if (/下午後段|傍晚/.test(raw)) {
    return 1020;
  }
  if (/下午早段/.test(raw)) {
    return 840;
  }
  if (/下午/.test(raw)) {
    return 900;
  }
  if (/中午/.test(raw)) {
    return 720;
  }
  if (/上午|早上/.test(raw)) {
    return 540;
  }
  if (/晚上|夜/.test(raw)) {
    return 1140;
  }
  if (/清晨|凌晨/.test(raw)) {
    return 300;
  }
  return Number.MAX_SAFE_INTEGER;
}

function groupPlan() {
  return plan.reduce((acc, item) => {
    const key = item.day || "未分類";
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
}

function buildMapQuery(item) {
  return [item.location, item.title].filter(Boolean).join(" ");
}

function getOrderedDays() {
  const ordered = buildDayList(plan, days);
  if (!days.length) {
    return ordered.sort((a, b) => {
      const order = dayOrder(a) - dayOrder(b);
      return order !== 0 ? order : a.localeCompare(b, "zh-Hant");
    });
  }
  days = ordered;
  return ordered;
}

function renderPlan() {
  itineraryWrap.innerHTML = "";

  const groups = groupPlan();
  const orderedDays = getOrderedDays();

  dayCountEl.textContent = orderedDays.length.toString();
  itemCountEl.textContent = plan.length.toString();
  updateDayOptions(orderedDays);

  orderedDays.forEach((day) => {
    const items = (groups[day] || []).slice().sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time));
    const dayCard = document.createElement("div");
    dayCard.className = "day-card";

    const header = document.createElement("div");
    header.className = "day-header";

    const title = document.createElement("div");
    title.className = "day-title";
    title.textContent = day;

    const count = document.createElement("div");
    count.className = "day-count";
    count.textContent = `${items.length} 個景點`;

    header.appendChild(title);
    header.appendChild(count);

    const list = document.createElement("div");
    list.className = "item-list";

    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "empty-day";
      empty.textContent = "尚未安排行程，可點「新增行程」加入。";
      list.appendChild(empty);
    }

    items.forEach((item) => {
      const card = document.createElement("article");
      card.className = "item-card";
      card.dataset.id = item.id;

      const top = document.createElement("div");
      top.className = "item-top";

      const cardTitle = document.createElement("div");
      cardTitle.className = "item-title";
      cardTitle.textContent = item.title || "未命名行程";

      const time = document.createElement("div");
      time.className = "item-time";
      time.textContent = item.time || "未填時間";

      top.appendChild(cardTitle);
      top.appendChild(time);

      const location = document.createElement("div");
      location.className = "item-location";
      const query = buildMapQuery(item);
      if (query) {
        const link = document.createElement("a");
        link.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = `${item.location || query}（開啟地圖）`;
        location.appendChild(link);
      } else {
        location.classList.add("muted");
        location.textContent = "尚未設定地點";
      }

      const actions = document.createElement("div");
      actions.className = "item-actions";
      const editButton = document.createElement("button");
      editButton.className = "ghost";
      editButton.type = "button";
      editButton.dataset.action = "edit";
      editButton.textContent = "編輯";
      const deleteButton = document.createElement("button");
      deleteButton.className = "ghost";
      deleteButton.type = "button";
      deleteButton.dataset.action = "delete";
      deleteButton.textContent = "刪除";
      actions.appendChild(editButton);
      actions.appendChild(deleteButton);

      card.appendChild(top);
      card.appendChild(location);

      if (item.notes) {
        const notes = document.createElement("p");
        notes.className = "item-notes";
        notes.textContent = item.notes;
        card.appendChild(notes);
      }

      card.appendChild(actions);
      list.appendChild(card);
    });

    dayCard.appendChild(header);
    dayCard.appendChild(list);
    itineraryWrap.appendChild(dayCard);
  });
}

function renderNotes() {
  if (!noteList) {
    return;
  }
  noteList.innerHTML = "";
  if (!notes.length) {
    const empty = document.createElement("li");
    empty.className = "empty-note";
    empty.textContent = "目前沒有小抄，新增一則提醒吧。";
    noteList.appendChild(empty);
    return;
  }

  notes.forEach((note) => {
    const item = document.createElement("li");
    item.className = "note-item";
    item.dataset.id = note.id;

    const text = document.createElement("p");
    text.className = "note-text";
    text.textContent = note.text;

    const actions = document.createElement("div");
    actions.className = "note-actions";
    const deleteButton = document.createElement("button");
    deleteButton.className = "ghost note-delete";
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.textContent = "刪除";
    actions.appendChild(deleteButton);

    item.appendChild(text);
    item.appendChild(actions);
    noteList.appendChild(item);
  });
}

function updateDayOptions(dayList) {
  dayOptions.innerHTML = "";
  dayList.forEach((day) => {
    const option = document.createElement("option");
    option.value = day;
    dayOptions.appendChild(option);
  });
}

function openModal(item) {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  editingId = item ? item.id : null;
  modalTitle.textContent = item ? "編輯行程" : "新增行程";

  const fallbackDay = days.length ? days[days.length - 1] : "";
  inputDay.value = item ? item.day : fallbackDay;
  inputTime.value = item ? item.time : "";
  inputTitle.value = item ? item.title : "";
  inputLocation.value = item ? item.location : "";
  inputNotes.value = item ? item.notes : "";
  inputDay.focus();
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  form.reset();
  editingId = null;
}

function openDayModal() {
  dayModal.classList.add("show");
  dayModal.setAttribute("aria-hidden", "false");
  dayNameInput.value = "";
  dayNameInput.focus();
}

function closeDayModal() {
  dayModal.classList.remove("show");
  dayModal.setAttribute("aria-hidden", "true");
  dayForm.reset();
}

function addDay(dayLabel) {
  const cleaned = cleanDayLabel(dayLabel);
  if (!cleaned) {
    return false;
  }
  if (days.includes(cleaned)) {
    return false;
  }
  days.push(cleaned);
  saveData();
  renderPlan();
  return true;
}

function addNote(text) {
  const normalized = normalizeNote({ text });
  if (!normalized) {
    return false;
  }
  notes.push(normalized);
  saveData();
  renderNotes();
  return true;
}

function upsertItem(payload) {
  const day = ensureDay(payload.day);
  const nextPayload = { ...payload, day };
  if (editingId) {
    plan = plan.map((item) => (item.id === editingId ? { ...item, ...nextPayload } : item));
  } else {
    plan.push({ id: makeId(), ...nextPayload });
  }
  saveData();
  renderPlan();
}

function handleFormSubmit(event) {
  event.preventDefault();
  const normalized = normalizeItem({
    day: inputDay.value,
    time: inputTime.value,
    title: inputTitle.value,
    location: inputLocation.value,
    notes: inputNotes.value
  });
  if (!normalized) {
    return;
  }
  const { id, ...payload } = normalized;
  upsertItem(payload);
  closeModal();
}

function handleDaySubmit(event) {
  event.preventDefault();
  const added = addDay(dayNameInput.value);
  if (!added) {
    window.alert("天數名稱已存在或內容為空。");
    return;
  }
  closeDayModal();
}

function handleNoteSubmit(event) {
  event.preventDefault();
  const added = addNote(noteInput.value);
  if (!added) {
    window.alert("請輸入小抄內容。");
    return;
  }
  noteForm.reset();
  noteInput.focus();
}

function handleNoteClick(event) {
  const button = event.target.closest("button");
  if (!button || button.dataset.action !== "delete") {
    return;
  }
  const item = event.target.closest(".note-item");
  if (!item) {
    return;
  }
  const id = item.dataset.id;
  notes = notes.filter((note) => note.id !== id);
  saveData();
  renderNotes();
}

function focusNoteForm() {
  if (!noteInput) {
    return;
  }
  noteInput.focus();
}

function handlePlanClick(event) {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }
  const card = event.target.closest(".item-card");
  if (!card) {
    return;
  }
  const id = card.dataset.id;
  const action = button.dataset.action;
  const item = plan.find((entry) => entry.id === id);
  if (!item) {
    return;
  }
  if (action === "edit") {
    openModal(item);
  }
  if (action === "delete") {
    const ok = window.confirm("確定要刪除這個行程嗎？");
    if (!ok) {
      return;
    }
    plan = plan.filter((entry) => entry.id !== id);
    saveData();
    renderPlan();
  }
}

function exportPlan() {
  const payload = { days, items: plan, notes };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "hong-kong-plan.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importPlan(file) {
  if (!file) {
    return;
  }
  file.text().then((text) => {
    try {
      const parsed = JSON.parse(text);
      if (Array.isArray(parsed)) {
        plan = parsed.map(normalizeItem).filter(Boolean);
        days = buildDayList(plan, []);
        notes = clone(defaultNotes);
      } else if (parsed && Array.isArray(parsed.items)) {
        plan = parsed.items.map(normalizeItem).filter(Boolean);
        days = buildDayList(plan, Array.isArray(parsed.days) ? parsed.days : []);
        notes = Array.isArray(parsed.notes)
          ? parsed.notes.map(normalizeNote).filter(Boolean)
          : clone(defaultNotes);
      } else {
        throw new Error("Invalid file");
      }
      saveData();
      renderPlan();
      renderNotes();
    } catch (error) {
      window.alert("匯入失敗，請確認檔案格式。");
    }
  });
}

function resetPlan() {
  const ok = window.confirm("確定要重設為預設行程？目前修改會被清除。");
  if (!ok) {
    return;
  }
  plan = clone(defaultData.items);
  days = clone(defaultData.days);
  notes = clone(defaultData.notes);
  saveData();
  renderPlan();
  renderNotes();
}
function getWeatherLabel(code) {
  return weatherDescriptions[code] || "天氣狀態";
}

function getWeatherIcon(code) {
  return weatherIcons[code] || "☁️";
}

function formatTemp(value) {
  if (typeof value !== "number") {
    return "--";
  }
  return Math.round(value).toString();
}

async function fetchWeather() {
  weatherStatus.textContent = "更新中...";
  const endpoint = "https://api.open-meteo.com/v1/forecast?latitude=22.3193&longitude=114.1694&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Asia%2FHong_Kong";
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error("Weather fetch failed");
    }
    const data = await response.json();
    const current = data.current;
    weatherTemp.textContent = formatTemp(current.temperature_2m);
    weatherFeels.textContent = `${formatTemp(current.apparent_temperature)} °C`;
    weatherRain.textContent = `${current.precipitation ?? "--"} mm`;
    weatherWind.textContent = `${formatTemp(current.wind_speed_10m)} km/h`;
    weatherStatus.textContent = getWeatherLabel(current.weather_code);

    const updatedAt = new Date(current.time);
    weatherUpdated.textContent = updatedAt.toLocaleTimeString("zh-Hant", {
      hour: "2-digit",
      minute: "2-digit"
    });

    renderForecast(data.daily);
  } catch (error) {
    weatherStatus.textContent = "無法取得天氣";
  }
}

function renderForecast(daily) {
  if (!daily) {
    return;
  }
  forecastWrap.innerHTML = "";
  const dates = daily.time.slice(0, 3);
  dates.forEach((date, index) => {
    const card = document.createElement("div");
    card.className = "forecast-card";

    const label = document.createElement("div");
    const format = new Intl.DateTimeFormat("zh-Hant", {
      weekday: "short",
      month: "numeric",
      day: "numeric"
    });
    label.textContent = format.format(new Date(date));

    const icon = document.createElement("div");
    icon.className = "forecast-icon";
    icon.textContent = getWeatherIcon(daily.weather_code[index]);

    const summary = document.createElement("div");
    summary.textContent = getWeatherLabel(daily.weather_code[index]);

    const range = document.createElement("div");
    range.textContent = `${formatTemp(daily.temperature_2m_min[index])}° / ${formatTemp(daily.temperature_2m_max[index])}°`;

    card.appendChild(label);
    card.appendChild(icon);
    card.appendChild(summary);
    card.appendChild(range);
    forecastWrap.appendChild(card);
  });
}

addButtons.forEach((button) => {
  if (button) {
    button.addEventListener("click", () => openModal());
  }
});

addDayButtons.forEach((button) => {
  if (button) {
    button.addEventListener("click", () => openDayModal());
  }
});

if (noteAddButton) {
  noteAddButton.addEventListener("click", focusNoteForm);
}

form.addEventListener("submit", handleFormSubmit);
dayForm.addEventListener("submit", handleDaySubmit);
itineraryWrap.addEventListener("click", handlePlanClick);
noteForm.addEventListener("submit", handleNoteSubmit);
noteList.addEventListener("click", handleNoteClick);
noteCancelButton.addEventListener("click", () => {
  noteForm.reset();
  noteInput.focus();
});

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close]")) {
    closeModal();
  }
});

dayModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close]")) {
    closeDayModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (modal.classList.contains("show")) {
      closeModal();
    }
    if (dayModal.classList.contains("show")) {
      closeDayModal();
    }
  }
});

resetButton.addEventListener("click", resetPlan);
exportButton.addEventListener("click", exportPlan);
importButton.addEventListener("click", () => importFile.click());
importFile.addEventListener("change", () => {
  importPlan(importFile.files[0]);
  importFile.value = "";
});
refreshWeather.addEventListener("click", fetchWeather);

renderPlan();
renderNotes();
fetchWeather();


