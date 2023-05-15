import React from 'react';

export default function StudentInfo(props) {
    const { index, student } = props;
    const { id, name, age, gender } = student;

    return (
        <tr>
            <td>{index}</td>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{gender}</td>
            <td>
                <div className="template-demo">
                    <button type="button" className="btn btn-danger btn-icon-text">
                        Xem
                    </button>
                    <button type="button" className="btn btn-warning btn-icon-text">
                        Sửa
                    </button>
                    <button type="button" className="btn btn-success btn-icon-text">
                        Xóa
                    </button>
                </div>
            </td>
        </tr>
    );
}
