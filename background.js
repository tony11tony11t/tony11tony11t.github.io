var canvas = document.getElementById("bg-ani");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = canvas.getContext('2d');
var limit = 80;
var color = ['#f0f17d', '#c6dcfc', '#6daca1'];
var SaveSqu = new Array();
c.fillStyle = '#f0f17d';
for (var i = 0; i < limit; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var Ram_Color = Math.floor(Math.random() * 3);
    SaveSqu.push([x, y, Ram_Color]);
}
animate();

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);


    for (var i = 0; i < limit; i++) {
        var x = SaveSqu[i][0];
        var y = SaveSqu[i][1]--;
        c.fillStyle = color[SaveSqu[i][2]];
        if (y < -20) {
            SaveSqu[i][0] = Math.random() * window.innerWidth;
            SaveSqu[i][1] = window.innerHeight;
            SaveSqu[i][2] = Math.floor(Math.random() * 3);
        } else {
            c.fillRect(x, y, 20, 20);
        }

    }
}
