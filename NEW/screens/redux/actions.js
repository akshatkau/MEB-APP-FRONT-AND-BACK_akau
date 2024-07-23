export const SET_USER_PROFILE = "SET_USER_PROFILE";

export const setUserProfile = (
  email,
  username,
  password,
  height,
  weight,
  phone,
  age
) => ({
  type: SET_USER_PROFILE,
  payload: { email, username, password, height, weight, phone, age },
});
