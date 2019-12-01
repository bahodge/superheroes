import React from "react";
import { Form, Field, Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const HeroSearchForm = props => {
  const sanitizeVariables = variables => {
    let newValues = {};

    Object.keys(variables).map(key => (newValues[key] = variables[key].trim()));

    return newValues;
  };

  const handleHeroSearch = async variables => {
    const sanitizedVariables = sanitizeVariables(variables);
    const url = process.env.REACT_APP_API_ENDPOINT;
    const token = process.env.REACT_APP_API_TOKEN;
    const fixedUrl = `${url}/${token}/search`;
    const searchableName = sanitizedVariables.heroName;
    const finalUrl = `${fixedUrl}/${searchableName}`;

    await axios
      .get(
        "https://www.superheroapi.com/api.php/10162611345600383/search/batman",
        {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <Formik initialValues={{ heroName: "" }} onSubmit={handleHeroSearch}>
      <Form>
        <Field name="heroName">
          {({ field, form }) => (
            <TextField
              {...field}
              placeholder="Hero Name"
              onChange={event =>
                form.setFieldValue(field.name, event.target.value)
              }
            />
          )}
        </Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default HeroSearchForm;
