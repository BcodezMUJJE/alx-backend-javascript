// 1-get_list_student_ids.js

function getListStudentIds(students) {
    if (!Array.isArray(students)) {
        return [];
    }

    return students.map(student => student.id);
}

export default getListStudentIds;
