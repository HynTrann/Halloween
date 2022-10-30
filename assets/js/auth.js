if (localStorage.getItem("user")) {
    document.getElementById("auth").innerHTML = '<a href="#">logout</a>';
    document.getElementById("auth").onclick = function () {
        localStorage.removeItem("user");
        window.location.href = "/html/";
    };
}
