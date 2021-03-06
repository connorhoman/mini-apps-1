CREATE TABLE User (
	id INT AUTO_INCREMENT NOT NULL, 
	name VARCHAR(30) NOT NULL, 
	email VARCHAR(30) NOT NULL,
    password VARCHAR(30) NOT NULL, 
    address1 VARCHAR(30) NOT NULL, 
    address2 VARCHAR(30), 
    city VARCHAR(30) NOT NULL,
    state VARCHAR(30) NOT NULL, 
    zip VARCHAR(30) NOT NULL, 
    phone INT NOT NULL, 
    creditcard INT NOT NULL,
    expiration INT NOT NULL, 
    cvv INT NOT NULL, 
    billingzip INT NOT NULL, 
    PRIMARY KEY (ID));