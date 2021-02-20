import {useState, useEffect} from 'react'
import {projectStorage, projectFirestore,timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [progress,setProgress] = useState(null);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);

    //every time we upload a new file or make changes
    //we need to make sure that the code for handling that runs every time 
    //for that we use useEffect hook whic takes two parameters a function and the dependency array
    useEffect(() => {
        //logic to upload the file goes here
        //references to store the file name in the firebase storage bucket
        const storageRef = projectStorage.ref(file.name);
        //to reference a specific collection in a firestore
        const collectionRef = projectFirestore.collection('images');
        //put this file in to the storage bucket now
        storageRef.put(file).on('state_changed', (snap) => {
            //second argument takes a function whick takes a snopshot object as am arg.
            //snap object gives us the snap of time of upload 
            //this may fire many times during the uploading 
            let percentage  = (snap.bytesTransferred/snap.totalBytes) * 100;
            setProgress(percentage);
        },(err) => {
            setError(err);
        }, async () => {
            const url  = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
            setUrl(url);
        })
    },[file])
    return {progress, error, url}
}

export default useStorage;