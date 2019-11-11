var db = firebase.firestore();


function storeData(){
    // store image in firestore - Create a root reference
    var storageRef = firebase.storage().ref();
    // var file0 = document.getElementById("photo0").files[0] // use the Blob or File API
    //
    // // Create file metadata including the content type
    // var metadata = {
    //     contentType: 'image/jpeg',
    // };
    // var url = "";
    //
    // // Upload the file and metadata
    // var uploadTask = storageRef.child('images/' + file0.name).put(file0, metadata);
    //     // Upload completed successfully, now we can get the download URL
    //     uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //         console.log('File available at', downloadURL);
    //         url = downloadURL;
    //     });

    // //get date for pushing file
    var date = new Date().toLocaleString();

    // Add a new document in collection "cities"
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
            // imageUrl1: url,
            imageUrl1: document.getElementById("photo0").value,
            imageUrl2: document.getElementById("photo1").value,
            imageUrl3: document.getElementById("photo2").value,
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
