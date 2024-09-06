import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import "./Book.css";

const Book = ({ availableTimes, dispatch, ...props }) => {
    const navigate = useNavigate();

    const today = new Date()
    const todayString = today.toISOString().split('T')[0];

    //Needed for validation
    today.setHours(0, 0, 0, 0);

    const validationSchema = Yup.object().shape({
        date: Yup.date()
            .min(today, 'Date must be today or a future date.')
            .required('Required'),
        time: Yup.string()
            .required('Required'),
    });

    const initialValues = {
        date: todayString,
        time: '',
        guests: '',
        occasion: '',
    };

    const handleSubmit = (values) => {
        if (props.submitForm(values)) {
            navigate("/success");
        }
    };

    const handleDateChange = (setFieldValue, val) => {
        dispatch(new Date(val));
        setFieldValue('date', val);
    };

    return (
        <>
            <h2>Book Now</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, setFieldValue, values }) => (
                    <Form>

                        <label htmlFor="res-date">Choose date</label>
                        <Field
                            type="date"
                            id="res-date"
                            name="date"
                            required
                            onChange={(e) => handleDateChange(setFieldValue, e.target.value)}
                        />
                        <ErrorMessage name="date" component="div" className="error" />

                        <label htmlFor="res-time">Choose time</label>
                        <Field as="select" id="res-time" name="time" disabled={!values.date} required>
                            {availableTimes.map(t => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="time" component="div" className="error" />

                        <label htmlFor="guests">Number of guests</label>
                        <Field type="number" placeholder="1" min="1" max="10" id="guests" name="guests" />

                        <label htmlFor="occasion">Occasion</label>
                        <Field as="select" id="occasion" name="occasion">
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </Field>

                        <button type="submit" disabled={isSubmitting}>
                            Make Your reservation
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Book;
