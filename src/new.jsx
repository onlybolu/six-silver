
import React from 'react';

const StudentTable = ({ students }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.course}</td>
                        <td>{student.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentTable;

