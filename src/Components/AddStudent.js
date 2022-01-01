import React , {useState,useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {StudentContext} from './StudentContext';
import {useNavigate} from 'react-router-dom';



export default function AddStudent() {
    const Navigate =useNavigate()

    const[addstudent,setaddstudent]=useState({name:"",age:"",course:"",batch:""})

    const [rows,setrows] = useContext(StudentContext);

    const inputHandle=(e)=>{
        let name=e.target.name

        let value=e.target.value

        setaddstudent({ ...addstudent , [name]: value})
        console.log(addstudent);
    }

    let inputid = ((rows.length)+1) 

    const handleSubmit=(e)=>{

      if(!((addstudent.name)&&(addstudent.age)&&(addstudent.course)&&(addstudent.batch))){
        alert("All fields are mandatory")
        return
     }

        let storeinput={...addstudent, id:inputid.toString() }

        setrows([...rows,storeinput])
        console.log(rows);


        Navigate('/student')

        
    }


    


  return (
      <div >
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 4, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField required id="name" name='name' label="Name" variant="outlined" value={addstudent.name} onChange={inputHandle}/>
      <TextField required id="age" name='age' label="Age" variant="outlined" value={addstudent.age} onChange={inputHandle}/>
      <TextField required id="course" name='course' label="Course" variant="outlined" value={addstudent.course} onChange={inputHandle}/>
      <TextField required id="batch" name='batch' label="Batch" variant="outlined" value={addstudent.batch} onChange={inputHandle}/>
    </Box>

     <button onClick={handleSubmit} className="add-student-btn add-form-btn" >Add Student</button> 

    </div>

  );
}
