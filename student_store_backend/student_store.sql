\echo 'Delete and recreate Student Store database?'
\prompt 'Press ENTER for yes, or CTRL-C to cancel: > ' answer

DROP DATABASE student_store;
CREATE DATABASE student_store;

\connect student_store
\i student_store_schema.sql
\i student_store_seed.sql


-- \echo 'Delete and recreate Student Store database?'
-- \prompt 'Press ENTER for yes, or CTRL-C to cancel: > ' answer

-- DROP DATABASE student_store_test;
-- CREATE DATABASE student_store_test;

-- \connect student_store_test
-- \i student_store_schema.sql