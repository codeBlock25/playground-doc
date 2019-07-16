import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

 function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader()

    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = async () => {
      const binaryStr = reader.result;
      console.log(binaryStr);
    } 

     acceptedFiles.forEach(file => {
    reader.readAsBinaryString(file);
      console.log(file)
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className="dragzone">
      <input {...getInputProps()} className="dropzone"/>
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}


export default class Day extends React.Component {
    render() {
        return (
            <div className="component">
                <h3>1. required document</h3>
                <div className="box">
                    <span className="active"> id card</span>
                    <span> passport </span>
                    <span>drivers licence</span>
                </div>
                <form>
                    <div className="tit">
                        <input type="checkbox"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="input">
                        <div>
                            <label>id Card Number</label>
                            <input type="text" placeholder="RDA719278920"/>
                        </div>
                        <div>
                            <label>Expiration Date</label>
                            <input type="text" placeholder="MM/YY" />
                        </div>
                    </div>
                    <span className="formHeader">upload Document</span>
                    <p className="formText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, molestiae omnis suscipit culpa laborum beatae eum commodi perspiciatis rem, </p>
                    <MyDropzone/>
                <h3>1. required document</h3>
                    <p className="formText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, molestiae omnis suscipit culpa laborum beatae eum commodi perspiciatis rem, </p>
                    <MyDropzone/>
                <button>submit</button>
                </form>
            </div>
        )
    }
}