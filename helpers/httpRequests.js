const projectLink = "https://auth-learn-ca7ef-default-rtdb.firebaseio.com";
const jsonFile = "/info.json";

export const putFB = async function (input) {
  const putData = await fetch(`${projectLink}${jsonFile}`, {
    method: "PUT",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });
  if (!putData.ok) throw new Error("Sending data failed");
  return null;
};

export const getFB = async function () {
  const pullData = await fetch(`${projectLink}${jsonFile}`);
  console.log(pullData);
  if (!pullData.ok) throw new Error("Found nothing in database");
  const parsedData = await pullData.json();
  return parsedData;
};
