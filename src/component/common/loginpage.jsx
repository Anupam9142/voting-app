import React, { useState} from 'react';
import Container from 'react-bootstrap/Container'
import firebase from 'context/firebase'
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

const LoginPage = ({modalType}) => {
    
    const [emailField, setEmailField] = useState('');
    const [submittingForm, setSubmittingForm] = useState(false);
    const [errorShow, setErrorShow] = useState('');
    const [alertShow, setAlertShow] = useState(false);
    
    // const handleAuth = () => {
    //     var actionCodeSettings = {
    //         url: 'https://www.voting-site.netlify.com/adminPanel',
    //     };
    //     firebase.auth().sendSignInLinkToEmail(emailField, actionCodeSettings).then(response => {
    //         console.log(response);
    //     })
    //     // Confirm the link is a sign-in with email link.
    //     if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
    //         // Additional state parameters can also be passed via URL.
    //         // This can be used to continue the user's intended action before triggering
    //         // the sign-in operation.
    //         // Get the email if available. This should be available if the user completes
    //         // the flow on the same device where they started it.
    //         var email = window.localStorage.getItem('emailForSignIn');
    //         if (!email) {
    //             // User opened the link on a different device. To prevent session fixation
    //             // attacks, ask the user to provide the associated email again. For example:
    //             email = emailField;
    //         }
    //         // The client SDK will parse the code from the link for you.
    //         firebase.auth().signInWithEmailLink(email, window.location.href)
    //         .then(function(result) {
    //             console.log(result)
    //             // Clear email from storage.
    //             window.localStorage.removeItem('emailForSignIn');
    //             // You can access the new user via result.user
    //             // Additional user info profile not available via:
    //             // result.additionalUserInfo.profile == null
    //             // You can check if the user is new or existing:
    //             // result.additionalUserInfo.isNewUser
    //         })
    //         .catch(function(error) {
    //             setErrorShow(error.message);
    //             // Some error occurred, you can inspect the code: error.code
    //             // Common errors could be invalid email and invalid or expired OTPs.
    //         });
    //     }
    // }
    
    const handleInputChange = (e) => {
        e.persist();
        setEmailField(e.target.value);
    }
    
    
    const sendLink = (e) => {
        e.preventDefault();
        setSubmittingForm(true);
        firebase
        .firestore()
        .collection(modalType)
        .get()
        .then(docs => {
            if (docs.docs[0].data()['email'].includes(emailField)){
                // handleAuth()
                setAlertShow(true);
                setEmailField('');
            }else {
                setErrorShow(`${emailField} is not included in ${modalType} email list!`);
                setEmailField('');
            }
            setSubmittingForm(false);
        })
        .catch(function(error) {    
            setErrorShow(error.message);
            setSubmittingForm(false);
            setEmailField('');
        });
        // if (modalType == 'admin'){
        // }else of (modalType == 'voter'){
        // }
    };
    
    return (
        <Container style={{marginTop: '40vh'}}>
            <form onSubmit={sendLink}>
                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        value={emailField} 
                        onChange={handleInputChange} 
                        required />
                </div>
                <Button variant="primary" type="submit" disabled={submittingForm}>
                    {submittingForm ? <Spinner animation="grow" variant="info" size="sm" /> : 'Submit'}
                </Button>
            </form>
            <Alert style={{display: 'sticky', margin: '0px 10px 10px 10px', zIndex: 10000}} show={alertShow} variant='success' onClose={() => setAlertShow(false)} dismissible>
                Form Submitted successfully! Check your email for next steps
            </Alert>
            <Alert style={{display: 'sticky', margin: '-10px 10px 10px 10px', zIndex: 10000}} show={errorShow} variant='danger' onClose={() => setErrorShow('')} dismissible>
                <Alert.Heading>Error submitting the form!</Alert.Heading> 
                {errorShow}
            </Alert>
            
        </Container>
    )
}

export {LoginPage}