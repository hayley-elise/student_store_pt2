\echo 'Delete and recreate auth_starter database?'
\prompt 'Press ENTER for yes, or CTRL-C to cancel: > ' answer

DROP DATABASE auth_starter;
CREATE DATABASE auth_starter;

\connect auth_starter
\i auth_starter_schema.sql


-- \echo 'Delete and recreate auth_starter database?'
-- \prompt 'Press ENTER for yes, or CTRL-C to cancel: > ' answer

-- DROP DATABASE auth_starter_test;
-- CREATE DATABASE auth_starter_test;

-- \connect auth_starter_test
-- \i auth-starter-schema.sql