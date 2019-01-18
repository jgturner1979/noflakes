import React from 'react'
const axios = require("axios");

class ReactUploadImage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            file: null
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/api/upload",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }

    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
                <label>Upload an Image of Yourself</label>
                <div>
                    <input type="file" className="form-control-file" name="myImage" onChange= {this.onChange} />
                    <button className="btn btn-sm" type="submit">Upload</button>
                </div>
            </form>
            </div>
        )
    }
}

export default ReactUploadImage;