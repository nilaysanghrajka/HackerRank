process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function printdis(N)
{
    var i, temp;
    for (i = 1; i <= 10; i++)
        {
            temp = N * i;
            console.log(N + " x " + i + " = " + temp);
        }
}

/////////////// ignore above this line ////////////////////

function main() {
    var N = parseInt(readLine());
    printdis(N);

}
