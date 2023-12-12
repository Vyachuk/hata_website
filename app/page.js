const { TELEGRAM_BOT_URL } = process.env;

async function fetchData() {
  const res = await fetch(TELEGRAM_BOT_URL + "/api/wakeup");
  const result = await res.json();
  return result;
}

export default async function Home() {
  setInterval(async () => {
    await fetchData();
  }, 1000 * 60 * 15);

  return <h1>Hata application</h1>;
}
