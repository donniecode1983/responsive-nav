window.addEventListener('resize', function() {
    if (document.documentElement.clientWidth > 600) {
        document.getElementById('topNav').style.display = "block"
    } else {
        document.getElementById('topNav').style.display = "none"
    }
})

function hideNav() {
    // document.getElementById('topNav').style.display = "block";
    chkBox = document.getElementById('toggle');
    // alert(chkBox.checked)
    if (chkBox.checked) {
        document.getElementById('topNav').style.display = "none"
    } else {
        document.getElementById('topNav').style.display = "block"
    }
}