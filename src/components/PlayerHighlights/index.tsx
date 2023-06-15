/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import FormPageHeader from '../FormPageHeader';
import LandingPageFooter from '../LandingPageFooter';

import styles from './playerhighlights.module.scss';

interface FormInputs {
  name: string;
  email: string;
  number: number;
  message: string;
}

const playerhighlightsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const navigate = useNavigate();

  const sendEmailMutation = useMutation((data: FormInputs) =>
    fetch('https://micro-content.tulip-tech.com/api/send-email', {
      method: 'POST',
      body: JSON.stringify({
        key: '',
        subject: `Creator ${data.name} has submitted resume/plot`,
        text: `<p>Creator Email: ${data.email} </p><br/><p>Creator Number: ${data.number} </p><br/>${data.message}`,
        to: ['gameinframe123.gmail.com'],
      }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).then((res) => {
      res.json();

      navigate('/thankYou', { replace: true });
    }),
  );

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    sendEmailMutation.mutate(data);
  };

  return (
    <div>
      <div>
        <FormPageHeader />
      </div>
      <Helmet>
        <title>GAME IN FRAME - BOOK PLAYER HIGHLIGHTS</title>
      </Helmet>
      <div className={styles.PlayerHighlightStream}>
        <div className={styles.formContainer}>
          <div className={styles.formHeading}>Book Player Highlights</div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
              <label htmlFor="name">NAME</label>
              <input type="text" placeholder="NAME" id="name" {...register('name', { required: true })} />
              {errors.name && <span className={styles.error}>This field is required</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">EMAIL</label>
              <input type="email" placeholder="YOUR EMAIL" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
              {errors.email && <span className={styles.error}>Please enter a valid email address</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="number">PHONE NUMBER</label>
              <input type="text" placeholder="YOUR PHONE NUMBER" id="number" {...register('number', { required: true })} />
              {errors.name && <span className={styles.error}>This field is required</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">MESSAGE</label>
              <textarea className={styles.message} id="message" rows={4} {...register('message', { required: true })} />
              {errors.message && <span className={styles.error}>This field is required</span>}
            </div>

            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
      <LandingPageFooter />
    </div>
  );
};

export default playerhighlightsForm;
