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

Then configure your tmux to display it at the status bar.


