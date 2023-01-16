## Building
---
1. To build
```
docker build -t gdsc \
        --build-arg FIREBASE_SERVICE_ACCOUNT_PROJECT_ID \
        --build-arg FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY \
        --build-arg FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL \
        --no-cache  --progress=plain .
```
2. Alt build
```
docker build -t gdsc \
        --build-arg "FIREBASE_SERVICE_ACCOUNT_PROJECT_ID=$some_Value" \
        --build-arg "FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY=$some_other_value" \
        --build-arg "FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL=$some_other_other_value" \
        --no-cache  --progress=plain .
```
### Building Explanation
1. `--build-arg`
Required, this is how we specify a variable that should be passed to the container.
The proceeding arguments for example FIREBASE_SERVICE_ACCOUNT_PROJECT_ID is the name that the variable will in the container
The proceeding arguments for example $some_Value is the name that the variable has inside of your env
2. `--no-cache`
Optional, this how we specify that the contianer should start from ground 0 instead of some cached state
3. `--progress=plain`
Optional, this how we specift that we want to see the building status

## Running
---
1. To run
`docker run -e PORT=3000 -p 3000:3000 gdsc`  
## Running Explanation
1. `-e PORT=3000`  
Required, this is how we specify a variable that should be passed to the container.
The proceeding arguments for example PORT is the name that the variable will in the container, 3000 will be it's value inside of the container, since there is a script that uses the $PORT flag it will see this instead of None.

2. `-p 3000:3000`  
Required, this is how we specify what port the container should map to on the outside
The proceeding arguments for example PORT is the name that the variable will in the container, 3000 will be it's value inside of the container, that way when you go to :3000 we are able to see it in the browser

## Clearing containers
---
### listing containers
Run `docker ps -a`
```
> docker ps -a
CONTAINER ID   IMAGE                            COMMAND                  CREATED         STATUS                       PORTS     NAMES
984600f0d749   gdsc                             "docker-entrypoint.s…"   16 hours ago    Exited (0) 16 hours ago                gallant_hofstadter
17454c436e23   gdsc                             "docker-entrypoint.s…"   16 hours ago    Exited (1) 16 hours ago                naughty_bose
e27c22417f93   gdsc                             "docker-entrypoint.s…"   16 hours ago    Exited (0) 16 hours ago                dazzling_tu
a76fb6793356   1947240e95f3                     "docker-entrypoint.s…"   17 hours ago    Exited (0) 17 hours ago                dazzling_leavitt
8f5d35205bff   1947240e95f3                     "docker-entrypoint.s…"   17 hours ago    Exited (1) 17 hours ago                magical_neumann
cebec5216ad6   1947240e95f3                     "docker-entrypoint.s…"   17 hours ago    Exited (1) 17 hours ago                magical_pasteur
aae934f9a606   1947240e95f3                     "docker-entrypoint.s…"   17 hours ago    Exited (1) 17 hours ago                great_heyrovsky
40377957bf69   1947240e95f3                     "docker-entrypoint.s…"   17 hours ago    Exited (1) 17 hours ago                sad_carver
07de68b4cf23   1947240e95f3                     "docker-entrypoint.s…"   17 hours ago    Exited (0) 17 hours ago                inspiring_mendeleev
99471fcbc4f2   9c83105b5467                     "docker-entrypoint.s…"   20 hours ago    Exited (137) 20 hours ago              romantic_cori
3a359a7ddab2   catthehacker/ubuntu:act-latest   "/usr/bin/tail -f /d…"   10 days ago     Exited (255) 20 hours ago              act-Screenshot-actions-setup
739c941c64d5   webapp                           "docker-entrypoint.s…"   4 weeks ago     Exited (1) 4 weeks ago                 webapp_app_1
01b36d021654   matrim/cmake-examples:3.4.3      "/setup.sh /bin/bash"    5 months ago    Exited (130) 5 months ago              eager_kowalevski
12d3c47dfefb   ubuntu                           "/bin/bash"              9 months ago    Exited (0) 5 months ago                00_learning
c9c6e6d04931   ubuntu                           "/bin/bash"              10 months ago   Exited (255) 9 months ago              cloud_ini_valid
d85374a8fc09   kalilinux/kali:latest            "bash"                   11 months ago   Exited (255) 10 months ago             zzs
```
### Clearing containers
Getting rid of all containers with `IMAGE` as `1947240e95f3`.   
Run the command
`docker ps -a | grep 1947240e95f3 | awk '{print $1}' | xargs docker rm`
#### Explanation
1. `docker ps -a`  
Get a list of all containers that your system has
1. `grep 1947240e95f3`  
grab all lines that has this string
1. `awk '{print $1}'`  
grab the first Column(Container id)
1. `xargs docker rm`  
For all arguments passed into this run the command `docker rm`

### Clearing Images
---
### Listing Images
Run the command `docker images`
Output will be 
```
> docker images
REPOSITORY                        TAG           IMAGE ID       CREATED         SIZE
<none>                            <none>        ea9c7299c561   5 minutes ago   503MB
gdsc                              latest        b3bc4d79419a   16 hours ago    536MB
<none>                            <none>        1947240e95f3   17 hours ago    423MB
<none>                            <none>        1f4934e992fd   20 hours ago    116MB
<none>                            <none>        9c83105b5467   20 hours ago    116MB
catthehacker/ubuntu               act-latest    43379ba3e57b   11 days ago     1.16GB
node                              16-alpine     51405b97d471   2 weeks ago     116MB
webapp                            latest        00127415872e   4 weeks ago     459MB
gcr.io/donotleaveon/webapp        latest        00127415872e   4 weeks ago     459MB
maven                             latest        ce5cd1bd1247   6 months ago    556MB
openjdk                           latest        5e28ba2b4cdb   6 months ago    471MB
gdcs                              latest        d6901f02ae7d   6 months ago    992MB
twodockernnet_database            latest        51a753c89983   6 months ago    1.48GB
test_web1                         latest        e74bc9a9e646   6 months ago    820MB
test                              latest        24e19bc82c73   7 months ago    251MB
mongo                             latest        798d1656acba   7 months ago    698MB
mcr.microsoft.com/mssql/server    2019-latest   d78e982c2f2b   9 months ago    1.48GB
twodockernnet_primary_container   latest        601e280c8525   10 months ago   107MB
busybox                           latest        cabb9f684f8b   12 months ago   1.24MB
ubuntu                            latest        ba6acccedd29   12 months ago   72.8MB
kalilinux/kali                    latest        ccb499be88d1   12 months ago   125MB
bash                              latest        8856ae160078   14 months ago   12.9MB
alpine                            latest        14119a10abf4   14 months ago   5.6MB
gns3/xeyes                        latest        82a3859849d7   15 months ago   155MB
gimp/gimp                         latest        298b39df5680   3 years ago     1.63GB
kartoza/qgis-desktop              latest        f8fe86a53fe7   4 years ago     1.07GB
matrim/cmake-examples             3.4.3         8a69b02da2db   5 years ago     976MB
```
### Clearing Images
Getting rid of all images with `REPOSITORY` as `none`.   
Run the command
`docker images | grep none | awk '{print $3}' | xargs docker rmi`
#### Explanation
1. `docker images`  
Get a list of all images that your system has
1. `grep none`  
grab all lines that has this string
1. `awk '{print $3}'`  
grab the third Column(Image ID)
1. `xargs docker rm`  
For all arguments passed into this run the command `docker rmi`, which removes images
