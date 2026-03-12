async function fetchTime() {
  try {
    const res = await fetch("/api/time");
    const data = await res.json();

    const [localDate, localTime] = data.local.split(" ");
    const [utcDate, utcTime] = data.utc.split(" ");

    document.getElementById("local-time").textContent = localTime;
    document.getElementById("local-date").textContent = localDate;
    document.getElementById("utc-time").textContent = utcTime;
    document.getElementById("utc-date").textContent = utcDate;
  } catch (err) {
    console.error("Failed to fetch time:", err);
  }
}

fetchTime();
setInterval(fetchTime, 1000);
