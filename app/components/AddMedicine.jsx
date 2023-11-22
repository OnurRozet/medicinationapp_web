'use client'
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import CategoryService from '@/services/categoryService';
import MemberService from '@/services/memberService';
import MedicineService from '@/services/medicineService';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const AddMedicine = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.

  const [categories, setCategories] = useState([]);
  const [members, setMembers] = useState([]);
  const [medicines,setMedicines]=useState([])

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

  const handleSubmit=async(values)=>{
    await MedicineService.addMedicine(values.medicineName,values.description,values.expirationTime,values.usage,values.members,values.category,values.categoryId)
    .then((res)=>{
      
      setMedicines([...medicines,res.data])
    })
  }

  const handleCategoryChange = (event) => {
    const selectedCategory = categories.find(category => category.categoryName === event.target.value);
  
    formik.setFieldValue('category', event.target.value);
    formik.setFieldValue('categoryId', selectedCategory ? selectedCategory.id : '');
  };



  const formik = useFormik({
    initialValues: {
      medicineName: "",
      expirationTime:"",
      description: "",
      usage: "",
      categoryName:"",
      categoryId:"",
      members:[]
    },
    onSubmit:(values)=> handleSubmit(values)
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
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker value={formik.values.expirationTime} onChange={formik.handleChange} label="Son Kullanma Tarihi" />
        </LocalizationProvider> */}
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
            id="categoryName"
            name="category"
            onChange={handleCategoryChange}
            value={formik.values.categoryName}
            label="İlaç Kategorisi"
          >
            {categories &&
              categories.length > 0 &&
              categories.map((item) => (
                // eslint-disable-next-line react/jsx-key

                // eslint-disable-next-line react/jsx-key
                <MenuItem key={item.id} value={item.categoryName}>
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
                key={item.id}
                id="members"
                value={formik.values.members}
                control={
                  <Checkbox
                    id={`member-${item.id}`}
                    name="members"
                    checked={formik.values.members.includes(item.id)}
                    onChange={() => {
                      const selectedMembers = formik.values.members.includes(
                        item.id
                      )
                        ? formik.values.members.filter(
                            (memberId) => memberId !== item.id
                          )
                        : [...formik.values.members, item.id];
                      formik.setFieldValue("members", selectedMembers);
                    }}
                  />
                }
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
