create table users(
    username varchar(20) not null,
    u_password  varchar(20) not null,
    u_role varchar(20),
    PRIMARY KEY(username)
);

create  table `owner`(
    ownerID int not null AUTO_INCREMENT,
    username varchar(20),
    PRIMARY KEY(ownerID),
    FOREIGN KEY (username) REFERENCES `users`(username)
);

create  table `admin`(
    adminID int not null AUTO_INCREMENT,
    username varchar(20),
    PRIMARY KEY(adminID),
    FOREIGN KEY (username) REFERENCES `users`(username)
);

create  table `customer`(
    custID int not null AUTO_INCREMENT,
    username varchar(20),
    VIP boolean DEFAULT false,
    blacklist boolean DEFAULT false,
    PRIMARY KEY(custID),
    FOREIGN KEY (username) REFERENCES `users`(username)
);


create table hotel(
	hotelID int not null AUTO_INCREMENT,
    hotelLocation varchar(100) not null,
    hotelName varchar(100) not null,
    stars TINYINT,
    rating TINYINT,
    suspened boolean DEFAULT true,
    ownerID int,
    ImageURL varchar(100),
    PRIMARY KEY (hotelID),
    FOREIGN KEY (ownerID) REFERENCES `owner`(ownerID)
);

create table hotel_room(
	hotelID int not null,
    roomID int not null AUTO_INCREMENT,
    hotelName varchar(100) not null,
    price int,
    `type` varchar(100),
    `count` int,
    facilities varchar(100),
    ImageURL varchar(100),
    PRIMARY KEY (roomID,hotelID),
    FOREIGN KEY (hotelID) REFERENCES `hotel`(hotelID)
);

create table bills(
    bill_ID int not null AUTO_INCREMENT,
    hotelID int not null,
    roomID int not null,
    custID int not null,
    price int,
    rev_date DATETIME,
    PRIMARY KEY(bill_ID,hotelID,roomID,custID),
    FOREIGN KEY (hotelID) REFERENCES `hotel`(hotelID),
    FOREIGN KEY (custID) REFERENCES `customer`(custID),
    FOREIGN KEY (roomID) REFERENCES hotel_room(roomID)
);



