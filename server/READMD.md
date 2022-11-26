



mysql docker command
```
docker -v
docker pull mysql
docker images
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:latest
docker ps -s

# MySQL Docker 컨테이너 중지
$ docker stop mysql-container

# MySQL Docker 컨테이너 시작
$ docker start mysql-container

# MySQL Docker 컨테이너 재시작
$ docker restart mysql-container

# container 접속
$ docker exec -ti a2640946540a bash

$ mysql -uroot -proot

mysql> use hsg
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
ß
Database changed
mysql> select * from customer
    -> ;
+----+--------+------+
| id | name   | type |
+----+--------+------+
| 0  | sonata | 7282 |
| 1  | ???    | 3020 |
+----+--------+------+
2 rows in set (0.00 sec)

```