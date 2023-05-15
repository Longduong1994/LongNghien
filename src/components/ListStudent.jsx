import React from 'react';
import StudentInfo from './StudentInfo';

export default function ListStudent(props) {
    const { listStudent } = props;

    return (
        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listStudent.map((student, index) => (
                            <StudentInfo key={student.id} index={index + 1} student={student} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
