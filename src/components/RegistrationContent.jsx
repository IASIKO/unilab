import React, { useRef, useState } from "react";
import styles from "../components/RegistrationContent.module.css";
import addphoto from "../assets/addphoto.png";
import { useNavigate } from "react-router-dom";

const RegistrationContent = () => {
  const [image, setImage] = useState();
  const [inputName, setInputName] = useState("");
  const [profileData, setProfileData] = useState([{ image: null, name: "" }]);
  const fileInputRef = useRef();
    const navigate = useNavigate();

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSignInClickHandler = () => {
    setProfileData([{ image: image, name: inputName }]);
    navigate("/form");
  };

  return (
    <div>
      <div className={styles.regCard}>
        <h3>Get Started</h3>
        <p>add a photo</p>
        <div>
          <img
            src={image ? image : addphoto}
            alt={image ? "profile image" : "addphoto"}
            className={image ? styles.profileImage : styles.addphoto}
            onClick={handleImageClick}
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
          />
        </div>
        <p>fill in your name</p>
        <input
          className={styles.inputName}
          placeholder="your name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        {inputName.length > 0 && image ? (
          <button onClick={onSignInClickHandler}>Sign in</button>
        ) : (
          <button disabled>Sign in</button>
        )}
      </div>
    </div>
  );
};

export default RegistrationContent;
