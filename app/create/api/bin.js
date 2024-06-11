// .env token
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDU0MjgxNDUsInVzZXJfaWQiOiI2NWE2YzRhZDk1ZmU2M2U3ZjRhZDk2MGMifQ.yt9nO7epO-rbwJ-D6s352LsOAXV4uv050GtfqyESZ1c",
);

const raw = JSON.stringify({
  input: {
    prompt: prompt,
  },
  version: "34f9b6bfabf06c83105cd99283e87eca4d2c88f9014718f23a5392ff3cae9ff4",
  // "955e22957cc17de0ba403ed2d0eae3b7ba3d8a94e5e186987f1fe93961e4d746",
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};
