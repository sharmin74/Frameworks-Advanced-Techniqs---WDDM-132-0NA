import React, { useState } from 'react';

function ContactStatus() {
    const [hasContacted, setHasContacted] = useState(false);

    const handleContactFormSubmit = () => {
        setHasContacted(true);
    };

    return (
        <div className="contact-status">
            {hasContacted ? (
                <p>Thank you for reaching out! I'll get back to you soon.</p>
            ) : (
                <p>If you'd like to work together, please <button onClick={handleContactFormSubmit}>contact me</button>.</p>
            )}
        </div>
    );
}

export default ContactStatus;
