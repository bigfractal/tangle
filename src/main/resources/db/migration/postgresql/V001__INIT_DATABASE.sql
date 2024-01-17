create table bf_entry
(
    id BIGSERIAL not null primary key,
    key VARCHAR(36) unique,
    title VARCHAR(255),
    author VARCHAR(255),
    chapter_body TEXT,
    video_body TEXT,
    steps_body TEXT,
    post_stamp VARCHAR(255),
    thumb VARCHAR(255),
    youtube VARCHAR(255)
);