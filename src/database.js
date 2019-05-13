

const database = {
    
  add(collection, data) {
    var db = firebase.firestore();
    return new Promise((resolve, reject) => {
      db.collection(collection)
        .add(data)
        .then(function(docRef) {
          resolve(docRef);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  },

  getAll(collection) {
    var db = firebase.firestore();
    return new Promise((resolve, reject) => {
      db.collection(collection)
        .get()
        .then(querySnapshot => {
          resolve(querySnapshot.docs.map((item)=> item.data()));
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  query(collection, [arg1, arg2, arg3]) {
    var db = firebase.firestore();
    return new Promise((resolve, reject) => {
      db.collection(collection)
        .where(arg1, arg2, arg3)
        .get()
        .then(querySnapshot => {
          resolve(querySnapshot.docs.map((item)=> item.data()));
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

module.exports = {
  database
};
