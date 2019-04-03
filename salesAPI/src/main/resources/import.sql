insert into Client (id, name) values (1, 'Wiliam Ferraciolli');
insert into Client (id, name) values (2, 'Maria Georgiou');

insert into Product (id, name, value) values (1, 'Notebook', 1000.0);
insert into Product (id, name, value) values (2, 'Smartphone', 1500.0);
insert into Product (id, name, value) values (3, 'Tablet', 2000.0);

insert into Sale (id, client_id, delivery, total, created_date_time) values (1, 1, 15.0, 1015.0, sysdate());

insert into Item (id, sale_id, product_id, quantity) values (1, 1, 1, 1);