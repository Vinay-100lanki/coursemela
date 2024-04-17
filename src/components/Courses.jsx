import React, { useState } from 'react'
import { Course } from './Course'

export const Courses = (props) => {
    const courses = props.courses;
    let category = props.category;
    const [likedCourses , setLikedCourses] = useState([])

    // function getCourses(){
    //     let coursesList = [];
    //     Object.values(courses).forEach(array => {
    //         array.forEach(courseData =>{
    //             coursesList.push(courseData);
    //         });
    //     });
    //     return coursesList;
    // }

    function getCourses() {
        if (category === 'All')
       {
         let coursesList = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                coursesList.push(courseData);
            });
        });
        return coursesList;}
        else{
            return courses[category];
        }
    }
    

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course)=>(
                <Course key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            ))
        }
    </div>
  )
}
