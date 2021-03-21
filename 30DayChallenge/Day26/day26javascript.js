function processData(input) {
    input = input.split('\n');
    var d1_temp = input[0].split(' ');
    var d2_temp = input[1].split(' ');
    var d1 = parseInt(d1_temp[0]);
    var m1 = parseInt(d1_temp[1]);
    var y1 = parseInt(d1_temp[2]);
    var d2 = parseInt(d2_temp[0]);
    var m2 = parseInt(d2_temp[1]);
    var y2 = parseInt(d2_temp[2]);

    var fine = 0;
    if (y1 - y2 > 0) {
        fine = 10000;
    } else if (y1 >= y2) {
      if (m1 - m2 > 0) {
        fine = 500 * (m1 - m2);
      } else if ((m1 - m2 > 0 && d1 - d2 > 0) || (m1 === m2 && d1 - d2 > 0)) {
        fine = 15 * (d1 - d2);
      }
    }
    console.log(fine);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
