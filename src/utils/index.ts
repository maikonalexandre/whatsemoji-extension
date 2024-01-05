import { emogi } from "../@types";

export function buildEmoji(arr: any[]) {
  return String.fromCodePoint(...arr.map((code) => parseInt(code, 16)));
}

export async function copyToClipboard(data: any) {
  try {
    await navigator.clipboard.writeText(data);
  } catch (error) {
    console.log(error);
  }
}

export function saveInMemory(emogi: emogi) {
  const item = localStorage.getItem("@whatsemoji-store");

  if (item) {
    const data: emogi[] = JSON.parse(item);

    const filteredEmojis = data.filter((e) => {
      if (JSON.stringify(e.code) != JSON.stringify(emogi.code)) {
        return e;
      }
    });

    if (filteredEmojis.length > 65) {
      filteredEmojis.shift();
    }

    localStorage.setItem(
      "@whatsemoji-store",
      JSON.stringify([...filteredEmojis, { code: emogi.code }])
    );
    return;
  }

  localStorage.setItem(
    "@whatsemoji-store",
    JSON.stringify([{ code: emogi.code }])
  );
}

export function getInMemory() {
  let item = localStorage.getItem("@whatsemoji-store");

  return item ? JSON.parse(item) : [];
}
