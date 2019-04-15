create database db_pessoas;

use db_pessoas;

create table if not exists pessoas(
	id int auto_increment primary key,
    name varchar(50) not null,
    email varchar(50),
    adress varchar(80),
    sex char(1),
    active boolean
    )default charset = uft8;