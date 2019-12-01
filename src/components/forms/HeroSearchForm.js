import React from "react";
import { Form, Field, Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const HeroSearchForm = props => {
  const { onSubmit } = props;

  const handleHeroSearch = async variables => {
    const url = process.env.REACT_APP_API_ENDPOINT;
    const token = process.env.REACT_APP_API_TOKEN;
    console.log(variables);

    console.log(url);
    console.log(token);
  };

  return (
    <Formik initialValues={{ heroName: "" }} onSubmit={handleHeroSearch}>
      <Form>
        <Field name="heroName">
          {field => <TextField {...field} placeholder="Hero Name" />}
        </Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default HeroSearchForm;
