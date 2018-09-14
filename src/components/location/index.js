import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46191.86121064759!2d-79.47012052622127!3d43.648348814834556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc9ff2a975d1%3A0x938fe9b4a172a476!2sDanforth+Music+Hall!5e0!3m2!1sru!2sca!4v1536933420183"
                width="100%"
                height="500px"
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;