// run command: deno run --allow-read --allow-write --allow-net generate_emojis.js

const req = await fetch(
  "https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json"
);

const emojis = await req.json();

const emojisMap = {};

emojis.forEach((emoji) => {
  emoji.aliases.forEach((alias) => (emojisMap[alias] = emoji.emoji));
});

await Deno.writeTextFile("./emojis.json", JSON.stringify(emojisMap));
