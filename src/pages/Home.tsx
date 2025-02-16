/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Divider, Tabs, TextInput } from "@componlyco/berkoukes";
import Footer from "../components/common/Footer";
import {
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/common/Navbar";
import { makeStyles } from "@mui/styles";

// import { useTheme } from '@mui/styles'
const useStyles = makeStyles((theme: any) => ({
  cardContainer: {
    backdropFilter: "blur(62.5px)",
    position: "relative",
  },
  cardBG: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: -1,
  },
  cardPaint: {
    height: 100,
    width: 100,
    position: "absolute",
    top: 20,
    right: 40,
  },
}));
const Home = () => {
  const router = useNavigate();
  const theme = useTheme();
  const breakpointsDownMd = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();

  const [titles] = useState([
    {
      color: "linear-gradient(180deg, #4C4C4C 0%, #000000 100%)",
      title1: "atom ⚛️",

      width1: "245px",
    },
    {
      color: "linear-gradient(180deg, #4C4C4C 0%, #000000 100%)",
      title1: "molecul 🧬",
      width1: "316px",
    },
    {
      color: "linear-gradient(180deg, #4C4C4C 0%, #000000 100%)",
      title1: "organism 🧮",
      width1: "346px",
    },
    {
      color: "linear-gradient(180deg, #4C4C4C 0%, #000000 100%)",
      title1: "page 📄",
      width1: "225px",
    },
  ]);

  const [title, setTitle] = useState(titles[1]);

  const generateRandomText = (index: number) => {
    return titles[index];
  };

  useEffect(() => {
    let prevIndex = 0;
    setTitle(generateRandomText(prevIndex));
    const interval = setInterval(() => {
      prevIndex = (prevIndex + 1) % titles.length;
      setTitle(generateRandomText(prevIndex));
    }, 8000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
      <Helmet>
        <title>Componly Trust Center</title>
      </Helmet>
      <div className="">
        <div className="bg-[url('assets/images/Background.svg')] bg-no-repeat bg-cover">
          <Navbar />
          <Stack
            sx={{
              marginBottom: "50px",
              marginX: "auto",
              maxWidth: "1026px",
              paddingX: breakpointsDownMd ? "12px" : "24px",
            }}
          >
            <Stack sx={{ marginY: "64px" }} gap="24px">
              <Stack
                fontSize="56px"
                fontWeight="400"
                lineHeight="64px"
                flexDirection="column"
                display="flex"
                gap="16px"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Is this component a type of
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span
                      className={styles.titleAnimation}
                      style={{
                        background: title.color,
                        color: "#E6F2FF",
                        width: title.width1,
                        padding: "8px",
                        borderRadius: "12px",
                      }}
                    >
                      {title.title1}
                    </span>
                    ?
                  </div>
                </div>
              </Stack>

              <Typography
                variant="body1"
                color="#667181"
                sx={{ textAlign: "center" }}
              >
                Quickly check if your component is an atom, molecule, organism,
                or <br />
                page—perfect for when you need a quick answer!
              </Typography>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems={"center"}
                gap="8px"
              >
                <TextInput
                  type="text"
                  placeholder="Type your component name"
                  showHelpIcon={false}
                  sx={{
                    height: "40px",
                    gap: 0,
                    width: "100%",
                    maxWidth: "350px",
                  }}
                />
                <Button
                  type="primary"
                  size="normal"
                  label="Check"
                  // onClick={() => setAddMode(false)}
                  sx={{ height: "40px", gap: 0 }}
                />
              </Stack>
            </Stack>

            <Card className={classes.cardContainer}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                width="100%"
              >
                <Stack>
                  <Typography variant="h4" color="#667181" fontWeight={700}>
                    Drowning in design chaos?
                  </Typography>
                  <Typography variant="h4" fontWeight={700}>
                    Get order back—and be ready to scale
                  </Typography>
                </Stack>
                <img
                  src="/images/paint.png"
                  loading="lazy"
                  className={classes.cardPaint}
                />
              </Stack>
              <Stack gap={2}>
                <Typography variant="body1" color="#475467">
                  Custom components, outdated styles, and misalignment are
                  dragging your team down.
                  <br />
                  Get the clarity you need to clean up and realign your design
                  system.
                </Typography>
                <Typography variant="body1" color="#475467">
                  ✔ Pinpoint issues in minutes, no setup
                </Typography>
                <Typography variant="body1" color="#475467">
                  ✔ Free to start—see the impact before you commit
                </Typography>
              </Stack>
              <Stack flexDirection={"row"} width="100%" gap={2}>
                <Button
                  label="Get started for free"
                  type="primary"
                  onClick={() => {
                    router("/key");
                  }}
                />
                <Link
                  style={{ display: "flex" }}
                  to={"https://calendly.com/componly/componly_demo"}
                  target="_blank"
                >
                  <Button
                    sx={{ width: "100%" }}
                    label="Talk to sales"
                    type="borders"
                  />
                </Link>
              </Stack>
              <img src="/images/card-bg.png" className={classes.cardBG} />
            </Card>
          </Stack>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
