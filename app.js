const courses = [
  {
    id: 7,
    label: "第七課",
    sourceImage: "第一張圖",
    pages: [
      page("責 / 漬", ["責：責任、負責", "漬：油漬、醃漬"], ["美術課後，桌面留下", "油漬", "，老師提醒大家先擦乾淨。媽媽正在準備", "醃漬", "小黃瓜，弟弟主動說自己有", "責任", "幫忙；爸爸也誇他願意", "負責", "。"], ["油漬", "醃漬", "責任", "負責"]),
      page("凝 / 擬 / 礙 / 疑", ["凝：凝結、凝聚", "擬：擬人、模擬", "礙：阻礙、妨礙", "疑：懷疑、疑惑"], ["清晨天冷，窗邊水氣慢慢", "凝結", "。自然課分組時，小芸用", "擬人", "方式介紹小草；同學用", "模擬", "實驗找原因。若有人", "懷疑", "結果，大家就再討論，別讓問題變成", "阻礙", "，心裡有", "疑惑", "也能提問，讓想法", "凝聚", "在一起，不", "妨礙", "合作。"], ["凝結", "擬人", "模擬", "懷疑", "阻礙", "疑惑", "凝聚", "妨礙"]),
      page("摘 / 滴 / 適", ["摘：摘取、摘採", "滴：滴管、點滴", "適：合適、適宜"], ["外婆帶我們去果園", "摘採", "番茄，我先", "摘取", "成熟的一顆。妹妹用", "滴管", "替小盆栽加水，午餐後又陪外婆打", "點滴", "。回家前，大家選了", "合適", "的盒子裝水果，大小十分", "適宜", "。"], ["摘採", "摘取", "滴管", "點滴", "合適", "適宜"]),
      page("溢 / 益", ["溢：滿溢、洋溢", "益：獲益、利益"], ["雨後的小溪", "滿溢", "到草地邊，空氣裡", "洋溢", "著青草香。老師說，觀察自然能讓我們", "獲益", "，也提醒大家把學到的方法用在生活裡，才會得到真正的", "利益", "。"], ["滿溢", "洋溢", "獲益", "利益"]),
      page("湯 / 陽 / 楊 / 揚", ["湯：濃湯、湯匙", "陽：太陽、陽臺", "楊：楊桃、楊柳", "揚：飛揚、揚言"], ["寒假午後，", "太陽", "照進", "陽臺", "，奶奶煮了", "濃湯", "。弟弟拿", "湯匙", "盛湯，姐姐把", "楊桃", "切片，窗外", "楊柳", "輕輕搖動。旗子在風中", "飛揚", "，哥哥卻不該隨口", "揚言", "要天天第一。"], ["太陽", "陽臺", "濃湯", "湯匙", "楊桃", "楊柳", "飛揚", "揚言"]),
      page("場 / 暢 / 腸", ["場：操場、場地", "暢：舒暢、暢快", "腸：心腸、腸胃"], ["週末我們到", "操場", "跑步，再到旁邊的", "場地", "練球。運動後心情", "舒暢", "，說話也", "暢快", "。媽媽提醒大家，", "心腸", "好也不能亂分零食，", "腸胃", "不舒服時要休息。"], ["操場", "場地", "舒暢", "暢快", "心腸", "腸胃"]),
      page("勵 / 厲", ["勵：獎勵、鼓勵", "厲：嚴厲、厲害"], ["期末展演前，老師給大家", "獎勵", "，也用溫和的話", "鼓勵", "緊張的同學。排練時，導演要求", "嚴厲", "，但不是責罵；他希望大家把", "厲害", "的地方穩穩表現出來。"], ["獎勵", "鼓勵", "嚴厲", "厲害"])
    ]
  },
  {
    id: 8,
    label: "第八課",
    sourceImage: "第二張圖",
    pages: [
      page("穫 / 獲 / 護", ["穫：收穫、種穫", "獲：獲得、捕獲", "護：守護、保護"], ["農夫春天", "種穫", "，秋天才有好", "收穫", "。妹妹在比賽中", "獲得", "獎牌，哥哥則小心", "守護", "作品。若看到受傷小鳥，不要急著", "捕獲", "，應先請大人協助", "保護", "牠。"], ["種穫", "收穫", "獲得", "守護", "捕獲", "保護"]),
      page("老 / 考 / 者", ["老：老師、古老", "考：考慮、考試", "者：學者、作者"], ["這座", "古老", "書院邀請", "學者", "演講，介紹一位", "作者", "的故事。", "老師", "提醒我們，準備", "考試", "前要先", "考慮", "時間安排。"], ["古老", "學者", "作者", "老師", "考試", "考慮"]),
      page("撥 / 潑 / 茫 / 芒", ["撥：挑撥、撥開", "潑：活潑、潑水", "茫：茫茫、茫然", "芒：光芒、芒果"], ["海邊白霧", "茫茫", "，小弟一時", "茫然", "找不到路。姊姊", "撥開", "草叢，看見陽光的", "光芒", "。大家吃著", "芒果", "，開心", "潑水", "，但不要", "挑撥", "同學，才能玩得", "活潑", "又安心。"], ["茫茫", "茫然", "撥開", "光芒", "芒果", "潑水", "挑撥", "活潑"]),
      page("遇 / 邁 / 途 / 徐", ["遇：相遇、遇害", "邁：邁步、豪邁", "途：旅途、沿途", "徐：徐徐、徐行"], ["旅行", "沿途", "風景很美，我們在", "旅途", "中和老朋友", "相遇", "。爸爸提醒大家要", "徐行", "，不要讓小動物", "遇害", "。太陽", "徐徐", "升起，我們", "邁步", "向前，心情十分", "豪邁", "。"], ["沿途", "旅途", "相遇", "徐行", "遇害", "徐徐", "邁步", "豪邁"]),
      page("代 / 伐 / 拾 / 抬", ["代：代替、現代", "伐：步伐、砍伐", "拾：收拾、撿拾", "抬：抬高、抬價"], ["園遊會後，大家一起", "收拾", "場地，順手", "撿拾", "地上的紙屑。弟弟想", "代替", "爸爸", "抬高", "箱子，但", "步伐", "不穩。老師說，", "現代", "社會重視環保，不可隨意", "砍伐", "樹木或亂", "抬價", "。"], ["收拾", "撿拾", "代替", "抬高", "步伐", "現代", "砍伐", "抬價"]),
      page("延 / 廷 / 挺", ["延：延伸、拖延", "廷：朝廷、宮廷", "挺：挺胸、筆挺"], ["校外教學時，我們參觀古代", "宮廷", "展。導覽員", "挺胸", "介紹", "朝廷", "制度，大家坐得", "筆挺", "專心聽。想了解更多，可以把問題", "延伸", "到課後查資料，但交作業不能", "拖延", "。"], ["宮廷", "挺胸", "朝廷", "筆挺", "延伸", "拖延"]),
      page("形 / 型", ["形：形狀、情形", "型：造型、模型"], ["美術課做紙屋", "模型", "，屋頂", "造型", "特殊，", "形狀", "像展開的扇子。若有破損", "情形", "，要先告訴老師。"], ["模型", "造型", "形狀", "情形"])
    ]
  },
  {
    id: 9,
    label: "第九課",
    sourceImage: "第三張圖",
    pages: [
      page("快 / 筷", ["快：快樂、愉快", "筷：公筷、碗筷"], ["全家吃火鍋時，媽媽提醒大家使用", "公筷", "，也把", "碗筷", "排好。弟弟今天很", "快樂", "，因為和家人聊天讓他心情", "愉快", "。"], ["公筷", "碗筷", "快樂", "愉快"]),
      page("郊 / 餃 / 狡 / 跤", ["郊：郊外、郊遊", "餃：餃湯、餃子", "狡：狡猾、狡辯", "跤：摔跤、跌跤"], ["班上到", "郊外", "踏青，午餐喝熱", "餃湯", "、吃", "餃子", "。小明跑太快差點", "跌跤", "，還想", "狡辯", "不是自己不小心。老師說，", "郊遊", "要守規矩，不要耍", "狡猾", "，以免", "摔跤", "受傷。"], ["郊外", "餃湯", "餃子", "跌跤", "狡辯", "郊遊", "狡猾", "摔跤"]),
      page("咬 / 校 / 較", ["咬：咬字、咬住", "校：校園、校隊", "較：計較、較量"], ["朗讀比賽時，", "校隊", "成員練習", "咬字", "，不和同學", "計較", "名次。弟弟想和朋友", "較量", "跑步，卻被小狗", "咬住", "鞋帶。"], ["校隊", "咬字", "計較", "較量", "咬住"]),
      page("園 / 圍", ["園：公園、茶園", "圍：包圍、外圍"], ["放學後，我們到", "公園", "散步，看見花圃被低欄", "包圍", "。操場", "外圍", "還有一片小", "茶園", "，香氣很清新。"], ["公園", "包圍", "外圍", "茶園"]),
      page("瑞 / 端 / 兔 / 免", ["瑞：祥瑞、人瑞", "端：端菜、開端", "兔：白兔、守株待兔", "免：免費、避免"], ["新年故事裡，白雲被看成", "祥瑞", "的象徵。奶奶是村裡的", "人瑞", "，常提醒我們不要", "守株待兔", "。園遊會", "開端", "，哥哥負責", "端菜", "，妹妹畫了", "白兔", "海報。活動", "免費", "參加，但仍要", "避免", "浪費。"], ["祥瑞", "人瑞", "守株待兔", "開端", "端菜", "白兔", "免費", "避免"]),
      page("與 / 舉", ["與：與其、與日俱增", "舉：舉手、舉例"], ["課堂上，", "與其", "一直猜答案，不如先", "舉手", "發問。老師", "舉例", "說明後，大家的理解", "與日俱增", "。"], ["與其", "舉手", "舉例", "與日俱增"])
    ]
  },
  {
    id: 10,
    label: "第十課",
    sourceImage: "第四張圖",
    pages: [
      page("隕 / 員 / 勛 / 福", ["隕：隕落、隕石", "員：人員、員工", "勛：功勛、勛章", "福：幸福、福氣"], ["博物館", "人員", "介紹一顆", "隕石", "，說它從天空", "隕落", "到地面。老", "員工", "胸前別著", "勛章", "，大家感謝他的", "功勛", "。能一起學習，是很大的", "福氣", "與", "幸福", "。"], ["人員", "隕石", "隕落", "員工", "勛章", "功勛", "福氣", "幸福"]),
      page("幅 / 圓 / 圖", ["幅：幅員、篇幅", "圓：圓圈、圓滿", "圖：圖案、地圖"], ["老師拿出", "地圖", "，介紹臺灣的", "幅員", "。美術課中，我們設計", "圖案", "，先畫一個", "圓圈", "，再調整文章", "篇幅", "，希望作品", "圓滿", "完成。"], ["地圖", "幅員", "圖案", "圓圈", "篇幅", "圓滿"]),
      page("澄 / 證 / 瞪 / 輝", ["澄：澄清、澄淨", "證：證明、證據", "瞪：乾瞪眼、目瞪口呆", "輝：光輝、輝映"], ["湖水", "澄淨", "，夕陽的", "光輝", "和雲影互相", "輝映", "。哥哥想", "澄清", "誤會，拿出照片作為", "證據", "，", "證明", "自己沒有亂丟垃圾。弟弟聽完", "目瞪口呆", "，只能在旁邊", "乾瞪眼", "。"], ["澄淨", "光輝", "輝映", "澄清", "證據", "證明", "目瞪口呆", "乾瞪眼"]),
      page("揮 / 謂 / 胃", ["揮：揮手、揮別", "謂：無謂、無所謂", "胃：胃口、開胃"], ["畢業旅行結束時，大家向老師", "揮手", "，在車站", "揮別", "朋友。媽媽煮了", "開胃", "湯，讓妹妹恢復", "胃口", "。老師提醒，爭吵很", "無謂", "，不要裝作", "無所謂", "而不道歉。"], ["揮手", "揮別", "開胃", "胃口", "無謂", "無所謂"]),
      page("樵 / 蕉 / 瞧 / 堅", ["樵：樵夫", "蕉：香蕉、芭蕉", "瞧：瞧見、瞧不起", "堅：堅強、堅持"], ["故事裡的", "樵夫", "在山路上", "瞧見", "一株", "芭蕉", "，旁邊還掛著", "香蕉", "。他生活辛苦卻很", "堅強", "，也", "堅持", "不", "瞧不起", "任何人。"], ["樵夫", "瞧見", "芭蕉", "香蕉", "堅強", "堅持", "瞧不起"]),
      page("豎 / 姆 / 每 / 拇", ["豎：豎琴、豎立", "姆：保姆", "每：每天、每次", "拇：拇指"], ["音樂教室裡", "豎立", "著一把", "豎琴", "。我的", "保姆", "說，", "每天", "練習一點，", "每次", "都會進步。妹妹用", "拇指", "按住琴弦，聲音變得更穩。"], ["豎立", "豎琴", "保姆", "每天", "每次", "拇指"])
    ]
  },
  {
    id: 11,
    label: "第十一課",
    sourceImage: "第五張圖",
    pages: [
      page("椎 / 雉 / 唯 / 維", ["椎：脊椎、尾椎", "雉：雉形、雉體", "唯：唯美、唯一", "維：維持、維護"], ["自然館展示", "雉形", "標本，說明鳥類", "雉體", "的特徵。醫生提醒，坐姿會影響", "脊椎", "和", "尾椎", "。校園裡", "唯一", "的老樹很", "唯美", "，大家一起", "維護", "環境，", "維持", "整潔。"], ["雉形", "雉體", "脊椎", "尾椎", "唯一", "唯美", "維護", "維持"]),
      page("等 / 時 / 寺", ["等：等待、等號", "時：時間、定時", "寺：寺廟、寺院"], ["參觀", "寺廟", "前，我們在", "寺院", "外", "等待", "集合。老師提醒要注意", "時間", "，鬧鐘可以", "定時", "提醒。數學課再複習", "等號", "，大家很快就懂了。"], ["寺廟", "寺院", "等待", "時間", "定時", "等號"]),
      page("緻 / 邀 / 系 / 係", ["緻：精緻、細緻", "邀：邀約、受邀", "系：系統、科系", "係：關係、沒關係"], ["姐姐", "受邀", "參加作品展，展出", "精緻", "又", "細緻", "的模型。哥哥研究電腦", "系統", "，想選相關", "科系", "。朋友遲到後主動道歉，大家的", "關係", "沒有受影響，我也說", "沒關係", "。"], ["受邀", "精緻", "細緻", "系統", "科系", "關係", "沒關係"]),
      page("孫 / 廊 / 朗", ["孫：孫女、外孫", "廊：走廊、畫廊", "朗：開朗、爽朗"], ["阿嬤牽著", "孫女", "和", "外孫", "參觀", "畫廊", "。長長的", "走廊", "掛滿作品，妹妹個性", "開朗", "，導覽員說話也很", "爽朗", "。"], ["孫女", "外孫", "畫廊", "走廊", "開朗", "爽朗"]),
      page("從 / 蹤", ["從：從實、從容", "蹤：蹤影、追蹤"], ["校園裡找不到小貓的", "蹤影", "，大家沿著腳印", "追蹤", "。小明說話", "從實", "，沒有誇大；老師也提醒我們要", "從容", "處理問題。"], ["蹤影", "追蹤", "從實", "從容"])
    ]
  },
  {
    id: 12,
    label: "第十二課",
    sourceImage: "第六張圖",
    pages: [
      page("柳 / 聊 / 幼 / 幻", ["柳：楊柳、柳橙", "聊：聊天、無聊", "幼：幼小、幼稚", "幻：幻影、夢幻"], ["河邊", "楊柳", "搖動，桌上放著", "柳橙", "。弟弟覺得", "無聊", "，就和姐姐", "聊天", "。他雖然", "幼小", "，有時想法", "幼稚", "，卻畫出", "夢幻", "般的", "幻影", "。"], ["楊柳", "柳橙", "無聊", "聊天", "幼小", "幼稚", "夢幻", "幻影"]),
      page("秩 / 跌 / 映 / 央", ["秩：秩序", "跌：跌倒、下跌", "映：映照、反映", "央：中央、央求"], ["操場", "中央", "排隊要守", "秩序", "。弟弟不小心", "跌倒", "，成績也一度", "下跌", "，便", "央求", "哥哥陪他練習。夕陽", "映照", "在窗上，也", "反映", "出大家努力的身影。"], ["中央", "秩序", "跌倒", "下跌", "央求", "映照", "反映"]),
      page("臘 / 蠟 / 獵 / 鼠", ["臘：臘肉、臘月", "蠟：蠟筆、蠟燭", "獵：打獵、獵人", "鼠：老鼠、滑鼠"], ["", "臘月", "時，外婆準備", "臘肉", "。妹妹用", "蠟筆", "畫", "獵人", "，旁邊還有一隻", "老鼠", "。停電時，我們點起", "蠟燭", "，爸爸用電腦", "滑鼠", "查資料，說現在不能隨意", "打獵", "。"], ["臘月", "臘肉", "蠟筆", "獵人", "老鼠", "蠟燭", "滑鼠", "打獵"]),
      page("碑 / 啤 / 脾 / 牌", ["碑：口碑、碑文", "啤：啤酒", "脾：脾氣、脾臟", "牌：車牌、品牌"], ["這家店", "口碑", "很好，門口石碑上的", "碑文", "介紹老街故事。爸爸提醒大人喝", "啤酒", "不能開車，也要記住", "車牌", "。妹妹", "脾氣", "急，醫生卻說她的", "脾臟", "很健康；媽媽則選了耐用", "品牌", "的書包。"], ["口碑", "碑文", "啤酒", "車牌", "脾氣", "脾臟", "品牌"]),
      page("鈴 / 伶 / 玲 / 令", ["鈴：門鈴、電鈴", "伶：伶牙俐齒、伶俐", "玲：小巧玲瓏、八面玲瓏", "令：命令、司令"], ["", "電鈴", "一響，", "門鈴", "也跟著響起。妹妹", "伶牙俐齒", "，回答得很", "伶俐", "。老師拿出", "小巧玲瓏", "的模型，說故事中的", "司令", "下達", "命令", "，城堡設計得", "八面玲瓏", "。"], ["電鈴", "門鈴", "伶牙俐齒", "伶俐", "小巧玲瓏", "司令", "命令", "八面玲瓏"]),
      page("丘 / 兵", ["丘：土丘、山丘", "兵：士兵、兵器"], ["遠方", "山丘", "旁有一座小", "土丘", "，博物館展示古代", "兵器", "，也介紹勇敢", "士兵", "守護家園的故事。"], ["山丘", "土丘", "兵器", "士兵"])
    ]
  }
];

function page(title, pairs, story, answers) {
  return { title, pairs, story, answers, tiles: shuffle([...answers], title) };
}

const versions = [
  {
    id: "g4-mid",
    grade: "四上翰林版",
    phase: "期中",
    label: "四上翰林版（期中）",
    sourceNote: "出處：翰林四上國語（期中）",
    courses: window.FOUR_UP_MID_COURSES || []
  },
  {
    id: "g4-final",
    grade: "四上翰林版",
    phase: "期末",
    label: "四上翰林版（期末）",
    sourceNote: "尚未匯入教材",
    pending: true,
    courses: []
  },
  {
    id: "g5-mid",
    grade: "五上翰林版",
    phase: "期中",
    label: "五上翰林版（期中）",
    sourceNote: "尚未匯入教材，目前顯示既有測試題庫",
    courses
  },
  {
    id: "g5-final",
    grade: "五上翰林版",
    phase: "期末",
    label: "五上翰林版（期末）",
    sourceNote: "尚未匯入教材",
    pending: true,
    courses: []
  }
];

versions.forEach((version) => {
  version.leveled = version.courses.some((course) => course.pages.some((item) => item.levels));
});

const levels = [
  { id: "easy", label: "簡單" },
  { id: "medium", label: "中等" },
  { id: "hard", label: "困難" }
];
const levelStorageKey = "glyphMeaningLevel";
const levelViews = new WeakMap();

const storageKey = "glyphMeaningScoresV2";
const state = {
  versionId: null,
  level: loadLevel(),
  courseIndex: 0,
  page: 0,
  placements: [],
  checked: false,
  selectedTile: null,
  results: [],
  mistakes: new Map(),
  drag: null,
  scores: loadScores()
};

const els = {
  versionScreen: document.getElementById("versionScreen"),
  versionGrid: document.getElementById("versionGrid"),
  homeScreen: document.getElementById("homeScreen"),
  gameScreen: document.getElementById("gameScreen"),
  selectedVersion: document.getElementById("selectedVersion"),
  sourceNote: document.getElementById("sourceNote"),
  lessonGrid: document.getElementById("lessonGrid"),
  difficultyPicker: document.getElementById("difficultyPicker"),
  courseTitle: document.getElementById("courseTitle"),
  pageNow: document.getElementById("pageNow"),
  pageTotal: document.getElementById("pageTotal"),
  progressDots: document.getElementById("progressDots"),
  mistakeCount: document.getElementById("mistakeCount"),
  unitLabel: document.getElementById("unitLabel"),
  lessonTitle: document.getElementById("lessonTitle"),
  pairList: document.getElementById("pairList"),
  storyCard: document.getElementById("storyCard"),
  tiles: document.getElementById("tiles"),
  backVersions: document.getElementById("backVersions"),
  backHome: document.getElementById("backHome"),
  prevPage: document.getElementById("prevPage"),
  nextPage: document.getElementById("nextPage"),
  submitPage: document.getElementById("submitPage"),
  resetPage: document.getElementById("resetPage"),
  scorePrint: document.getElementById("scorePrint"),
  scoreHome: document.getElementById("scoreHome"),
  toast: document.getElementById("toast"),
  likeOverlay: document.getElementById("likeOverlay"),
  scoreOverlay: document.getElementById("scoreOverlay"),
  scoreCourse: document.getElementById("scoreCourse"),
  scoreValue: document.getElementById("scoreValue"),
  printReport: document.getElementById("printReport")
};

function init() {
  renderVersions();
  bindEvents();
  const params = new URLSearchParams(window.location.search);
  if (params.has("resetScores")) {
    localStorage.removeItem(storageKey);
    localStorage.removeItem("glyphMeaningScores");
    state.scores = {};
    history.replaceState(null, "", window.location.pathname);
  }
  const versionId = params.get("version");
  if (levels.some((level) => level.id === params.get("level"))) state.level = params.get("level");
  const courseId = params.has("course") ? Number(params.get("course")) : null;
  const legacyPage = params.has("page") ? Number(params.get("page")) : null;
  if (Number.isInteger(courseId)) {
    const fallbackVersion = courseId >= 7 ? "g5-mid" : versions[0].id;
    selectVersion(versions.some((version) => version.id === versionId) ? versionId : fallbackVersion);
    startCourse(courseId, Number.isInteger(legacyPage) ? legacyPage - 1 : 0);
  } else if (Number.isInteger(legacyPage)) {
    selectVersion("g5-mid");
    startCourse(7, legacyPage - 1);
  } else if (versions.some((version) => version.id === versionId)) {
    selectVersion(versionId);
  }
}

function bindEvents() {
  els.backVersions.addEventListener("click", showVersions);
  els.backHome.addEventListener("click", showHome);
  els.prevPage.addEventListener("click", () => loadPage(Math.max(0, state.page - 1)));
  els.nextPage.addEventListener("click", () => loadPage(Math.min(currentCourse().pages.length - 1, state.page + 1)));
  els.submitPage.addEventListener("click", submitPage);
  els.resetPage.addEventListener("click", resetPage);
  els.scorePrint.addEventListener("click", printMistakes);
  els.scoreHome.addEventListener("click", showHome);
}

function renderVersions() {
  els.versionGrid.innerHTML = versions
    .map((version) => {
      const className = version.pending ? "version-card pending" : "version-card";
      const phase = version.pending ? `${version.phase}・待匯入` : version.phase;
      return `<button class="${className}" type="button" data-version="${version.id}"><strong>${version.grade}</strong><span>${phase}</span></button>`;
    })
    .join("");

  els.versionGrid.querySelectorAll(".version-card").forEach((button) => {
    button.addEventListener("click", () => selectVersion(button.dataset.version));
  });
}

function selectVersion(versionId) {
  const selected = versions.find((version) => version.id === versionId) || versions[0];
  if (selected.pending) {
    showToast(`${selected.label}題庫尚未匯入。`);
    return;
  }
  state.versionId = selected.id;
  els.selectedVersion.textContent = selected.label;
  els.sourceNote.textContent = selected.sourceNote;
  els.versionScreen.classList.add("hidden");
  els.gameScreen.classList.add("hidden");
  els.homeScreen.classList.remove("hidden");
  renderHome();
}

function renderHome() {
  renderDifficultyPicker();
  const versionScores = scoresForCurrentVersion();
  els.lessonGrid.innerHTML = currentCourses()
    .map((course) => {
      const score = versionScores[scoreKey(course)];
      const unleveled = isLeveled() && !courseIsLeveled(course);
      const scoreText = Number.isFinite(score) ? `${score}分` : unleveled ? "未分級" : "尚未測驗";
      return `<button class="lesson-button" type="button" data-course="${course.id}"><strong>${course.label}</strong><span class="lesson-score">${scoreText}</span></button>`;
    })
    .join("");

  els.lessonGrid.querySelectorAll(".lesson-button").forEach((button) => {
    button.addEventListener("click", () => startCourse(Number(button.dataset.course), 0));
  });
}

function renderDifficultyPicker() {
  els.difficultyPicker.classList.toggle("hidden", !isLeveled());
  els.difficultyPicker.innerHTML = levels
    .map((level) => `<button type="button" data-level="${level.id}" aria-pressed="${level.id === state.level}">${level.label}</button>`)
    .join("");
  els.difficultyPicker.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.level = button.dataset.level;
      saveLevel();
      renderHome();
    });
  });
}

function isLeveled() {
  return Boolean(versions.find((version) => version.id === state.versionId)?.leveled);
}

function courseIsLeveled(course) {
  return course.pages.some((item) => item.levels);
}

function levelLabel() {
  return levels.find((level) => level.id === state.level).label;
}

function courseLabel(course) {
  return courseIsLeveled(course) ? `${course.label}・${levelLabel()}` : course.label;
}

function scoreKey(course) {
  return courseIsLeveled(course) ? `${course.id}-${state.level}` : course.id;
}

function startCourse(courseId, pageIndex = 0) {
  if (!state.versionId) state.versionId = versions[0].id;
  const found = currentCourses().findIndex((course) => course.id === courseId);
  state.courseIndex = found >= 0 ? found : 0;
  const course = currentCourse();
  state.page = Math.min(Math.max(pageIndex, 0), course.pages.length - 1);
  state.results = Array(course.pages.length).fill(null);
  state.mistakes = new Map();
  els.versionScreen.classList.add("hidden");
  els.homeScreen.classList.add("hidden");
  els.gameScreen.classList.remove("hidden");
  els.courseTitle.textContent = courseLabel(course);
  els.pageTotal.textContent = String(course.pages.length);
  updateMistakeCount();
  loadPage(state.page);
}

function showHome() {
  els.versionScreen.classList.add("hidden");
  els.gameScreen.classList.add("hidden");
  els.homeScreen.classList.remove("hidden");
  els.likeOverlay.classList.remove("show");
  els.scoreOverlay.classList.remove("show");
  renderHome();
}

function showVersions() {
  els.homeScreen.classList.add("hidden");
  els.gameScreen.classList.add("hidden");
  els.versionScreen.classList.remove("hidden");
  els.likeOverlay.classList.remove("show");
  els.scoreOverlay.classList.remove("show");
}

function currentCourse() {
  return currentCourses()[state.courseIndex];
}

function currentCourses() {
  const selected = versions.find((version) => version.id === state.versionId);
  return selected?.courses?.length ? selected.courses : courses;
}

function currentPage() {
  return pageAt(state.page);
}

function pageAt(pageIndex) {
  const item = currentCourse().pages[pageIndex];
  return item.levels ? levelView(item, state.level) : item;
}

// A leveled page stores one [字, 句前, 語詞, 句後] entry per blank for each difficulty.
function levelView(item, level) {
  if (!levelViews.has(item)) levelViews.set(item, {});
  const cache = levelViews.get(item);
  if (!cache[level]) {
    const sentences = item.levels[level].map(([char, before, word, after]) => ({ char, before, word, after }));
    const answers = sentences.map((sentence) => sentence.word);
    const pairs = item.title.split(" / ").flatMap((char) => {
      const words = sentences.filter((sentence) => sentence.char === char).map((sentence) => sentence.word);
      return words.length ? [`${char}：${words.join("、")}`] : [];
    });
    cache[level] = { title: item.title, pairs, sentences, answers, tiles: shuffle([...answers], `${item.title}${level}`) };
  }
  return cache[level];
}

function loadPage(pageIndex) {
  state.page = pageIndex;
  state.placements = Array(currentPage().answers.length).fill(null);
  state.checked = false;
  state.selectedTile = null;

  const course = currentCourse();
  const lesson = currentPage();
  els.pageNow.textContent = String(pageIndex + 1);
  els.unitLabel.textContent = `${course.sourceImage} - 第 ${pageIndex + 1} 頁`;
  els.lessonTitle.textContent = lesson.title;
  els.pairList.innerHTML = lesson.pairs.map((pair) => `<span class="pair-chip">${pair}</span>`).join("");
  els.prevPage.disabled = pageIndex === 0;
  els.nextPage.disabled = pageIndex === course.pages.length - 1;
  renderStory();
  renderTiles();
  renderProgressDots();
}

function renderStory() {
  const lesson = currentPage();
  const blank = (slot) => {
    const placed = state.placements[slot];
    const classNames = ["blank"];
    if (placed) classNames.push("filled");
    return `<button class="${classNames.join(" ")}" data-slot="${slot}" type="button">${placed ? escapeHtml(placed) : ""}</button>`;
  };
  if (lesson.sentences) {
    const items = lesson.sentences.map((sentence, slot) => `<li>${escapeHtml(sentence.before)}${blank(slot)}${escapeHtml(sentence.after)}</li>`);
    els.storyCard.innerHTML = `<ol class="sentence-list">${items.join("")}</ol>`;
  } else {
    let answerIndex = 0;
    const parts = lesson.story.map((part, index) => {
      if (index % 2 === 0) return escapeHtml(part);
      const html = blank(answerIndex);
      answerIndex += 1;
      return html;
    });
    els.storyCard.innerHTML = `<p>${parts.join("")}</p>`;
  }
  els.storyCard.querySelectorAll(".blank").forEach((blank) => blank.addEventListener("click", onBlankClick));
}

function renderTiles() {
  const lesson = currentPage();
  const used = new Set(state.placements.filter(Boolean));
  els.tiles.innerHTML = lesson.tiles
    .map((word) => `<button class="tile${used.has(word) ? " used" : ""}" type="button" data-word="${word}">${word}</button>`)
    .join("");

  els.tiles.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("click", onTileClick);
    tile.addEventListener("pointerdown", onPointerDown);
  });
}

function onTileClick(event) {
  if (state.checked) return;
  const tile = event.currentTarget;
  if (tile.classList.contains("used")) return;
  state.selectedTile = tile.dataset.word;
  document.querySelectorAll(".tile").forEach((item) => item.classList.toggle("selected", item === tile));
}

function onBlankClick(event) {
  if (state.checked) return;
  const slot = Number(event.currentTarget.dataset.slot);
  if (state.selectedTile) {
    placeWord(slot, state.selectedTile);
    state.selectedTile = null;
    return;
  }
  if (state.placements[slot]) {
    state.placements[slot] = null;
    renderStory();
    renderTiles();
  }
}

function onPointerDown(event) {
  if (state.checked || event.currentTarget.classList.contains("used")) return;
  const tile = event.currentTarget;
  state.drag = { word: tile.dataset.word, pointerId: event.pointerId, clone: tile.cloneNode(true) };
  state.drag.clone.classList.add("drag-clone");
  document.body.appendChild(state.drag.clone);
  tile.setPointerCapture(event.pointerId);
  moveClone(event.clientX, event.clientY);
  tile.addEventListener("pointermove", onPointerMove);
  tile.addEventListener("pointerup", onPointerUp, { once: true });
  tile.addEventListener("pointercancel", cancelDrag, { once: true });
}

function onPointerMove(event) {
  if (!state.drag || state.drag.pointerId !== event.pointerId) return;
  moveClone(event.clientX, event.clientY);
}

function onPointerUp(event) {
  if (!state.drag || state.drag.pointerId !== event.pointerId) return;
  state.drag.clone.style.display = "none";
  const target = document.elementFromPoint(event.clientX, event.clientY);
  const blank = target?.closest?.(".blank");
  const word = state.drag.word;
  cancelDrag();
  if (blank) placeWord(Number(blank.dataset.slot), word);
}

function cancelDrag() {
  if (!state.drag) return;
  state.drag.clone.remove();
  document.querySelectorAll(".tile").forEach((tile) => tile.removeEventListener("pointermove", onPointerMove));
  state.drag = null;
}

function moveClone(x, y) {
  if (!state.drag) return;
  state.drag.clone.style.left = `${x}px`;
  state.drag.clone.style.top = `${y}px`;
}

function placeWord(slot, word) {
  const oldSlot = state.placements.indexOf(word);
  if (oldSlot >= 0) state.placements[oldSlot] = null;
  state.placements[slot] = word;
  renderStory();
  renderTiles();
}

function submitPage() {
  const lesson = currentPage();
  if (state.placements.some((item) => !item)) {
    showToast("還有空格沒有填入詞語。");
    return;
  }

  state.checked = true;
  let wrongCount = 0;
  clearPageMistakes(state.page);
  els.storyCard.querySelectorAll(".blank").forEach((blank, index) => {
    const expected = lesson.answers[index];
    const actual = state.placements[index];
    if (actual === expected) {
      blank.classList.add("correct");
    } else {
      wrongCount += 1;
      blank.classList.add("wrong");
      blank.textContent = expected;
      recordMistake(state.page, index, actual, expected);
    }
  });

  state.results[state.page] = wrongCount === 0 ? "correct" : "wrong";
  updateMistakeCount();
  renderProgressDots();
  renderTiles();

  if (wrongCount === 0) {
    showLike();
    showToast("本頁全部正確。");
  } else {
    els.likeOverlay.classList.remove("show");
    showToast(`本頁有 ${wrongCount} 題需要再留意，空格已顯示正確詞語。`);
  }

  if (state.results.every(Boolean)) {
    finishCourse();
  }
}

function resetPage() {
  state.placements = Array(currentPage().answers.length).fill(null);
  state.checked = false;
  state.selectedTile = null;
  state.results[state.page] = null;
  clearPageMistakes(state.page);
  updateMistakeCount();
  renderStory();
  renderTiles();
  renderProgressDots();
}

function finishCourse() {
  const course = currentCourse();
  const score = Math.max(0, 100 - state.mistakes.size * 3);
  if (!state.scores[state.versionId]) state.scores[state.versionId] = {};
  state.scores[state.versionId][scoreKey(course)] = score;
  saveScores();
  els.scoreCourse.textContent = courseLabel(course);
  els.scoreValue.textContent = `${score}分`;
  els.scoreOverlay.classList.remove("show");
  void els.scoreOverlay.offsetWidth;
  els.scoreOverlay.classList.add("show");
  if (score === 100) showLike();
}

function recordMistake(pageIndex, slot, actual, expected) {
  state.mistakes.set(`${pageIndex}-${slot}`, { page: pageIndex, slot, actual, expected });
}

function clearPageMistakes(pageIndex) {
  [...state.mistakes.keys()].forEach((key) => {
    if (key.startsWith(`${pageIndex}-`)) state.mistakes.delete(key);
  });
}

function updateMistakeCount() {
  els.mistakeCount.textContent = String(state.mistakes.size);
}

function renderProgressDots() {
  els.progressDots.innerHTML = state.results
    .map((result, index) => {
      const className = result ? ` ${result}` : "";
      const label = result === "correct" ? "答對" : result === "wrong" ? "答錯" : "未作答";
      return `<i class="progress-dot${className}" title="第 ${index + 1} 題：${label}" aria-label="第 ${index + 1} 題：${label}"></i>`;
    })
    .join("");
}

function printMistakes() {
  if (state.mistakes.size === 0) {
    showToast("目前沒有錯題可輸出。");
    return;
  }

  const course = currentCourse();
  const byPage = new Map();
  state.mistakes.forEach((mistake) => {
    if (!byPage.has(mistake.page)) byPage.set(mistake.page, new Set());
    byPage.get(mistake.page).add(mistake.slot);
  });

  const sections = [...byPage.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([pageIndex, wrongSlots]) => {
      const lesson = pageAt(pageIndex);
      const word = (text, slot) => `<span${wrongSlots.has(slot) ? " class=\"print-wrong\"" : ""}>${escapeHtml(text)}</span>`;
      const heading = `<h2>${escapeHtml(courseLabel(course))} ${escapeHtml(lesson.title)}</h2>`;
      if (lesson.sentences) {
        const items = lesson.sentences.map((sentence, slot) => `<li>${escapeHtml(sentence.before)}${word(sentence.word, slot)}${escapeHtml(sentence.after)}</li>`);
        return `<section>${heading}<ol>${items.join("")}</ol></section>`;
      }
      let answerIndex = 0;
      const story = lesson.story
        .map((part, index) => {
          if (index % 2 === 0) return escapeHtml(part);
          const html = word(part, answerIndex);
          answerIndex += 1;
          return html;
        })
        .join("");
      return `<section>${heading}<p>${story}</p></section>`;
    })
    .join("");

  els.printReport.innerHTML = `<h1>字形辨義錯題整理</h1>${sections}`;
  window.print();
}

function showLike() {
  els.likeOverlay.classList.remove("show");
  void els.likeOverlay.offsetWidth;
  els.likeOverlay.classList.add("show");
  clearTimeout(showLike.timer);
  showLike.timer = setTimeout(() => els.likeOverlay.classList.remove("show"), 1300);
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 1800);
}

function shuffle(items, seedText) {
  let seed = 0;
  for (const char of seedText) seed += char.charCodeAt(0);
  return items
    .map((item, index) => {
      seed = (seed * 9301 + 49297 + index) % 233280;
      return { item, rank: seed / 233280 };
    })
    .sort((a, b) => a.rank - b.rank)
    .map((entry) => entry.item);
}

function loadScores() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch {
    return {};
  }
}

function loadLevel() {
  try {
    const saved = localStorage.getItem(levelStorageKey);
    return levels.some((level) => level.id === saved) ? saved : "easy";
  } catch {
    return "easy";
  }
}

function saveLevel() {
  try {
    localStorage.setItem(levelStorageKey, state.level);
  } catch {}
}

function scoresForCurrentVersion() {
  return state.scores[state.versionId] || {};
}

function saveScores() {
  localStorage.setItem(storageKey, JSON.stringify(state.scores));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
