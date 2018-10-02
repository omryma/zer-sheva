import React from 'react';

const Contact = () => {

    return (
        <div className="contact-container" id="contact">
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <h2>צרו איתנו קשר</h2>
                <p className="lead">
                נשמח לקבל מכם הזמנות ולענות לכל שאלה. בנוסף תוכלו להמשיך להתעדכן איתנו ברשתות החברתיות
                </p>
                <br />
                <div className="row logos">
                     <div className="col-sm-6">
                         <a title="follow me on facebook" href="https://www.facebook.com/Zer-Sheva-%D7%96%D7%A8-%D7%A9%D7%91%D7%A2-134180517237136/">
                             <img alt="follow me on facebook" src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook40x40.png" border='0' /> 
                        </a>
                    </div>
                    <div className="col-sm-6">
                         <a title="follow me on instagram" href="https://www.instagram.com/zer_shevaa/">
                             <img alt="follow me on instagram" src="https://c866088.ssl.cf3.rackcdn.com/assets/instagram40x40.png" border='0' /> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;