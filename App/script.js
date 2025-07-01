
const dict = {
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
  "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
  "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
  "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
  "y": "-.--", "z": "--..", "0": "-----", "1": ".----", "2": "..---",
  "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...",
  "8": "---..", "9": "----.", " ": "/", ".": ".-.-.-", ",": "--..--"
};
const reverseDict = Object.fromEntries(Object.entries(dict).map(([k, v]) => [v, k]));

function toMorse() {
  const input = document.getElementById("input").value.toLowerCase();
  const output = input.split('').map(c => dict[c] || '').join(' ');
  document.getElementById("output").value = output;
}

function toText() {
  const input = document.getElementById("input").value.trim();
  const output = input.split(' ').map(code => code === "/" ? " " : reverseDict[code] || '').join('');
  document.getElementById("output").value = output;
}
