'use strict';

var ctx, blobs = [];
var blobList = [red, yellow, blue, purple];
//var blobList = [red, yellow, blue, purple];

function Blob(x, y) {
    this.x1 = x;
    this.y1 = y;
    this.x2 = x;
    this.y2 = y;
}

function init() {
    // Create Blob Objects.
    for (var x = 0; x < 18; x++) {
        blobs[x] = [];
        for (var y = 0; y < 19; y++) {
            blobs[x][y] = new Blob(x, y);
        }
    }

    // Set Color.
    for (var x = 0; x < 18; x++) {
        for (var y = 0; y < 19; y++) {
            while (true) {
                var colorNum = Math.floor(Math.random() * 4);
                if (checkColor(x, y, colorNum)) {
                    blobs[x][y].color = colorNum;
                    break;
                }
            }
        }
    }

    //get DPI
    // let dpi = window.devicePixelRatio;
    // console.log(dpi);

    // Initialize canvas.
    //var canvas = document.getElementById("canvas");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    paint();
}

// Check Colors
function checkColor(x, y, c) {
    var flag = true;

    if (x > 1) {
        var c0 = blobs[x - 2][y].color;
        var c1 = blobs[x - 1][y].color;
        if (c0 == c1 && c1 == c) {
            flag = false;
        }
    }

    if (y > 1) {
        var c0 = blobs[x][y - 2].color;
        var c1 = blobs[x][y - 1].color;
        if (c0 == c1 && c1 == c) {
            flag = false;
        }
    }

    return flag;
}

function paint() {
    for (var x = 0; x < 18; x++) {
        for (var y = 0; y < 18; y++) {
            // drawBlob(Blob, x, y, width, height);
            ctx.drawImage(blobList[blobs[x][y].color], x * 34, y * 34 + 90, 32, 32);
        }
    }

    // Text
    ctx.font = 'bold 20px Open Sans';
    ctx.textAlign = 'center';
    ctx.fillText('Moves left : 10', 150, 50);
    ctx.fillText('Score : 33333', 450, 50);
}