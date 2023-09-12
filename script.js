function openProjectsMobile() {
    let firstColumn = document.getElementById("first-column")
    firstColumn.style.display = "none"

    let projectsMobile = document.getElementById("projectListMobile")
    projectsMobile.style.display = "flex"
}

function closeProjectsMobile() {
    let projectsMobile = document.getElementById("projectListMobile")
    projectsMobile.style.display = "none"

    let firstColumn = document.getElementById("first-column")
    firstColumn.style.display = "flex"
}

function resizingWindow() {
    let firstColumn = document.getElementById("first-column")

    let projectsMobile = document.getElementById("projectListMobile")

    if (window.innerWidth > 900) {
        firstColumn.style.display = "flex"
        projectsMobile.style.display = "none"
    }
}
addEventListener("resize", (resizingWindow))