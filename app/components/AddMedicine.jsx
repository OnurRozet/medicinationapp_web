import React from 'react';
import { useFormik } from 'formik';

export const AddMedicine = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      medicineName: '',
      expirationTime: '',
      description: '',
      usage:'',
       
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">İlaç Adı</label>
      <input
        id="medicineName"
        name="medicineName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.medicineName}
      />

      <label htmlFor="lastName">Son Kullanma Tarihi</label>
      <input
        id="expirationTime"
        name="expirationTime"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.expirationTime}
      />

      <label htmlFor="email">Açıklama</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="email">Kullanım Koşulu</label>
      <input
        id="usage"
        name="usage"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.usage}
      />

      <label htmlFor="email">Kategori</label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};
