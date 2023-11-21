'use client'
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import CategoryService from '@/services/categoryService';
import MemberService from '@/services/memberService';

export const AddMedicine = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.

  const [categories, setCategories] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      await CategoryService.getAllCategories()
        .then((res) => {
          setCategories(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const getMembers = async () => {
      await MemberService.getAllMembers()
        .then((res) => {
          setMembers(res.data.data);
        })
        .catch((err) => console.log(err));
    };

    getCategories();
    getMembers();
  }, []);

  console.log(members);



  const formik = useFormik({
    initialValues: {
      medicineName: "",
      expirationTime: "",
      description: "",
      usage: "",
      category:"",
      members:""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className=" flex flex-col justify-center w-[500px] gap-3 m-auto p-5">
        <TextField
          id="medicineName"
          label="İlaç Adı"
          variant="outlined"
          value={formik.values.medicineName}
          onChange={formik.handleChange}
        />
        <TextField
          id="expirationTime"
          label="Son Kullanma Tarihi"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.expirationTime}
        />
        <TextField
          id="usage"
          label="Kullanım Koşulu"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.usage}
        />
        <TextField
          id="description"
          label="Açıklama"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">İlaç Kategorisi</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            name="category"
            onChange={formik.handleChange}
            value={formik.values.category}
            label="İlaç Kategorisi"
          >
            {categories &&
              categories.length > 0 &&
              categories.map((item, index) => (
                // eslint-disable-next-line react/jsx-key

                // eslint-disable-next-line react/jsx-key
                <MenuItem key={item.id} value={item.id}>
                  {item.categoryName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormGroup>
          {members &&
            members.length > 0 &&
            members.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <FormControlLabel
              id='members'
              value={formik.values.members}
                control={<Checkbox defaultChecked />}
                label={`${item.name} ${item.surname}`}
              />
            ))}
        </FormGroup>
        <Button className=" w-24" variant="contained" type="submit">
          Ekle
        </Button>
      </div>
    </form>
  );
};
