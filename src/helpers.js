export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function getTeamName() {
  const teamSuffix = ['FC', 'United', 'Villa', 'Wanderers', 'Rovers', 'City', 'Athletic', 'Hotspur', 'North End', 'Palace', 'Town', 'Albion', 'County', 'Rangers', 'Wednesday', 'Forest', 'Vale', 'Alexandra', 'Orient', 'Dons', 'Stanley', 'Redbridge', 'Northfleet', 'Diamonds', 'Victoria', 'Harriers', 'Borough', 'Argyle'];

  const funTeamNames = ["Dribble Fo'Shizzle",
  "Nothing but Net",
  "Dizzy Dribblers",
  "En Fuego CF",
  "Rush Hour",
  "Team Avengers",
  "Inter Real Hustlers FC",
  "Amigos",
  "Thunder",
  "Terminators",
  "Outkast",
  "Lazers",
  "Formerly In Shape Allstars",
  "Claustrophobic Mimes",
  "WeCanHasWin",
  "Booo Berries",
  "Elemonators",
  "Chili Peppers",
  "Flirts",
  "Team Awesome",
  "Victorious Secret",
  "Sirens",
  "Lady Cougars",
  "Ladybugs United",
  "Celtic Ladies",
  "RazzMaTazz",
  "Lightning",
  "Majestics",
  "Cheetahs",
  "Lady Eagles",
  "Spitting Cobras",
  "Velociraptors",
  "Red Dragons",
  "Pandas",
  "Crows",
  "Panthers",
  "Wildcats",
  "Hilldogs",
  "Sharktooth Shooters",
  "Bears"];

  return `${rando(funTeamNames)} ${rando(teamSuffix)}`;
}
