import { userApiUrls } from "../../misc/apiConfig";

export const updateProgressBarAction = (progress: any) => {
  // console.log("updateProgressBarAction", progress);
  return {
    type: "UPDATE_PROGRESS_BAR",
    payload: progress,
  };
};

export async function signIn(
  { username, password }: any,

  thunkAPI: { rejectWithValue: (arg0: any) => any }
): Promise<any> {
  //   const dispatch = useDispatch();
  const response = await fetch(userApiUrls.signIn, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  try {
    // console.log("creating the user: ", response);
    return await response.json();
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
}

export async function signUp(
  userData: Object,
  thunkapi: { rejectWithValue: (arg0: string) => any }
) {
  //   const dispatch = usedispatch();
  const response = await fetch(userApiUrls.signUp, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(userData),
  });
  // console.log("creating the user: ", response);
  if ([200, 201].includes(response.status)) return await response.json();
  if (response.status >= 400 && response.status <= 499)
    return thunkapi.rejectWithValue(await response.json());
  //if response is in range of 500-599 return something went wrong error
  if (response.status >= 500 && response.status <= 599)
    return thunkapi.rejectWithValue("Something went wrong");
}

export async function signOut(thunkapi: {
  rejectwithvalue: (arg0: any) => any;
}) {
  //   const dispatch = usedispatch();
  const response = await fetch(userApiUrls.signOut, {
    method: "GET",
    headers: { "content-type": "application/json" },
    // body: JSON.stringify({ username, password }),
  });
  try {
    console.log("creating the user: ", response);
    return await response.json();
  } catch (error: any) {
    return thunkapi.rejectwithvalue(error.response.data);
  }
}

export async function deleteUser(
  { username }: any,
  thunkapi: { rejectwithvalue: (arg0: any) => any }
) {
  //   const dispatch = usedispatch();
  console.log("Deleting user: ");
  const response = await fetch(userApiUrls.deleteUser(username), {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username }),
  });
  try {
    return await response.json();
  } catch (error: any) {
    return thunkapi.rejectwithvalue(error.response.data);
  }
}

export async function updateUser(
  data: any,
  thunkapi: { rejectwithvalue: (arg0: any) => any }
) {
  //   const dispatch = usedispatch();
  const response = await fetch(userApiUrls.updateUser(data.username), {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  try {
    console.log("Updating user: ", response);
    return await response.json();
  } catch (error: any) {
    return thunkapi.rejectwithvalue(error.response.data);
  }
}

export async function getUser(
  { username }: any,
  thunkapi: { rejectwithvalue: (arg0: any) => any }
) {
  //   const dispatch = usedispatch();
  const response = await fetch(userApiUrls.getUser(username), {
    method: "GET",
    headers: { "content-type": "application/json" },
    // body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error: any) {
    return thunkapi.rejectwithvalue(error.response.data);
  }
}
