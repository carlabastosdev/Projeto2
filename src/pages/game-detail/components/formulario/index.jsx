import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Button = styled.button`margin: 5px;`;

const FormularioSchema = Yup.object().shape({
  nome: Yup.string()
    .min(1, "Muito pequeno!")
    .max(50, "Muito grande!")
    .required("Campo obrigatório"),
  comentario: Yup.string()
    .min(5, "Muito pequeno!")
    .max(300, "Muito grande!")
    .required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
});

const Formulario = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{ nome: "", email: "", comentario: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        handleSubmit(values);
        resetForm();
      }}
      validationSchema={FormularioSchema}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <Field
              name="nome"
              placeholder="Nome"
              onChange={handleChange}
              value={values.nome}
            />
            <ErrorMessage name="nome" />
          </div>
          <div>
            <Field
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            <ErrorMessage name="email" />
          </div>
          <div>
            <textarea
              name="comentario"
              placeholder="Comentário"
              rows={10}
              cols={40}
              onChange={handleChange}
              value={values.comentario}
            />
            <ErrorMessage name="comentario" />
          </div>
          <Button type="submit" disabled={isSubmitting}>
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Formulario;
