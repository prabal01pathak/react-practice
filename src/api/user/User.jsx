const updateProgressBarAction = (progress) => {
  console.log("updateProgressBarAction", progress);
  return {
    type: "UPDATE_PROGRESS_BAR",
    payload: progress,
  };
};

export { updateProgressBarAction };
export default async function CreateUser({ username, password }, thunkAPI) {
  //   const dispatch = useDispatch();
  const response = await fetch("https://api.devicehome.tech/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    onProgress: (event) => {
      if (event.lengthComputable) {
        console.log("progress: ", event.loaded, event.total);
        // Calculate the percentage of the download
        // const progress = Math.round((event.loaded / event.total) * 100);
        // Dispatch an action to update the progress bar
        // dispatch(updateProgressBarAction(progress));
      }
    },
  });
  try {
    console.log("creating the user: ", response);
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
}
