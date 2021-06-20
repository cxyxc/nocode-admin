-- 测试表
-- CREATE TABLE IF NOT EXISTS datas (
--     id SERIAL NOT NULL,
--     name VACHA(20) NOT NULL,
--     description CHAR(255),
--     total INTEGER NOT NULL,
--     status INTEGER NOT NULL,
--     updated_at TIMESTAMP
-- );

-- INSERT INTO datas
--     (name, description, total, status, updated_at) VALUES
--     ('海绵工作台', '灵活用工招聘管家端', 3, 1, NULL);

-- 菜单表
CREATE TABLE IF NOT EXISTS menus (
    id SERIAL NOT NULL,
    name VARCHAR(20) NOT NULL,
    path VARCHAR(50) NOT NULL,
);

INSERT INTO menus
    (name, path) VALUES
    ('菜单', '/json-schema-page/menus');