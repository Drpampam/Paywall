import { AuthContainer } from "./auth.styles";
import { Logo } from "app/components/molecules/logo/logo.component";
import Text, { Heading } from "app/components/atoms/typography";
import { Form, Formik } from "formik";
import FormInput from "app/components/atoms/form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "app/components/atoms/button/button.component";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

export const AuthLayout = observer(({
  content,
  validationSchema,
  handleSubmit,
  initialValues,
  error
}) => {
  return (
    <AuthContainer>
      <div className="auth-layout__content">
        <Logo />
        <div className="auth-layout__greeting">
          <Heading>{content.greeting}</Heading>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={ (values, { setSubmitting }) => {
            setSubmitting(true);
            handleSubmit(values);
          }}
        >
          {({values,  isSubmitting }) => (
            <Form>
              {error && <Text color="#ff0000">{error}</Text>}
              {content &&
                content.form.map((el, i) => {
                  const { label, name, placeHolder, type } = el;
                  return (
                    <FormInput
                      label={label}
                      name={name}
                      placeholder={placeHolder}
                      type={type}
                      required
                      key={i}
                    />
                  );
                })}
              {content.mainQuestion && (
                <div style={{ marginBottom: "20px" }}>
                  <Link to={content.mainAnswer} color="blue">
                    {content.mainQuestion}
                  </Link>
                </div>
              )}
              <Button buttonType = {BUTTON_TYPE_CLASSES.curved} isLoading={isSubmitting} type="submit" width="100%" >
                {content.buttonText}
              </Button>
              {content.subQuestion && (
                <div
                  style={{ marginTop: "20px", display: "flex", gap: "10px" }}
                >
                  <Text>{content.subQuestion}</Text>
                  <Link to={content.subAnswer} color="blue">
                    {content.subOption}
                  </Link>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
      <div className="auth-layout__img"></div>
    </AuthContainer>
  );
});
