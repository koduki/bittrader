$ docker build -t koduki/bitflyer-app . 
$ docker run -it -v `pwd`:/app -p4567:4567 koduki/bitflyer-app
$ docker run -it -v `pwd`:/app -p4567:4567 -w /app koduki/bitflyer-app bundle install