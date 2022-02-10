const app = document.getElementById("root");

const content = document.getElementById("content");
const btn = document.getElementById("btn");

const contentStyle = {
    width: "300px",
    height: "300px",
    backgroundColor: "aqua",
    border: "1px solid black",
};

const btnStyle = {
    margin: '8px',
    width: "120px",
    height: "30px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
}

Object.keys(contentStyle).forEach((item) => {
    content.style[item] = contentStyle[item];
});
Object.keys(btnStyle).forEach(item => {
    btn.style[item] = btnStyle[item];
});

content.setAttribute("name", "box1");
content.setAttribute("id", "0137908642");

btn.addEventListener('click', async () => {
    try {
        await navigator.share({
            title: "Web Share API TEST",
            url: `/content/${content.getAttribute("id")}`,
            text: 'this is Web Share API test Sample',
            // files: [], // share file array
        });
    } catch (err) {
        console.error("Share failed: ", err.message);
    }
});