import React from 'react';

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            role: 'Client',
            testimonial: 'Sharmin did an amazing job on our website! Highly recommend her for any web development projects.'
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Colleague',
            testimonial: 'Working with Sharmin was a great experience. Her technical skills and attention to detail are exceptional.'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            role: 'Client',
            testimonial: 'Sharmin created a seamless and responsive e-commerce platform for us. She is a true professional.'
        },
    ];

    return (
        <div className="testimonials">
            <h2>What People Are Saying</h2>
            <ul>
                {testimonials.map(testimonial => (
                    <li key={testimonial.id} className="testimonial">
                        <p><strong>{testimonial.name}</strong> ({testimonial.role})</p>
                        <blockquote>{testimonial.testimonial}</blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Testimonials;
