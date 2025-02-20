const userData = {
  uniqueId: JSON.parse(localStorage.getItem("uniqueId")) || [],
  Name: JSON.parse(localStorage.getItem("Name")) || [],
  DOB: JSON.parse(localStorage.getItem("DOB")) || [],
  email: JSON.parse(localStorage.getItem("email")) || [],
  password: JSON.parse(localStorage.getItem("password")) || [],
  Gender: JSON.parse(localStorage.getItem("Gender")) || []
};

export function saveUserData() {
  localStorage.setItem("uniqueId", JSON.stringify(userData.uniqueId));
  localStorage.setItem("Name", JSON.stringify(userData.Name));
  localStorage.setItem("DOB", JSON.stringify(userData.DOB));
  localStorage.setItem("email", JSON.stringify(userData.email));
  localStorage.setItem("password", JSON.stringify(userData.password));
  localStorage.setItem("Gender", JSON.stringify(userData.Gender));
  console.log("User Data Saved to Local Storage:", userData);
}

console.log("Loaded User Data from Local Storage:", userData);

export default userData;
