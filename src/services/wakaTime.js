/**
 * Get WakaTime data
 * @param {string} url - Embed wakatime coding activity json url
 */
export default async function getWakaTimeData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
