var firebaseConfig = {
    apiKey: "AIzaSyC6XlTo6JAxVWmcfoA20lb60EqOHuGDmc8",
    authDomain: "controlac-e93d2.firebaseapp.com",
    databaseURL: "https://controlac-e93d2.firebaseio.com",
    projectId: "controlac-e93d2",
    storageBucket: "controlac-e93d2.appspot.com",
    messagingSenderId: "sender-id",
    appID: "1:670813732118:web:379efa7ca63c627e7a2437"
  }

firebase.initializeApp(firebaseConfig)

  
  
 
const form = document.forms['loginForm']
form.addEventListener('submit', function handleFormSubmit(event){
  const email = form['email'].value
  const password = form['password'].value
  const isLoginOrSignup = form['isLoginOrSignup'].value

  if (isLoginOrSignup === 'isLogin') {
    return loginUser(email, password)
  }

  return createUser(email, password)
})

function createUser(email, password) {
    console.log('Creando el usuario con email ' + email);

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (user) {
        console.log('¡Creamos al usuario!');
    })
    .catch(function (error) {
        console.error(error)
    });
}

function loginUser(email, password) {
    console.log('Loging user ' + email);

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (user) {
        console.log('Credenciales correctas, ¡bienvenido!');
    })
    .catch(function (error) {
        console.log(error);
    });
}

function signoutUser() {
    firebase.auth().signOut();
}


