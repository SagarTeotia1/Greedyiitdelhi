import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  // Function to handle icon click
  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Your Trainings
        </MDTypography>
        <MDBox display="flex" alignItems="flex-start">
          <MDBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </MDBox>
          <MDTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2025
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            Newest
          </MDTypography>
        </MDBox>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }}>
          <Transaction
            color="error"
            icon="expand_more"
            name="SCI- Class"
            description="27 March 2025, at 12:30 PM"
            value=""
            // Inline link handling for icon click
            onIconClick={() => handleIconClick("https://www.spatial.io/s/CLASSROOM-66fcd722c32a64d0a9e0b357")}
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Workshop"
            description="27 March 2025, at 04:30 AM"
            value=""
            // Inline link handling for icon click
            onIconClick={() => handleIconClick("https://www.spatial.io/s/CLASSROOM-66fcd722c32a64d0a9e0b357")}
          />
        </MDBox>
        <MDBox mt={1} mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            Yesterday
          </MDTypography>
        </MDBox>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0} sx={{ listStyle: "none" }}>
          <Transaction
            color="success"
            icon="expand_less"
            name="Chemical Spill"
            description="26 March 2025, at 13:45 PM"
            value=""
            // Inline link handling for icon click
            onIconClick={() => handleIconClick("https://www.spatial.io/s/CLASSROOM-66fcd722c32a64d0a9e0b357")}
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Radiation Safety"
            description="26 March 2025, at 12:30 PM"
            value=""
            // Inline link handling for icon click
            onIconClick={() => handleIconClick("https://www.spatial.io/s/CLASSROOM-66fcd722c32a64d0a9e0b357")}
          />
          <Transaction
            color="success"
            icon="expand_less"
            name="Biological Threat"
            description="26 March 2025, at 08:30 AM"
            value=""
            // Inline link handling for icon click
            onIconClick={() => handleIconClick("https://www.spatial.io/s/CLASSROOM-66fcd722c32a64d0a9e0b357")}
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="Tactical Exercise"
            description="26 March 2025, at 05:00 AM"
            value="Pending"
            // Inline link handling for icon click
            onIconClick={() => handleIconClick("https://www.spatial.io/s/CLASSROOM-66fcd722c32a64d0a9e0b357")}
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Transactions;
