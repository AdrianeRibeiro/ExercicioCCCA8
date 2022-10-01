drop table IF EXISTS purchases;
create table IF NOT EXISTS purchases (
  card_number text,
  soft_description text,
  amount numeric,
  date TIMESTAMP,
  currency text
);

insert into purchases (card_number, soft_description, amount, date, currency) values ('5410940896564101', 'Amazon', 100, '2022-09-10T10:00:00', 'BRL');

insert into purchases (card_number, soft_description, amount, date, currency) values ('5410940896564101', 'Netflix', 30, '2022-09-09T10:00:00', 'USD');

insert into purchases (card_number, soft_description, amount, date, currency) values ('5410940896564101', 'MELI', 300, '2022-09-01T10:00:00', 'BRL');

insert into purchases (card_number, soft_description, amount, date, currency) values ('5410940896564101', 'Google Ads', 200, '2022-09-20T10:00:00', 'BRL');

insert into purchases (card_number, soft_description, amount, date, currency) values ('5410940896564101', 'Amazon', 100, '2022-07-10T10:00:00', 'BRL');


