// Asynchronous - async & await

const getTodos = async () => {
  const response = await fetch("/data/todos.json");

  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }

  const data = await response.json();

  return data;
};

getTodos()
  .then((data) => console.log("promise revolved", data))
  .catch((err) => console.log("promise rejected", err.message));

// (async () => {
//   const data = await getTodos();
//   console.log(data);
// })();
