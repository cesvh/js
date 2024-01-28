PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2> ls

    Directory: C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---       20/01/2024 12:25 a. m.             24 index.js

PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2> npm install pm2 -g
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.

changed 157 packages in 4s

13 packages are looking for funding
  run `npm fund` for details
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2> node .\index.js
parsec
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2> pm2 start .\index.js

                        -------------

__/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
 _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
  _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
   _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
    _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
     _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
      _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
       _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
        _\///______________\///______________\///__\///////////////__


                          Runtime Edition

        PM2 is a Production Process Manager for Node.js applications
                     with a built-in Load Balancer.

                Start and Daemonize any application:
                $ pm2 start app.js

                Load Balance 4 instances of api.js:
                $ pm2 start api.js -i 4

                Monitor in production:
                $ pm2 monitor

                Make pm2 auto-boot at server restart:
                $ pm2 startup

                To go further checkout:
                http://pm2.io/


                        -------------

[PM2] Spawning PM2 daemon with pm2_home=C:\Users\cesvh\.pm2
[PM2] PM2 Successfully daemonized
[PM2] Starting C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2\index.js in fork_mode (1 instance)
[PM2] Done.
┌────┬──────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name     │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼──────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ index    │ default     │ N/A     │ fork    │ 23356    │ 1s     │ 0    │ online    │ 0%       │ 36.9mb   │ cesvh    │ disabled │
└────┴──────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2> pm2 status
┌────┬──────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name     │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼──────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ index    │ default     │ N/A     │ fork    │ 6752     │ 2s     │ 36   │ online    │ 0%       │ 37.2mb   │ cesvh    │ disabled │
└────┴──────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2> pm2 stop 0
[PM2] Applying action stopProcessId on app [0](ids: [ '0' ])
[PM2] [index](0) ✓
┌────┬──────────┬─────────────┬─────────┬─────────┬──────────┬────────┬──────┬───────────┬──────────┬──────────┬──────────┬──────────┐
│ id │ name     │ namespace   │ version │ mode    │ pid      │ uptime │ ↺    │ status    │ cpu      │ mem      │ user     │ watching │
├────┼──────────┼─────────────┼─────────┼─────────┼──────────┼────────┼──────┼───────────┼──────────┼──────────┼──────────┼──────────┤
│ 0  │ index    │ default     │ N/A     │ fork    │ 0        │ 0      │ 54   │ stopped   │ 0%       │ 0b       │ cesvh    │ disabled │
└────┴──────────┴─────────────┴─────────┴─────────┴──────────┴────────┴──────┴───────────┴──────────┴──────────┴──────────┴──────────┘
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
PS C:\Users\cesvh\dev\js\github\js\node\conceptos-basicos\pm2>
