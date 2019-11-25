var db = firebase.firestore();
var url = "";
var url1 = "";
var url2 = "";

function storeData(){
    // store image in firestore - Create a root reference
    var storageRef = firebase.storage().ref();

    //get date for pushing file
    var date = new Date().toLocaleString();
    var dateInts = Date.parse(date);

    var file0 = document.getElementById("photo0").files[0] // use the Blob or File API
    var file1 = document.getElementById("photo1").files[0] // use the Blob or File API
    var file2 = document.getElementById("photo2").files[0] // use the Blob or File API

    // Create file metadata including the content type
    var metadata = {
        contentType: 'image/jpeg',
    };
    // var downloadURL = "";
    // Upload the file and metadata
    var uploadTask = storageRef.child('images/' + dateInts + file0.name).put(file0, metadata);
    var uploadTaskRef = storageRef.child('images/' + dateInts + file0.name);
    var uploadTask1 = storageRef.child('images/' + dateInts + file1.name).put(file1, metadata);
    var uploadTaskRef1 = storageRef.child('images/' + dateInts + file1.name);
    var uploadTask2 = storageRef.child('images/' + dateInts + file2.name).put(file2, metadata);
    var uploadTaskRef2 = storageRef.child('images/' + dateInts + file2.name);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function(error) {
            console.log(error)
        },
        function() {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);
                self.url = downloadURL;
                console.log(self.url)

                uploadTask1.snapshot.ref.getDownloadURL().then(function(downloadURL1) {
                    console.log('File available at', downloadURL1);
                    self.url1 = downloadURL1;
                    console.log(self.url1)

                    uploadTask2.snapshot.ref.getDownloadURL().then(function(downloadURL2) {
                        console.log('File available at', downloadURL2);
                        self.url2 = downloadURL2;
                        console.log(self.url2)

                        //add activity to firabase, need to eventually add with user email that submits the activity
                            db.collection("testactivity").add({
                    // db.collection("activity").doc("22").set({

                    Address: document.getElementById("address").value,
                    Category: document.getElementById("category").value,
                    City: document.getElementById("city").value,
                    Country: document.getElementById("country").value,
                    Description: document.getElementById("description").value,
                    LikedNumber: 0,
                    Name: document.getElementById("name").value,
                    Neighborhood: document.getElementById("neighborhood").value,
                    State: document.getElementById("state").value,
                    aid: "",
                    imageUrl1: url,
                                imageUrl2: url1,
                                imageUrl3: url2,
                    // imageUrl1: document.getElementById("photo0").value,
                    // imageUrl2: document.getElementById("photo1").value,
                    // imageUrl3: document.getElementById("photo2").value,
                    Date: new Date().toLocaleString()
                    // Photo: [document.getElementById("photo0").value,
                    //     document.getElementById("photo1").value,
                    //     document.getElementById("photo2").value]
                })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });
            });});});
            // console.log(uploadTaskRef.location.path_);
            console.log("outside url:" + self.url);
            // Add a new document in collection "cities"

        });
}


//ignore this for now
function storeDataBulk(){
    // Add a new document in collection "cities"
    var addresses = document.getElementById("address").value.split(",")
    console.log(addresses)

    // db.collection("testactivity").doc("2").set({
    //     Address: document.getElementById("address").value,
    //     Category: document.getElementById("category").value,
    //     City: document.getElementById("city").value,
    //     Country: document.getElementById("country").value,
    //     Description: document.getElementById("description").value,
    //     LikedNumber: document.getElementById("likedNumber").value,
    //     Name: document.getElementById("name").value,
    //     Neighborhood: document.getElementById("neighborhood").value,
    //     State: document.getElementById("state").value,
    //     aid: "2",
    //     imageUrl1: document.getElementById("photo0").value,
    //     imageUrl2: document.getElementById("photo1").value,
    //     imageUrl3: document.getElementById("photo2").value
    //     // Photo: [document.getElementById("photo0").value,
    //     //     document.getElementById("photo1").value,
    //     //     document.getElementById("photo2").value]
    // })
    //     .then(function() {
    //         console.log("Document successfully written!");
    //     })
    //     .catch(function(error) {
    //         console.error("Error writing document: ", error);
    //     });

}


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUDLRufwYTIW6niU8PWg6j8gVzwbtkmag",
    authDomain: "revney-2c498.firebaseapp.com",
    databaseURL: "https://revney-2c498.firebaseio.com",
    projectId: "revney-2c498",
    storageBucket: "revney-2c498.appspot.com",
    messagingSenderId: "1061595863639",
    appId: "1:1061595863639:web:534cadc5754d735b08a112",
    measurementId: "G-TFHSCED6YC"
};
// firebase.analytics();
