import React, { useState } from 'react';

export default function Form(props) {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        age: '',
        gender: 'Nam',
        dateOfBirth: '',
        placeOfBirth: '',
        address: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(formData);
    };

    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample" onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="id"
                                    value={formData.id}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select
                                    className="form-control"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input
                                    className="form-control"
                                    placeholder="dd/mm/yyyy"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select
                                    className="form-control"
                                    name="placeOfBirth"
                                    value={formData.placeOfBirth}
                                    onChange={handleChange}
                                >
                                    <option>Hà Nội</option>
                                    <option>TP. Hồ Chí Minh</option>
                                    <option>Đà Nẵng</option>
                                    <option>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea
                                    className="form-control"
                                    defaultValue={''}
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary me-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

