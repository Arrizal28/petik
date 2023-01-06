import React, { useState, useEffect } from "react";
import { CardContent } from "@mui/material";
import NavBar from "../../Components/Navbar/Navbar";
import MenuItem from "@mui/material/MenuItem";
import Footer from "../../Components/Footer/Footer";
import {
  BoxHome,
  BoxMenu,
  BoxPage,
  TextFields,
  Buttons,
  CardEdit,
  CardBox,
  CardProfile,
} from "../../Styled/MUI/BuyerStyle.js";
import { Heading, Title } from "../../Styled/ComponentUI/Styles";
import TopPanels from "../../Components/Header/TopPanel";
import { createUserBio, upadateUserBio } from "../../Redux/Actions/userAction";
import { BoxAuth } from "../../Styled/MUI/AuthStyles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarBottom from "../../Mobile/Layout/NavbarMobile";

function EditProfile() {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.user.sbio);

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

  const [efirstName, setEFirstName] = useState("");
  const [elastName, setELastName] = useState("");
  const [ephoneNumber, setEPhoneNumber] = useState("");
  const [eaddress, setEAdress] = useState("");
  const [enationality, setENationality] = useState("");
  const [egender, setEGender] = useState("");
  useEffect(() => {
    setEFirstName(data?.biodata?.firstName);
    setELastName(data?.biodata?.lastName);
    setEPhoneNumber(data?.biodata?.phoneNumber);
    setEAdress(data?.biodata?.address);
    setENationality(data?.biodata?.nationality);
    setEGender(data?.biodata?.gender);
  }, [
    data?.biodata?.firstName,
    data?.biodata?.lastName,
    data?.biodata?.phoneNumber,
    data?.biodata?.address,
    data?.biodata?.nationality,
    data?.biodata?.gender,
  ]);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    address: "",
    nationality: "",
  });

  const { firstName, lastName, gender, phoneNumber, address, nationality } =
    user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

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
      dispatch(createUserBio(user));
      navigate("/");
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (
      egender !== "" &&
      efirstName !== "" &&
      elastName !== "" &&
      ephoneNumber !== "" &&
      eaddress !== "" &&
      enationality !== ""
    ) {
      const data = {
        firstName: efirstName,
        lastName: elastName,
        gender: egender,
        phoneNumber: ephoneNumber,
        address: eaddress,
        nationality: enationality,
      };
      dispatch(upadateUserBio(data));
      navigate("/");
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
              <Title>You can edit your profile account here.</Title>
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
                      name="firstName"
                      size="small"
                      helperText="Please enter your first name"
                      value={firstName}
                      onChange={(e) => onInputChange(e)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      name="lastName"
                      size="small"
                      helperText="Please enter your last name"
                      value={lastName}
                      onChange={(e) => onInputChange(e)}
                    />
                    <TextFields
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      name="gender"
                      select
                      label="Select"
                      value={gender}
                      onChange={(e) => onInputChange(e)}
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
                      label="+621389238173"
                      variant="outlined"
                      size="small"
                      helperText="Please enter your Phone number"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => onInputChange(e)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                      size="small"
                      helperText="Please enter your address"
                      name="address"
                      value={address}
                      onChange={(e) => onInputChange(e)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label="Nationality"
                      variant="outlined"
                      size="small"
                      name="nationality"
                      helperText="Please enter your Nationality"
                      value={nationality}
                      onChange={(e) => onInputChange(e)}
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
                      label={data?.biodata?.firstName}
                      variant="outlined"
                      size="small"
                      helperText="Please enter your first name"
                      name="firstName"
                      value={efirstName}
                      onChange={(e) => setEFirstName(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label={data?.biodata?.lastName}
                      variant="outlined"
                      size="small"
                      name="lastName"
                      helperText="Please enter your last name"
                      value={elastName}
                      onChange={(e) => setELastName(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      select
                      name="gender"
                      label={data?.biodata?.gender}
                      value={egender}
                      onChange={(e) => setEGender(e.target.value)}
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
                      label={data?.biodata?.phoneNumber}
                      variant="outlined"
                      size="small"
                      name="phoneNumber"
                      helperText="Please enter your Phone number"
                      value={ephoneNumber}
                      onChange={(e) => setEPhoneNumber(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label={data?.biodata?.address}
                      variant="outlined"
                      size="small"
                      name="address"
                      helperText="Please enter your address"
                      value={eaddress}
                      onChange={(e) => setEAdress(e.target.value)}
                    />
                    <TextFields
                      id="outlined-basic"
                      label={data?.biodata?.nationality}
                      variant="outlined"
                      name="nationality"
                      size="small"
                      helperText="Please enter your Nationality"
                      value={enationality}
                      onChange={(e) => setENationality(e.target.value)}
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
      <NavbarBottom />
      <Footer />
    </>
  );
}

export default EditProfile;
