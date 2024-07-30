function openVideo(url) {
    var modal = document.getElementById("videoModal");
    var iframe = document.getElementById("videoFrame");
    iframe.src = url;
    modal.style.display = "block";
}

function closeVideo() {
    var modal = document.getElementById("videoModal");
    var iframe = document.getElementById("videoFrame");
    iframe.src = "";
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("videoModal");
    if (event.target == modal) {
        closeVideo();
    }
}

function goBack() {
    window.history.back();
}
