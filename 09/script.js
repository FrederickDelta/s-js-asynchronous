// Asynchronous - Fetch API

fetch("/data/todos.json")
  .then((response) => {
    console.log("promise resolved:", response);

    if (response.status !== 200) {
      throw new Error("cannot fetch the data");
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("promise rejected", err);
  });
