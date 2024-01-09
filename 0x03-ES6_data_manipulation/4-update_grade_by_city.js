// 4-update_grade_by_city.js

function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: gradeObject ? gradeObject.grade : 'N/A',
      };
    });
}

export default updateStudentGradeByCity;
