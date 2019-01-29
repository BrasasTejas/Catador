function logoutButton() {
    console.log("running");
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("id_token");

}