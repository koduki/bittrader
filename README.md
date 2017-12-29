$ docker build -t koduki/biflyer-app . 
$ docker run -it -v `pwd`:/usr/src/app -p4567:4567 koduki/bitflyer-app
$ docker run -it -v `pwd`:/usr/src/app -p4567:4567 -w /usr/src/app koduki/bitflyer-app bundle installSending build 