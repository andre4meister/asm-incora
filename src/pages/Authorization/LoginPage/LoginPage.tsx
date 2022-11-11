/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useAppDispatch } from 'hooks/reduxHooks';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import yupPattern from 'utils/yupPattern';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button/Button';
import { InitialLoginValues } from 'types/FormTypes';
import { NavLink, useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { loginPending } from 'store/user';
import style from '../Authorization.module.scss';

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: yupPattern('email'),
      password: yupPattern('password'),
    }),
    onSubmit: (values: InitialLoginValues) => {
      dispatch(loginPending({ values, navigate }));
    },
  });
  const {
    handleSubmit, handleChange, values, errors, touched,
  } = formik;
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1 className={style.text}>Login</h1>
        <div className={style.form_items}>
          <div className={style.form_item}>
            <Input
              placeholder="Enter your email"
              name="email"
              classes="input"
              type="email"
              handleOnChange={handleChange}
              value={values.email}
            />
            <div className={style.error_container}>
              {touched.email && errors.email ? (
                <div className={style.error}>{errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className={style.form_item}>
            <Input
              placeholder="Enter your password"
              name="password"
              classes="input"
              type="password"
              handleOnChange={handleChange}
              value={values.password}
            />
            <div className={style.error_container}>
              {touched.password && errors.password ? (
                <div className={style.error}>{errors.password}</div>
              ) : null}
            </div>
          </div>
        </div>
        <Button
          type="submit"
          classes={style.button_submit}
          handleOnClick={handleSubmit}
        >
          Submit
        </Button>
        <NavLink className={style.forgot} to="/forgot">
          Forgot your password?
        </NavLink>
      </form>
    </div>
  );
};

export default LoginPage;
