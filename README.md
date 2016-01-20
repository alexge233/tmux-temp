# tmux-temp

A CPU temperature monitor for tmux.

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
      \'x'    : '⇑ #R',
      \'y'    : '#(node .tmux/temp.js)',
      \'z'    : '#H'}
```
- run `Tmuxline` from within vim (this should update your tmux)
- export the current *look* to a theme, by running `TmuxlineSnapshot ~/.tmux/theme`
- finally, edit your `.tmux.conf` so that it loads your new theme:
```
source "~/.tmux/theme"
```

Feel free to hack into the script!
There's an option which normalises the temperature to an RGB colour code,
but I can't get it to work with tmux.
