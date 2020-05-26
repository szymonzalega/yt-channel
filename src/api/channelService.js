export function getChannels() {
  const channelsFile = "../channels.json";

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", channelsFile);
    xhr.onload = () => {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr.statusText);
        }
      }
    };
    xhr.onerror = () => {
      reject(xhr.statusText);
    };
    xhr.send();
  });
}
