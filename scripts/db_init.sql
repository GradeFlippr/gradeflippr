--
-- PostgreSQL database dump
--

-- Dumped from database version 12.10 (Ubuntu 12.10-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 14.2

-- Started on 2022-08-24 23:03:20

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

DROP DATABASE "grade-flippr";
--
-- TOC entry 2977 (class 1262 OID 65587)
-- Name: grade-flippr; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE "grade-flippr" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C.UTF-8';


\connect -reuse-previous=on "dbname='grade-flippr'"

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
-- TOC entry 8 (class 2615 OID 65621)
-- Name: gradeFlippr; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA "gradeFlippr";


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 204 (class 1259 OID 65624)
-- Name: roles; Type: TABLE; Schema: gradeFlippr; Owner: -
--

CREATE TABLE "gradeFlippr".roles (
    id integer NOT NULL,
    role character varying(50) NOT NULL
);


--
-- TOC entry 203 (class 1259 OID 65622)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: gradeFlippr; Owner: -
--

ALTER TABLE "gradeFlippr".roles ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "gradeFlippr".roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 206 (class 1259 OID 65631)
-- Name: schools; Type: TABLE; Schema: gradeFlippr; Owner: -
--

CREATE TABLE "gradeFlippr".schools (
    school_id integer NOT NULL,
    school_name character varying(255) NOT NULL
);


--
-- TOC entry 205 (class 1259 OID 65629)
-- Name: schools_school_id_seq; Type: SEQUENCE; Schema: gradeFlippr; Owner: -
--

ALTER TABLE "gradeFlippr".schools ALTER COLUMN school_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "gradeFlippr".schools_school_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 210 (class 1259 OID 65665)
-- Name: sessions; Type: TABLE; Schema: gradeFlippr; Owner: -
--

CREATE TABLE "gradeFlippr".sessions (
    session_id integer,
    "timestamp" timestamp without time zone NOT NULL,
    subject_id integer,
    tutor_name character varying(255),
    student_name character varying(255)
);


--
-- TOC entry 208 (class 1259 OID 65638)
-- Name: subjects; Type: TABLE; Schema: gradeFlippr; Owner: -
--

CREATE TABLE "gradeFlippr".subjects (
    subject_id integer NOT NULL,
    subject_name character varying NOT NULL
);


--
-- TOC entry 207 (class 1259 OID 65636)
-- Name: subjects_subject_id_seq; Type: SEQUENCE; Schema: gradeFlippr; Owner: -
--

ALTER TABLE "gradeFlippr".subjects ALTER COLUMN subject_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "gradeFlippr".subjects_subject_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 209 (class 1259 OID 65646)
-- Name: users; Type: TABLE; Schema: gradeFlippr; Owner: -
--

CREATE TABLE "gradeFlippr".users (
    username character varying(50) NOT NULL,
    first_name character varying(255) NOT NULL,
    last_name character varying(255) NOT NULL,
    email character varying(100) NOT NULL,
    school_id integer NOT NULL,
    password character varying(255) NOT NULL
);


--
-- TOC entry 2965 (class 0 OID 65624)
-- Dependencies: 204
-- Data for Name: roles; Type: TABLE DATA; Schema: gradeFlippr; Owner: -
--

COPY "gradeFlippr".roles (id, role) FROM stdin;
1	STUDENT
2	TUTOR
\.


--
-- TOC entry 2967 (class 0 OID 65631)
-- Dependencies: 206
-- Data for Name: schools; Type: TABLE DATA; Schema: gradeFlippr; Owner: -
--

COPY "gradeFlippr".schools (school_id, school_name) FROM stdin;
1	Solon Public High School
2	St. Ignatius
3	Walsh Jesuit
4	Twinsburg Public High School
5	Aurora Public Schools
6	Shaker Heights
7	St. Rita
8	Gilmore Academy
\.


--
-- TOC entry 2971 (class 0 OID 65665)
-- Dependencies: 210
-- Data for Name: sessions; Type: TABLE DATA; Schema: gradeFlippr; Owner: -
--

COPY "gradeFlippr".sessions (session_id, "timestamp", subject_id, tutor_name, student_name) FROM stdin;
\.


--
-- TOC entry 2969 (class 0 OID 65638)
-- Dependencies: 208
-- Data for Name: subjects; Type: TABLE DATA; Schema: gradeFlippr; Owner: -
--

COPY "gradeFlippr".subjects (subject_id, subject_name) FROM stdin;
1	Algebra
2	Chemistry
3	Geometry
4	Calculus
5	Physics
6	English
7	Spanish
8	French
\.


--
-- TOC entry 2970 (class 0 OID 65646)
-- Dependencies: 209
-- Data for Name: users; Type: TABLE DATA; Schema: gradeFlippr; Owner: -
--

COPY "gradeFlippr".users (username, first_name, last_name, email, school_id, password) FROM stdin;
\.


--
-- TOC entry 2978 (class 0 OID 0)
-- Dependencies: 203
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: gradeFlippr; Owner: -
--

SELECT pg_catalog.setval('"gradeFlippr".roles_id_seq', 2, true);


--
-- TOC entry 2979 (class 0 OID 0)
-- Dependencies: 205
-- Name: schools_school_id_seq; Type: SEQUENCE SET; Schema: gradeFlippr; Owner: -
--

SELECT pg_catalog.setval('"gradeFlippr".schools_school_id_seq', 8, true);


--
-- TOC entry 2980 (class 0 OID 0)
-- Dependencies: 207
-- Name: subjects_subject_id_seq; Type: SEQUENCE SET; Schema: gradeFlippr; Owner: -
--

SELECT pg_catalog.setval('"gradeFlippr".subjects_subject_id_seq', 8, true);


--
-- TOC entry 2821 (class 2606 OID 65628)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: gradeFlippr; Owner: -
--

ALTER TABLE ONLY "gradeFlippr".roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 2823 (class 2606 OID 65662)
-- Name: roles roles_unique_role; Type: CONSTRAINT; Schema: gradeFlippr; Owner: -
--

ALTER TABLE ONLY "gradeFlippr".roles
    ADD CONSTRAINT roles_unique_role UNIQUE (role);


--
-- TOC entry 2825 (class 2606 OID 65635)
-- Name: schools schools_pkey; Type: CONSTRAINT; Schema: gradeFlippr; Owner: -
--

ALTER TABLE ONLY "gradeFlippr".schools
    ADD CONSTRAINT schools_pkey PRIMARY KEY (school_id);


--
-- TOC entry 2827 (class 2606 OID 65664)
-- Name: schools schools_unique_schoole_name; Type: CONSTRAINT; Schema: gradeFlippr; Owner: -
--

ALTER TABLE ONLY "gradeFlippr".schools
    ADD CONSTRAINT schools_unique_schoole_name UNIQUE (school_name);


--
-- TOC entry 2829 (class 2606 OID 65645)
-- Name: subjects subjects_pkey; Type: CONSTRAINT; Schema: gradeFlippr; Owner: -
--

ALTER TABLE ONLY "gradeFlippr".subjects
    ADD CONSTRAINT subjects_pkey PRIMARY KEY (subject_id);


--
-- TOC entry 2831 (class 2606 OID 65653)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: gradeFlippr; Owner: -
--

ALTER TABLE ONLY "gradeFlippr".users
    ADD CONSTRAINT users_pkey PRIMARY KEY (username);


--
-- TOC entry 2833 (class 2606 OID 65655)
-- Name: users users_unque_email; Type: CONSTRAINT; Schema: gradeFlippr; Owner: -
--

ALTER TABLE ONLY "gradeFlippr".users
    ADD CONSTRAINT users_unque_email UNIQUE (email);


--
-- TOC entry 2835 (class 2606 OID 65671)
-- Name: sessions sessions_fk0_subject_id; Type: FK CONSTRAINT; Schema: gradeFlippr; Owner: -
--

ALTER TABLE ONLY "gradeFlippr".sessions
    ADD CONSTRAINT sessions_fk0_subject_id FOREIGN KEY (subject_id) REFERENCES "gradeFlippr".subjects(subject_id);


--
-- TOC entry 2836 (class 2606 OID 65676)
-- Name: sessions sessions_fk1_tutor_name; Type: FK CONSTRAINT; Schema: gradeFlippr; Owner: -
--

ALTER TABLE ONLY "gradeFlippr".sessions
    ADD CONSTRAINT sessions_fk1_tutor_name FOREIGN KEY (tutor_name) REFERENCES "gradeFlippr".users(username);


--
-- TOC entry 2837 (class 2606 OID 65681)
-- Name: sessions sessions_fk2_student_name; Type: FK CONSTRAINT; Schema: gradeFlippr; Owner: -
--

ALTER TABLE ONLY "gradeFlippr".sessions
    ADD CONSTRAINT sessions_fk2_student_name FOREIGN KEY (student_name) REFERENCES "gradeFlippr".users(username);


--
-- TOC entry 2834 (class 2606 OID 65656)
-- Name: users users_fk0; Type: FK CONSTRAINT; Schema: gradeFlippr; Owner: -
--

ALTER TABLE ONLY "gradeFlippr".users
    ADD CONSTRAINT users_fk0 FOREIGN KEY (school_id) REFERENCES "gradeFlippr".schools(school_id);


-- Completed on 2022-08-24 23:03:20

--
-- PostgreSQL database dump complete
--

