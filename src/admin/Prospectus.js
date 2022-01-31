import React, { useState } from 'react'

import { firebase } from "../firebase"

const Prospectus = () => {
    const [draftFile, setdraftFile] = useState()
    const handleUpload = () => {
        const storageRef = firebase.storage().ref(draftFile.name)
        storageRef.put(draftFile).on("state_changed", (snap) => {

        }, (error) => { console.log(error) }, async () => {
            const url = await storageRef.getDownloadURL();

            firebase.database().ref("StarAdhesive").child("Prospectus").set({

                DownloadUrl: url
            }).then(() => { console.log("Success") }).catch((error) => { console.log(error) })

        })

    }
    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
                <form className="formContainer" onSubmit={(e) => { e.preventDefault(); handleUpload() }}>


                    <label>Upload Prospectus</label>
                    <input type="file" value={undefined} onChange={(e) => setdraftFile(e.target.files[0])} />


                    <button className="btn btn-primary">Upload</button>

                </form>
            </div>
        </div>
    )
}

export default Prospectus
