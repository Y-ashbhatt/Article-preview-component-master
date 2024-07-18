function display() {
    let popup = document.getElementById('popup');
    let share = document.getElementById("icon")
    if (popup.style.display === 'flex') {
        popup.style.display = 'none';
        share.style.backgroundColor = "var(--Light-Grayish-Blue)"
        share.style.removeProperty("color");
    } else {
        popup.style.display = 'flex';
        share.style.backgroundColor = "var(--Grayish-Blue)"
        share.style.color = "#fff"
    }
}