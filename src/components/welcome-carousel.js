import React from 'react';

const WelcomeCarousel = () => {

    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="item active">
                <img src="/photos/zer8.jpeg" className="img-responsive" alt="flowers1"/>
                     <div className="carousel-caption">
                     <h3>זרים בעיצוב אישי לפי בקשת הלקוח</h3>
                     </div>
                </div>

                <div className="item">
                <img src='/photos/zer9.jpeg' className="img-responsive" alt="flowers2"/>
                     <div className="carousel-caption">
                     <h3>מתאימים לכל אירוע</h3>
                     </div>
                </div>

                <div className="item">
                <img src='/photos/zer10.jpeg' className="img-responsive" alt="flowers3"/>
                <div className="carousel-caption">
                     <h3>מחירים לכל כיס</h3>
                     </div>
                </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
    );
};


export default WelcomeCarousel;