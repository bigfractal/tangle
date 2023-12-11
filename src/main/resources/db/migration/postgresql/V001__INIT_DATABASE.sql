create table bf_entry
(
    id BIGSERIAL not null primary key,
    key VARCHAR(36) unique,
    title VARCHAR(255),
    author VARCHAR(255),
    body TEXT
);