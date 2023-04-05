# SQL


# What are different SQL databases? 
- MySQL 
- PostgreSQL 
- SQLite 
- Microsoft SQL Server 
 - MariaDB 
- Oracle 
  
  
  

 # What are RDBMS? 
- A relational database is a databasae in which data is organized into tables with predefined rows and columns. An inherent correlation between them characterizes the data points in these tabeles. 
  
  - For example, a good example of a relational database includes the complete record of the students belonging to a particular class in a school. 
  
  - The structure of a relational database encompasses multiple rows containing records. Each record is linked with a unique indetifier called primary key, which uniquely indentifies that record. In the student's record database, the roll number or the student's admission number could be considered the primary key to uniquely indetify each record. MySQL, PostgreSQL, MariaDB are some examples of relational databases.
  
  
  
  
  # How to Create table in SQL ?
  - Open cmd and write command
   - cd " < select root directory of your sql >"
   - ex: cd "C:\program files\ mysql\ mysql server 8.0\bin"
  
  - mysql -u root -p
    - enter your password
    
  - create database <database_name>;
  - use <databasae_name>;
  - create table <collection_name>(name varchar(15), roll_no int);
  - insert into <collection_name>(name,roll_no) values("anand", 21);
  - select * from users;

## Please refer image for better understanding


![2023-04-05T12_52_15](https://user-images.githubusercontent.com/113422735/230013133-fb350ed2-1da5-409d-a3e7-ae5c2592dd0b.png)

  
