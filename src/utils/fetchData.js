export const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes";

export const fetchData = async (url, uploadData = undefined) => {
  const fetchPro = uploadData
    ? fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uploadData),
      })
    : fetch(url);

  const res = await fetchPro;
  const data = await res.json();
  if (!res.ok)
    throw new Error(`Unable to fetch your request. Status: ${res.status}`);
  return data;
};
