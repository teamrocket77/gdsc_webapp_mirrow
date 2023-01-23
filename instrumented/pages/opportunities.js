import * as React from "react";
import { useRef } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Link,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
  Stack,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Recruitment = () => {
  const theme = useTheme();
  //When hit the Become a Member button, the page automatically being scroll down to the form
  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  // Display error for department option if less than 1
  const [state, setState] = React.useState({
    media: true,
    marketing: false,
    technical: false,
    operations: false,
    internal: false,
    finance: false,
  });
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  const { media, marketing, technical, operations, internal, finance } = state;
  const checkboxError =
    [media, marketing, technical, operations, internal, finance].filter(
      (v) => v
    ).length < 1;

  // Override red asterisk
  const labelTheme = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: "#db3131",
            "&$error": {
              color: "#db3131",
            },
          },
        },
      },
    },
  });
  return (
    <>
      {/*/---------------Info screen---------------------*/}

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        component="div"
        overflow="hidden"
        position="relative"
      >
        <Grid
          container
          spacing={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          sx={{ marginX: { xs: "30px", sm: "30px", md: "50px", lg: "50px" } }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              color={theme.palette.button.main}
              paddingBottom="15px"
              sx={{ typography: { xs: "h4", lg: "h3" } }}
            >
              JOIN OUR TEAM
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paddingBottom="30px"
              style={{ display: "inline-block", whiteSpace: "pre-line" }}
            >
              Students from all undergraduate or graduate programs with an
              interest in growing as a developer are welcome. By joining a GDSC,
              students grow their knowledge in a peer-to-peer learning
              environment and build solutions for local businesses and their
              community.
            </Typography>
            <Button
              variant="contained"
              size="small"
              color="button"
              sx={{
                width: "200px",
                fontSize: "16px",
                textTransform: "capitalize",
                fontWeight: "medium",
              }}
              onClick={executeScroll}
            >
              Become a Member
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src="/static/images/oppo.png"
              alt="background_picture"
              width="100%"
              height="auto"
            />
          </Grid>
        </Grid>
      </Box>
      {/*/-----------------------------------------------------------------------*/}

      {/* Google Form: https://docs.google.com/forms/d/e/1FAIpQLSeBXPXQJvFEuN51izYJCSWoZqg0xfzAMbXt8SRcddUzbN5k8w/viewform
for documentation: https://stackblitz.com/edit/react-ls1dwp?file=index.js */}

      <Box minHeight="100vh" ref={myRef}>
        <ThemeProvider theme={labelTheme}>
          <FormGroup
            sx={{
              "& .MuiTextField-root": { width: "30ch" },
              mx: { xs: "30px", sm: "30px", md: "100px", lg: "100px" },
            }}
          >
            <Typography
              textAlign="center"
              variant="h4"
              color="text.primary"
              marginY={5}
            >
              Get Involved Form
            </Typography>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="I confirm that I have read the Information & Policy below."
            />
            {/* TODO: Insert the policy document link */}
            <Link href="#">Information and Policy </Link>

            {/*/-----------------------------------------------------------------------*/}
            <FormGroup
              sx={{
                "& .MuiTextField-root": { my: "10px" },
              }}
            >
              <FormLabel required sx={{ color: "black", marginTop: "50px" }}>
                Student Information and Contact
              </FormLabel>
              <TextField
                required
                id="email"
                label="Student Email"
                variant="standard"
              />

              <TextField
                required
                id="firstname"
                label="Student First Name"
                variant="standard"
              />

              <TextField
                required
                id="lastname"
                label="Student Last Name"
                variant="standard"
              />
              <TextField
                required
                id="discord"
                label="DiscordID: NAME#0000"
                variant="standard"
              />
            </FormGroup>
            {/*/-----------------------------------------------------------------------*/}
            <FormControl
              required
              error={checkboxError}
              component="fieldset"
              variant="standard"
            >
              <FormLabel sx={{ color: "black", marginTop: "40px" }}>
                Please select a Department you're applying for. More info on
                each Department can be found here:{" "}
                <Link href="https://docs.google.com/presentation/d/1WSEW1rwIS9fCni5fw0wD6XICZfwKd3S51ZyvbGzV5nc/edit#slide=id.geed099d7b2_0_797">
                  Department and Position Info
                </Link>
              </FormLabel>
              {/* TODO: Checkbox not Radio button */}
              <FormHelperText>
                Please select at least 1 department
              </FormHelperText>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={media}
                    onChange={handleChange}
                    name="media"
                  />
                }
                label="Media - Video, Audio, Film Creation, Artistic Expression"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={marketing}
                    onChange={handleChange}
                    name="marketing"
                  />
                }
                label="Marketing - Creativity, Markets to Students, Graphics, Adverts, Billboards, Pamphlets, Social Media"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={technical}
                    onChange={handleChange}
                    name="technical"
                  />
                }
                label="Technical - Open Source Projects, Collaboration (Frontend, Backend, Automation)"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={operations}
                    onChange={handleChange}
                    name="operations"
                  />
                }
                label="Operations - Process Optimization (Group-wide), Vendors, Infrastructure"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={internal}
                    onChange={handleChange}
                    name="internal"
                  />
                }
                label="Internal - Performance Reviews, Trial Period Follow Ups, Interviews, Human Resources"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={finance}
                    onChange={handleChange}
                    name="finance"
                  />
                }
                label="Finance - Budgeting, Cost Requests, etc."
              />
            </FormControl>
            {/*/-----------------------------------------------------------------------*/}
            <FormControl required component="fieldset" variant="standard">
              <FormLabel sx={{ color: "black", marginTop: "40px" }}>
                Please list down your first, second and third choices from the
                question above
              </FormLabel>
              <TextField
                required
                label="Your answer"
                marginTop="10px"
                variant="standard"
              />
            </FormControl>
            {/*/-----------------------------------------------------------------------*/}
            <FormControl>
              <FormLabel sx={{ color: "black", marginTop: "40px" }}>
                Please select the role you're looking for
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="team_member"
                  control={<Radio />}
                  label="Team Member"
                />
                <FormControlLabel
                  value="lead"
                  control={<Radio />}
                  label="Department Lead"
                />
              </RadioGroup>
            </FormControl>
            {/*/-----------------------------------------------------------------------*/}
            <FormLabel sx={{ color: "black", marginTop: "40px" }}>
              Resume or Experience(s)
            </FormLabel>
            <TextField
              required
              label="Your answer"
              marginTop="10px"
              variant="standard"
            />

            <FormLabel sx={{ color: "black", marginTop: "40px" }}>
              Provide a summary of what the role that you're applying for means
              to you and how it can make an impact on your resume. This is your
              chance to prove to us why you should have a spot on our team. Our
              roles are very competitive. Why should we choose you over anyone
              else? What are you looking to get out of this opportunity?
            </FormLabel>
            <TextField
              required
              label="Your answer"
              marginTop="10px"
              variant="standard"
            />
            {/*/-----------------------------------------------------------------------*/}
            <FormControl>
              <FormLabel sx={{ color: "black", marginTop: "40px" }}>
                Please select an estimate of hours per week that you can
                dedicate to the group
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="<1hr"
                  control={<Radio />}
                  label="Less than an hour"
                />
                <FormControlLabel
                  value="2hrs"
                  control={<Radio />}
                  label="Two hours"
                />
                <FormControlLabel
                  value="3hrs"
                  control={<Radio />}
                  label="Three hours"
                />
                <FormControlLabel
                  value="4hrs"
                  control={<Radio />}
                  label="Four hours"
                />
                <FormControlLabel
                  value="others"
                  control={<Radio />}
                  label="Others:"
                ></FormControlLabel>
                <TextField variant="standard" />
              </RadioGroup>
            </FormControl>
            {/*/-----------------------------------------------------------------------*/}
            <FormLabel sx={{ color: "black", marginTop: "40px" }}>
              Any additional information you'd like to share with us
            </FormLabel>
            <TextField
              label="Your answer"
              marginTop="10px"
              variant="standard"
            />
            {/*/-----------------------------------------------------------------------*/}
            <Stack direction="row" spacing={5}>
              <Button
                type="submit"
                variant="contained"
                size="small"
                sx={{
                  width: "100px",
                  fontSize: "16px",
                  textTransform: "capitalize",
                  fontWeight: "regular",
                  my: "40px",
                }}
              >
                Submit
              </Button>
              <Button
                variant="text"
                size="small"
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                  fontWeight: "regular",
                }}
              >
                Clear
              </Button>
            </Stack>
          </FormGroup>
        </ThemeProvider>
      </Box>
    </>
  );
};

export default Recruitment;
