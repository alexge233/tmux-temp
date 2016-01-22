# tmux-temp

A CPU temperature monitor for tmux.

![tmux-temp](https://github.com/alexge233/tmux-temp/blob/master/tmux_status_temp.png?raw=true)

## Instructions

This wee script assumes you have installed `lm-sensors` on your system,
and configured them to run properly.

You need `node.JS` working properly, and you also need one extra:
[tmux-colors](https://github.com/alexge233/tmux-temp) which you install via `npm`.

Download the script in your `.tmux/` directory:

```
mkdir .tmux/
wget https://raw.githubusercontent.com/alexge233/tmux-temp/master/temp.js ~/.tmux/temp.js
```

Then configure your tmux to display it at the correct segment.

I use [vim-airline](https://github.com/vim-airline/vim-airline) and
[tmuxline](https://github.com/edkolev/tmuxline.vim), so setting it is done
by doing:

- `vim .vimrc` and then edit it so that you load the monitor:
```
let g:tmuxline_preset = {
      \'a'    : '#S', 
      \'b'    : '#(rainbarf --bright --tmux)',
      \'c'    : '',
      \'win'  : '#W #I',
      \'cwin' : '#W #I',
      \'x'    : '⇑ %R',
      \'y'    : '#(node .tmux/temp.js)',
      \'z'    : '#H'}
```
- run `Tmuxline` from within vim (this should update your tmux)
- export the current *look* to a theme, by running `TmuxlineSnapshot ~/.tmux/theme`
- finally, edit your `.tmux.conf` so that it loads your new theme:
```
source "~/.tmux/theme"
```

The status icon uses *unicode* codes to draw the box, thus make sure your terminal supports it.
If you have a need to change the ranges (min temperature is set to 30 and max to 100) edit the
script, same goes for switching from Celcius to Fahrenheit.

I have not tested it under OSX, only linux.
