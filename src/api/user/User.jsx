import { userApiUrls } from "../../misc/apiConfig";

export const updateProgressBarAction = (progress) => {
  // console.log("updateProgressBarAction", progress);
  return {
    type: "UPDATE_PROGRESS_BAR",
    payload: progress,
  };
};

export async function signIn({ username, password }, thunkAPI) {
  //   const dispatch = useDispatch();
  const response = await fetch(userApiUrls.signIn, {
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
    // console.log("creating the user: ", response);
    return await response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
}

export async function signUp(userData, thunkapi) {
  //   const dispatch = usedispatch();
  const response = await fetch(userApiUrls.signUp, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userData),
    onprogress: (event) => {
      if (event.lengthcomputable) {
        console.log("progress: ", event.loaded, event.total);
        // calculate the percentage of the download
        // const progress = math.round((event.loaded / event.total) * 100);
        // dispatch an action to update the progress bar
        // dispatch(updateprogressbaraction(progress));
      }
    },
  });
  // console.log("creating the user: ", response);
  if ([200, 201].contains(response.status)) return await response.json();
  if (response.status >= 400 && response.status <= 499)
    return thunkapi.rejectWithValue(await response.json());
  //if response is in range of 500-599 return something went wrong error
  if (response.status >= 500 && response.status <= 599)
    return thunkapi.rejectWithValue("Something went wrong");
}

export async function signOut(thunkapi) {
  //   const dispatch = usedispatch();
  const response = await fetch(userApiUrls.signOut, {
    method: "GET",
    headers: { "content-type": "application/json" },
    // body: JSON.stringify({ username, password }),
    onprogress: (event) => {
      if (event.lengthcomputable) {
        console.log("progress: ", event.loaded, event.total);
        // calculate the percentage of the download
        // const progress = math.round((event.loaded / event.total) * 100);
        // dispatch an action to update the progress bar
        // dispatch(updateprogressbaraction(progress));
      }
    },
  });
  try {
    console.log("creating the user: ", response);
    return await response.json();
  } catch (error) {
    return thunkapi.rejectwithvalue(error.response.data);
  }
}

export async function deleteUser({ username }, thunkapi) {
  //   const dispatch = usedispatch();
  console.log("Deleting user: ");
  const response = await fetch(userApiUrls.deleteUser(username), {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username }),
    onprogress: (event) => {
      if (event.lengthcomputable) {
        console.log("progress: ", event.loaded, event.total);
        // calculate the percentage of the download
        // const progress = math.round((event.loaded / event.total) * 100);
        // dispatch an action to update the progress bar
        // dispatch(updateprogressbaraction(progress));
      }
    },
  });
  try {
    return await response.json();
  } catch (error) {
    return thunkapi.rejectwithvalue(error.response.data);
  }
}

export async function updateUser(data, thunkapi) {
  //   const dispatch = usedispatch();
  const response = await fetch(userApiUrls.updateUser(data.username), {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
    onprogress: (event) => {
      if (event.lengthcomputable) {
        console.log("progress: ", event.loaded, event.total);
        // calculate the percentage of the download
        // const progress = math.round((event.loaded / event.total) * 100);
        // dispatch an action to update the progress bar
        // dispatch(updateprogressbaraction(progress));
      }
    },
  });
  try {
    console.log("Updating user: ", response);
    return await response.json();
  } catch (error) {
    return thunkapi.rejectwithvalue(error.response.data);
  }
}

export async function getUser({ username }, thunkapi) {
  //   const dispatch = usedispatch();
  const response = await fetch(userApiUrls.getUser(username), {
    method: "GET",
    headers: { "content-type": "application/json" },
    // body: JSON.stringify(data),
    onprogress: (event) => {
      if (event.lengthcomputable) {
        console.log("progress: ", event.loaded, event.total);
        // calculate the percentage of the download
        // const progress = math.round((event.loaded / event.total) * 100);
        // dispatch an action to update the progress bar
        // dispatch(updateprogressbaraction(progress));
      }
    },
  });
  try {
    return await response.json();
  } catch (error) {
    return thunkapi.rejectwithvalue(error.response.data);
  }
}
