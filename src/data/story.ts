export const characters = {
  niv: { name: "Niv", emoji: "👧", image: "/images/f1.jpeg" as string | undefined },
  masi: { name: "Masi", emoji: "👩‍🦱", image: undefined as string | undefined },
}

export const dedication = {
  to: "Niv",
  from: "Teri Masi",
}

export interface Memory {
  id: number
  slug: string
  /** Display date — bad mein real date daal dena */
  date: string
  dateLabel: string
  title: string
  subtitle: string
  teddy: string
  emoji: string
  caption: string
  /** Real photo: "/images/memory-1.jpg" */
  image?: string
  /** Video clip: "/images/memory.mp4" */
  video?: string
  message: string
  /** Masi ka extra note us din ka */
  masiSays: string
  highlight?: boolean
  /** Last page — special design */
  isFinale?: boolean
  /** Chota cute teddy letter — bilkul last */
  isMiniLetter?: boolean
}


export const memories: Memory[] = [
  {
    id: 0,
    slug: "duniya-mein-aayi",
    date: "—",
    dateLabel: "Jab tu aayi duniya mein",
    title: "Meri Niv Aayi!",
    subtitle: "Duniya ki sabse khoobsurat din 🌸",
    teddy: "🧸",
    emoji: "👶",
    caption: "Meri jaan ka pehla din 💕",
    image: "/images/f1.jpeg",
    message:
      "pta h tereko jb tu aayi is duniya m mai wha nhi thi.lekin jb pata chla mera bacha aaya h is duniya me alag s he khushi hue.matlb aisa feel ho rha th kb jau milu,hug kru,uske smile dekhu ur ajib se feeling th something specail.lekin aana possible nhi th bacha.",
    masiSays: "Us din se tu meri duniya ka sabse special hissa ban gayi meri Niv. 🥹💕",
    highlight: true,
  },
  {
    id: 1,
    slug: "pehli-video-call",
    date: "—",
    dateLabel: "Pehli video call",
    title: "Screen Par Meri Jaan",
    subtitle: "Finally tujhe dekh paayi! 💻",
    teddy: "🧸",
    emoji: "🤳",
    caption: "Pehli baar live dekha ✨",
    image: "/images/f3.jpeg",
    message:
      "Pehli video call yaad hai? Tu screen ke us paar, main is paar — lekin dil ek hi jagah tha. Tu haath hilati thi, main muskurati thi. Doori thi lekin pyaar nahi.",
    masiSays: "Tu kb bolgi masi uska wait th...teri aawaj sunna th...tera first word sunna th...bs🤗. 💕",
  },
  {
    id: 2,
    slug: "pehli bar Milne gyi",
    date: "—",
    dateLabel: "Pehli mulaqat — FINALLY!",
    title: "first time tereko god m liya...like a sukoon!",
    subtitle: "Terako dekh k sb kuch badal gya...meri life m cutu si member add on hue...📱",
    teddy: "🧸",
    emoji: "📞",
    caption: "Khushi ke aansu 🥹",
    image: "/images/f4.jpeg",
    message:
      "Jab pehli baar tereko dekha...god m liya...yrr wo cutu s bacha...yr ky he bolu wo time...bhut jada khushi hue...meri life m cutu si member add on hue...jab tu smile krti thi...wo smile dekh k mera dil khush ho jata th...wo time meri life ka sabse khubsurat time th...jab tu meri god m thi...wo moment hamesha yaad rahega.",
    masiSays: "Har photo mein teri smile dekhti rahi main. 🤗",
  },

  {
    id: 4,
    slug: "phir hum sath th kuch din...",
    date: "—",
    dateLabel: "sath rhe ",
    title: "Gale Lag Gayi Meri Niv!",
    subtitle: "Sabse khoobsurat din 🤗",
    teddy: "🧸",
    emoji: "💕",
    caption: "Pehla hug — yaadgar 🤗",
    video: "/images/f5.mp4",
    message:
      "phir mai tere s milne gyi th...tu choti s tere cutu cutu s haath...pyaari s eyes...roj tere sath rhna.",
    masiSays: "Arre meri jaan Niv! Kitni pyaari ho gayi tu! 🤗💕",
  },
  {
    id: 5,
    slug: "Dbg gye...sath m th🤗",
    date: "—",
    dateLabel: "thande k din-hum khel rhe th!",
    title: "Tu khel rahi thi, main dekh rahi thi...",
    subtitle: "cutu s hasi, aur yeh cute si video 🎠",
    teddy: "🧸",
    emoji: "🎠",
    caption: "sabse pyaari clip 🌷",
    video: "/images/f6.mp4",
    message:
      "Yeh video dekhti hoon toh hasi aa jati hai meri Niv! dbg m jb sath m th — khel rahi thi, kabhi pyaari s smile dete th, kabhi idhar udhar. Main peeche khadi sirf tujhe dekh rahi thi...soch rahi thi kitni pyaari hai meri bachi. Har second record karna chahti thi — taaki jab door hoon toh yeh video dekh kar lagay tu paas hai.",
    masiSays: "Is video mein teri hasi sabse khoobsurat hai meri jaan. Baar baar dekhti hoon. 🤭🎠💕",
  },
  {
    id: 6,
    slug: "khana-wala-din",
    date: "18 April 2024",
    dateLabel: "18 April 2024 — pehli baar khana!",
    title: "sweet aur Pyaar",
    subtitle: "Jab tu pehli baar khana khayi 🍛",
    teddy: "🧸",
    emoji: "🍡",
    caption: "Pehli baar khana — yaadgar din 💕",
    image: "/images/media5.jpg",
    message:
      "18 April 2024 — yeh din hamesha yaad rahega meri Niv! Pehli baar tune khana khaya...mai wha nhi th but tere har moment m sath th — cake cut kiya meri niv n...fisrt time khaya usne...tasty tasty...🍡 Jab tu pehli bite le rahi thi. Itna cute lag rahi thi tu khate waqt!—ur pata h tu makhana khte pure face m laga li...like kanha...itne cute s lg rhi th aur  Wo pehli baar ka khana, wo pehli baar ki hasi...sab kuch dil mein bas gaya.",
    masiSays: "18 April 2024 — meri jaan ne pehli baar khana khaya! Pyaar sabse badi recipe hai Niv. 💝🍡",
    highlight: true,
  },
  {
    id: 7,
    slug: "pehli-diwali",
    date: "12 November 2023",
    dateLabel: "12 Nov 2023 — Hamari Pehli Diwali!",
    title: "Hamari Pehli Diwali",
    subtitle: "Diye, lights aur meri Niv 🪔",
    teddy: "🧸",
    emoji: "🪔",
    caption: "Pehli Diwali saath mein ✨",
    image: "/images/media6.jpg",
    message:
      "12 November 2023 — hamari pehli Diwali meri Niv! Ghar mein lights, diye, khushboo... aur tu meri godi mein. Pehli baar Diwali saath mein manayi — tu choti si pari lag rahi thi roshni mein. Diye jalaye, hasi mazaak, aur dil mein bas ek feel — meri family complete lag rahi thi. Tu diye dekhti thi, main tujhe dekhti thi. Yeh Diwali hamesha yaad rahegi — pehli wali, sabse special wali.tu soft se teddy jaise th...itne pyaari sa teddy mere pass hai...matlb y mera teddy bhut jada cute h...iske koi limit nhi h🥰",
    masiSays: "Hamari pehli Diwali meri jaan — tu meri roshni ho! 🪔💕✨",
    highlight: true,
  },
  {
    id: 8,
    slug: "pehli-christmas",
    date: "25 December 2023",
    dateLabel: "25 Dec 2023 — Hamara Pehla Christmas!",
    title: "Hamara Pehla Christmas",
    subtitle: "Tree, lights aur meri cutu Niv 🎄",
    teddy: "🧸",
    emoji: "🎄",
    caption: "Pehla Christmas — gift jaisi yaad 🎁",
    image: "/images/media7.jpg",
    message:
      "25 December 2023 — hamara pehla Christmas mere doll bnne...tera first christmas th...ur mere life ka bhut special s din...mere doll santa bnnye...itne pyaari lg rhi th...touchhood🧿 aur tu meri godi mein, choti si Santa jaisi lag rahi thi! Pehli baar Christmas saath mein — main tujhe dekhti thi...tere cutu cutu harkat dekhte th... Itni pyaari lag rahi thi tu teddy  ke beech mein — jaise meri life ka sabse khoobsurat gift ho tu. Hasi, masti... dil mein bas ek baat thi — yeh meri family hai, yeh mera Christmas hai, yeh meri Niv hai. Pehla Christmas hamesha yaad rahega.ur pata h tereko tu sbki fav h 🥰",
    masiSays: "25 Dec 2023 — hamara pehla Christmas! Tu hi meri sabse badi gift ho meri jaan! 🎄🎁💕",
    highlight: true,
  },
  {
    id: 9,
    slug: "drama-queen",
    date: "—",
    dateLabel: "Meri Drama Queen 👑",
    title: "Drama Queen Niv!",
    subtitle: "3 saal ki hone wali hai meri jaan! 🎂",
    teddy: "👑",
    emoji: "👸",
    caption: "Queen vibes only! 💅",
    image: "/images/media8.jpg",
    message:
      "Niv meri jaan — tu meri drama queen hai! 😂👑 Har cheez mein full drama — kabhi hasi, kabhi nakhre, kabhi aankhon se baat, kabhi cute si acting! Sab kehte hain kitni expressive hai meri bachi... main kehti hoon haan, meri doll hai tu! Ab 3 saal ki hone wali hai — teen saal ki meri princess! Jitni badi ho rahi hai, utni pyaari, utni drama queen! 😄 Har din kuch naya, har din kuch cute. Tu sirf meri Niv nahi — tu meri little superstar hai, meri drama queen, meri sab kuch!,",
    masiSays: "3 saal ki hone wali meri drama queen! Duniya ki sabse cute queen! 👑🎂💕",
    highlight: true,
  },
  {
    id: 10,
    slug: "teen-saal-ki-princess",
    date: "21 September",
    dateLabel: "🎁 Advance Birthday Gift — 21 Sept 🎂",
    title: "Happy Birthday in Advance!",
    subtitle: "21 Sept se pehle hi — kyunki tu wait nahi karwa sakti! 🎁",
    teddy: "👑",
    emoji: "🎂",
    caption: "Pehle se pyaar — meri princess ke liye! 👑",
    image: "/images/media9.jpg",
    message:
      "Meri sabse pyaari Niv! 🥹 21 September abhi aaya nahi... lekin Masi ruk nahi sakti! Tu itni special hai ki birthday ka wait karna mushkil ho jata hai — isliye yeh memory book pehle se, advance mein, pyaar bhara gift hai tere liye! 🎁 Har page, har photo, har video — sab sirf tere liye likha hai. Tu meri choti si baby se ab meri 3 saal ki hone wali princess ban rahi hai... aur main itni khush hoon, itni proud hoon, ke shabdon mein nahi aata! 👑 Tu meri drama queen, meri jaan, meri poori duniya. Yeh book yahan khatam hoti hai lekin hamari kahani nahi — har birthday, har Diwali, har Christmas, har chhoti si hasi... sab save karte rahenge. Happy Birthday in Advance meri princess! 🎂🎉 21 Sept ko dubara cake, hugs aur aur saara pyaar! 🤗",
    masiSays:
      "Pehle se bol rahi hoon — Happy Birthday meri jaan! Tu meri duniya hai. 21 Sept ko phir celebrate karenge! I love you Niv! 👑🎂💖 — Teri Masi, forever",
    highlight: true,
    isFinale: true,
  },
  {
    id: 11,
    slug: "chota-sa-teddy-letter",
    date: "—",
    dateLabel: "🧸 Sabse last — chota sa letter",
    title: "Chota sa Letter",
    subtitle: "Teddy ke saath — sirf tere liye 💌",
    teddy: "🧸",
    emoji: "💌",
    caption: "Masi ka chota sa pyaar 🧸",
    message:
      "Meri Niv 🧸\n\nBas itna kehna tha — tu meri jaan hai, meri sab kuch hai! 💕\n\nHasti reh, khelti reh, hamesha muskurati reh meri cutu doll! 🤗\n\nDoor ho ya paas — Masi hamesha tere saath hai. 🥹...ur pata h jb tu vc pe masi bolti h matlb itna sukoon milta h...matlb kam kr ke aao ur teri aawaj enough h🥰...tu meri sb kuch h...meli fav gift h...chlta phirta teddy mera🧿🥰...ur kabhi bhi kuch ho mai tere sath hu...hamasha🤗...bs meko galat n samjhna aaj kl ke toxic relation jaisa pls...😊...nd finally i luv uhhhhh😙...nd miss uhhhh🤗",
    masiSays: "I love you meri Niv! 🧸💖 — Teri Masi",
    highlight: true,
    isMiniLetter: true,
  },
]

export const letter = {
  signOff: "Good night meri Niv! Pyaar kabhi door nahi hota — dil mein rehta hai. 🌙✨",
}

/** 21 September — calendar surprise letter */
export const birthdaySurprise = {
  month: "September",
  year: 2026,
  day: 21,
  hint: "21 September ko tap karna — us din ka ek aur secret letter! 💌",
  title: "21 September — Aaj Tera Din Hai! 🎂",
  greeting: "Happy 3rd Birthday meri Niv! 🎉👑",
  message:
    "Aaj finally woh din aa gaya jiska hum wait kar rahe the! 🥹 Meri princess aaj 3 saal ki ho gayi! Jab tu pehli baar aayi thi, maine socha tha duniya ki sabse khoobsurat cheez meri godi mein hai — aur aaj bhi wahi lagta hai. Tu hasi, tu drama, tu nakhre, tu pyaar — sab kuch meri life ka sabse special hissa hai. Cake khao, khelo, haso, aur jaan lo — Masi hamesha tere saath hai. Yeh letter sirf aaj ke liye — 21 September, tera din, meri jaan ka din! 🤗💖",
  signOff: "I love you meri Niv — aaj aur hamesha! 🎂👑💕 — Teri Masi",
}

/** Background song — file rakho: public/music/song.mp3 */
export const bgMusic = {
  src: "/music/song.mp3",
  title: "Niv ke liye 🎵",
}
