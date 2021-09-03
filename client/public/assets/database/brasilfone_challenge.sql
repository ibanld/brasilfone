--
-- PostgreSQL database dump
--

-- Dumped from database version 11.12 (Ubuntu 11.12-1.pgdg20.04+1)
-- Dumped by pg_dump version 11.12 (Ubuntu 11.12-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: btree_gin; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;


--
-- Name: EXTENSION btree_gin; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';


--
-- Name: btree_gist; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS btree_gist WITH SCHEMA public;


--
-- Name: EXTENSION btree_gist; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gist IS 'support for indexing common datatypes in GiST';


--
-- Name: citext; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- Name: cube; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;


--
-- Name: EXTENSION cube; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';


--
-- Name: dblink; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;


--
-- Name: EXTENSION dblink; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';


--
-- Name: dict_int; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS dict_int WITH SCHEMA public;


--
-- Name: EXTENSION dict_int; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_int IS 'text search dictionary template for integers';


--
-- Name: dict_xsyn; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS dict_xsyn WITH SCHEMA public;


--
-- Name: EXTENSION dict_xsyn; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_xsyn IS 'text search dictionary template for extended synonym processing';


--
-- Name: earthdistance; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;


--
-- Name: EXTENSION earthdistance; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';


--
-- Name: fuzzystrmatch; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;


--
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';


--
-- Name: hstore; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;


--
-- Name: EXTENSION hstore; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';


--
-- Name: intarray; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS intarray WITH SCHEMA public;


--
-- Name: EXTENSION intarray; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION intarray IS 'functions, operators, and index support for 1-D arrays of integers';


--
-- Name: ltree; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;


--
-- Name: EXTENSION ltree; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION ltree IS 'data type for hierarchical tree-like structures';


--
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;


--
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_stat_statements IS 'track execution statistics of all SQL statements executed';


--
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: pgrowlocks; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pgrowlocks WITH SCHEMA public;


--
-- Name: EXTENSION pgrowlocks; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgrowlocks IS 'show row-level locking information';


--
-- Name: pgstattuple; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS pgstattuple WITH SCHEMA public;


--
-- Name: EXTENSION pgstattuple; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgstattuple IS 'show tuple-level statistics';


--
-- Name: tablefunc; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;


--
-- Name: EXTENSION tablefunc; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';


--
-- Name: unaccent; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;


--
-- Name: EXTENSION unaccent; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: xml2; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS xml2 WITH SCHEMA public;


--
-- Name: EXTENSION xml2; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION xml2 IS 'XPath querying and XSLT';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: Messages; Type: TABLE; Schema: public; Owner: lsbhkqgp
--

CREATE TABLE public."Messages" (
    id uuid NOT NULL,
    title character varying(255) NOT NULL,
    content text NOT NULL,
    "userId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Messages" OWNER TO lsbhkqgp;

--
-- Name: Usuarios; Type: TABLE; Schema: public; Owner: lsbhkqgp
--

CREATE TABLE public."Usuarios" (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    senha character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Usuarios" OWNER TO lsbhkqgp;

--
-- Name: Usuarios_id_seq; Type: SEQUENCE; Schema: public; Owner: lsbhkqgp
--

CREATE SEQUENCE public."Usuarios_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Usuarios_id_seq" OWNER TO lsbhkqgp;

--
-- Name: Usuarios_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lsbhkqgp
--

ALTER SEQUENCE public."Usuarios_id_seq" OWNED BY public."Usuarios".id;


--
-- Name: Usuarios id; Type: DEFAULT; Schema: public; Owner: lsbhkqgp
--

ALTER TABLE ONLY public."Usuarios" ALTER COLUMN id SET DEFAULT nextval('public."Usuarios_id_seq"'::regclass);


--
-- Data for Name: Messages; Type: TABLE DATA; Schema: public; Owner: lsbhkqgp
--

COPY public."Messages" (id, title, content, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Usuarios; Type: TABLE DATA; Schema: public; Owner: lsbhkqgp
--

COPY public."Usuarios" (id, email, senha, "createdAt", "updatedAt") FROM stdin;
4	usuario@challenge.com.br	$2a$10$LksDK3BGD.c0jP6Tuqr7keGxbvBwQwpmBktE89mio5Be.A2b1hSoO	2021-09-02 17:09:44.133+00	2021-09-02 17:09:44.133+00
1	ibanlopezd@gmail.com	$2a$10$BFTtKhppckUcVXvc52iJLugVCqPs6dE6BOkmnUW2ufOd9yU8zr0w.	2021-09-01 19:41:17.038+00	2021-09-02 20:36:43.147+00
5	helloWorld@email.com	$2a$10$SML0yEZSXMRfcOR0TZjr3.wtLKi6UWE4nI4c/1hfJleQ/T4ZzNnyG	2021-09-03 10:14:17.859+00	2021-09-03 10:57:54.412+00
\.


--
-- Name: Usuarios_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lsbhkqgp
--

SELECT pg_catalog.setval('public."Usuarios_id_seq"', 5, true);


--
-- Name: Messages Messages_pkey; Type: CONSTRAINT; Schema: public; Owner: lsbhkqgp
--

ALTER TABLE ONLY public."Messages"
    ADD CONSTRAINT "Messages_pkey" PRIMARY KEY (id);


--
-- Name: Usuarios Usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: lsbhkqgp
--

ALTER TABLE ONLY public."Usuarios"
    ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY (id);


--
-- Name: Messages Messages_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: lsbhkqgp
--

ALTER TABLE ONLY public."Messages"
    ADD CONSTRAINT "Messages_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Usuarios"(id);


--
-- PostgreSQL database dump complete
--

