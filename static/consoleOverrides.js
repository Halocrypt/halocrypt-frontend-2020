import { appEvents } from "./globalStore";
const store = appEvents.getStore();

console.log("Help will always be given at Hogwarts to those who ask for it.");

const levelMap = {
  0: "Oh come on...",
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: "https://halocrypt.com/halo_begins",
  11: "When egyptions went 😂",
  12: "gamer time",
  13: "Maybe google tabula recta?",
  14: "In motion",
  15: "😢",
  16: "That wikipedia page was something....",
  17: "bad joke",
  18: "Like our logo? I really wish you could comment on it.",
};
let levelListener = false;
function AskedForHelp() {
  const strings = [
    "Stuck? I could help you out",
    "I broke the server to enable these hints",
  ];
  const string = strings[Math.floor(Math.random() * strings.length)];
  levelListener = true;
  console.log(string);
  setTimeout(() => {
    console.log("wait.. What level are you on?");
    setTimeout(() => sl());
  }, 400);
  return "";
}
function sl() {
  if (!levelListener) return;
  if (!store.isLoggedIn) return console.log("Probably log in first..");
  const cl = store.userData.current_level;
  console.log(`Checking level ${cl}...`);
  setTimeout(
    () => console.log(levelMap[cl] || "Looks like you are on your own here"),
    400
  );
}

export function init() {
  Object.defineProperties(window, {
    help: { get: AskedForHelp },
  });
}
