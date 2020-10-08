// Asynchronous - callback hell

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

getTodos("/data/mario.json", (err, data) => {
  console.log(data);
  getTodos("/data/luigi.json", (err, data) => {
    console.log(data);
    getTodos("/data/shaun.json", (err, data) => {
      console.log(data);
    });
  });
});
