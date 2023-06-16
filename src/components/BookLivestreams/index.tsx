import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import FormPageHeader from '../FormPageHeader';
import LandingPageFooter from '../LandingPageFooter';

import styles from './booklivestream.module.scss';

interface FormInputs {
  name: string;
  email: string;
  number: number;
  team: string;
  league: string;
  message: string;
}

const BookLiveStreamForm: React.FC = () => {
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
        key: 'oaYkkboOC9vezlGDbpvSu7nU658o0Q',
        subject: `${data.name} has submitted BOOK LIVESTREAM`,
        text: `<p>Creator Email: ${data.email} </p><br/><p>Creator number: ${data.number} </p><br/><p>League: ${data.league} </p><br/>${data.message}`,
        to: ['info@gameinframe.com', 'josh.pratt@gameinframe.com'],
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
        <title>GAME IN FRAME - BOOK LIVESTREAM</title>
      </Helmet>
      <div className={styles.bookLiveStream}>
        <div className={styles.formContainer}>
          <div className={styles.formHeading}>Book Livestream</div>
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
              {errors.number && <span className={styles.error}>This field is required</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="team">TEAM NUMBER</label>
              <input type="text" placeholder="YOUR TEAM NAME" id="team" {...register('team', { required: true })} />
              {errors.team && <span className={styles.error}>This field is required</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="league">LEAGUE</label>
              <input type="text" placeholder="LEAGUE NAME" id="league" {...register('league', { required: true })} />
              {errors.name && <span className={styles.error}>This field is required</span>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">MESSAGE</label>
              <textarea className={styles.message} id="message" rows={4} {...register('message', { required: true })} />
              {errors.message && <span className={styles.error}>This field is required</span>}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <LandingPageFooter />
    </div>
  );
};

export default BookLiveStreamForm;
