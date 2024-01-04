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
  let item = localStorage.getItem("slotEmogis");

  if (item) {
    const data = JSON.parse(item);
    item = data.filter((e: emogi) => {
      return JSON.stringify(e) != JSON.stringify({ code: emogi.code });
    });

    if (data.length > 75) {
      data.shift();
    }

    localStorage.setItem(
      "slotEmogis",
      JSON.stringify([...data, { code: emogi.code }])
    );
    return;
  }

  localStorage.setItem("slotEmogis", JSON.stringify([{ code: emogi.code }]));
}

export function getInMemory() {
  let item = localStorage.getItem("slotEmogis");

  return item ? JSON.parse(item) : [];
}
