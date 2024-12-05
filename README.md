You need docker for rabitmq to make image of rabitmq in the docker.

1.First install docker in the your pc as per you configuarion i will suggest to install arm64.Follow installation steps mentioned in the procees.
2.Allow all the permission that docker need , enable virtulization from BIOS mode if you are using docker for wsl method .
3.WSL is used for run ubantu in the windows you have to install wsl in you machine by using wsl commands form cmd.
4.After successful completion of the same you can run below docker command

"docker run -d --hostname rmq --name rabbit-server -p 5000:15672 -p 5672:5672 rabbitmq:management"

command explain :
docker run :this will create container in the docker
-d: detached mode
--hostname rmq :hostname of the container 
--name rabbit-server:this is the server name
-p 3000:15672:here 3000 is your local poer on which you can go for rabiitmq and 15672 is your rabitmq port 
-p 5672:5672:it is default port of the rabitmq
rabbitmq:management:version of the rabitmq

default rabitmq user and passowrd is : guest 
you cancheck dashbord at on your local port i.e 8080 or 5000
