import React from "react";
import { Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Service</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Destination</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
            <FooterLink href="#">Ticket</FooterLink>
          </Column>
          <Column>
            <Heading>Airlines</Heading>
            <FooterLink href="#">Garuda Indonesia</FooterLink>
            <FooterLink href="#">Citilink</FooterLink>
            <FooterLink href="#">Batik Air</FooterLink>
            <FooterLink href="#">Air Asia</FooterLink>
          </Column>
          <Column>
            <Heading>Office Service </Heading>
            <FooterLink href="#">Jakarta</FooterLink>
            <FooterLink href="#">Batam</FooterLink>
            <FooterLink href="#">Denpasar</FooterLink>
            <FooterLink href="#">Karawang</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <FacebookIcon />
              <i>
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <InstagramIcon />
              <i>
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <TwitterIcon />
              <i>
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <YouTubeIcon />
              <i>
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
