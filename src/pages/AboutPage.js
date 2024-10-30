import React from 'react';
import './AboutPage.css'; // Import the CSS for styling

const AboutPage = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p className="about-description">
                Welcome to LandBridge, your trusted partner in buying and selling land. Our platform connects buyers and sellers, making the process of property transactions simple and efficient. 
                With a commitment to transparency and customer satisfaction, we aim to empower our users with the information they need to make informed decisions.
            </p>

            <h3>Our Mission</h3>
            <p>
                Our mission is to revolutionize the land sales industry by providing a seamless, user-friendly experience that simplifies the buying and selling process.
                We strive to build a community of satisfied customers who trust us for their property needs.
            </p>

            <h3>Our Values</h3>
            <ul>
                <li>Integrity: We conduct our business with honesty and transparency.</li>
                <li>Customer Focus: Our users are at the heart of everything we do.</li>
                <li>Innovation: We embrace technology to enhance our services.</li>
                <li>Community: We aim to contribute positively to the communities we serve.</li>
            </ul>

            <h3>Meet Our Team</h3>
            <div className="team">
                {/* <div className="team-member">
                    <img src="/images/team-member1.jpg" alt="Team Member 1" />
                    <h4>Jacob Thiora</h4>
                    <p>Co-Founder & CEO</p>
                </div> */}
                <div className="team-member">
                    <img src="/images/lemuel.jpg" alt="Lemuel Murithi" />
                    <h4>Lemuel Murithi</h4>
                    <p>Co-Founder & CTO</p>
                </div>
                <div className="team-member">
                    <img src="/images/441430536_286305104574767_8253027774889848500_n.jpg" alt="Eliud Koome" />
                    <h4>Eliud Koome</h4>
                    <p>Co-Founder & CTO</p>
                </div>
                <div className="team-member">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="James Smith" />
                    <h4>James Smith</h4>
                    <p>Lead Designer</p>
                </div>
                <div className="team-member">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Emma Johnson" />
                    <h4>Emma Johnson</h4>
                    <p>Marketing Specialist</p>
                </div>
                <div className="team-member">
                    <img src="https://randomuser.me/api/portraits/men/53.jpg" alt="Michael Brown" />
                    <h4>Michael Brown</h4>
                    <p>Product Manager</p>
                </div>
                <div className="team-member">
                    <img src="https://randomuser.me/api/portraits/women/20.jpg" alt="Sophia Davis" />
                    <h4>Sophia Davis</h4>
                    <p>Customer Support Lead</p>
                </div>
                {/* <div className="team-member">
                    <img src="/images/team-member3.jpg" alt="Team Member 3" />
                    <h4>Hansel Mutwiri</h4>
                    <p>Marketing Director</p>
                </div> */}
            </div>

            <h3>Our Services</h3>
            <p>
                We offer a range of services to ensure a smooth transaction process:
            </p>
            <ul>
                <li>Property Listings: Browse a wide selection of properties for sale.</li>
                <li>Market Analysis: Get insights into property values and trends.</li>
                <li>Consultation: Speak with our experts for personalized guidance.</li>
                <li>Customer Support: Our team is here to assist you every step of the way.</li>
            </ul>

            <h3>Contact Us</h3>
            <p>If you have any questions or need assistance, feel free to reach out to us at <a href="mailto:support@landbbridge.com">support@landbbridge.com</a>.</p>
        </div>
    );
};

export default AboutPage;
