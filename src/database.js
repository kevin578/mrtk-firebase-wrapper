var db = firebase.firestore();

const database = function(collection) {
    function add(data) {
        return new Promise((resolve, reject)=> {
            db.collection(collection).add(data)
            .then(function(docRef) {
                resolve(docRef)
            })
            .catch(function(error) {
                reject(error)
            });
        })
    }
    function getAll() {
        return new Promise((resolve, reject)=> {
            db.collection(collection).get()
            .then((querySnapshot) => {
                resolve(querySnapshot.docs);
            })
            .catch((err)=> {
                reject(err);
            })

        })
 
    }

    return {add, getAll}


}

module.exports = {
    database
}