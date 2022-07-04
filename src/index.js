import {initializeApp} from "firebase/app"
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc
} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCBU05jJaJVj18lbPSvf3ldKMLDdWs_8Z4",
    authDomain: "thesparkmagazinecomments.firebaseapp.com",
    projectId: "thesparkmagazinecomments",
    storageBucket: "thesparkmagazinecomments.appspot.com",
    messagingSenderId: "565498089249",
    appId: "1:565498089249:web:77f43a26cae536a7cf7860"
  };


//   intialize firebase
  initializeApp(firebaseConfig)

// initialize services
const db = getFirestore()

// collection ref
const colRef = collection(db, "4Ed_Intro_comments")

// get collection data
  onSnapshot(colRef, (snapshot) => {
    let comments = []
    snapshot.docs.forEach((doc) => {
        comments.push({...doc.data(), id: doc.id})
        
    })
    generateComments(comments)
    console.log(comments)
    })

//   adding documents
const addCommentForm = document.querySelector('.add')
addCommentForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    comment: addCommentForm.comment.value
  })
  .then(() =>{
    addCommentForm.reset()
  })

})

// delete document
const deleteCommentForm = document.querySelector('.delete')
deleteCommentForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, "4Ed_Intro_comments", deleteCommentForm.id.value)

  deleteDoc(docRef)
  .then(() =>{
    deleteCommentForm.reset()
})
})

//generate comment
function generateComments(comments){

    let commentsHTML = "";
    comments.forEach((acomment) => {
        commentsHTML += `
        <div class="commment__container">
            <div class="comment-text">
              <p>${acomment.comment}</p>
            </div>
            <div class="delete-btn__container">
              <button class="delete-btn">
                <i class="fas fa-trash-alt fa-2x"></i>
              </button>
            </div>
        </div>
    `
    
    })
    document.querySelector(".comment-area").innerHTML = commentsHTML;
    createEventListeners();
}

function createEventListeners(){
    let allComments = document.querySelector(".commment__container .delete-btn")
    console.log(allActiveComments)
    allComments.forEach((activeComment) => {
        activeComment.addEventListener(("click"), function(){
            deleteComment()
        })
    })
}

function deleteComment(){
    console.log("delete Comment")
}