
    const card = document.querySelector(".card");
    const angle = 20;

(() => {
    // Mobilde bekleme
       if(window.navigator.userAgent.mobile) return ;

    card.addEventListener("mousemove", (e) => {
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth / 2;
        const centerY = card.offsetTop + cardHeight / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateX = (angle * mouseY) / (cardHeight / 2);
        const rotateY = (-angle * mouseX) / (cardWidth / 2);

        card.style.setProperty("--rotateX", rotateX + "deg");
        card.style.setProperty("--rotateY", rotateY + "deg");
    });
        
})();




const cursor = document.querySelector(".cursor");
var timeout;
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    function mouseStopped() {
        cursor.style.display = "none";
    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);

    document.addEventListener("mouseout", () => {
        cursor.style.display = "none";
    });

})