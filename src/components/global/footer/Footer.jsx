import React from "react";
import "../../../styles/global/footer.css";
const Footer = () => {
  return (
    <div className="container_footer">
      <div className="container_footer_content">
        <div className="container_logo_follow">
          <img src="/images/global/logo.png" alt="Logo" />
          <div className="container_follow">
            <p className="text_follow">Follow Us On:</p>
            <div className="container_follow_items">
              <div className="follow_items">
                <img
                  src="/images/global/footer/LinkedinLogo.svg"
                  alt="Linkedin"
                  className="icon_footer"
                />
              </div>
              <div className="follow_items">
                <img
                  src="/images/global/footer/XLogo.svg"
                  alt="XLogo"
                  className="icon_footer"
                />
              </div>
              <div className="follow_items">
                <img
                  src="/images/global/footer/YoutubeLogo.svg"
                  alt="ytb"
                  className="icon_footer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container_Other_subscribe">
          <div className="container_Other_footer">
            <div className="container_Other_items">
              <p className="text_title_footer">User Support</p>
              <div className="Other_items">
                <p className="text_items_footer">How to pick a Novalist</p>
                <p className="text_items_footer">Help & Support</p>
                <p className="text_items_footer">Cancel A Booking</p>
                <p className="text_items_footer">Payroll Services</p>
              </div>
            </div>
            <div className="container_Other_items">
              <p className="text_title_footer">For HiviList</p>
              <div className="Other_items">
                <p className="text_items_footer">How It Work</p>
                <p className="text_items_footer">Contact Us</p>
                <p className="text_items_footer">Sign Up</p>
                <p className="text_items_footer">Get Help</p>
              </div>
            </div>
            <div className="container_Other_items">
              <p className="text_title_footer">Blog</p>
              <div className="Other_items">
                <p className="text_items_footer">Success Stories</p>
                <p className="text_items_footer">High Vibe Living</p>
                <p className="text_items_footer">Resources</p>
                <p className="text_items_footer">Free Tools</p>
              </div>
            </div>
            <div className="container_Other_items">
              <p className="text_title_footer">Hivi Quest</p>
              <div className="Other_items">
                <p className="text_items_footer">About Us</p>
                <p className="text_items_footer">Careers</p>
                <p className="text_items_footer">Investor Relations</p>
              </div>
            </div>
          </div>
          <div className="container_subscribe_footer">
            <p className="text_title_subscribe_footer">Subscribe Newsletter</p>
            <div className="container_input_email">
              <input
                type="email"
                placeholder="Your Email"
                className="input_email"
              />
              <div className="btn_subscribe_footer">
                <img src="/images/global/footer/PaperPlaneTilt.svg" />
              </div>
            </div>
            <p className="text_hint_footer">
              Please sign up to follow the latest news and events from us, we
              promise not to spam your inbox.
            </p>
          </div>
        </div>
        <div className="container_term_policy_footer">
          <p className="text_hint_footer">
            © 2025 <span className="text_hint_NovaSeer">NovaSeer</span> ® Inc.
          </p>
          <div className="footer_term_policy">
            <p className="text_hint_footer">Terms of Service</p>
            <div className="line_height"></div>
            <p className="text_hint_footer">Privacy Policy</p>
            <div className="line_height"></div>
            <p className="text_hint_footer">Cookie Settings</p>
            <div className="line_height"></div>
            <p className="text_hint_footer">Accessibility</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
