CREATE TABLE IF NOT EXISTS datas (
    id SERIAL NOT NULL,
    name CHAR(20) NOT NULL,
    description CHAR(255),
    total INTEGER NOT NULL,
    status INTEGER NOT NULL,
    updated_at TIMESTAMP
);

INSERT INTO datas 
    (name, description, total, status, updated_at) VALUES 
    ('崔灿', '前端', 3, 1, NULL);