import React , {useState,useContext,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {StudentContext} from './StudentContext';
import {useNavigate,useParams} from 'react-router-dom';



export default function Edit() {
    const Navigate =useNavigate()
    const {studentId}=useParams()
    const [rows,setrows] = useContext(StudentContext);
    const[addstudent,setaddstudent]=useState({name:"",age:"",course:"",batch:""})

    const inputHandle=(e)=>{
        let name=e.target.name

        let value=e.target.value

        setaddstudent({ ...addstudent , [name]: value})
        console.log(addstudent);
    }

    useEffect(() => {
      console.log(studentId);
      rows.map((prevState) => {
        if (prevState.id === studentId) {
        console.log(prevState.id);

          setaddstudent({
            name: prevState.name,
            age: prevState.age,
            batch: prevState.batch,
            course: prevState.course,
          });
        }
      });
    }, []);

    const HandleSubmit=()=>{
      setrows((prevState)=>
            prevState.map((student)=>
            (student.id===studentId)?
            {
              id:studentId,
              name: addstudent.name,
              age: addstudent.age,
              course: addstudent.course,
              batch: addstudent.batch,
              change: "Edit",
            }:student
            )  
  )

        Navigate('/student')
  }

 


    


  return (
      <div>
    <Box
      component="form"
      sx={{'& > :not(style)': { m: 4, width: '60ch' },}} 
      noValidate
      autoComplete="off"
    >
      <TextField id="name" name='name' label="Name" variant="outlined" value={addstudent.name} onChange={inputHandle}/>
      <TextField id="age" name='age' label="Age" variant="outlined" value={addstudent.age} onChange={inputHandle}/>
      <TextField id="course" name='course' label="Course" variant="outlined" value={addstudent.course} onChange={inputHandle}/>
      <TextField id="batch" name='batch' label="Batch" variant="outlined" value={addstudent.batch} onChange={inputHandle}/>
    </Box>

   <button onClick={HandleSubmit} className="update-student-btn add-form-btn" >Update</button> 

    </div>

  );
}
