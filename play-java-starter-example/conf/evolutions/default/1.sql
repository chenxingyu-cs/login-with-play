# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table user (
  id                            bigint auto_increment not null,
  name                          varchar(255),
  nick_name                     varchar(255),
  password                      varchar(255),
  create_time                   datetime(6),
  is_admin                      tinyint(1) default 0 not null,
  email                         varchar(255),
  phone                         varchar(255),
  address                       varchar(255),
  age                           integer not null,
  is_male                       tinyint(1) default 0 not null,
  avatar                        varchar(255),
  constraint pk_user primary key (id)
);


# --- !Downs

drop table if exists user;

