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
    ('菜单管理', '/json-schema-page/menus');

-- 页面表
CREATE TABLE IF NOT EXISTS pages (
    id SERIAL NOT NULL,
    key VARCHAR(50) NOT NULL,
    schema jsonb NOT NULL
);

INSERT INTO pages
    (key, path) VALUES
    ('menus', '{"table":"menus","rowKey":"id","columns":[{"title":"名称","dataIndex":"name"},{"title":"路径","dataIndex":"path"}]}');

INSERT INTO pages
    (key, schema) VALUES
    ('pages', '{"table":"pages","rowKey":"id","columns":[{"title":"页面标识","dataIndex":"key"},{"title":"页面结构","dataIndex":"schema","valueType":"jsonCode"}]}');
