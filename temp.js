#!/usr/bin/node
///
/// A simple node.js script for displaying average CPU temp on tmux segment
/// @date January 2016
///
var sp = require('child_process');

// @see https://www.npmjs.com/package/tmux-colors
var colors = require('tmux-colors');

// this script assumes you already have installed and configures lm-sensors
var sensors = sp.spawnSync("/usr/bin/sensors", ["--no-adapter", "coretemp-isa-0000"]);
var output = sensors.stdout.toString();
output = output.replace(/^.*coretemp-isa-0000.*$/mg, "");
output = output.replace(/^\s+|\s+$/g, '');
var lines = output.split("\n");
var avg = 0.0;
var core_count = 0.0;
var max_temp = 0.0;

// get raw temps and average them
lines.forEach(function(line){
    var temp = line.substring(line.indexOf('+')+1, line.indexOf('°C'));
    var temp = parseFloat(temp);
    avg += temp;
    core_count++;
    if (temp > max_temp) max_temp = temp;
});
avg /= core_count;

// change those to adjust your tmps
var max = 100;
var min = 25;

// min max normalise
var norm = (avg - min) / (max - min);

var txt = avg+'°C';

/*
var r = parseInt((255 * norm*100) / 100);
var g = parseInt((255 * (100 - norm*100)) / 100);
var b = parseInt(0);
// convert it to hex
var val = '#'+r.toString(16)+g.toString(16)+b.toString(16);
*/

if (avg < 40) val = 'blue';
else if (avg > 40 && avg < 50) val = 'green';
else if (avg > 50 && avg < 60) val = 'yellow';
else if (avg > 60 && avg < 75) val = 'orange';
else if (avg > 75 ) val = 'red';

// output
console.log(colors('#[fg='+val+',bold]'+txt));
