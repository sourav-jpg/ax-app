// import React, { useState } from 'react';
// import "./global.css"
// import axiosInstance from '../helper/axiosInstance';
// import { useEffect } from 'react';

// const CreateCourse = () => {
//   const[course,setCourse] = useState();
//   const[trainer,setTrainer] = useState()

//   const handleSubmit = async(e) =>{
//     // e.preventDefault();
//     let payload = {course,trainer}
//     let data = await axiosInstance.post("/comments",payload) 
//     console.log(data);
//   }

//   useEffect(()=>{
//     handleSubmit()
//   })

//   return (
//     <div className='main'>
//       <form>
//         <fieldset>
//           <legend><h3>Create Course</h3></legend>
//           <div className='container'>
//             <label htmlFor="name">Course Name :</label>
//             <input type="text" onChange={(e)=>setCourse(e.target.value)} /><br/><br/>
//             <label htmlFor="name">Trainer Name :</label>
//             <input type="text" onChange={(e)=>setTrainer(e.target.value)}/><br/><br/>
//             <button onClick={handleSubmit}>Submit</button>
//           </div>
//         </fieldset>
//       </form>
//     </div>
//   )
// }

// export default CreateCourse