
import React from "react";
import "./footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="footer-container" style={{ fontFamily: "Arial" }}>
      <div className="logo-footer">
        <div className="logo-health-footer">
          <img src="https://i.ibb.co/xG8xQmD/image-16.png" alt="" />
          <p className="health-footer footer_p">Healtcare</p>
        </div>
        <p>Copyright ©2022 </p>
        <p> | All Rights Reserved </p>
      </div>

      <div className="product" style={{ fontFamily: "Arial" }}>
        <div>
          <span className="footer_span" style={{ fontFamily: "Arial" }}>Product</span>
        </div>
        <div>
          <p className="text footer_p">Features</p>
          <p className="text footer_p">Pricing</p>
          <p className="text footer_p">Case studies</p>
          <p className="text footer_p">Reviews</p>
          <p className="text footer_p">Updates</p>
        </div>
      </div>

      <div className="company">
        <div>
          <span className="footer_span" style={{ fontFamily: "Arial" }}>Company</span>
        </div>
        <div style={{ fontFamily: "Arial" }}>
          <p className="text footer_p">About</p>
          <p className="text footer_p" onClick={() => navigate("/contact")}>Contact us</p>
          <p className="text footer_p">Careers</p>
          <p className="text footer_p">Culture</p>
          <p className="text footer_p">Blog</p>
        </div>
      </div>
      <div className="support" style={{ fontFamily: "Arial" }}>
        <div>
          <span className="footer_span" style={{ fontFamily: "Arial" }}>Support</span>
        </div>
        <div>
          <p className="text footer_p">Getting started</p>
          <p className="text footer_p">Help center</p>
          <p className="text footer_p">Server status</p>
          <p className="text footer_p">Report a bug</p>
          <p className="text footer_p" onClick={() => navigate('/chat')}>Chat support</p>
        </div>
      </div>

      <div className="followus">
        <span className="footer_span" style={{ fontFamily: "Arial" }}>Follow us </span>
        <div className="icon-div">
          <p className="footer_p">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <rect
                x="0.586914"
                y="0.00195312"
                width="24"
                height="24"
                rx="5"
                fill="#F2F1FA"
              />
              <path
                d="M13.5626 18.002V12.5282H15.4924L15.7813 10.395H13.5625V9.03297C13.5625 8.41535 13.7427 7.99448 14.673 7.99448L15.8594 7.99395V6.086C15.6542 6.06005 14.9499 6.00195 14.1306 6.00195C12.4199 6.00195 11.2487 6.99607 11.2487 8.82177V10.395H9.31396V12.5282H11.2487V18.0019H13.5626V18.002Z"
                fill="#555555"
              />
            </svg>{" "}
            Facebook{" "}
          </p>
        </div>
        <div className="icon-div">

          <p className="footer_p">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <rect
                x="0.586914"
                y="0.00195312"
                width="24"
                height="24"
                rx="5"
                fill="#F2F1FA"
              />
              <path
                d="M14.6049 7.13619V7.13403H15.1676L15.3732 6.12799C15.4189 5.90289 15.5332 5.68703 15.703 5.51049C15.8729 5.33396 16.0866 5.20728 16.3143 5.15332C16.5419 5.09935 16.7773 5.12057 17.0007 5.21347C17.2241 5.30636 17.4267 5.46814 17.5874 5.68594C17.7482 5.90374 17.8613 6.17113 17.9152 6.46004C17.9691 6.74894 17.9626 7.04618 17.8961 7.32999C17.8296 7.61379 17.7055 7.87515 17.5322 8.09351C17.359 8.31188 17.1416 8.48005 16.9006 8.584L14.6049 9.53245V12.4227H16.6169C16.8822 12.4227 17.1345 12.5303 17.3245 12.7194C17.5145 12.9084 17.6221 13.1607 17.6221 13.426V16.5032C17.6221 16.7685 17.5145 17.0208 17.3245 17.2099C17.1345 17.3989 16.8822 17.5065 16.6169 17.5065H14.6049C14.3396 17.5065 14.0873 17.3989 13.8972 17.2099C13.7072 17.0208 13.5996 16.7685 13.5996 16.5032V13.426C13.5996 13.1607 13.7072 12.9084 13.8972 12.7194C14.0873 12.5303 14.3396 12.4227 14.6049 12.4227H15.5413V9.53245L13.2914 8.56569C13.0526 8.46242 12.8369 8.29422 12.6644 8.07714C12.4918 7.86007 12.3682 7.60164 12.3065 7.32602C12.2449 7.05041 12.2474 6.76444 12.3142 6.48965C12.3809 6.21487 12.5099 5.95981 12.6893 5.7496C12.8687 5.5394 13.0912 5.38288 13.3315 5.2941C13.5719 5.20533 13.8228 5.18815 14.0657 5.24489C14.3085 5.30163 14.5349 5.43035 14.7093 5.6124C14.8836 5.79444 14.9976 6.02082 15.0372 6.26777C15.0767 6.51472 15.0392 6.77276 14.9295 7.0012L14.6049 7.13619Z"
                fill="#555555"
              />
            </svg>{" "}
            LinkedIn{" "}
          </p>
        </div>
        <div className="icon-div">
          <p className="footer_p">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <rect
                x="0.586914"
                y="0.00195312"
                width="24"
                height="24"
                rx="5"
                fill="#F2F1FA"
              />
              <path
                d="M20.8395 7.35901C20.7307 6.89402 20.4422 6.4852 20.0287 6.23788C19.6153 5.99056 19.1138 5.92719 18.6476 6.06301C18.1813 6.19883 17.7911 6.52415 17.5756 6.96765L11.1114 20.1204C10.9576 20.4554 10.9115 20.8457 10.9804 21.2196C11.0493 21.5935 11.2291 21.9278 11.4891 22.1743C11.749 22.4208 12.0694 22.5621 12.4081 22.5765C12.7468 22.5908 13.0797 22.4769 13.3364 22.2564L20.8355 10.2544C21.0491 9.84048 21.1125 9.34318 20.9975 8.87084C20.8826 8.39849 20.5971 7.99869 20.1624 7.74238C20.1341 7.72952 20.1052 7.71737 20.0757 7.70595C20.0754 7.70576 20.0752 7.70557 20.075 7.70537L20.0651 7.7006L20.0573 7.69582C20.0284 7.67861 20.0092 7.65572 19.9995 7.62969C19.9897 7.60366 19.9895 7.57568 20 7.54701C20.0126 7.51661 20.0249 7.4853 20.0369 7.45308C20.0778 7.36122 20.0978 7.35716 20.1062 7.35677L20.1067 7.35681C20.2735 7.34496 20.4365 7.40985 20.5842 7.54657C20.732 7.6833 20.8571 7.88533 20.9396 8.13008C21.0221 8.37484 21.0585 8.65164 21.0445 8.92769C21.0305 9.20374 20.9665 9.47012 20.8574 9.70671L13.628 22.4763H13.6275L13.6269 22.477C13.4386 22.8637 13.1173 23.1532 12.7283 23.2796C12.3394 23.4061 11.9145 23.3566 11.5669 23.1446C11.2194 22.9326 10.9869 22.5808 10.9267 22.1922C10.8671 21.8036 10.9853 21.4068 11.2438 21.0991C11.5022 20.7915 11.8761 20.6032 12.2797 20.5768C12.6365 20.5534 12.9835 20.6927 13.2199 20.9473L19.6841 7.79451C19.8294 7.55585 19.9049 7.28061 19.9032 7.00044C19.9014 6.72028 19.8222 6.44556 19.6768 6.2073L12.1776 0.903146C11.9625 0.660092 11.6541 0.510209 11.3137 0.488478C10.9733 0.466746 10.6469 0.57523 10.3826 0.785552C10.1183 0.995875 9.94055 1.29391 9.88809 1.62779C9.83562 1.96167 9.91334 2.3134 10.0984 2.61549C10.2834 2.91758 10.5657 3.14809 10.9009 3.27033C11.2361 3.39257 11.5973 3.39574 11.9357 3.27941C12.2741 3.16308 12.5678 2.93502 12.7695 2.62846C12.9712 2.32189 13.0688 1.95542 13.0393 1.58206C13.0099 1.2087 12.8554 0.863121 12.6016 0.625351C12.3478 0.387581 12.0235 0.279364 11.6907 0.328013C11.3579 0.376662 11.0533 0.577044 10.8306 0.875493C10.6078 1.17394 10.4885 1.54458 10.5 1.91951C10.5093 2.24579 10.6282 2.55643 10.8314 2.78628C11.0345 3.01614 11.3085 3.14667 11.5975 3.15445C11.8866 3.16222 12.1636 3.04558 12.3616 2.83613L18.8608 9.13983C19.0495 8.94926 19.1968 8.72067 19.2908 8.46734C19.3849 8.214 19.4228 7.94345 19.4001 7.67119C19.3774 7.39892 19.2954 7.13292 19.1615 6.8962C19.0277 6.65948 18.8462 6.45935 18.6352 6.31773C18.4241 6.1761 18.1912 6.0996 17.953 6.09581C17.7148 6.09201 17.4795 6.16154 17.271 6.29484L10.9963 11.0806L9.99966 12.2906L7.99269 13.7846L7.7489 13.9226C7.49209 14.0477 7.2678 14.2172 7.09948 14.4153C6.93116 14.6133 6.82532 14.8344 6.7913 15.0731C6.75727 15.3119 6.79736 15.5545 6.90535 15.7724C7.01335 15.9903 7.18425 16.1731 7.396 16.2927C7.60775 16.4123 7.84938 16.4615 8.09045 16.4318C8.33153 16.4021 8.55951 16.2956 8.74339 16.1315C8.92726 15.9673 9.05773 15.7536 9.11812 15.5202L9.36808 14.9117L10.3787 12.9904L12.2985 9.49477L18.3968 3.29999C18.6448 3.08261 18.8356 2.80638 18.9499 2.49386C19.0641 2.18134 19.0962 1.84209 19.0429 1.51534C18.9896 1.18858 18.8547 0.887804 18.653 0.645915C18.4513 0.404026 18.1963 0.234422 17.911 0.158905C17.6258 0.0833874 17.3227 0.106187 17.0495 0.22308C16.7764 0.339973 16.5456 0.542274 16.3878 0.793493C16.23 1.04471 16.1532 1.33182 16.1701 1.62015C16.1869 1.90848 16.2969 2.18408 16.479 2.39522C16.6611 2.60635 16.9012 2.73719 17.1602 2.7679C17.4193 2.7986 17.6739 2.7261 17.8785 2.56269C18.0831 2.39928 18.2246 2.15761 18.2811 1.88265C18.3375 1.6077 18.3053 1.32089 18.1889 1.05779C18.0724 0.79469 17.8774 0.568978 17.6345 0.409605C17.3916 0.250233 17.1138 0.165467 16.8281 0.168508C16.5424 0.171549 16.2651 0.261334 16.0429 0.422506C15.8208 0.583678 15.6651 0.807183 15.5945 1.0621L9.44726 16.0996C9.3701 16.3793 9.21492 16.6264 9.01003 16.8023C8.80515 16.9782 8.56343 17.0711 8.31499 17.0637C8.06656 17.0563 7.82789 16.9497 7.64084 16.7702L7.57049 16.6788C7.4528 16.5403 7.3747 16.3604 7.34385 16.1657C7.31299 15.971 7.33173 15.7714 7.39809 15.5884C7.46445 15.4054 7.57529 15.2462 7.71843 15.1289C7.86157 15.0117 8.03184 14.9413 8.21011 14.926C8.38838 14.9106 8.56653 14.9502 8.7214 15.0399L8.78189 15.0837L8.81389 15.1116C8.97767 15.2799 9.09125 15.4889 9.13536 15.7208C9.17946 15.9527 9.15141 16.1968 9.05561 16.4162C8.95982 16.6357 8.79929 16.8195 8.6007 16.9402C8.40212 17.0609 8.17843 17.1128 7.95038 17.0906C7.72233 17.0684 7.50476 16.9733 7.33056 16.8224C7.15636 16.6715 7.03565 16.4741 6.98305 16.2542C6.93045 16.0343 6.94848 15.8033 7.03586 15.5926L7.13419 15.3595L7.13685 15.3545L7.21209 15.2089L7.37428 14.9117L10.627 7.88261L11.3116 6.43633L14.8047 0.663221C15.0252 0.290203 15.3573 0.000185305 15.7526 0.000187755C16.1478 0.000190206 16.4799 0.290205 16.7005 0.663224L20.8395 7.35901Z"
                fill="#555555"
              />
            </svg>{" "}
            Twitter{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
