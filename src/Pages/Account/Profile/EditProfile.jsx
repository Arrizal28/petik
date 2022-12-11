import React, { useState } from "react";
import { CardContent } from "@mui/material";
import NavBar from "../../../Components/Navbar/Navbar";
import MenuItem from "@mui/material/MenuItem";
import Footer from "../../../Components/Footer/Footer";
import {
  BoxHome,
  BoxMenu,
  BoxPage,
  TextFields,
  Buttons,
  CardEdit,
  CardBox,
  CardProfile,
} from "../../../Styled/MUI/BuyerStyle.js";
import { Heading, Title } from "../../../Styled/ComponentUI/Styles";
import TopPanels from "../../../Components/Header/TopPanel";
import {
  createUserBio,
  upadateUserBio,
} from "../../../Redux/Actions/userAction";
import { BoxAuth } from "../../../Styled/MUI/AuthStyles";
import { useDispatch, useSelector } from "react-redux";

function EditProfile() {
  const { data } = useSelector((state) => state.user.sbio);

  const [gender, setGender] = useState("Gender");
  const titles = [
    {
      value: "Male",
      label: "Male",
    },
    {
      value: "Female",
      label: "Female",
    },
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAdress] = useState("");
  const [nationality, setNationality] = useState("");
  const dispatch = useDispatch();

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (gender === "") {
      alert("Gender is required");
      return;
    }
    if (firstName === "") {
      alert("First Name is required");
      return;
    }
    if (lastName === "") {
      alert("Last Name is required");
      return;
    }
    if (phoneNumber === "") {
      alert("Phone Number is required");
      return;
    }
    if (address === "") {
      alert("Adress is required");
      return;
    }
    if (nationality === "") {
      alert("Nationality is required");
      return;
    }
    if (
      gender !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      phoneNumber !== "" &&
      address !== "" &&
      nationality !== ""
    ) {
      const data = {
        firstName,
        lastName,
        gender,
        phoneNumber,
        address,
        nationality,
      };
      dispatch(createUserBio(data));
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (gender === "") {
      alert("Gender is required");
      return;
    }
    if (firstName === "") {
      alert("First Name is required");
      return;
    }
    if (lastName === "") {
      alert("Last Name is required");
      return;
    }
    if (phoneNumber === "") {
      alert("Phone Number is required");
      return;
    }
    if (address === "") {
      alert("Adress is required");
      return;
    }
    if (nationality === "") {
      alert("Nationality is required");
      return;
    }
    if (
      gender !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      phoneNumber !== "" &&
      address !== "" &&
      nationality !== ""
    ) {
      const data = {
        firstName,
        lastName,
        gender,
        phoneNumber,
        address,
        nationality,
      };
      dispatch(upadateUserBio(data));
    }
  };

  return (
    <>
      <TopPanels />
      <NavBar />
      <BoxHome>
        <BoxPage>
          <CardProfile variant="outlined">
            <BoxMenu>
              <Heading>Edit Profile</Heading>
              <Title>Di sini anda bisa mengubah profil akunmu.</Title>
            </BoxMenu>
          </CardProfile>
          {data.biodata === null ? (
            <BoxAuth>
              <CardBox>
                <CardEdit>
                  <CardContent>
                    <TextFields
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      size="small"
                      helperText="Please enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      size="small"
                      helperText="Please enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      select
                      label="Select"
                      value={gender}
                      onChange={handleGenderChange}
                      helperText="Please select your gender"
                    >
                      {titles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextFields>
                    <TextFields
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                      size="small"
                      helperText="Please enter your Phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                      size="small"
                      helperText="Please enter your address"
                      value={address}
                      onChange={(e) => setAdress(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label="Nationality"
                      variant="outlined"
                      size="small"
                      helperText="Please enter your Nationality"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                    />
                    <Buttons
                      variant="contained"
                      size="large"
                      onClick={handleSubmit}
                    >
                      Create
                    </Buttons>
                  </CardContent>
                </CardEdit>
              </CardBox>
            </BoxAuth>
          ) : (
            <BoxAuth>
              <CardBox>
                <CardEdit>
                  <CardContent>
                    <TextFields
                      id="outlined-basic"
                      label={data.biodata.firstName}
                      variant="outlined"
                      size="small"
                      helperText="Please enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label={data.biodata.lastName}
                      variant="outlined"
                      size="small"
                      helperText="Please enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      select
                      label={data.biodata.gender}
                      value={gender}
                      onChange={handleGenderChange}
                      helperText="Please select your gender"
                    >
                      {titles.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextFields>
                    <TextFields
                      id="outlined-basic"
                      label={data.biodata.phoneNumber}
                      variant="outlined"
                      size="small"
                      helperText="Please enter your Phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label={data.biodata.address}
                      variant="outlined"
                      size="small"
                      helperText="Please enter your address"
                      value={address}
                      onChange={(e) => setAdress(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label={data.biodata.nationality}
                      variant="outlined"
                      size="small"
                      helperText="Please enter your Nationality"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                    />
                    <Buttons
                      variant="contained"
                      size="large"
                      onClick={handleEdit}
                    >
                      Save Change
                    </Buttons>
                  </CardContent>
                </CardEdit>
              </CardBox>
            </BoxAuth>
          )}
        </BoxPage>
      </BoxHome>
      <Footer />
    </>
  );
}

export default EditProfile;
